/**
 * Module Web Worker that runs the Lost Harbor engine in the browser.
 *
 * The engine is the `lh_worker` crate, built with `wasm-pack --target web`
 * into `./worker/`. This shim speaks the same JSON protocol as the WebSocket:
 * `ClientMsg` strings come in, and `ServerMsg` strings go out.
 *
 * Saving happens inside the crate. IndexedDB holds player records and the
 * builder's content edits. The edits are an overlay on the content built
 * into the module, and `open_host` applies them before play starts.
 */
import init, { open_host } from './worker/lh_worker.js';

/**
 * Messages that arrive before the engine is ready. They wait here, in order.
 * @type {string[]}
 */
const early = [];

/**
 * The engine host from `open_host`. Stays `null` until startup finishes.
 * @type {?{ handle: (json: string) => void, tick: (nowMs: number) => void }}
 */
let host = null;

/**
 * Receives a message from the page. Object messages are turned into JSON text.
 * Messages that arrive before startup are queued and replayed later.
 * @param {MessageEvent} e
 */
self.onmessage = (e) => {
  const text = typeof e.data === 'string' ? e.data : JSON.stringify(e.data);
  if (host) host.handle(text); else early.push(text);
};

// Startup: load the WebAssembly module, open the host, replay queued messages,
// then tick every 100 ms. The tick rate matches `TICK_MS` in `lh_server`.
(async () => {
  await init();
  host = await open_host();
  for (const text of early.splice(0)) host.handle(text);
  setInterval(() => host.tick(performance.now()), 100);
})().catch((err) => {
  // Startup failed. Log it and send the page a readable error message.
  console.error('lh_worker failed to start', err);
  self.postMessage(JSON.stringify({ t: 'error', exec: null, message: `Local engine failed to start: ${err}` }));
});
