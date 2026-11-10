/*
 * Retires the old Blazor app's offline service worker. That worker answered
 * every navigation from its cache. Browsers keep a registered worker when its
 * script returns 404, so this replacement must stay at the same path.
 *
 * On activation it deletes every Cache Storage entry and every IndexedDB
 * database except the game's own `lost-harbor` saves, unregisters itself and
 * reloads the tabs it controlled. The game never registers a service worker,
 * so only browsers that still run the old worker load this file.
 */
const KEEP_DATABASES = new Set(["lost-harbor"]);

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(retire());
});

async function retire() {
  const keys = await caches.keys();
  await Promise.all(keys.map((key) => caches.delete(key)));
  if (self.indexedDB && typeof self.indexedDB.databases === "function") {
    const databases = await self.indexedDB.databases();
    await Promise.all(
      databases
        .filter((db) => db.name && !KEEP_DATABASES.has(db.name))
        .map((db) => deleteDatabase(db.name)),
    );
  }
  await self.registration.unregister();
  const tabs = await self.clients.matchAll({ type: "window" });
  await Promise.all(tabs.map((tab) => tab.navigate(tab.url).catch(() => {})));
}

function deleteDatabase(name) {
  return new Promise((resolve) => {
    const request = self.indexedDB.deleteDatabase(name);
    request.onsuccess = request.onerror = request.onblocked = () => resolve();
  });
}
