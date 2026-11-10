# Sources

This file records where every list in this folder came from. Each entry
gives the source, the licence, the date it was fetched, the number of entries,
the number of entries the setting filter removed, and every change made. The
format and the filter are described in `README.md`.

All files were fetched on 2026-11-08. The raw downloads and the cleaning
scripts are not in the repository. The steps below are enough to repeat them.

## Steps common to every file

These steps apply to every file and are not repeated in each entry:

1. Unicode NFC. Typographic apostrophes and dashes become `'` and `-`.
   Underscores and non-breaking spaces become spaces.
2. Text in brackets, digits and footnote marks are dropped. Outside the
   organization groups a period becomes a space. Runs of spaces become one.
3. Entries that hold a letter outside the Latin script, or fewer than two
   letters, are dropped. The okina and the ayin count as letters.
4. The setting filter in `README.md` removes entries. Each entry below gives
   the count.
5. Repeats are merged without regard to case, and their weights are added.
   The form with the largest single weight is kept. With count weights, each
   source row adds 1.
6. Weighted lists keep the 5,000 highest weights. Ties at the cut break by a
   stable hash (SHA-1 of the lower-case entry) unless the entry names another
   ranking. Plain lists keep the first 5,000 in the source ranking that the
   entry names, or a stable hash sample.
7. The file is sorted and written as `README.md` describes. Lists under 40
   entries are not written.

## Personal names: statistics offices in the US, the UK, Ireland, Australia, Canada, France, Quebec and Spain

These files come from national or regional statistics offices and population
registers. Each entry names its own source, licence and years. The weight is
the count that the entry names, such as births or living people with the name.
Given names are split by the sex that the source records.

### american/family.txt
- Source: US Census Bureau, Frequently Occurring Surnames from the 2010 Census, https://www2.census.gov/topics/genealogy/2010surnames/names.zip (Names_2010Census.csv, column `count`)
- Licence: US government public domain (no licence needed, credit: "US Census Bureau")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of people, 2010 Census)
- Removed by the setting filter: 321
- Changes: Dropped the `ALL OTHER NAMES` row and rows whose count is suppressed `(S)`. Source is all caps, so each name went through the normal-case step. Kept the 5000 highest weights (ties at the cut break by the stable hash in the cleaning step).

### american/given-female.txt
- Source: US Social Security Administration national baby names, 1880 to 2017, via the `babynames` R package data file https://raw.githubusercontent.com/hadley/babynames/master/data/babynames.rda (original: https://www.ssa.gov/oact/babynames/limits.html, which refuses automated downloads, so it was not used)
- Licence: SSA data is US government public domain. The hadley/babynames copy is declared CC0 (DESCRIPTION: License: CC0, https://github.com/hadley/babynames) (attribution: none required, credit given: "US Social Security Administration, via hadley/babynames")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of births, summed 1880 to 2017, sex F)
- Removed by the setting filter: 183
- Changes: Read the `babynames` table with pyreadr, kept sex = F, summed `n` per name over all years, no case change (source is mixed case). Kept the 5000 highest weights (ties at the cut break by the stable hash in the cleaning step).

### american/given-male.txt
- Source: US Social Security Administration national baby names, 1880 to 2017, via the `babynames` R package data file https://raw.githubusercontent.com/hadley/babynames/master/data/babynames.rda (original: https://www.ssa.gov/oact/babynames/limits.html, which refuses automated downloads, so it was not used)
- Licence: SSA data is US government public domain. The hadley/babynames copy is declared CC0 (DESCRIPTION: License: CC0, https://github.com/hadley/babynames) (attribution: none required, credit given: "US Social Security Administration, via hadley/babynames")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of births, summed 1880 to 2017, sex M)
- Removed by the setting filter: 101
- Changes: Read the `babynames` table with pyreadr, kept sex = M, summed `n` per name over all years, no case change (source is mixed case). Kept the 5000 highest weights (ties at the cut break by the stable hash in the cleaning step).

### australian/given-female.txt
- Source: NSW Registry of Births, Deaths and Marriages, Popular baby names 1952 to 2025 (data.nsw.gov.au), https://data.nsw.gov.au/data/dataset/a677cbe2-91e1-4e45-b771-08830d3d9e41/resource/2adcb228-9101-4c95-a786-b3216539b4a2/download/popular_baby_names_1952_to_2025.csv
- Licence: Creative Commons Attribution 4.0 (CKAN license_id cc-by on https://data.nsw.gov.au/data/dataset/popular-baby-names-from-1952) (attribution: "Source: NSW Registry of Births, Deaths and Marriages, via data.nsw.gov.au")
- Fetched: 2026-11-08
- Entries: 406 (weighted: yes, count of births among the top names of each year, summed 1952 to 2025 (the source lists only about 100 names per sex and year, so rare names are absent))
- Removed by the setting filter: 3
- Changes: Kept Gender = Female and summed Number per name over all years. Source is all caps, so each name went through the normal-case step.

### australian/given-male.txt
- Source: NSW Registry of Births, Deaths and Marriages, Popular baby names 1952 to 2025 (data.nsw.gov.au), https://data.nsw.gov.au/data/dataset/a677cbe2-91e1-4e45-b771-08830d3d9e41/resource/2adcb228-9101-4c95-a786-b3216539b4a2/download/popular_baby_names_1952_to_2025.csv
- Licence: Creative Commons Attribution 4.0 (CKAN license_id cc-by on https://data.nsw.gov.au/data/dataset/popular-baby-names-from-1952) (attribution: "Source: NSW Registry of Births, Deaths and Marriages, via data.nsw.gov.au")
- Fetched: 2026-11-08
- Entries: 331 (weighted: yes, count of births among the top names of each year, summed 1952 to 2025 (the source lists only about 100 names per sex and year, so rare names are absent))
- Removed by the setting filter: 1
- Changes: Kept Gender = Male and summed Number per name over all years. Source is all caps, so each name went through the normal-case step.

### canadian/given-female.txt
- Source: BC Vital Statistics, Most popular girl names for the past 100 years (British Columbia, 1924 to 2023), https://catalogue.data.gov.bc.ca/dataset/most-popular-girl-names-for-the-past-100-years
- Licence: Open Government Licence - British Columbia (https://www2.gov.bc.ca/gov/content/data/open-data/open-government-licence-bc) (attribution: "Contains information licensed under the Open Government Licence - British Columbia")
- Fetched: 2026-11-08
- Entries: 2,772 (weighted: yes, count of births in British Columbia, summed 1924 to 2023 (names chosen 5 or more times in a year))
- Removed by the setting filter: 16
- Changes: Summed the yearly columns for each name and ignored the TOTAL column. Dropped names with a sum of 0. Source is all caps, so each name went through the normal-case step.

### canadian/given-male.txt
- Source: BC Vital Statistics, Most popular boys names for the past 100 years (British Columbia, 1924 to 2023), https://catalogue.data.gov.bc.ca/dataset/most-popular-boys-names-for-the-past-100-years
- Licence: Open Government Licence - British Columbia (https://www2.gov.bc.ca/gov/content/data/open-data/open-government-licence-bc) (attribution: "Contains information licensed under the Open Government Licence - British Columbia")
- Fetched: 2026-11-08
- Entries: 2,134 (weighted: yes, count of births in British Columbia, summed 1924 to 2023 (names chosen 5 or more times in a year))
- Removed by the setting filter: 8
- Changes: Summed the yearly columns for each name and ignored the TOTAL column. Dropped names with a sum of 0. Source is all caps, so each name went through the normal-case step.

### english/given-female.txt
- Source: ONS, Baby names in England and Wales, datasets for girls: 1996 to 2016 from the ad hoc workbook https://www.ons.gov.uk/file?uri=/peoplepopulationandcommunity/birthsdeathsandmarriages/livebirths/datasets/babynamesenglandandwalesbabynamesstatisticsgirls/2016/adhocallbabynames1996to2016.xls (sheets Boys and Girls), 2017 to 2025 from the yearly workbooks, Table 6 (full list of names with 3 or more births), pages https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/livebirths/datasets/babynamesenglandandwalesbabynamesstatisticsgirls
- Licence: Open Government Licence v3.0 (https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) (attribution: "Contains public sector information licensed under the Open Government Licence v3.0. Source: Office for National Statistics")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of births registered in England and Wales, summed 1996 to 2025)
- Removed by the setting filter: 100
- Changes: Summed the Count column over every year column of the ad hoc file (cells `:` skipped) and over Table 6 of each yearly file 2017 to 2025. Names are stripped of spaces. Old files write names in ALL CAPS, so any all-caps name went through the normal-case step (newer files are mixed case, so the same name merges). Kept the 5000 highest weights (ties at the cut break by the stable hash in the cleaning step).

### english/given-male.txt
- Source: ONS, Baby names in England and Wales, datasets for boys: 1996 to 2016 from the ad hoc workbook https://www.ons.gov.uk/file?uri=/peoplepopulationandcommunity/birthsdeathsandmarriages/livebirths/datasets/babynamesenglandandwalesbabynamesstatisticsgirls/2016/adhocallbabynames1996to2016.xls (sheets Boys and Girls), 2017 to 2025 from the yearly workbooks, Table 6 (full list of names with 3 or more births), pages https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/livebirths/datasets/babynamesenglandandwalesbabynamesstatisticsboys
- Licence: Open Government Licence v3.0 (https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) (attribution: "Contains public sector information licensed under the Open Government Licence v3.0. Source: Office for National Statistics")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of births registered in England and Wales, summed 1996 to 2025)
- Removed by the setting filter: 44
- Changes: Summed the Count column over every year column of the ad hoc file (cells `:` skipped) and over Table 6 of each yearly file 2017 to 2025. Names are stripped of spaces. Old files write names in ALL CAPS, so any all-caps name went through the normal-case step (newer files are mixed case, so the same name merges). Kept the 5000 highest weights (ties at the cut break by the stable hash in the cleaning step).

### french/family.txt
- Source: INSEE, Fichier des noms (Etat civil, births in metropolitan France 1891 to 2000 by decade, names with 30 or more), https://www.insee.fr/fr/statistiques/fichier/3536630/noms2008nat_txt.zip, page https://www.insee.fr/fr/statistiques/3536630
- Licence: Licence Ouverte / Open Licence 2.0 Etalab (https://www.etalab.gouv.fr/licence-ouverte-open-licence) (attribution: "Source: Insee, Fichier des noms")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of births, summed over the ten decade columns 1891 to 2000)
- Removed by the setting filter: 530
- Changes: Dropped the `AUTRES NOMS` bucket if present, summed all decade columns, normal_case on the all-caps names (the file has no accents). The setting filter removes many real names because of banned roots, for example Martin (marti). Common surnames such as Martin are missing because of that filter. Kept the 5000 highest weights (ties at the cut break by the stable hash in the cleaning step).

### french/given-female.txt
- Source: INSEE, Fichier des prénoms (edition 2025, national file, 1900 to 2025), https://www.insee.fr/fr/statistiques/fichier/8595130/prenoms-2025-nat_csv.zip, page https://www.insee.fr/fr/statistiques/8595130
- Licence: Licence Ouverte / Open Licence 2.0 Etalab (https://www.etalab.gouv.fr/licence-ouverte-open-licence) (attribution: "Source: Insee, Fichier des prénoms")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of births in France, summed 1900 to 2025 (INSEE rounds the counts))
- Removed by the setting filter: 128
- Changes: Kept sexe = 2, dropped the rare-names bucket (_PRENOMS_RARES), summed `valeur` per name over all years. Source is all caps, so each name went through the normal-case step, which keeps accents and hyphens. Kept the 5000 highest weights (ties at the cut break by the stable hash in the cleaning step).

### french/given-male.txt
- Source: INSEE, Fichier des prénoms (edition 2025, national file, 1900 to 2025), https://www.insee.fr/fr/statistiques/fichier/8595130/prenoms-2025-nat_csv.zip, page https://www.insee.fr/fr/statistiques/8595130
- Licence: Licence Ouverte / Open Licence 2.0 Etalab (https://www.etalab.gouv.fr/licence-ouverte-open-licence) (attribution: "Source: Insee, Fichier des prénoms")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of births in France, summed 1900 to 2025 (INSEE rounds the counts))
- Removed by the setting filter: 64
- Changes: Kept sexe = 1, dropped the rare-names bucket (_PRENOMS_RARES), summed `valeur` per name over all years. Source is all caps, so each name went through the normal-case step, which keeps accents and hyphens. Kept the 5000 highest weights (ties at the cut break by the stable hash in the cleaning step).

### irish/family.txt
- Source: CSO Ireland PxStat table VSA110 (surnames of babies with 10 or more occurrences, 2023 to 2025), https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/VSA110/CSV/1.0/en
- Licence: Creative Commons Attribution 4.0 (https://www.cso.ie/en/aboutus/whoweare/copyrightpolicy/) (attribution: "Source: Central Statistics Office, Ireland")
- Fetched: 2026-11-08
- Entries: 906 (weighted: yes, count of babies born with that surname, summed 2023 to 2025 (only surnames with 10 or more a year))
- Removed by the setting filter: 2
- Changes: Used statistic VSA110C02 (count) and summed VALUE over the three years. No case change needed (mixed case, keeps O' and Mc).

### irish/given-female.txt
- Source: CSO Ireland PxStat table VSA60 (Girls names with 3 or more occurrences, 1964 to 2024/25), https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/VSA60/CSV/1.0/en
- Licence: Creative Commons Attribution 4.0 (https://www.cso.ie/en/aboutus/whoweare/copyrightpolicy/) (attribution: "Source: Central Statistics Office, Ireland")
- Fetched: 2026-11-08
- Entries: 3,745 (weighted: yes, count of babies, summed over all years)
- Removed by the setting filter: 14
- Changes: Used the statistic VSA60C01 (count, not the rank statistic) and summed VALUE over all years, skipping empty cells. All-caps names (longer than one letter) went through the normal-case step.

### irish/given-male.txt
- Source: CSO Ireland PxStat table VSA50 (Boys names with 3 or more occurrences, 1964 to 2024/25), https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/VSA50/CSV/1.0/en
- Licence: Creative Commons Attribution 4.0 (https://www.cso.ie/en/aboutus/whoweare/copyrightpolicy/) (attribution: "Source: Central Statistics Office, Ireland")
- Fetched: 2026-11-08
- Entries: 2,835 (weighted: yes, count of babies, summed over all years)
- Removed by the setting filter: 6
- Changes: Used the statistic VSA50C01 (count, not the rank statistic) and summed VALUE over all years, skipping empty cells. All-caps names (longer than one letter) went through the normal-case step.

### new-zealander/given-female.txt
- Source: NZ Department of Internal Affairs, Baby Name popularity over time (data.govt.nz). The official file sat behind a bot check (not used). Used the CSV copy in the GitHub repo ekothe/nzbabynames, commit 9cd57a9 (data-raw/nzbabynames.csv, years up to 2020): https://raw.githubusercontent.com/ekothe/nzbabynames/9cd57a9370a852f9c84b46ad5b534629e8a5097f/data-raw/nzbabynames.csv
- Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/), confirmed by the project owner on 2026-11-08. The data.govt.nz catalogue page answered with a bot check, so it was not read directly. The GitHub copy declares CC0 for its own work (attribution: "Source: New Zealand Department of Internal Affairs, via data.govt.nz")
- Fetched: 2026-11-08
- Entries: 1,572 (weighted: yes, count of birth registrations, summed over all years up to 2020 (only names registered 10 or more times in a year))
- Removed by the setting filter: 9
- Changes: Kept Sex = Female, summed Count per name. The file is Windows-1252 text, read with that encoding, so Maori macron letters were lost in the copy and any mangled name was dropped by the cleaning step. The newer commit of the copy (to 2023) has lost its Sex column, so the older one was used.

### new-zealander/given-male.txt
- Source: NZ Department of Internal Affairs, Baby Name popularity over time (data.govt.nz). The official file sat behind a bot check (not used). Used the CSV copy in the GitHub repo ekothe/nzbabynames, commit 9cd57a9 (data-raw/nzbabynames.csv, years up to 2020): https://raw.githubusercontent.com/ekothe/nzbabynames/9cd57a9370a852f9c84b46ad5b534629e8a5097f/data-raw/nzbabynames.csv
- Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/), confirmed by the project owner on 2026-11-08. The data.govt.nz catalogue page answered with a bot check, so it was not read directly. The GitHub copy declares CC0 for its own work (attribution: "Source: New Zealand Department of Internal Affairs, via data.govt.nz")
- Fetched: 2026-11-08
- Entries: 1,187 (weighted: yes, count of birth registrations, summed over all years up to 2020 (only names registered 10 or more times in a year))
- Removed by the setting filter: 5
- Changes: Kept Sex = Male, summed Count per name. The file is Windows-1252 text, read with that encoding, so Maori macron letters were lost in the copy and any mangled name was dropped by the cleaning step. The newer commit of the copy (to 2023) has lost its Sex column, so the older one was used.

### quebecois/given-female.txt
- Source: Retraite Quebec, Banque de prénoms - Filles (1980 to 2025), Données Québec, https://www.donneesquebec.ca/recherche/dataset/banque-de-prenoms-filles
- Licence: Creative Commons Attribution 4.0 (CKAN license_id cc-by on Données Québec) (attribution: "Source: Retraite Québec, Banque de prénoms, via Données Québec")
- Fetched: 2026-11-08
- Entries: 3,317 (weighted: yes, count of children (family benefit recipients) born in Quebec, summed 1980 to 2025 (cells below 5 are suppressed as `<5` and count as 0))
- Removed by the setting filter: 14
- Changes: Summed the A_1980 to A_2025 columns, treating `.` and `<5` as 0, dropped names with a sum of 0. Source spells accents away and writes compound names with a space (Marie Eve), kept as written. The source is not in all caps.

### quebecois/given-male.txt
- Source: Retraite Quebec, Banque de prénoms - Gars (1980 to 2025), Données Québec, https://www.donneesquebec.ca/recherche/dataset/banque-de-prenoms-garcons
- Licence: Creative Commons Attribution 4.0 (CKAN license_id cc-by on Données Québec) (attribution: "Source: Retraite Québec, Banque de prénoms, via Données Québec")
- Fetched: 2026-11-08
- Entries: 2,649 (weighted: yes, count of children (family benefit recipients) born in Quebec, summed 1980 to 2025 (cells below 5 are suppressed as `<5` and count as 0))
- Removed by the setting filter: 11
- Changes: Summed the A_1980 to A_2025 columns, treating `.` and `<5` as 0, dropped names with a sum of 0. Source spells accents away and writes compound names with a space (Marie Eve), kept as written. The source is not in all caps.

### scottish/given-female.txt
- Source: National Records of Scotland, Babies' First Names 2025, all names given to babies 1974 to 2025, https://www.nrscotland.gov.uk/media/0ytjopcq/all-names-given-to-babies-between-1974-to-2025.zip (full-list-1974-2025.csv), page https://www.nrscotland.gov.uk/publications/babies-first-names-2025/
- Licence: Open Government Licence v3.0 (https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) (attribution: "Contains public sector information licensed under the Open Government Licence v3.0. Source: National Records of Scotland")
- Fetched: 2026-11-08
- Entries: 3,683 (weighted: yes, count of babies, summed 1974 to 2025 (names with 2 or fewer in total are suppressed by NRS))
- Removed by the setting filter: 18
- Changes: Kept Sex = Girl and summed Number per name over all years. All-caps names went through the normal-case step (none seen). The file is read as UTF-8 with replacement.

### scottish/given-male.txt
- Source: National Records of Scotland, Babies' First Names 2025, all names given to babies 1974 to 2025, https://www.nrscotland.gov.uk/media/0ytjopcq/all-names-given-to-babies-between-1974-to-2025.zip (full-list-1974-2025.csv), page https://www.nrscotland.gov.uk/publications/babies-first-names-2025/
- Licence: Open Government Licence v3.0 (https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) (attribution: "Contains public sector information licensed under the Open Government Licence v3.0. Source: National Records of Scotland")
- Fetched: 2026-11-08
- Entries: 2,550 (weighted: yes, count of babies, summed 1974 to 2025 (names with 2 or fewer in total are suppressed by NRS))
- Removed by the setting filter: 7
- Changes: Kept Sex = Boy and summed Number per name over all years. All-caps names went through the normal-case step (none seen). The file is read as UTF-8 with replacement.

### spanish/family.txt
- Source: INE Spain, Frecuencia de apellidos (annual census, 1 January 2025), https://www.ine.es/daco/daco42/nombyapel/apellidos_frecuencia.xls (sheets `>=100` and `>=20 y <=99`)
- Licence: Creative Commons Attribution 4.0 (https://ine.es/dyngs/AYU/index.htm?cid=125) (attribution: "Fuente: Sitio web del INE: www.ine.es")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of people with that FIRST surname (column Apellido 1º), surnames with 20 or more)
- Removed by the setting filter: 552
- Changes: Used the Apellido 1º column of both sheets, normal_case on the all-caps names (accents are absent except the tilde in n). Kept the 5000 highest weights (ties at the cut break by the stable hash in the cleaning step).

### spanish/given-female.txt
- Source: INE Spain, Frecuencia de nombres (Padrón Continuo, 1 January 2022), https://www.ine.es/daco/daco42/nombyapel/nombres_por_edad_media.xls (sheets Mujeres)
- Licence: Creative Commons Attribution 4.0 (general licence of INE statistical information, https://ine.es/dyngs/AYU/index.htm?cid=125) (attribution: "Fuente: Sitio web del INE: www.ine.es")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of residents of Spain with that name (as the first given name, compound names counted whole), names with 20 or more)
- Removed by the setting filter: 282
- Changes: Took Nombre and Frecuencia from the sheet, normal_case on the all-caps names. Compound names like Maria Carmen stay as one entry. Accents are absent in the source. Kept the 5000 highest weights (ties at the cut break by the stable hash in the cleaning step).

### spanish/given-male.txt
- Source: INE Spain, Frecuencia de nombres (Padrón Continuo, 1 January 2022), https://www.ine.es/daco/daco42/nombyapel/nombres_por_edad_media.xls (sheets Hombres)
- Licence: Creative Commons Attribution 4.0 (general licence of INE statistical information, https://ine.es/dyngs/AYU/index.htm?cid=125) (attribution: "Fuente: Sitio web del INE: www.ine.es")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of residents of Spain with that name (as the first given name, compound names counted whole), names with 20 or more)
- Removed by the setting filter: 264
- Changes: Took Nombre and Frecuencia from the sheet, normal_case on the all-caps names. Compound names like Maria Carmen stay as one entry. Accents are absent in the source. Kept the 5000 highest weights (ties at the cut break by the stable hash in the cleaning step).

## Personal names: statistics offices in northern, central and eastern Europe

These files come from national statistics offices, population registers and
city open data portals. Each entry names its own source, licence and date. The
weight is the count that the entry names, such as living people or births with
the name. Given names are split by the sex that the source records.

The German given names come from two cities only, Munich and Dortmund. No
national German list is open.

### austrian/given-female.txt
- Source: Statistik Austria Open Data, dataset OGDEXT_VORNAMEN_1, first names of newborns by birth year, sex and district, 1984 to 2025: https://data.statistik.gv.at/data/OGDEXT_VORNAMEN_1.csv (metadata: https://data.statistik.gv.at/web/meta.jsp?dataset=OGDEXT_VORNAMEN_1)
- Licence: Creative Commons Namensnennung 4.0 International, CC BY 4.0 (stated in the dataset metadata) (attribution: "Source: Statistik Austria, CC BY 4.0, changes made")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, number of births with this first name, 1984 to 2025, 12,953 names in. 1984 to 2009 only babies with Austrian citizenship, from 2010 all babies. This is the first given name only)
- Removed by the setting filter: 62
- Changes: used column F-VORNAME_NORMALISIERT, sex code 2, summed ANZAHL_LGEB over all years and districts, top 5,000.

### austrian/given-male.txt
- Source: same file as austrian/given-female.txt
- Licence: CC BY 4.0
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, births 1984 to 2025, 11,856 names in)
- Removed by the setting filter: 52
- Changes: sex code 1, otherwise as above.

### belgian/family.txt
- Source: Statbel (Belgian statistical office), 1 January 2026. Licence: CC BY 4.0 (stated on https://statbel.fgov.be/en/open-data/first-names-total-population-municipality-16 ) (attribution: "Source: Statbel (Belgian statistical office), CC BY 4.0, changes made"). Names with fewer than 5 bearers are not published. First names: https://statbel.fgov.be/sites/default/files/files/documents/bevolking/5.10%20Namen%20en%20voornamen/5.10.2%20Voornamen%20van%20vrouwen%20en%20mannen/First_names_Pop_STATBEL_2026_en.xlsx (sheets F_PROV2026 and M_PROV2026, counts by province or region, summed over the 11 provinces and regions). Family names: https://statbel.fgov.be/sites/default/files/files/opendata/Familienamen/TA_POP_LST_2026.zip (pipe separated, counts per municipality, summed). Because rare names are suppressed per province or municipality, the sums slightly undercount rare names.
- Licence: CC BY 4.0
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of living people, 106,968 names in)
- Removed by the setting filter: 187
- Changes: the text file is Windows-1252 encoded, so it was decoded as cp1252. Summed over municipalities, top 5,000 by count.

### belgian/given-female.txt
- Source: Statbel (Belgian statistical office), 1 January 2026. Licence: CC BY 4.0 (stated on https://statbel.fgov.be/en/open-data/first-names-total-population-municipality-16 ) (attribution: "Source: Statbel (Belgian statistical office), CC BY 4.0, changes made"). Names with fewer than 5 bearers are not published. First names: https://statbel.fgov.be/sites/default/files/files/documents/bevolking/5.10%20Namen%20en%20voornamen/5.10.2%20Voornamen%20van%20vrouwen%20en%20mannen/First_names_Pop_STATBEL_2026_en.xlsx (sheets F_PROV2026 and M_PROV2026, counts by province or region, summed over the 11 provinces and regions). Family names: https://statbel.fgov.be/sites/default/files/files/opendata/Familienamen/TA_POP_LST_2026.zip (pipe separated, counts per municipality, summed). Because rare names are suppressed per province or municipality, the sums slightly undercount rare names.
- Licence: CC BY 4.0
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of living women with the name, 15,993 names in)
- Removed by the setting filter: 59
- Changes: summed over provinces, top 5,000 by count.

### belgian/given-male.txt
- Source: Statbel (Belgian statistical office), 1 January 2026. Licence: CC BY 4.0 (stated on https://statbel.fgov.be/en/open-data/first-names-total-population-municipality-16 ) (attribution: "Source: Statbel (Belgian statistical office), CC BY 4.0, changes made"). Names with fewer than 5 bearers are not published. First names: https://statbel.fgov.be/sites/default/files/files/documents/bevolking/5.10%20Namen%20en%20voornamen/5.10.2%20Voornamen%20van%20vrouwen%20en%20mannen/First_names_Pop_STATBEL_2026_en.xlsx (sheets F_PROV2026 and M_PROV2026, counts by province or region, summed over the 11 provinces and regions). Family names: https://statbel.fgov.be/sites/default/files/files/opendata/Familienamen/TA_POP_LST_2026.zip (pipe separated, counts per municipality, summed). Because rare names are suppressed per province or municipality, the sums slightly undercount rare names.
- Licence: CC BY 4.0
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of living men with the name, 13,821 names in)
- Removed by the setting filter: 35
- Changes: summed over provinces, top 5,000 by count.

### german/given-female.txt
- Source: same two sources as german/given-male.txt
- Licence: Munich: Datenlizenz Deutschland Namensnennung 2.0 (https://www.govdata.de/dl-de/by-2-0) (attribution: "Landeshauptstadt München, Statistisches Amt, Datenlizenz Deutschland Namensnennung 2.0, changes made"). Dortmund: Datenlizenz Deutschland Zero 2.0 (https://www.govdata.de/dl-de/zero-2-0), no attribution needed ("Stadt Dortmund" given anyway).
- Fetched: 2026-11-08
- Entries: 3,545 (weighted: yes, children, as above)
- Removed by the setting filter: 20
- Changes: sex w or weiblich, otherwise as the male file.

### german/given-male.txt
- Source: two city portals combined. (1) City of Munich, "Vornamen von Nulljährigen München" (residents aged 0 on 31 December, by first name and sex), 2013 to 2025, CSV files listed at https://opendata.muenchen.de/dataset/vornamen-von-neugeborenen , counts of "5 oder weniger" skipped. (2) City of Dortmund, "Vornamen - Gesamt - seit 2021" (births in Dortmund, 2021 to 2025, first given name only), https://open-data.dortmund.de/explore/dataset/vornamen-geburten-in-dortmund-gesamt/ (CSV export).
- Licence: Munich: Datenlizenz Deutschland Namensnennung 2.0 (https://www.govdata.de/dl-de/by-2-0) (attribution: "Landeshauptstadt München, Statistisches Amt, Datenlizenz Deutschland Namensnennung 2.0, changes made"). Dortmund: Datenlizenz Deutschland Zero 2.0 (https://www.govdata.de/dl-de/zero-2-0), no attribution needed ("Stadt Dortmund" given anyway).
- Fetched: 2026-11-08
- Entries: 3,669 (weighted: yes, count of children born or aged 0 in the cities, summed over the years and both cities. Not a national list)
- Removed by the setting filter: 9
- Changes: sex m or mannlich. Summed counts per name. Dortmund rows with Stellung im Vornamen 1 only.

### icelandic/given-female.txt
- Source: table MAN11111 "Female names 1 January 2023": https://px.hagstofa.is/pxen/api/v1/en/Ibuar/Faeddirdanir/Nofn/Nofnkvk/MAN11111.px
- Licence: CC BY 4.0, same attribution
- Fetched: 2026-11-08
- Entries: 101 (weighted: yes, persons carrying the name in any position, 1 January 2023)
- Removed by the setting filter: 0
- Changes: as for icelandic/given-male.txt, decoded the CSV as Latin-1 when UTF-8 failed.

### icelandic/given-male.txt
- Source: Statistics Iceland (Hagstofa), table MAN11101 "Male names 1 January 2023": https://px.hagstofa.is/pxen/api/v1/en/Ibuar/Faeddirdanir/Nofn/Nofnkk/MAN11101.px (CSV response)
- Licence: CC BY 4.0 per https://statice.is/publications/open-data-access (attribution: "Source: Statistics Iceland")
- Fetched: 2026-11-08
- Entries: 101 (weighted: yes, number of living persons carrying the name in any position, 1 January 2023, only the 100 most common names are published, plus ties)
- Removed by the setting filter: 0
- Changes: decoded the CSV (UTF-8), removed the rank text before and the "(rank)" after each name, kept the first spelling of "Róbert/Robert" style variants, kept the first row when a name appeared twice (rank ties).

### latvian/given-female.txt
- Source: same file as latvian/given-male.txt
- Licence: CC0 1.0
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, registered persons, 16,741 names in)
- Removed by the setting filter: 52
- Changes: rows with sex SIEVIETE, otherwise as the male file.

### latvian/given-male.txt
- Source: Office of Citizenship and Migration Affairs (PMLP), dataset "Personu vārdi", file vardi-dz-20260701.csv (name combinations with counts and sex, Natural Persons Register, 1 July 2026): https://data.gov.lv/dati/dataset/ac246d11-d5d6-445e-a6c7-8f5013460335/resource/10f0bb84-dd18-44e9-9a80-dc1515a4b3a9/download/vardi-dz-20260701.csv (dataset page https://data.gov.lv/dati/dataset/personu-vardi)
- Licence: CC0 1.0 (licence field of the dataset on data.gov.lv)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of registered persons whose first given name is this name, 20,984 names in. The register also holds foreign names in Latin transliteration)
- Removed by the setting filter: 64
- Changes: rows with sex VĪRIETIS only. The first word of each name combination was taken as the first given name. Counts summed per first word. Normal_case applied (the file is in capitals). Top 5,000.

### norwegian/given-female.txt
- Source: Statistics Norway (SSB) StatBank API, table 10467 "Born persons, by girls' or boys' name, contents and year": https://data.ssb.no/api/v0/en/table/10467 (POST, content `Personer`, years 1950 to 2025, all names)
- Licence: CC BY 4.0 (https://www.ssb.no/en/diverse/lisens, StatBank datasets are listed under CC BY 4.0 on data.norge.no) (attribution: "Source: Statistics Norway (SSB), table 10467, changes made")
- Fetched: 2026-11-08
- Entries: 1,036 (weighted: yes, number of girls given the name as their name, summed over birth years 1950 to 2025, from SSB's list of names used by at least 200 persons, counts under 4 per year are not published)
- Removed by the setting filter: 6
- Changes: used the display labels of the name codes. Codes starting with 1 are girls. Summed the yearly counts per name. Wrote through the cleaning step.

### norwegian/given-male.txt
- Source: same table and query as norwegian/given-female.txt
- Licence: CC BY 4.0, same attribution
- Fetched: 2026-11-08
- Entries: 928 (weighted: yes, number of boys given the name, 1950 to 2025)
- Removed by the setting filter: 4
- Changes: as above, codes starting with 2 are boys.

### polish/family.txt
- Source: dane.gov.pl, Ministry of Digital Affairs, PESEL register as of 20 January 2026. Datasets: "Lista imion występujących w rejestrze PESEL" (https://dane.gov.pl/pl/dataset/1667 , first names, resources 1159669 men and 1159670 women, "imię pierwsze") and "Nazwiska występujące w rejestrze PESEL" (https://dane.gov.pl/pl/dataset/1681 , resources 1148808 men and 1148811 women), CSV exports from https://api.dane.gov.pl/resources/<id>/csv . Licence: CC0 1.0 (field `license_name` of both datasets in the dane.gov.pl API, https://api.dane.gov.pl/1.4/datasets/1681). Weight is the number of living persons in the register (first given name only for given names, current surname for family names). Single occurrences are not listed. The files write every name in capitals, so `the normal-case step` was applied to each name.
- Licence: CC0 1.0
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of living persons, 598,476 rows in)
- Removed by the setting filter: 1,112
- Changes: male and female surname lists were combined (so both forms such as Kowalski and Kowalska are present, as they are real surnames), normal_case on every name, top 5,000.

### polish/given-female.txt
- Source: dane.gov.pl, Ministry of Digital Affairs, PESEL register as of 20 January 2026. Datasets: "Lista imion występujących w rejestrze PESEL" (https://dane.gov.pl/pl/dataset/1667 , first names, resources 1159669 men and 1159670 women, "imię pierwsze") and "Nazwiska występujące w rejestrze PESEL" (https://dane.gov.pl/pl/dataset/1681 , resources 1148808 men and 1148811 women), CSV exports from https://api.dane.gov.pl/resources/<id>/csv . Licence: CC0 1.0 (field `license_name` of both datasets in the dane.gov.pl API, https://api.dane.gov.pl/1.4/datasets/1681). Weight is the number of living persons in the register (first given name only for given names, current surname for family names). Single occurrences are not listed. The files write every name in capitals, so `the normal-case step` was applied to each name.
- Licence: CC0 1.0
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of living women, 28,786 names in)
- Removed by the setting filter: 125
- Changes: normal_case on every name, top 5,000.

### polish/given-male.txt
- Source: dane.gov.pl, Ministry of Digital Affairs, PESEL register as of 20 January 2026. Datasets: "Lista imion występujących w rejestrze PESEL" (https://dane.gov.pl/pl/dataset/1667 , first names, resources 1159669 men and 1159670 women, "imię pierwsze") and "Nazwiska występujące w rejestrze PESEL" (https://dane.gov.pl/pl/dataset/1681 , resources 1148808 men and 1148811 women), CSV exports from https://api.dane.gov.pl/resources/<id>/csv . Licence: CC0 1.0 (field `license_name` of both datasets in the dane.gov.pl API, https://api.dane.gov.pl/1.4/datasets/1681). Weight is the number of living persons in the register (first given name only for given names, current surname for family names). Single occurrences are not listed. The files write every name in capitals, so `the normal-case step` was applied to each name.
- Licence: CC0 1.0
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of living men with this first given name, 46,202 names in)
- Removed by the setting filter: 90
- Changes: normal_case on every name, top 5,000.

### slovene/family.txt
- Source: Statistical Office of the Republic of Slovenia (SURS), SiStat database, 1 January 2026, via https://pxweb.stat.si/SiStatData/api/v1/en/Data/ : tables 05X1005S (male first names), 05X1010S (female first names), 05X1015S, 05X1016S, 05X1017S, 05X1018S (family names A-F, G-L, M-R, S-Ž), measure Number. Licence: SiStat is listed as CC BY 4.0 by the Slovenian national interoperability catalogue (https://nio.gov.si/nio/asset/sistat+podatkovna+baza?lang=en) and SURS asks for the credit "Source: SURS". The SURS terms page did not load. The SURS copyright notice in its publications allows use of the data when the source is named. Names with five or fewer bearers are not published.
- Licence: free use with the source named, per the SURS copyright notice, and listed as CC BY 4.0 in the Slovenian national open data catalogue (nio.gov.si) (attribution: "Source: SURS")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, residents, 30,412 names in)
- Removed by the setting filter: 57
- Changes: four alphabetical tables combined, top 5,000.

### slovene/given-female.txt
- Source: Statistical Office of the Republic of Slovenia (SURS), SiStat database, 1 January 2026, via https://pxweb.stat.si/SiStatData/api/v1/en/Data/ : tables 05X1005S (male first names), 05X1010S (female first names), 05X1015S, 05X1016S, 05X1017S, 05X1018S (family names A-F, G-L, M-R, S-Ž), measure Number. Licence: SiStat is listed as CC BY 4.0 by the Slovenian national interoperability catalogue (https://nio.gov.si/nio/asset/sistat+podatkovna+baza?lang=en) and SURS asks for the credit "Source: SURS". The SURS terms page did not load. The SURS copyright notice in its publications allows use of the data when the source is named. Names with five or fewer bearers are not published.
- Licence: free use with the source named, per the SURS copyright notice, and listed as CC BY 4.0 in the Slovenian national open data catalogue (nio.gov.si) (attribution: "Source: SURS")
- Fetched: 2026-11-08
- Entries: 4,418 (weighted: yes, residents, 4,435 names in)
- Removed by the setting filter: 17
- Changes: as above.

### slovene/given-male.txt
- Source: Statistical Office of the Republic of Slovenia (SURS), SiStat database, 1 January 2026, via https://pxweb.stat.si/SiStatData/api/v1/en/Data/ : tables 05X1005S (male first names), 05X1010S (female first names), 05X1015S, 05X1016S, 05X1017S, 05X1018S (family names A-F, G-L, M-R, S-Ž), measure Number. Licence: SiStat is listed as CC BY 4.0 by the Slovenian national interoperability catalogue (https://nio.gov.si/nio/asset/sistat+podatkovna+baza?lang=en) and SURS asks for the credit "Source: SURS". The SURS terms page did not load. The SURS copyright notice in its publications allows use of the data when the source is named. Names with five or fewer bearers are not published.
- Licence: free use with the source named, per the SURS copyright notice, and listed as CC BY 4.0 in the Slovenian national open data catalogue (nio.gov.si) (attribution: "Source: SURS")
- Fetched: 2026-11-08
- Entries: 4,236 (weighted: yes, number of residents with the name, 4,252 names in. SURS counts every first name a person carries, so a second name also counts)
- Removed by the setting filter: 16
- Changes: used the label of each name code, no other change.

### swedish/family.txt
- Source: Statistics Sweden (SCB) open data API, year 2020 (the latest in these tables): table BE0001TNamn10 "First names normally used with at least 10 bearers" and table BE0001ENamn10 "Last names with at least 10 bearers", both at https://api.scb.se/OV0104/v1/doris/en/ssd/BE/BE0001/BE0001G/ . Licence: CC0 for the open data API (https://www.scb.se/en/services/open-data-api , the website text is CC BY 4.0, so the credit "Source: Statistics Sweden" is given anyway). Weight is the number of people registered on 31 December 2020 who normally use the name (tilltalsnamn, the name a person goes by, not the first listed name). Names with fewer than 10 bearers are not published. Code suffix K (woman) or M (man) was removed to split the sexes. A name used by both sexes appears in both files. File: table BE0001ENamn10.
- Licence: CC0 (credit given)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of people, 96,205 names in)
- Removed by the setting filter: 132
- Changes: none other than the top 5,000 by count.

### swedish/given-female.txt
- Source: Statistics Sweden (SCB) open data API, year 2020 (the latest in these tables): table BE0001TNamn10 "First names normally used with at least 10 bearers" and table BE0001ENamn10 "Last names with at least 10 bearers", both at https://api.scb.se/OV0104/v1/doris/en/ssd/BE/BE0001/BE0001G/ . Licence: CC0 for the open data API (https://www.scb.se/en/services/open-data-api , the website text is CC BY 4.0, so the credit "Source: Statistics Sweden" is given anyway). Weight is the number of people registered on 31 December 2020 who normally use the name (tilltalsnamn, the name a person goes by, not the first listed name). Names with fewer than 10 bearers are not published. Code suffix K (woman) or M (man) was removed to split the sexes. A name used by both sexes appears in both files.
- Licence: CC0 (credit given: "Source: Statistics Sweden")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of people, 14,814 names in, top 5,000 by weight kept)
- Removed by the setting filter: 32
- Changes: suffix K selected, suffix removed, top 5,000 by count.

### swedish/given-male.txt
- Source: Statistics Sweden (SCB) open data API, year 2020 (the latest in these tables): table BE0001TNamn10 "First names normally used with at least 10 bearers" and table BE0001ENamn10 "Last names with at least 10 bearers", both at https://api.scb.se/OV0104/v1/doris/en/ssd/BE/BE0001/BE0001G/ . Licence: CC0 for the open data API (https://www.scb.se/en/services/open-data-api , the website text is CC BY 4.0, so the credit "Source: Statistics Sweden" is given anyway). Weight is the number of people registered on 31 December 2020 who normally use the name (tilltalsnamn, the name a person goes by, not the first listed name). Names with fewer than 10 bearers are not published. Code suffix K (woman) or M (man) was removed to split the sexes. A name used by both sexes appears in both files.
- Licence: CC0 (credit given)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of people, 13,073 names in)
- Removed by the setting filter: 33
- Changes: suffix M selected, suffix removed, top 5,000 by count.

### swiss/family.txt
- Source: Federal Statistical Office (BFS) via opendata.swiss, data of 2025. Licence: OPEN-BY, "Open use. Must provide the source" (https://opendata.swiss/terms-of-use#terms_by) (attribution: "Source: Federal Statistical Office (FSO)"). First names: "Männliche/Weibliche Vornamen der Bevölkerung nach Jahrgang, Schweiz, 2025", https://dam-api.bfs.admin.ch/hub/api/dam/assets/36752513/master (men) and https://dam-api.bfs.admin.ch/hub/api/dam/assets/36752506/master (women), summed over birth years. Family names: "Nachnamen der ständigen Wohnbevölkerung nach Kanton" 2025, https://dam-api.bfs.admin.ch/hub/api/dam/assets/36752521/master, summed over cantons. Rare names are suppressed per year of birth or per canton.
- Licence: OPEN-BY
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of residents, 212,712 names in)
- Removed by the setting filter: 422
- Changes: summed VALUE over cantons, top 5,000.

### swiss/given-female.txt
- Source: Federal Statistical Office (BFS) via opendata.swiss, data of 2025. Licence: OPEN-BY, "Open use. Must provide the source" (https://opendata.swiss/terms-of-use#terms_by) (attribution: "Source: Federal Statistical Office (FSO)"). First names: "Männliche/Weibliche Vornamen der Bevölkerung nach Jahrgang, Schweiz, 2025", https://dam-api.bfs.admin.ch/hub/api/dam/assets/36752513/master (men) and https://dam-api.bfs.admin.ch/hub/api/dam/assets/36752506/master (women), summed over birth years. Family names: "Nachnamen der ständigen Wohnbevölkerung nach Kanton" 2025, https://dam-api.bfs.admin.ch/hub/api/dam/assets/36752521/master, summed over cantons. Rare names are suppressed per year of birth or per canton.
- Licence: OPEN-BY
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of residents, 39,085 names in)
- Removed by the setting filter: 123
- Changes: same as the male file.

### swiss/given-male.txt
- Source: Federal Statistical Office (BFS) via opendata.swiss, data of 2025. Licence: OPEN-BY, "Open use. Must provide the source" (https://opendata.swiss/terms-of-use#terms_by) (attribution: "Source: Federal Statistical Office (FSO)"). First names: "Männliche/Weibliche Vornamen der Bevölkerung nach Jahrgang, Schweiz, 2025", https://dam-api.bfs.admin.ch/hub/api/dam/assets/36752513/master (men) and https://dam-api.bfs.admin.ch/hub/api/dam/assets/36752506/master (women), summed over birth years. Family names: "Nachnamen der ständigen Wohnbevölkerung nach Kanton" 2025, https://dam-api.bfs.admin.ch/hub/api/dam/assets/36752521/master, summed over cantons. Rare names are suppressed per year of birth or per canton.
- Licence: OPEN-BY (opendata.swiss terms_by)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of permanent residents carrying the name, 32,997 names in)
- Removed by the setting filter: 84
- Changes: summed VALUE over years of birth, top 5,000.

## Personal names: Wikidata

All lists in this section come from Wikidata (https://www.wikidata.org), queried through the QLever Wikidata endpoint (https://qlever.dev/api/wikidata, the host that qlever.cs.uni-freiburg.de redirects to) with the User-Agent "LostHarborNameData/0.1 (open game data research)", one query at a time, at least one second apart. Wikidata data is CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing). Fetched 2026-11-08.

Method: for each group, count distinct humans (P31 Q5) by country of citizenship (P27, Q-ids below) and by given name item (P735) or family name item (P734), taking the 6,000 most common name items per query. Given names are split by sex (P21): male Q6581097 and trans man Q2449503 count as male, female Q6581072 and trans woman Q1052281 count as female. Family names are not split. The weight is the number of people who carry the name item. Each name item is turned into text by taking its label in the culture's own Latin-script language where one is listed in the entry (for example tr, hu, pt), else the English label, else the `mul` label. Name items without such a label are dropped. Labels from several items that read the same are merged by the cleaning step (weights added). Citizenship is an imperfect proxy for culture: the lists hold a share of foreign and Western names that people of the country carry (for example Michael or Joseph in small lists). Small countries and ethnic groups give short lists with weights of 1 to 5. Cleaning is done by the cleaning step only (brackets, digits, non-Latin entries and the setting filter). Lists above 5000 entries are cut to the 5000 heaviest, ties broken by the stable hash in the cleaning step. 

Countries (Q-ids): German Q183, Italian Q38, Portuguese Q45, Greek Q41, Romanian Q218, Hungarian Q28, Serbian Q403, Croatian Q224, Bulgarian Q219, Ukrainian Q212, Russian Q159, Georgian Q230, Armenian Q399, Turkish Q43, Albanian Q222. Arab = Egypt Q79, Saudi Arabia Q851, Iraq Q796, Syria Q858, Lebanon Q822, Jordan Q810, Morocco Q1028, Algeria Q262, Tunisia Q948, Libya Q1016, Yemen Q805, Sudan Q1049, Kuwait Q817, UAE Q878, Qatar Q846, Oman Q842, Bahrain Q398, Palestine Q219060. Iranian Q794, Israeli Q801. Indian Q668, Pakistani Q843, Bangladeshi Q902, Nepali Q837, Sri Lankan Q854, Japanese Q17, Korean (South Korea) Q884, Thai Q869, Indonesian Q252, Filipino Q928, Malaysian Q833, Kazakh Q232. Nigerian Q1033, Ghanaian Q117, Kenyan Q114, Ethiopian Q115, Somali Q1045, South African Q258, Tanzanian Q924, Ugandan Q1036, Senegalese Q1041, Cameroonian Q1009, Congolese (DR Congo) Q974, Zimbabwean Q954. Brazilian Q155, Mexican Q96, Argentine Q414, Chilean Q298, Colombian Q739, Peruvian Q419, Cuban Q241. Samoan Q683, Fijian Q712, Tongan Q678. Finnish Q33, Danish Q35 plus Kingdom of Denmark Q756617, Dutch Q55 plus Kingdom of the Netherlands Q29999, Czech Q213, Estonian Q191, Lithuanian Q37, Norwegian Q20, Icelandic Q189, Austrian Q40, Latvian Q211.

Label languages: German de, Italian it, Portuguese pt, Romanian ro, Hungarian hu, Serbian sr-latn, Croatian hr, Turkish tr, Albanian sq, Indonesian id, Filipino tl, Malaysian ms, Somali so, Tanzanian sw, Brazilian pt, Spanish-language countries es, Samoan sm, Tongan to, Finnish fi, Danish da, Dutch nl, Czech cs, Estonian et, Lithuanian lt, Norwegian nb/nn/no, Icelandic is, Austrian de, Latvian lv, each followed by en and mul. All other groups use en, then mul. Russian, Ukrainian, Bulgarian, Georgian, Armenian, Greek, Arabic, Persian, Hindi, Urdu, Bengali, Thai, Mongolian, Kazakh, Amharic and similar names are English labels. They are common English spellings of the names and not one strict romanization system. Japanese uses English labels of the name items, which are Hepburn style (macrons kept). Korean uses English labels, mostly Revised Romanization. Hungarian, Japanese, Chinese, Korean and Vietnamese write family names first in labels, which does not matter where name items are used.

Chinese and Vietnamese (derived from person labels, because P735 is poor there): the Chinese given-name items hold many Western names and tone marks, so instead all humans with P27 Q148 and an English label were fetched with their sex (47,000 rows, QLever, query in the scripts folder). A label counts when it has 2 to 4 words, all letters, and its first word (accents removed, lower case) is a Chinese family name item (P734 on citizens of Q148 or Q865 with at least 2 people). The first word is the family name, the other words joined are the given name (first letter capital), and tone marks and u-umlaut are removed. One name per person goes to the cleaning step with count weights (one per source row), so the weight is the number of people. Vietnamese does the same with the vi labels of people with P27 Q881 (5,500 rows): the first word must be a Vietnamese family name item, the family name is that word and the given name is the last word (diacritics kept). Hyphens are treated as spaces.

Ethnic groups (property P172 instead of P27): kurdish Q12223 (Kurds), maori Q6122670, yoruba Q190168 plus Q34311, igbo Q244157 plus Q33578, hausa Q33938, mongolian Q711 (citizens) or Q41975 (Mongols), tongan Q678 (citizens) or ethnic. Where the sex split had fewer than 50 names in either sex, one unsplit given.txt is written. Tried and not written because fewer than 40 names: zulu (Q129962), akan (Q415693), hawaiian (Q1283606), xhosa and amhara (no ethnic group item with enough people).

Norse: humans born 600-1299 with P27 in Norway Q20, Kingdom of Denmark Q756617, Iceland Q189 or Sweden Q34, name items P735 (en labels), split by sex. Anglo-Saxon: humans born or floruit 450-1065 with citizenship Kingdom of England Q179876 or England Q21, or place of birth or death inside England (P131+ Q21), first word of the English label (titles such as Saint, King, Bishop removed, labels with "de", "Fitz" or "d'" dropped), count weights (one per source row). It holds some Welsh, Norman and Scandinavian names.

### albanian/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,339 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 4
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### albanian/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 442 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 7
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### albanian/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 956 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 5
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### anglo-saxon/given.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 203 (weighted: yes, count of people whose label gave the name)
- Removed by the setting filter: 0
- Changes: Derived from person labels as described in the section intro (first word, count weights (one per source row)).

### arab/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 5
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Cut to the 5000 heaviest (454 cut).

### arab/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,473 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 8
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### arab/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 2,394 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 4
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### argentine/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 25
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Cut to the 5000 heaviest (966 cut).

### argentine/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,186 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 8
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### argentine/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,824 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 13
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### armenian/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 441 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 2
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### armenian/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 210 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 1
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### armenian/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 394 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 1
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### austrian/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 12
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Cut to the 5000 heaviest (968 cut).

### bangladeshi/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 422 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 0
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### bangladeshi/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 260 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 2
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### bangladeshi/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 424 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 2
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### brazilian/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 20
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Cut to the 5000 heaviest (922 cut).

### brazilian/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 2,160 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 10
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### brazilian/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 3,314 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 17
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### bulgarian/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,319 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 2
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### bulgarian/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 557 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 3
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### bulgarian/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 824 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 1
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### cameroonian/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 859 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 1
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### cameroonian/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 564 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 2
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### cameroonian/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 714 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 7
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### chilean/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 3,247 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 19
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### chilean/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 763 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 4
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### chilean/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,090 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 12
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### chinese/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 353 (weighted: yes, count of people whose label gave the name)
- Removed by the setting filter: 770
- Changes: Derived from person labels as described in the section intro (count weights (one per source row)).

### chinese/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 4,664 (weighted: yes, count of people whose label gave the name)
- Removed by the setting filter: 23
- Changes: Derived from person labels as described in the section intro (count weights (one per source row)).

### chinese/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of people whose label gave the name)
- Removed by the setting filter: 20
- Changes: Derived from person labels as described in the section intro (count weights (one per source row)). Cut to the 5000 heaviest (5924 cut).

### colombian/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 2,048 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 11
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### colombian/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 719 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 9
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### colombian/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,239 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 11
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### congolese/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 601 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 0
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### congolese/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 344 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 1
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### congolese/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 692 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 6
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### croatian/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 2,861 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 19
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### croatian/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 519 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 4
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### croatian/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 741 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 2
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### cuban/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,674 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 10
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### cuban/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 595 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 4
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### cuban/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 855 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 6
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### czech/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 21
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Cut to the 5000 heaviest (936 cut).

### czech/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 695 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 3
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### czech/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 751 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 2
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### danish/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 10
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Cut to the 5000 heaviest (988 cut).

### danish/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,581 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 8
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### danish/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 2,263 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 6
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### dutch/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 15
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Cut to the 5000 heaviest (951 cut).

### dutch/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 3,694 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 18
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### dutch/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 4,768 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 21
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### estonian/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 7
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Cut to the 5000 heaviest (984 cut).

### estonian/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,752 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 2
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### estonian/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 2,006 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 12
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### ethiopian/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 287 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 0
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### ethiopian/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 124 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 0
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### ethiopian/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 176 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 0
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### fijian/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 370 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 1
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### fijian/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 101 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 0
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### fijian/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 250 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 1
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### filipino/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 2,364 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 10
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### filipino/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,008 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 10
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### filipino/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,308 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 10
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### finnish/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 10
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Cut to the 5000 heaviest (987 cut).

### finnish/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,610 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 6
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### finnish/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 2,123 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 4
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### georgian/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 2,236 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 3
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### georgian/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 202 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 1
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### georgian/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 453 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 1
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### german/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 7
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Cut to the 5000 heaviest (938 cut).

### ghanaian/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,050 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 3
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### ghanaian/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 458 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 3
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### ghanaian/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 673 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 2
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### greek/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 2,130 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 5
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### greek/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 712 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 9
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### greek/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 899 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 6
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### hausa/given.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 43 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 0
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Ethnic group or union query as listed under Ethnic groups.

### hungarian/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 8
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Cut to the 5000 heaviest (967 cut).

### hungarian/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,024 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 7
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### hungarian/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,556 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 5
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### icelandic/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 512 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 2
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### igbo/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 73 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 1
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Ethnic group or union query as listed under Ethnic groups.

### igbo/given.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 135 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 0
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Ethnic group or union query as listed under Ethnic groups.

### indian/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 3,506 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 3
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### indian/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,484 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 3
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### indian/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 2,362 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 7
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### indonesian/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 2,216 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 9
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### indonesian/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,511 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 13
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### indonesian/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,717 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 4
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### iranian/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,764 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 0
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### iranian/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 472 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 2
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### iranian/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 804 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 2
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### israeli/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 7
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Cut to the 5000 heaviest (861 cut).

### israeli/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,315 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 9
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### israeli/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,738 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 4
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### italian/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 45
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Cut to the 5000 heaviest (951 cut).

### italian/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 2,330 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 17
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### italian/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 3,593 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 22
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### japanese/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 4,439 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 2
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### japanese/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,484 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 4
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### japanese/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 3,224 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 2
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### kazakh/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,090 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 1
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### kazakh/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 260 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 1
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### kazakh/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 383 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 1
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### kenyan/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 663 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 2
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### kenyan/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 410 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 3
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### kenyan/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 512 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 1
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### korean/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 406 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 4
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### korean/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,887 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 67
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### korean/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 4,387 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 80
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### kurdish/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 57 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 0
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Ethnic group or union query as listed under Ethnic groups.

### kurdish/given.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 65 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 0
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Ethnic group or union query as listed under Ethnic groups.

### latvian/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 2,476 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 3
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### lithuanian/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 2,236 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 8
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### lithuanian/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 476 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 3
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### lithuanian/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 737 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 3
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### malaysian/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 785 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 4
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### malaysian/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 600 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 2
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### malaysian/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,051 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 3
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### maori/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 539 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 2
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Ethnic group or union query as listed under Ethnic groups.

### maori/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 301 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 2
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Ethnic group or union query as listed under Ethnic groups.

### maori/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 290 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 1
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Ethnic group or union query as listed under Ethnic groups.

### mexican/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 4,610 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 21
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### mexican/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,467 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 9
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### mexican/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,638 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 12
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### mongolian/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 139 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 0
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Ethnic group or union query as listed under Ethnic groups.

### mongolian/given.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 161 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 1
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Ethnic group or union query as listed under Ethnic groups.

### nepali/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 171 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 0
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### nepali/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 141 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 0
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### nepali/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 214 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 1
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### nigerian/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 3,195 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 8
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### nigerian/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,092 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 4
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### nigerian/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,871 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 7
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### norse/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 68 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 0
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### norse/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 251 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 0
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### norwegian/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 8
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Cut to the 5000 heaviest (991 cut).

### pakistani/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 685 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 1
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### pakistani/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 355 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 2
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### pakistani/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 662 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 1
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### peruvian/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 27
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Cut to the 5000 heaviest (936 cut).

### peruvian/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 2,101 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 8
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### peruvian/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 2,082 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 12
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### portuguese/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 2,309 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 10
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### portuguese/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 770 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 4
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### portuguese/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,113 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 7
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### romanian/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 7
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Cut to the 5000 heaviest (989 cut).

### romanian/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 915 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 4
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### romanian/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,403 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 7
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### russian/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 4
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Cut to the 5000 heaviest (603 cut).

### russian/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 843 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 4
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### russian/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,455 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 3
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### samoan/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 195 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 1
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### samoan/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 64 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 0
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### samoan/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 185 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 0
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### senegalese/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 398 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 1
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### senegalese/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 234 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 2
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### senegalese/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 450 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 1
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### serbian/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,844 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 7
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### serbian/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 438 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 3
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### serbian/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 699 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 2
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### somali/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 108 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 0
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### somali/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 70 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 0
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### somali/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 109 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 1
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### south-african/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 4,395 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 8
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### south-african/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,403 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 6
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### south-african/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,837 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 6
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### sri-lankan/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 348 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 1
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### sri-lankan/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 153 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 0
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### sri-lankan/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 416 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 1
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### tanzanian/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 704 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 1
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### tanzanian/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 271 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 1
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### tanzanian/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 532 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 1
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### thai/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,047 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 1
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### thai/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 567 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 2
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### thai/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 600 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 1
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### tongan/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 136 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 0
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Ethnic group or union query as listed under Ethnic groups.

### tongan/given.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 129 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 0
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Ethnic group or union query as listed under Ethnic groups.

### turkish/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 4
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Cut to the 5000 heaviest (948 cut).

### turkish/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,304 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 6
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### turkish/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 2,062 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 5
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### ugandan/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 646 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 1
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### ugandan/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 523 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 2
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### ugandan/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 654 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 2
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### ukrainian/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 2
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Cut to the 5000 heaviest (544 cut).

### ukrainian/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 535 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 2
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### ukrainian/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 779 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 2
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### vietnamese/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 123 (weighted: yes, count of people whose label gave the name)
- Removed by the setting filter: 0
- Changes: Derived from person labels as described in the section intro (count weights (one per source row)).

### vietnamese/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 291 (weighted: yes, count of people whose label gave the name)
- Removed by the setting filter: 0
- Changes: Derived from person labels as described in the section intro (count weights (one per source row)).

### vietnamese/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 787 (weighted: yes, count of people whose label gave the name)
- Removed by the setting filter: 0
- Changes: Derived from person labels as described in the section intro (count weights (one per source row)).

### yoruba/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 160 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 0
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Ethnic group or union query as listed under Ethnic groups.

### yoruba/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 65 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 0
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Ethnic group or union query as listed under Ethnic groups.

### yoruba/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 116 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 0
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only. Ethnic group or union query as listed under Ethnic groups.

### zimbabwean/family.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 595 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 1
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### zimbabwean/given-female.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 274 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 3
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

### zimbabwean/given-male.txt
- Source: Wikidata via QLever, https://qlever.dev/api/wikidata
- Licence: CC0 (https://www.wikidata.org/wiki/Wikidata:Licensing) (attribution: none required)
- Fetched: 2026-11-08
- Entries: 488 (weighted: yes, count of people with the name item)
- Removed by the setting filter: 4
- Changes: Name-item counts and labels as in the section intro. The cleaning step cleaning only.

## Roman name parts: Wikidata

The `roman` files hold the three parts of an ancient Roman name: praenomen
(given name), nomen (family name) and cognomen (surname or nickname). They
come from Wikidata (CC0). The lists are plain, because Wikidata links almost
no people to these name items, so a person count means nothing. Macrons are
written as plain vowels.

### roman/cognomen.txt
- Source: Wikidata Query Service, items that are instance of masculine cognomen (Q140389146), feminine cognomen (Q140389137) or unisex cognomen (Q140422026), English or Latin labels
- Licence: CC0, https://creativecommons.org/publicdomain/zero/1.0/ (attribution: none required)
- Fetched: 2026-11-08
- Entries: 512 (weighted: no)
- Removed by the setting filter: 5
- Changes: Same cleaning as roman/praenomen.txt.

### roman/nomen.txt
- Source: Wikidata Query Service, items that are instance of masculine nomen (Q140389150) or feminine nomen (Q140389129), English or Latin labels
- Licence: CC0, https://creativecommons.org/publicdomain/zero/1.0/ (attribution: none required)
- Fetched: 2026-11-08
- Entries: 412 (weighted: no)
- Removed by the setting filter: 2
- Changes: Same cleaning as roman/praenomen.txt. Some entries are place names that Wikidata also marks as nomina (Campania, Appius).

### roman/praenomen.txt
- Source: Wikidata Query Service, items that are instance of masculine praenomen (Q140389152) or feminine praenomen (Q140389143), English or Latin labels
- Licence: CC0, https://creativecommons.org/publicdomain/zero/1.0/ (attribution: none required)
- Fetched: 2026-11-08
- Entries: 141 (weighted: no)
- Removed by the setting filter: 1
- Changes: Removed parentheses, changed macron vowels to plain vowels (Iūlius to Iulius), kept labels of one or two Latin words. Merged the English and Latin labels. A person count was tried and gave almost only zeros, so the list is plain.

## Place names: GeoNames

Every `town`, `river`, `mountain`, `island` and `lake` file comes from the
GeoNames country dump files (https://download.geonames.org/export/dump/<CC>.zip,
one per country, columns described in
https://download.geonames.org/export/dump/readme.txt). The licence is CC BY 4.0
(https://creativecommons.org/licenses/by/4.0/). Attribution: "GeoNames,
https://www.geonames.org/, CC BY 4.0".

Method. Take the `name` column only. The feature class and code, the admin1
code and the population pick the rows. No coordinates are kept.

- town: feature class P (populated places)
- river: feature code STM
- mountain: feature codes MT, MTS, PK, PKS, HLL, HLLS and RDGE
- island: feature codes ISL, ISLS and ISLET
- lake: feature codes LK and LKS

Each country goes to one culture group. Great Britain is split by its admin1
code: England to `english`, Scotland to `scottish` and Wales to `welsh`.
Northern Ireland has no group. The US state of Hawaii goes to `hawaiian` and
the rest of the US to `american`. Quebec goes to `quebecois` and the rest of
Canada to `canadian`. Egypt, Morocco and Saudi Arabia together form `arab`.

Each GeoNames row is one real place, so the weight is the number of places in
the group that carry the name. Towns are passed most populous first, so ties
at the 5,000 cut keep the bigger towns. Other lists break ties by the stable
hash.

For river, mountain, island and lake, generic feature words that stand as
separate words are removed first (River, Lake, Mount, Fjell, Elva, Shan and
so on). Each entry lists the words removed for its culture. Joining words
(of, de, la, y, yr and similar) left at either end of a name are removed too.
A name that starts in lower case after this is a fragment and is dropped. Town
names are not stripped, because San, Rio and Monte are real parts of them.

Rows in a script other than Latin are dropped. The names kept use the
romanization that GeoNames gives in its `name` column. This applies to the
russian, ukrainian, greek, georgian, iranian, arab, israeli, indian,
pakistani, chinese, japanese, korean, thai and mongolian groups.

### american/island.txt
- Source: GeoNames country dump files, one per country: US (admin1 except HI) (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 175
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (17,232 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: none. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (40). Stripped names: 14,347. Most removed words: island 13504, islands 657, isle 89, creek 45, hill 34, river 27, islet 27, islets 19. Entries outside Latin script dropped: 7. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### american/lake.txt
- Source: GeoNames country dump files, one per country: US (admin1 except HI) (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 528
- Changes: Name column only, feature code(s) LK, LKS (69,237 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: none. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (372). Stripped names: 54,192. Most removed words: lake 51298, lakes 2235, creek 421, island 363, river 186, mountain 170, hill 134, brook 97. Entries outside Latin script dropped: 44. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### american/mountain.txt
- Source: GeoNames country dump files, one per country: US (admin1 except HI) (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 330
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (85,548 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: none. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (205). Stripped names: 64,900. Most removed words: mountain 22126, hill 16890, ridge 12554, peak 7141, mount 2835, hills 1602, mountains 1180, creek 655. Entries outside Latin script dropped: 43. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### american/river.txt
- Source: GeoNames country dump files, one per country: US (admin1 except HI) (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 983
- Changes: Name column only, feature code(s) STM (229,067 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: none. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (746). Stripped names: 199,214. Most removed words: creek 139532, branch 41517, brook 11747, river 7877, lake 877, stream 744, hill 536, mountain 474. Entries outside Latin script dropped: 24. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### american/town.txt
- Source: GeoNames country dump files, one per country: US (admin1 except HI) (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 2,189
- Changes: Name column only. Feature class P rows (193,120 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 9. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### arab/island.txt
- Source: GeoNames country dump files, one per country: EG. MA. SA (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 550 (weighted: yes, count of places with the name)
- Removed by the setting filter: 2
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (792 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: adrar, assif, bahr, jabal, jazira, jazirat, jebel, nahr, ouad, oued, wad, wadi. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (222). Stripped names: 489. Most removed words: jazirat 455, island 26, islands 6, jabal 3, bahr 2, wadi 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### arab/lake.txt
- Source: GeoNames country dump files, one per country: EG. MA (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 130 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) LK, LKS (134 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: adrar, assif, bahr, jabal, jazira, jazirat, jebel, nahr, ouad, oued, wad, wadi. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (3). Stripped names: 15. Most removed words: bahr 7, lake 5, lakes 2, jabal 1, jazirat 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### arab/mountain.txt
- Source: GeoNames country dump files, one per country: EG. MA. SA (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 13
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (37,076 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: adrar, assif, bahr, jabal, jazira, jazirat, jebel, nahr, ouad, oued, wad, wadi. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (1,482). Stripped names: 5,757. Most removed words: jabal 3526, jebel 1462, adrar 665, jazirat 23, oued 18, ridge 17, assif 15, hill 9. Entries outside Latin script dropped: 4. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### arab/river.txt
- Source: GeoNames country dump files, one per country: EG. MA. SA (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,045 (weighted: yes, count of places with the name)
- Removed by the setting filter: 1
- Changes: Name column only, feature code(s) STM (1,195 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: adrar, assif, bahr, jabal, jazira, jazirat, jebel, nahr, ouad, oued, wad, wadi. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (119). Stripped names: 985. Most removed words: oued 765, assif 176, wad 31, bahr 8, branch 2, river 2, adrar 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### arab/town.txt
- Source: GeoNames country dump files, one per country: EG. MA. SA (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 29
- Changes: Name column only. Feature class P rows (64,154 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 12. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first. Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### argentine/island.txt
- Source: GeoNames country dump files, one per country: AR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 619 (weighted: yes, count of places with the name)
- Removed by the setting filter: 9
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (725 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: arroyo, cerro, cerros, isla, islas, lago, lagos, laguna, lagunas, monte, montes, nevado, pico, rio, rios, sierra, volcan. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (5). Stripped names: 636. Most removed words: isla 574, islas 60, monte 4, laguna 3, rio 1, creek 1, island 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### argentine/lake.txt
- Source: GeoNames country dump files, one per country: AR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 911 (weighted: yes, count of places with the name)
- Removed by the setting filter: 7
- Changes: Name column only, feature code(s) LK, LKS (1,255 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: arroyo, cerro, cerros, isla, islas, lago, lagos, laguna, lagunas, monte, montes, nevado, pico, rio, rios, sierra, volcan. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (5). Stripped names: 1,225. Most removed words: laguna 1058, lago 136, lagunas 28, monte 3, lagos 3, volcan 2, cerro 2, isla 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### argentine/mountain.txt
- Source: GeoNames country dump files, one per country: AR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 4,095 (weighted: yes, count of places with the name)
- Removed by the setting filter: 44
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (6,578 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: arroyo, cerro, cerros, isla, islas, lago, lagos, laguna, lagunas, monte, montes, nevado, pico, rio, rios, sierra, volcan. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (52). Stripped names: 5,354. Most removed words: cerro 4751, sierra 354, monte 101, cerros 99, pico 47, laguna 38, nevado 36, volcan 15. Entries outside Latin script dropped: 3. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### argentine/river.txt
- Source: GeoNames country dump files, one per country: AR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 2,958 (weighted: yes, count of places with the name)
- Removed by the setting filter: 18
- Changes: Name column only, feature code(s) STM (4,388 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: arroyo, cerro, cerros, isla, islas, lago, lagos, laguna, lagunas, monte, montes, nevado, pico, rio, rios, sierra, volcan. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (23). Stripped names: 4,110. Most removed words: arroyo 2322, rio 1780, laguna 10, volcan 6, cerro 6, monte 5, river 4, lagunas 4. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### argentine/town.txt
- Source: GeoNames country dump files, one per country: AR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 169
- Changes: Name column only. Feature class P rows (14,889 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### australian/island.txt
- Source: GeoNames country dump files, one per country: AU (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 3,381 (weighted: yes, count of places with the name)
- Removed by the setting filter: 28
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (4,686 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: none. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (12). Stripped names: 4,045. Most removed words: island 3464, islands 280, islet 225, islets 41, isles 21, isle 12, peak 11, hill 8. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### australian/lake.txt
- Source: GeoNames country dump files, one per country: AU (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 3,191 (weighted: yes, count of places with the name)
- Removed by the setting filter: 32
- Changes: Name column only, feature code(s) LK, LKS (3,839 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: none. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (9). Stripped names: 3,285. Most removed words: lake 3132, lakes 117, creek 19, island 7, loch 6, hill 5, mount 4, river 4. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### australian/mountain.txt
- Source: GeoNames country dump files, one per country: AU (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 78
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (21,233 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: none. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (42). Stripped names: 16,847. Most removed words: hill 7697, mount 6268, mountain 1348, hills 608, peak 595, ridge 221, mountains 57, peaks 49. Entries outside Latin script dropped: 12. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### australian/river.txt
- Source: GeoNames country dump files, one per country: AU (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 44
- Changes: Name column only, feature code(s) STM (15,993 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: none. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (81). Stripped names: 15,155. Most removed words: creek 13354, river 1559, brook 223, branch 175, mount 52, mountain 41, hill 35, lake 10. Entries outside Latin script dropped: 4. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### australian/town.txt
- Source: GeoNames country dump files, one per country: AU (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 86
- Changes: Name column only. Feature class P rows (19,237 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### austrian/lake.txt
- Source: GeoNames country dump files, one per country: AT (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 445 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) LK, LKS (485 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: bach, berg, berge, fluss, gebirge, insel, inseln, see, strom. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 87. Most removed words: see 86, loch 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### austrian/mountain.txt
- Source: GeoNames country dump files, one per country: AT (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 6
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (7,633 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: bach, berg, berge, fluss, gebirge, insel, inseln, see, strom. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 217. Most removed words: berg 199, gebirge 10, berge 6, bach 2. Entries outside Latin script dropped: 8. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### austrian/river.txt
- Source: GeoNames country dump files, one per country: AT (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,657 (weighted: yes, count of places with the name)
- Removed by the setting filter: 1
- Changes: Name column only, feature code(s) STM (1,952 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: bach, berg, berge, fluss, gebirge, insel, inseln, see, strom. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (2). Stripped names: 399. Most removed words: bach 395, river 3, see 1, loch 1, fluss 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### austrian/town.txt
- Source: GeoNames country dump files, one per country: AT (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 43
- Changes: Name column only. Feature class P rows (20,913 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### belgian/mountain.txt
- Source: GeoNames country dump files, one per country: BE (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 82 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (83 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: aiguille, beek, berg, col, cours, d'eau, decharge, dent, eiland, eilanden, fleuve, ile, iles, lac, lacs, meer, meren, mont, montagne, montagnes, monts, pic, pointe, puy, rivier, riviere, roc, roche, ruisseau, sommet, tete. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (1). Stripped names: 19. Most removed words: berg 12, mont 6, montagne 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### belgian/river.txt
- Source: GeoNames country dump files, one per country: BE (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,192 (weighted: yes, count of places with the name)
- Removed by the setting filter: 3
- Changes: Name column only, feature code(s) STM (1,351 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: aiguille, beek, berg, col, cours, d'eau, decharge, dent, eiland, eilanden, fleuve, ile, iles, lac, lacs, meer, meren, mont, montagne, montagnes, monts, pic, pointe, puy, rivier, riviere, roc, roche, ruisseau, sommet, tete. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (14). Stripped names: 134. Most removed words: ruisseau 110, beek 22, lac 1, mont 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### belgian/town.txt
- Source: GeoNames country dump files, one per country: BE (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 25
- Changes: Name column only. Feature class P rows (12,669 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### brazilian/island.txt
- Source: GeoNames country dump files, one per country: BR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 2,329 (weighted: yes, count of places with the name)
- Removed by the setting filter: 16
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (3,654 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: ilha, ilhas, lago, lagoa, lagoas, monte, morro, pico, ribeirao, rio, rios, serra. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (379). Stripped names: 3,561. Most removed words: ilha 3476, ilhas 85, monte 9, serra 6, morro 4, pico 2, lago 2, rio 2. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### brazilian/lake.txt
- Source: GeoNames country dump files, one per country: BR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,796 (weighted: yes, count of places with the name)
- Removed by the setting filter: 7
- Changes: Name column only, feature code(s) LK, LKS (2,791 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: ilha, ilhas, lago, lagoa, lagoas, monte, morro, pico, ribeirao, rio, rios, serra. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (162). Stripped names: 2,671. Most removed words: lagoa 1587, lago 1068, lagoas 11, lake 6, morro 4, ilha 4, serra 2, ribeirao 2. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### brazilian/mountain.txt
- Source: GeoNames country dump files, one per country: BR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 4,224 (weighted: yes, count of places with the name)
- Removed by the setting filter: 10
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (7,601 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: ilha, ilhas, lago, lagoa, lagoas, monte, morro, pico, ribeirao, rio, rios, serra. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (580). Stripped names: 6,361. Most removed words: serra 4158, morro 1986, pico 195, monte 56, rio 40, lagoa 31, ilha 5, mount 4. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### brazilian/river.txt
- Source: GeoNames country dump files, one per country: BR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 122
- Changes: Name column only, feature code(s) STM (41,610 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: ilha, ilhas, lago, lagoa, lagoas, monte, morro, pico, ribeirao, rio, rios, serra. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (818). Stripped names: 11,618. Most removed words: rio 7025, ribeirao 4154, serra 175, lagoa 165, morro 81, monte 45, lago 33, ilha 24. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### brazilian/town.txt
- Source: GeoNames country dump files, one per country: BR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 506
- Changes: Name column only. Feature class P rows (72,392 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 10. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### canadian/island.txt
- Source: GeoNames country dump files, one per country: CA (admin1 except 10) (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 155
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (17,599 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: none. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (35). Stripped names: 17,228. Most removed words: island 15241, islands 1312, islet 423, islets 198, isle 50, hill 13, mountain 9, lake 8. Entries outside Latin script dropped: 10. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### canadian/lake.txt
- Source: GeoNames country dump files, one per country: CA (admin1 except 10) (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 284
- Changes: Name column only, feature code(s) LK, LKS (53,453 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: none. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (279). Stripped names: 52,490. Most removed words: lake 51115, lakes 1309, island 226, hill 116, mountain 88, river 60, brook 53, loch 35. Entries outside Latin script dropped: 33. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### canadian/mountain.txt
- Source: GeoNames country dump files, one per country: CA (admin1 except 10) (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 80
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (13,569 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: none. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (32). Stripped names: 11,695. Most removed words: mount 3429, mountain 2989, hill 2459, peak 1478, ridge 775, hills 383, mountains 91, peaks 76. Entries outside Latin script dropped: 2. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### canadian/river.txt
- Source: GeoNames country dump files, one per country: CA (admin1 except 10) (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 193
- Changes: Name column only, feature code(s) STM (35,216 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: none. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (107). Stripped names: 33,880. Most removed words: creek 22407, brook 5850, river 5391, branch 313, lake 291, stream 133, hill 84, island 65. Entries outside Latin script dropped: 6. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### canadian/town.txt
- Source: GeoNames country dump files, one per country: CA (admin1 except 10) (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 308
- Changes: Name column only. Feature class P rows (19,091 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### chilean/island.txt
- Source: GeoNames country dump files, one per country: CL (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 2,147 (weighted: yes, count of places with the name)
- Removed by the setting filter: 27
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (2,605 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: arroyo, cerro, cerros, isla, islas, lago, lagos, laguna, lagunas, monte, montes, nevado, pico, rio, rios, sierra, volcan. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (8). Stripped names: 1,858. Most removed words: isla 1670, islas 178, island 8, sierra 3, peak 1, lagunas 1, lagos 1, hills 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### chilean/lake.txt
- Source: GeoNames country dump files, one per country: CL (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 544 (weighted: yes, count of places with the name)
- Removed by the setting filter: 2
- Changes: Name column only, feature code(s) LK, LKS (657 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: arroyo, cerro, cerros, isla, islas, lago, lagos, laguna, lagunas, monte, montes, nevado, pico, rio, rios, sierra, volcan. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (5). Stripped names: 653. Most removed words: laguna 384, lago 248, lagunas 19, lagos 3, islas 2, rio 2, rios 1, nevado 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### chilean/mountain.txt
- Source: GeoNames country dump files, one per country: CL (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 48
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (8,316 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: arroyo, cerro, cerros, isla, islas, lago, lagos, laguna, lagunas, monte, montes, nevado, pico, rio, rios, sierra, volcan. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (47). Stripped names: 6,413. Most removed words: cerro 5537, sierra 302, monte 239, cerros 235, pico 97, nevado 27, lagunas 18, laguna 17. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### chilean/river.txt
- Source: GeoNames country dump files, one per country: CL (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 4,487 (weighted: yes, count of places with the name)
- Removed by the setting filter: 7
- Changes: Name column only, feature code(s) STM (5,664 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: arroyo, cerro, cerros, isla, islas, lago, lagos, laguna, lagunas, monte, montes, nevado, pico, rio, rios, sierra, volcan. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (14). Stripped names: 1,879. Most removed words: rio 1767, arroyo 90, laguna 16, monte 7, cerro 6, nevado 5, volcan 3, rios 2. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### chilean/town.txt
- Source: GeoNames country dump files, one per country: CL (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 16
- Changes: Name column only. Feature class P rows (6,967 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### chinese/island.txt
- Source: GeoNames country dump files, one per country: CN (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,678 (weighted: yes, count of places with the name)
- Removed by the setting filter: 1
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (1,954 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: dao, feng, hai, he, hu, jiang, ling, shan. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (4). Stripped names: 1,266. Most removed words: dao 676, shan 424, island 148, islands 11, feng 3, hu 3, islets 2, peak 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### chinese/lake.txt
- Source: GeoNames country dump files, one per country: CN (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,142 (weighted: yes, count of places with the name)
- Removed by the setting filter: 1
- Changes: Name column only, feature code(s) LK, LKS (1,218 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: dao, feng, hai, he, hu, jiang, ling, shan. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (2). Stripped names: 552. Most removed words: hu 511, hai 22, lake 18, ling 1, feng 1. Entries outside Latin script dropped: 4. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### chinese/mountain.txt
- Source: GeoNames country dump files, one per country: CN (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 3,964 (weighted: yes, count of places with the name)
- Removed by the setting filter: 10
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (4,946 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: dao, feng, hai, he, hu, jiang, ling, shan. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (39). Stripped names: 2,912. Most removed words: shan 2447, ling 339, feng 87, hill 26, peak 12, mountain 9, mount 6, hills 6. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### chinese/river.txt
- Source: GeoNames country dump files, one per country: CN (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 3,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 5
- Changes: Name column only, feature code(s) STM (3,735 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: dao, feng, hai, he, hu, jiang, ling, shan. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (17). Stripped names: 2,275. Most removed words: he 1959, jiang 247, river 41, creek 17, hu 7, feng 5, ling 4, hai 2. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### chinese/town.txt
- Source: GeoNames country dump files, one per country: CN (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 150
- Changes: Name column only. Feature class P rows (899,923 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 25. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first. Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### colombian/island.txt
- Source: GeoNames country dump files, one per country: CO (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 501 (weighted: yes, count of places with the name)
- Removed by the setting filter: 3
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (584 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: arroyo, cerro, cerros, isla, islas, lago, lagos, laguna, lagunas, monte, montes, nevado, pico, rio, rios, sierra, volcan. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 552. Most removed words: isla 540, islas 12. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### colombian/lake.txt
- Source: GeoNames country dump files, one per country: CO (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,077 (weighted: yes, count of places with the name)
- Removed by the setting filter: 3
- Changes: Name column only, feature code(s) LK, LKS (1,245 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: arroyo, cerro, cerros, isla, islas, lago, lagos, laguna, lagunas, monte, montes, nevado, pico, rio, rios, sierra, volcan. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (3). Stripped names: 596. Most removed words: laguna 545, lago 30, lagunas 15, isla 2, cerro 2, lagos 2, rio 1, islas 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### colombian/mountain.txt
- Source: GeoNames country dump files, one per country: CO (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 4,522 (weighted: yes, count of places with the name)
- Removed by the setting filter: 48
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (5,458 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: arroyo, cerro, cerros, isla, islas, lago, lagos, laguna, lagunas, monte, montes, nevado, pico, rio, rios, sierra, volcan. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (5). Stripped names: 1,333. Most removed words: cerro 1121, cerros 51, sierra 39, pico 37, monte 23, hill 21, laguna 15, nevado 10. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### colombian/river.txt
- Source: GeoNames country dump files, one per country: CO (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 47
- Changes: Name column only, feature code(s) STM (17,739 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: arroyo, cerro, cerros, isla, islas, lago, lagos, laguna, lagunas, monte, montes, nevado, pico, rio, rios, sierra, volcan. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (14). Stripped names: 3,648. Most removed words: rio 2557, arroyo 1021, laguna 24, cerro 11, monte 11, volcan 10, sierra 10, nevado 7. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### colombian/town.txt
- Source: GeoNames country dump files, one per country: CO (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 201
- Changes: Name column only. Feature class P rows (35,945 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### croatian/island.txt
- Source: GeoNames country dump files, one per country: HR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 467 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (503 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: jezero, otok, planina, potok, reka, rijeka, vrh. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 80. Most removed words: otok 79, islands 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### croatian/lake.txt
- Source: GeoNames country dump files, one per country: HR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 63 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) LK, LKS (67 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: jezero, otok, planina, potok, reka, rijeka, vrh. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (2). Stripped names: 44. Most removed words: jezero 44. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### croatian/mountain.txt
- Source: GeoNames country dump files, one per country: HR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 3,128 (weighted: yes, count of places with the name)
- Removed by the setting filter: 5
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (4,185 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: jezero, otok, planina, potok, reka, rijeka, vrh. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (3). Stripped names: 353. Most removed words: vrh 341, planina 8, otok 3, jezero 1. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### croatian/river.txt
- Source: GeoNames country dump files, one per country: HR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 533 (weighted: yes, count of places with the name)
- Removed by the setting filter: 1
- Changes: Name column only, feature code(s) STM (608 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: jezero, otok, planina, potok, reka, rijeka, vrh. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (7). Stripped names: 104. Most removed words: potok 70, rijeka 19, reka 15. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### croatian/town.txt
- Source: GeoNames country dump files, one per country: HR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 51
- Changes: Name column only. Feature class P rows (11,631 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### czech/lake.txt
- Source: GeoNames country dump files, one per country: CZ (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 69 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) LK, LKS (70 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: hora, jezero, ostrov, potok, reka, vrch. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 8. Most removed words: jezero 7, reka 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### czech/mountain.txt
- Source: GeoNames country dump files, one per country: CZ (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 4,992 (weighted: yes, count of places with the name)
- Removed by the setting filter: 12
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (8,607 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: hora, jezero, ostrov, potok, reka, vrch. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (4). Stripped names: 1,422. Most removed words: vrch 1024, hora 395, hill 2, potok 2, ostrov 2, mountains 1, mountain 1. Entries outside Latin script dropped: 126. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### czech/river.txt
- Source: GeoNames country dump files, one per country: CZ (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 510 (weighted: yes, count of places with the name)
- Removed by the setting filter: 2
- Changes: Name column only, feature code(s) STM (555 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: hora, jezero, ostrov, potok, reka, vrch. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (1). Stripped names: 185. Most removed words: potok 182, reka 1, river 1, stream 1. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### czech/town.txt
- Source: GeoNames country dump files, one per country: CZ (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 43
- Changes: Name column only. Feature class P rows (16,634 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### danish/island.txt
- Source: GeoNames country dump files, one per country: DK (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 235 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (262 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: bjerg, bjerge. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 1. Most removed words: island 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### danish/lake.txt
- Source: GeoNames country dump files, one per country: DK (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 145 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) LK, LKS (160 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: bjerg, bjerge. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 1. Most removed words: lake 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### danish/mountain.txt
- Source: GeoNames country dump files, one per country: DK (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 342 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (399 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: bjerg, bjerge. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 16. Most removed words: bjerg 12, bjerge 4. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### danish/river.txt
- Source: GeoNames country dump files, one per country: DK (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 248 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) STM (257 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: bjerg, bjerge. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 0. Most removed words: none. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### danish/town.txt
- Source: GeoNames country dump files, one per country: DK (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 7
- Changes: Name column only. Feature class P rows (7,290 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### dutch/island.txt
- Source: GeoNames country dump files, one per country: NL (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 67 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (68 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: beek, berg, eiland, eilanden, meer, meren, rivier. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (1). Stripped names: 4. Most removed words: eiland 3, islands 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### dutch/lake.txt
- Source: GeoNames country dump files, one per country: NL (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 228 (weighted: yes, count of places with the name)
- Removed by the setting filter: 1
- Changes: Name column only, feature code(s) LK, LKS (234 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: beek, berg, eiland, eilanden, meer, meren, rivier. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 11. Most removed words: meer 10, meren 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### dutch/mountain.txt
- Source: GeoNames country dump files, one per country: NL (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 173 (weighted: yes, count of places with the name)
- Removed by the setting filter: 2
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (194 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: beek, berg, eiland, eilanden, meer, meren, rivier. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 15. Most removed words: berg 15. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### dutch/river.txt
- Source: GeoNames country dump files, one per country: NL (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 460 (weighted: yes, count of places with the name)
- Removed by the setting filter: 2
- Changes: Name column only, feature code(s) STM (483 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: beek, berg, eiland, eilanden, meer, meren, rivier. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (1). Stripped names: 65. Most removed words: beek 61, river 2, meer 2. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### dutch/town.txt
- Source: GeoNames country dump files, one per country: NL (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 13
- Changes: Name column only. Feature class P rows (7,797 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### english/island.txt
- Source: GeoNames country dump files, one per country: GB admin1 ENG (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 455 (weighted: yes, count of places with the name)
- Removed by the setting filter: 6
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (516 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: none. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 357. Most removed words: island 324, isle 12, islands 12, hill 6, mount 2, isles 1, stream 1. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### english/lake.txt
- Source: GeoNames country dump files, one per country: GB admin1 ENG (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 85 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) LK, LKS (86 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: none. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (1). Stripped names: 35. Most removed words: lake 33, lough 1, lakes 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### english/mountain.txt
- Source: GeoNames country dump files, one per country: GB admin1 ENG (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 4,055 (weighted: yes, count of places with the name)
- Removed by the setting filter: 12
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (4,528 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: none. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (10). Stripped names: 2,227. Most removed words: hill 1909, fell 202, hills 51, mount 28, ridge 14, island 14, peak 5, mountain 4. Entries outside Latin script dropped: 3. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### english/river.txt
- Source: GeoNames country dump files, one per country: GB admin1 ENG (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 449 (weighted: yes, count of places with the name)
- Removed by the setting filter: 1
- Changes: Name column only, feature code(s) STM (507 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: none. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (1). Stripped names: 396. Most removed words: river 347, brook 30, stream 10, creek 8, ridge 1, isle 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### english/town.txt
- Source: GeoNames country dump files, one per country: GB admin1 ENG (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 220
- Changes: Name column only. Feature class P rows (32,575 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 3. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### ethiopian/lake.txt
- Source: GeoNames country dump files, one per country: ET (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 75 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) LK, LKS (75 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: none. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 12. Most removed words: lake 11, lakes 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### ethiopian/mountain.txt
- Source: GeoNames country dump files, one per country: ET (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,929 (weighted: yes, count of places with the name)
- Removed by the setting filter: 1
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (1,967 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: none. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 71. Most removed words: ridge 43, mountain 10, mount 9, mountains 3, hill 3, hills 2, peaks 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### ethiopian/river.txt
- Source: GeoNames country dump files, one per country: ET (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,602 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) STM (1,756 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: none. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 17. Most removed words: river 17. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### ethiopian/town.txt
- Source: GeoNames country dump files, one per country: ET (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 3
- Changes: Name column only. Feature class P rows (11,115 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### filipino/island.txt
- Source: GeoNames country dump files, one per country: PH (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 2,512 (weighted: yes, count of places with the name)
- Removed by the setting filter: 3
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (2,760 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: bundok, burol, ilog, lawa, pulo. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (2). Stripped names: 2,714. Most removed words: island 2462, islands 148, islet 77, islets 24, pulo 2, isle 1, river 1, hills 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### filipino/lake.txt
- Source: GeoNames country dump files, one per country: PH (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 166 (weighted: yes, count of places with the name)
- Removed by the setting filter: 1
- Changes: Name column only, feature code(s) LK, LKS (177 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: bundok, burol, ilog, lawa, pulo. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 167. Most removed words: lake 165, lakes 2, mount 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### filipino/mountain.txt
- Source: GeoNames country dump files, one per country: PH (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 2,751 (weighted: yes, count of places with the name)
- Removed by the setting filter: 9
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (3,004 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: bundok, burol, ilog, lawa, pulo. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 2,872. Most removed words: mount 1892, hill 410, peak 180, mountain 154, mountains 92, hills 65, ridge 63, peaks 20. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### filipino/river.txt
- Source: GeoNames country dump files, one per country: PH (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 10
- Changes: Name column only, feature code(s) STM (9,662 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: bundok, burol, ilog, lawa, pulo. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (9). Stripped names: 9,457. Most removed words: river 6405, creek 2923, brook 67, stream 58, ilog 13, branch 7, pulo 3. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### filipino/town.txt
- Source: GeoNames country dump files, one per country: PH (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 97
- Changes: Name column only. Feature class P rows (44,374 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### finnish/island.txt
- Source: GeoNames country dump files, one per country: FI (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 63
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (49,321 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: jarvi, joki, lampi, saari, vaara, vuori. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (10). Stripped names: 41. Most removed words: saari 23, vuori 14, vaara 4. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### finnish/lake.txt
- Source: GeoNames country dump files, one per country: FI (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 34
- Changes: Name column only, feature code(s) LK, LKS (40,184 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: jarvi, joki, lampi, saari, vaara, vuori. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (4). Stripped names: 102. Most removed words: vaara 43, saari 25, jarvi 19, lampi 6, vuori 5, joki 3, lake 1. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### finnish/mountain.txt
- Source: GeoNames country dump files, one per country: FI (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 70
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (89,301 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: jarvi, joki, lampi, saari, vaara, vuori. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (4). Stripped names: 49. Most removed words: vaara 22, vuori 17, saari 6, joki 3, lampi 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### finnish/river.txt
- Source: GeoNames country dump files, one per country: FI (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 30
- Changes: Name column only, feature code(s) STM (28,545 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: jarvi, joki, lampi, saari, vaara, vuori. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 19. Most removed words: joki 16, vaara 2, saari 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### finnish/town.txt
- Source: GeoNames country dump files, one per country: FI (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 21
- Changes: Name column only. Feature class P rows (29,234 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### french/island.txt
- Source: GeoNames country dump files, one per country: FR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 322 (weighted: yes, count of places with the name)
- Removed by the setting filter: 1
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (380 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: aiguille, col, cours, d'eau, decharge, dent, fleuve, ile, iles, lac, lacs, mont, montagne, montagnes, monts, pic, pointe, puy, riviere, roc, roche, ruisseau, sommet, tete. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (38). Stripped names: 312. Most removed words: ile 283, iles 26, island 2, mont 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### french/lake.txt
- Source: GeoNames country dump files, one per country: FR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 493 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) LK, LKS (552 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: aiguille, col, cours, d'eau, decharge, dent, fleuve, ile, iles, lac, lacs, mont, montagne, montagnes, monts, pic, pointe, puy, riviere, roc, roche, ruisseau, sommet, tete. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (33). Stripped names: 206. Most removed words: lac 184, lacs 16, d'eau 5, roche 2, mont 2. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### french/mountain.txt
- Source: GeoNames country dump files, one per country: FR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 31
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (6,353 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: aiguille, col, cours, d'eau, decharge, dent, fleuve, ile, iles, lac, lacs, mont, montagne, montagnes, monts, pic, pointe, puy, riviere, roc, roche, ruisseau, sommet, tete. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (332). Stripped names: 2,729. Most removed words: pic 730, mont 516, montagne 297, pointe 274, puy 200, tete 189, sommet 167, roc 158. Entries outside Latin script dropped: 2. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### french/river.txt
- Source: GeoNames country dump files, one per country: FR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 2,920 (weighted: yes, count of places with the name)
- Removed by the setting filter: 8
- Changes: Name column only, feature code(s) STM (3,243 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: aiguille, col, cours, d'eau, decharge, dent, fleuve, ile, iles, lac, lacs, mont, montagne, montagnes, monts, pic, pointe, puy, riviere, roc, roche, ruisseau, sommet, tete. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (108). Stripped names: 1,093. Most removed words: ruisseau 1072, riviere 19, roche 2, lacs 1, isle 1, river 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### french/town.txt
- Source: GeoNames country dump files, one per country: FR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 793
- Changes: Name column only. Feature class P rows (81,609 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### georgian/lake.txt
- Source: GeoNames country dump files, one per country: GE (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 72 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) LK, LKS (73 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: mdinare, mta, tba. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 25. Most removed words: tba 13, lake 12. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### georgian/mountain.txt
- Source: GeoNames country dump files, one per country: GE (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,082 (weighted: yes, count of places with the name)
- Removed by the setting filter: 2
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (1,106 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: mdinare, mta, tba. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 233. Most removed words: mta 215, mt 6, mount 4, mountain 3, peak 2, mountains 2, tba 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### georgian/river.txt
- Source: GeoNames country dump files, one per country: GE (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 981 (weighted: yes, count of places with the name)
- Removed by the setting filter: 1
- Changes: Name column only, feature code(s) STM (1,009 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: mdinare, mta, tba. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 4. Most removed words: river 4. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### georgian/town.txt
- Source: GeoNames country dump files, one per country: GE (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 4,935 (weighted: yes, count of places with the name)
- Removed by the setting filter: 7
- Changes: Name column only. Feature class P rows (5,417 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first. Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### german/island.txt
- Source: GeoNames country dump files, one per country: DE (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 311 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (337 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: bach, berg, berge, fluss, gebirge, insel, inseln, see, strom. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (2). Stripped names: 34. Most removed words: insel 26, island 3, inseln 3, islands 2. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### german/lake.txt
- Source: GeoNames country dump files, one per country: DE (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 2,411 (weighted: yes, count of places with the name)
- Removed by the setting filter: 2
- Changes: Name column only, feature code(s) LK, LKS (2,892 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: bach, berg, berge, fluss, gebirge, insel, inseln, see, strom. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (2). Stripped names: 932. Most removed words: see 926, lake 5, berg 1, bach 1. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### german/mountain.txt
- Source: GeoNames country dump files, one per country: DE (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 28
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (27,450 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: bach, berg, berge, fluss, gebirge, insel, inseln, see, strom. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (3). Stripped names: 1,996. Most removed words: berg 1753, berge 240, gebirge 4, strom 1. Entries outside Latin script dropped: 2. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### german/river.txt
- Source: GeoNames country dump files, one per country: DE (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 6
- Changes: Name column only, feature code(s) STM (8,044 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: bach, berg, berge, fluss, gebirge, insel, inseln, see, strom. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (6). Stripped names: 595. Most removed words: bach 571, strom 8, see 4, river 4, lake 4, loch 3, berg 1. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### german/town.txt
- Source: GeoNames country dump files, one per country: DE (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 75
- Changes: Name column only. Feature class P rows (82,548 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### ghanaian/mountain.txt
- Source: GeoNames country dump files, one per country: GH (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 538 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (547 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: none. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 14. Most removed words: hills 7, hill 6, mountains 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### ghanaian/river.txt
- Source: GeoNames country dump files, one per country: GH (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 3,926 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) STM (4,654 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: none. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 8. Most removed words: river 6, stream 2. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### ghanaian/town.txt
- Source: GeoNames country dump files, one per country: GH (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 3
- Changes: Name column only. Feature class P rows (15,997 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### greek/island.txt
- Source: GeoNames country dump files, one per country: GR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,025 (weighted: yes, count of places with the name)
- Removed by the setting filter: 5
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (1,188 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: limni, nisos, oros, potamos. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 27. Most removed words: island 18, islands 5, nisos 2, islets 1, islet 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### greek/lake.txt
- Source: GeoNames country dump files, one per country: GR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 66 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) LK, LKS (66 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: limni, nisos, oros, potamos. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 57. Most removed words: limni 53, lake 4. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### greek/mountain.txt
- Source: GeoNames country dump files, one per country: GR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 2,264 (weighted: yes, count of places with the name)
- Removed by the setting filter: 12
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (2,771 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: limni, nisos, oros, potamos. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (4). Stripped names: 129. Most removed words: oros 94, mount 15, hill 13, limni 2, mountains 2, potamos 1, peak 1, mountain 1. Entries outside Latin script dropped: 3. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### greek/river.txt
- Source: GeoNames country dump files, one per country: GR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 991 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) STM (1,098 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: limni, nisos, oros, potamos. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 204. Most removed words: potamos 199, river 4, stream 1. Entries outside Latin script dropped: 5. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### greek/town.txt
- Source: GeoNames country dump files, one per country: GR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 41
- Changes: Name column only. Feature class P rows (15,558 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 9. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first. Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### hawaiian/island.txt
- Source: GeoNames country dump files, one per country: US admin1 HI (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 155 (weighted: yes, count of places with the name)
- Removed by the setting filter: 1
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (164 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: mauna, mokupuni, puu, wai. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 65. Most removed words: island 61, islands 4. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). A second pass then wrote every apostrophe as the okina (ʻ), so Pu'u and Puʻu are one spelling, and merged the repeats this made.

### hawaiian/lake.txt
- Source: GeoNames country dump files, one per country: US admin1 HI (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 74 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) LK, LKS (74 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: mauna, mokupuni, puu, wai. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 8. Most removed words: lake 8. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). A second pass then wrote every apostrophe as the okina (ʻ), so Pu'u and Puʻu are one spelling, and merged the repeats this made.

### hawaiian/mountain.txt
- Source: GeoNames country dump files, one per country: US admin1 HI (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,100 (weighted: yes, count of places with the name)
- Removed by the setting filter: 4
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (1,251 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: mauna, mokupuni, puu, wai. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (17). Stripped names: 339. Most removed words: puu 173, ridge 105, hill 17, mountain 15, mauna 9, peak 8, hills 7, mount 6. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). A second pass then wrote every apostrophe as the okina (ʻ), so Pu'u and Puʻu are one spelling, and merged the repeats this made.

### hawaiian/river.txt
- Source: GeoNames country dump files, one per country: US admin1 HI (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 533 (weighted: yes, count of places with the name)
- Removed by the setting filter: 1
- Changes: Name column only, feature code(s) STM (570 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: mauna, mokupuni, puu, wai. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 551. Most removed words: stream 533, river 17, branch 5, puu 2, wai 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). A second pass then wrote every apostrophe as the okina (ʻ), so Pu'u and Puʻu are one spelling, and merged the repeats this made.

### hawaiian/town.txt
- Source: GeoNames country dump files, one per country: US admin1 HI (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 634 (weighted: yes, count of places with the name)
- Removed by the setting filter: 4
- Changes: Name column only. Feature class P rows (660 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first. A second pass then wrote every apostrophe as the okina (ʻ), so Pu'u and Puʻu are one spelling, and merged the repeats this made.

### hungarian/lake.txt
- Source: GeoNames country dump files, one per country: HU (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 240 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) LK, LKS (287 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: folyo, hegy, hegyseg, patak, sziget. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (1). Stripped names: 1. Most removed words: hegy 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### hungarian/mountain.txt
- Source: GeoNames country dump files, one per country: HU (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,937 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (2,579 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: folyo, hegy, hegyseg, patak, sziget. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (5). Stripped names: 1,283. Most removed words: hegy 1274, hegyseg 9. Entries outside Latin script dropped: 4. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### hungarian/river.txt
- Source: GeoNames country dump files, one per country: HU (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 502 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) STM (537 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: folyo, hegy, hegyseg, patak, sziget. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 301. Most removed words: patak 301. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### hungarian/town.txt
- Source: GeoNames country dump files, one per country: HU (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 11
- Changes: Name column only. Feature class P rows (16,024 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### icelandic/island.txt
- Source: GeoNames country dump files, one per country: IS (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 289 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (349 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: ey, eyjar, fjall, fljot, jokull, vatn. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 1. Most removed words: island 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### icelandic/lake.txt
- Source: GeoNames country dump files, one per country: IS (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 509 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) LK, LKS (684 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: ey, eyjar, fjall, fljot, jokull, vatn. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 0. Most removed words: none. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### icelandic/mountain.txt
- Source: GeoNames country dump files, one per country: IS (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 2,439 (weighted: yes, count of places with the name)
- Removed by the setting filter: 1
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (3,254 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: ey, eyjar, fjall, fljot, jokull, vatn. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (2). Stripped names: 2. Most removed words: fell 2. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### icelandic/river.txt
- Source: GeoNames country dump files, one per country: IS (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 755 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) STM (1,104 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: ey, eyjar, fjall, fljot, jokull, vatn. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 0. Most removed words: none. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### icelandic/town.txt
- Source: GeoNames country dump files, one per country: IS (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 115 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only. Feature class P rows (117 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### indian/island.txt
- Source: GeoNames country dump files, one per country: IN (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 299 (weighted: yes, count of places with the name)
- Removed by the setting filter: 1
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (311 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: dvip, dweep, giri, jheel, nadi, pahad, pahar, parbat, parvat, shikhar. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 223. Most removed words: island 205, islands 11, islet 4, isles 1, isle 1, islets 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### indian/lake.txt
- Source: GeoNames country dump files, one per country: IN (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 913 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) LK, LKS (985 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: dvip, dweep, giri, jheel, nadi, pahad, pahar, parbat, parvat, shikhar. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 65. Most removed words: lake 64, hill 1, river 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### indian/mountain.txt
- Source: GeoNames country dump files, one per country: IN (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 4
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (14,136 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: dvip, dweep, giri, jheel, nadi, pahad, pahar, parbat, parvat, shikhar. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (1). Stripped names: 2,205. Most removed words: pahar 1621, parbat 317, hill 121, hills 80, peak 31, mount 12, pahad 8, giri 6. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### indian/river.txt
- Source: GeoNames country dump files, one per country: IN (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 12
- Changes: Name column only, feature code(s) STM (15,376 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: dvip, dweep, giri, jheel, nadi, pahad, pahar, parbat, parvat, shikhar. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (4). Stripped names: 7,389. Most removed words: nadi 6205, river 1168, creek 14, giri 2, pahad 1. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### indian/town.txt
- Source: GeoNames country dump files, one per country: IN (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 131
- Changes: Name column only. Feature class P rows (558,033 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 22. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first. Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### indonesian/island.txt
- Source: GeoNames country dump files, one per country: ID (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 4
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (6,396 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: bukit, ci, danau, gunung, kali, pulau, sungai, tasik. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (5). Stripped names: 5,455. Most removed words: pulau 5528, island 31, islands 5, bukit 2, sungai 2, kali 1, lake 1, gunung 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### indonesian/lake.txt
- Source: GeoNames country dump files, one per country: ID (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,486 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) LK, LKS (1,548 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: bukit, ci, danau, gunung, kali, pulau, sungai, tasik. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (1). Stripped names: 480. Most removed words: danau 419, tasik 56, gunung 4, lake 2, ci 2, pulau 1, bukit 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### indonesian/mountain.txt
- Source: GeoNames country dump files, one per country: ID (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 12
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (28,161 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: bukit, ci, danau, gunung, kali, pulau, sungai, tasik. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (5). Stripped names: 10,242. Most removed words: gunung 7954, bukit 2237, peak 16, sungai 16, mountains 8, hill 5, pulau 5, hills 5. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### indonesian/river.txt
- Source: GeoNames country dump files, one per country: ID (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 8
- Changes: Name column only, feature code(s) STM (34,761 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: bukit, ci, danau, gunung, kali, pulau, sungai, tasik. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (19). Stripped names: 15,902. Most removed words: sungai 6400, kali 5906, ci 3529, river 35, gunung 22, tasik 15, pulau 14, bukit 10. Entries outside Latin script dropped: 9. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### indonesian/town.txt
- Source: GeoNames country dump files, one per country: ID (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 69
- Changes: Name column only. Feature class P rows (258,056 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### iranian/island.txt
- Source: GeoNames country dump files, one per country: IR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 102 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (105 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: darya, daryacheh, jazireh, kuh, rud. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 57. Most removed words: jazireh 50, island 6, islets 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### iranian/lake.txt
- Source: GeoNames country dump files, one per country: IR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 85 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) LK, LKS (93 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: darya, daryacheh, jazireh, kuh, rud. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (5). Stripped names: 66. Most removed words: daryacheh 59, lake 7, rud 2. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### iranian/mountain.txt
- Source: GeoNames country dump files, one per country: IR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 29
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (47,811 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: darya, daryacheh, jazireh, kuh, rud. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (37). Stripped names: 44,371. Most removed words: kuh 45022, rud 36, darya 5, hill 5, mountains 3, daryacheh 2, mountain 2, peak 1. Entries outside Latin script dropped: 40. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### iranian/river.txt
- Source: GeoNames country dump files, one per country: IR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 10
- Changes: Name column only, feature code(s) STM (6,764 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: darya, daryacheh, jazireh, kuh, rud. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (1). Stripped names: 943. Most removed words: rud 908, kuh 32, river 7, darya 2. Entries outside Latin script dropped: 15. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### iranian/town.txt
- Source: GeoNames country dump files, one per country: IR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 29
- Changes: Name column only. Feature class P rows (81,836 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 22. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first. Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### irish/island.txt
- Source: GeoNames country dump files, one per country: IE (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 563 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (657 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: abhainn, cnoc, oilean, sliabh. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (1). Stripped names: 384. Most removed words: island 351, islands 30, oilean 2, isles 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### irish/lake.txt
- Source: GeoNames country dump files, one per country: IE (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,417 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) LK, LKS (1,647 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: abhainn, cnoc, oilean, sliabh. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (2). Stripped names: 1,565. Most removed words: lough 1503, lake 54, lakes 7, island 3, mount 2, loch 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### irish/mountain.txt
- Source: GeoNames country dump files, one per country: IE (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,932 (weighted: yes, count of places with the name)
- Removed by the setting filter: 2
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (2,129 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: abhainn, cnoc, oilean, sliabh. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (38). Stripped names: 809. Most removed words: hill 489, mountain 178, cnoc 61, mountains 30, mount 21, hills 10, sliabh 10, island 6. Entries outside Latin script dropped: 2. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### irish/river.txt
- Source: GeoNames country dump files, one per country: IE (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 786 (weighted: yes, count of places with the name)
- Removed by the setting filter: 1
- Changes: Name column only, feature code(s) STM (906 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: abhainn, cnoc, oilean, sliabh. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (2). Stripped names: 879. Most removed words: river 834, brook 22, stream 17, creek 5, lough 3, mountain 2, island 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### irish/town.txt
- Source: GeoNames country dump files, one per country: IE (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 17
- Changes: Name column only. Feature class P rows (12,159 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### israeli/mountain.txt
- Source: GeoNames country dump files, one per country: IL (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 867 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (880 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: ein, har, nahal, nahar, yam. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 417. Most removed words: har 412, mount 4, hills 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### israeli/river.txt
- Source: GeoNames country dump files, one per country: IL (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 63 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) STM (65 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: ein, har, nahal, nahar, yam. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 49. Most removed words: nahal 48, river 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### israeli/town.txt
- Source: GeoNames country dump files, one per country: IL (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,824 (weighted: yes, count of places with the name)
- Removed by the setting filter: 1
- Changes: Name column only. Feature class P rows (1,858 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first. Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### italian/island.txt
- Source: GeoNames country dump files, one per country: IT (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 251 (weighted: yes, count of places with the name)
- Removed by the setting filter: 3
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (290 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: cima, colle, fiume, isola, isole, lago, monte, monti, pizzo, punta, torrente. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (20). Stripped names: 166. Most removed words: isola 151, isole 7, island 3, monte 3, islands 3, isles 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### italian/lake.txt
- Source: GeoNames country dump files, one per country: IT (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 317 (weighted: yes, count of places with the name)
- Removed by the setting filter: 2
- Changes: Name column only, feature code(s) LK, LKS (350 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: cima, colle, fiume, isola, isole, lago, monte, monti, pizzo, punta, torrente. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (24). Stripped names: 271. Most removed words: lago 268, lake 2, monte 1, lakes 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### italian/mountain.txt
- Source: GeoNames country dump files, one per country: IT (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 43
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (6,979 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: cima, colle, fiume, isola, isole, lago, monte, monti, pizzo, punta, torrente. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (276). Stripped names: 4,216. Most removed words: monte 2887, cima 569, punta 467, pizzo 188, colle 73, monti 39, lago 19, mount 2. Entries outside Latin script dropped: 5. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### italian/river.txt
- Source: GeoNames country dump files, one per country: IT (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 2,279 (weighted: yes, count of places with the name)
- Removed by the setting filter: 14
- Changes: Name column only, feature code(s) STM (2,437 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: cima, colle, fiume, isola, isole, lago, monte, monti, pizzo, punta, torrente. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (13). Stripped names: 1,003. Most removed words: torrente 628, fiume 367, monte 4, river 3, lago 1, isola 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### italian/town.txt
- Source: GeoNames country dump files, one per country: IT (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 595
- Changes: Name column only. Feature class P rows (63,051 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 7. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### japanese/island.txt
- Source: GeoNames country dump files, one per country: JP (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,268 (weighted: yes, count of places with the name)
- Removed by the setting filter: 5
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (1,941 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: dake, gawa, jima, kawa, mine, san, shima, yama. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (4). Stripped names: 1,762. Most removed words: shima 948, jima 776, island 31, islands 7, yama 1. Entries outside Latin script dropped: 63. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### japanese/lake.txt
- Source: GeoNames country dump files, one per country: JP (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 152 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) LK, LKS (156 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: dake, gawa, jima, kawa, mine, san, shima, yama. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 6. Most removed words: lake 5, san 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### japanese/mountain.txt
- Source: GeoNames country dump files, one per country: JP (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 3,791 (weighted: yes, count of places with the name)
- Removed by the setting filter: 7
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (5,309 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: dake, gawa, jima, kawa, mine, san, shima, yama. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (11). Stripped names: 4,451. Most removed words: yama 3013, dake 969, san 349, mine 120, mount 2, mountains 1, ridge 1, mountain 1. Entries outside Latin script dropped: 24. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### japanese/river.txt
- Source: GeoNames country dump files, one per country: JP (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 4,682 (weighted: yes, count of places with the name)
- Removed by the setting filter: 2
- Changes: Name column only, feature code(s) STM (5,684 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: dake, gawa, jima, kawa, mine, san, shima, yama. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (5). Stripped names: 5,019. Most removed words: gawa 4723, kawa 283, river 11, creek 2, shima 1. Entries outside Latin script dropped: 19. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### japanese/town.txt
- Source: GeoNames country dump files, one per country: JP (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 3
- Changes: Name column only. Feature class P rows (50,800 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 20. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first. Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### kenyan/island.txt
- Source: GeoNames country dump files, one per country: KE (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 121 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (124 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: kisiwa, mlima, mto, ziwa. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 102. Most removed words: island 98, islands 4. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### kenyan/lake.txt
- Source: GeoNames country dump files, one per country: KE (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 67 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) LK, LKS (68 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: kisiwa, mlima, mto, ziwa. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 38. Most removed words: lake 36, lakes 1, river 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### kenyan/mountain.txt
- Source: GeoNames country dump files, one per country: KE (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 3,904 (weighted: yes, count of places with the name)
- Removed by the setting filter: 6
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (4,099 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: kisiwa, mlima, mto, ziwa. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 365. Most removed words: hill 149, hills 147, ridge 33, peak 16, mount 9, mountains 5, mlima 3, mountain 2. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### kenyan/river.txt
- Source: GeoNames country dump files, one per country: KE (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 2,699 (weighted: yes, count of places with the name)
- Removed by the setting filter: 2
- Changes: Name column only, feature code(s) STM (2,853 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: kisiwa, mlima, mto, ziwa. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 15. Most removed words: stream 7, creek 3, river 3, mto 1, streams 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### kenyan/town.txt
- Source: GeoNames country dump files, one per country: KE (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 6
- Changes: Name column only. Feature class P rows (6,957 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### korean/island.txt
- Source: GeoNames country dump files, one per country: KR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,737 (weighted: yes, count of places with the name)
- Removed by the setting filter: 4
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (2,218 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: bong, do, gang, ho, san. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (4). Stripped names: 687. Most removed words: do 661, island 21, san 3, ho 2, islands 1, islets 1. Entries outside Latin script dropped: 13. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### korean/lake.txt
- Source: GeoNames country dump files, one per country: KR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 58 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) LK, LKS (60 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: bong, do, gang, ho, san. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 14. Most removed words: ho 13, lake 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### korean/mountain.txt
- Source: GeoNames country dump files, one per country: KR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 4,556 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (6,714 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: bong, do, gang, ho, san. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (1). Stripped names: 2,487. Most removed words: san 2110, bong 375, peak 1, hill 1, ho 1. Entries outside Latin script dropped: 10. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### korean/river.txt
- Source: GeoNames country dump files, one per country: KR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,101 (weighted: yes, count of places with the name)
- Removed by the setting filter: 1
- Changes: Name column only, feature code(s) STM (1,255 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: bong, do, gang, ho, san. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (1). Stripped names: 25. Most removed words: gang 22, river 2, san 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### korean/town.txt
- Source: GeoNames country dump files, one per country: KR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 17
- Changes: Name column only. Feature class P rows (62,751 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 68. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first. Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### malaysian/island.txt
- Source: GeoNames country dump files, one per country: MY (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,029 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (1,167 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: bukit, danau, gunung, kali, pulau, sungai, tasik. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (1). Stripped names: 1,141. Most removed words: pulau 1122, islands 9, sungai 8, island 6, islet 3, bukit 2, peak 1, islets 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### malaysian/lake.txt
- Source: GeoNames country dump files, one per country: MY (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 90 (weighted: yes, count of places with the name)
- Removed by the setting filter: 1
- Changes: Name column only, feature code(s) LK, LKS (91 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: bukit, danau, gunung, kali, pulau, sungai, tasik. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 42. Most removed words: tasik 35, sungai 9, lake 4, danau 2, bukit 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### malaysian/mountain.txt
- Source: GeoNames country dump files, one per country: MY (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 3,982 (weighted: yes, count of places with the name)
- Removed by the setting filter: 2
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (5,144 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: bukit, danau, gunung, kali, pulau, sungai, tasik. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (6). Stripped names: 4,461. Most removed words: bukit 4010, gunung 297, mount 106, hill 38, sungai 17, peak 8, pulau 8, tasik 2. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### malaysian/river.txt
- Source: GeoNames country dump files, one per country: MY (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 17
- Changes: Name column only, feature code(s) STM (24,548 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: bukit, danau, gunung, kali, pulau, sungai, tasik. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (50). Stripped names: 23,807. Most removed words: sungai 23791, bukit 48, pulau 33, danau 21, tasik 10, kali 6, gunung 5, river 4. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### malaysian/town.txt
- Source: GeoNames country dump files, one per country: MY (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 10
- Changes: Name column only. Feature class P rows (21,672 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### mexican/island.txt
- Source: GeoNames country dump files, one per country: MX (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 765 (weighted: yes, count of places with the name)
- Removed by the setting filter: 2
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (919 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: arroyo, cerro, cerros, isla, islas, lago, lagos, laguna, lagunas, monte, montes, nevado, pico, rio, rios, sierra, volcan. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (4). Stripped names: 775. Most removed words: isla 738, islas 30, cerro 23, island 3, cerros 3, islands 3, monte 3, laguna 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### mexican/lake.txt
- Source: GeoNames country dump files, one per country: MX (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,037 (weighted: yes, count of places with the name)
- Removed by the setting filter: 4
- Changes: Name column only, feature code(s) LK, LKS (1,301 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: arroyo, cerro, cerros, isla, islas, lago, lagos, laguna, lagunas, monte, montes, nevado, pico, rio, rios, sierra, volcan. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (8). Stripped names: 1,196. Most removed words: laguna 1094, lago 80, lagunas 23, rio 3, monte 3, cerro 2, lake 2, pico 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### mexican/mountain.txt
- Source: GeoNames country dump files, one per country: MX (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 132
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (55,879 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: arroyo, cerro, cerros, isla, islas, lago, lagos, laguna, lagunas, monte, montes, nevado, pico, rio, rios, sierra, volcan. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (213). Stripped names: 42,264. Most removed words: cerro 38688, sierra 2032, cerros 1316, pico 173, monte 111, laguna 111, volcan 42, mountains 10. Entries outside Latin script dropped: 5. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### mexican/river.txt
- Source: GeoNames country dump files, one per country: MX (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 26
- Changes: Name column only, feature code(s) STM (12,511 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: arroyo, cerro, cerros, isla, islas, lago, lagos, laguna, lagunas, monte, montes, nevado, pico, rio, rios, sierra, volcan. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (26). Stripped names: 4,070. Most removed words: arroyo 2476, rio 1537, cerro 36, laguna 15, monte 14, sierra 10, river 7, rios 4. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### mexican/town.txt
- Source: GeoNames country dump files, one per country: MX (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 2,692
- Changes: Name column only. Feature class P rows (307,550 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 37. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### mongolian/lake.txt
- Source: GeoNames country dump files, one per country: MN (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 381 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) LK, LKS (447 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: gol, nuur, uul. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 423. Most removed words: nuur 422, gol 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### mongolian/mountain.txt
- Source: GeoNames country dump files, one per country: MN (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,396 (weighted: yes, count of places with the name)
- Removed by the setting filter: 9
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (1,561 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: gol, nuur, uul. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (1). Stripped names: 575. Most removed words: uul 574, gol 1, nuur 1, mt 1. Entries outside Latin script dropped: 4. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### mongolian/river.txt
- Source: GeoNames country dump files, one per country: MN (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 589 (weighted: yes, count of places with the name)
- Removed by the setting filter: 2
- Changes: Name column only, feature code(s) STM (650 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: gol, nuur, uul. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 496. Most removed words: gol 493, river 2, nuur 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### mongolian/town.txt
- Source: GeoNames country dump files, one per country: MN (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,348 (weighted: yes, count of places with the name)
- Removed by the setting filter: 4
- Changes: Name column only. Feature class P rows (1,541 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first. Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### new-zealander/island.txt
- Source: GeoNames country dump files, one per country: NZ (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,089 (weighted: yes, count of places with the name)
- Removed by the setting filter: 8
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (1,352 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: none. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 976. Most removed words: island 909, islands 83, islets 11, islet 6, isle 3, isles 1, peak 1. Entries outside Latin script dropped: 44. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### new-zealander/lake.txt
- Source: GeoNames country dump files, one per country: NZ (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,009 (weighted: yes, count of places with the name)
- Removed by the setting filter: 8
- Changes: Name column only, feature code(s) LK, LKS (1,156 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: none. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (5). Stripped names: 840. Most removed words: lake 810, lakes 23, loch 5, island 5, creek 2, mount 1. Entries outside Latin script dropped: 8. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### new-zealander/mountain.txt
- Source: GeoNames country dump files, one per country: NZ (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 43
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (11,803 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: none. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (27). Stripped names: 5,135. Most removed words: mount 2247, hill 1220, peak 1017, ridge 305, peaks 120, mountains 87, hills 78, mountain 54. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### new-zealander/river.txt
- Source: GeoNames country dump files, one per country: NZ (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 37
- Changes: Name column only, feature code(s) STM (20,881 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: none. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (41). Stripped names: 19,815. Most removed words: stream 10571, creek 5860, river 3277, branch 375, brook 76, hill 45, mount 26, lake 17. Entries outside Latin script dropped: 42. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### new-zealander/town.txt
- Source: GeoNames country dump files, one per country: NZ (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 2,899 (weighted: yes, count of places with the name)
- Removed by the setting filter: 16
- Changes: Name column only. Feature class P rows (3,043 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### nigerian/island.txt
- Source: GeoNames country dump files, one per country: NG (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 57 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (60 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: dutse, mayo, odo, oke, tudun. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 59. Most removed words: island 57, islands 1, islets 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### nigerian/lake.txt
- Source: GeoNames country dump files, one per country: NG (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 112 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) LK, LKS (114 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: dutse, mayo, odo, oke, tudun. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (1). Stripped names: 111. Most removed words: lake 99, lakes 12. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### nigerian/mountain.txt
- Source: GeoNames country dump files, one per country: NG (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 2,421 (weighted: yes, count of places with the name)
- Removed by the setting filter: 1
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (2,536 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: dutse, mayo, odo, oke, tudun. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 1,642. Most removed words: hill 1239, hills 303, peak 45, dutse 43, ridge 16, peaks 7, tudun 4, oke 4. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### nigerian/river.txt
- Source: GeoNames country dump files, one per country: NG (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 2
- Changes: Name column only, feature code(s) STM (6,004 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: dutse, mayo, odo, oke, tudun. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (9). Stripped names: 4,800. Most removed words: river 4196, mayo 265, creek 237, stream 109, dutse 7, odo 3, oke 1, lake 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### nigerian/town.txt
- Source: GeoNames country dump files, one per country: NG (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 13
- Changes: Name column only. Feature class P rows (61,429 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 3. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### norwegian/island.txt
- Source: GeoNames country dump files, one per country: NO (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 17
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (21,319 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: berg, elv, elva, fjell, sjo, tind, vatn. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 2. Most removed words: island 2. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### norwegian/lake.txt
- Source: GeoNames country dump files, one per country: NO (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 6
- Changes: Name column only, feature code(s) LK, LKS (12,767 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: berg, elv, elva, fjell, sjo, tind, vatn. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 1. Most removed words: lake 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### norwegian/mountain.txt
- Source: GeoNames country dump files, one per country: NO (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 79
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (155,068 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: berg, elv, elva, fjell, sjo, tind, vatn. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (11). Stripped names: 19. Most removed words: fjell 11, berg 6, elv 1, hills 1. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### norwegian/river.txt
- Source: GeoNames country dump files, one per country: NO (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 14
- Changes: Name column only, feature code(s) STM (38,783 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: berg, elv, elva, fjell, sjo, tind, vatn. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (7). Stripped names: 64. Most removed words: elva 60, river 3, fjell 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### norwegian/town.txt
- Source: GeoNames country dump files, one per country: NO (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 8
- Changes: Name column only. Feature class P rows (13,813 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 2. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### pakistani/lake.txt
- Source: GeoNames country dump files, one per country: PK (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 387 (weighted: yes, count of places with the name)
- Removed by the setting filter: 2
- Changes: Name column only, feature code(s) LK, LKS (408 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: darya, koh, nala, nallah. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 18. Most removed words: lake 18. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### pakistani/mountain.txt
- Source: GeoNames country dump files, one per country: PK (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 16
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (10,615 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: darya, koh, nala, nallah. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (37). Stripped names: 1,966. Most removed words: koh 1883, hill 33, hills 18, peak 16, ridge 10, mountains 4, mountain 1, nala 1. Entries outside Latin script dropped: 4. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### pakistani/river.txt
- Source: GeoNames country dump files, one per country: PK (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 4
- Changes: Name column only, feature code(s) STM (6,284 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: darya, koh, nala, nallah. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (2). Stripped names: 1,229. Most removed words: nala 968, river 217, creek 28, branch 7, koh 4, darya 4, hill 2. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### pakistani/town.txt
- Source: GeoNames country dump files, one per country: PK (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 62
- Changes: Name column only. Feature class P rows (150,402 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 10. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first. Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### peruvian/island.txt
- Source: GeoNames country dump files, one per country: PE (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 409 (weighted: yes, count of places with the name)
- Removed by the setting filter: 4
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (448 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: arroyo, cerro, cerros, isla, islas, lago, lagos, laguna, lagunas, monte, montes, nevado, pico, rio, rios, sierra, volcan. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 401. Most removed words: isla 357, islas 40, island 4, cerro 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### peruvian/lake.txt
- Source: GeoNames country dump files, one per country: PE (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 2,753 (weighted: yes, count of places with the name)
- Removed by the setting filter: 4
- Changes: Name column only, feature code(s) LK, LKS (3,801 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: arroyo, cerro, cerros, isla, islas, lago, lagos, laguna, lagunas, monte, montes, nevado, pico, rio, rios, sierra, volcan. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (6). Stripped names: 3,776. Most removed words: laguna 3358, lagunas 339, lago 82, isla 4, island 1, arroyo 1, lagos 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### peruvian/mountain.txt
- Source: GeoNames country dump files, one per country: PE (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 121
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (23,336 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: arroyo, cerro, cerros, isla, islas, lago, lagos, laguna, lagunas, monte, montes, nevado, pico, rio, rios, sierra, volcan. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (31). Stripped names: 22,183. Most removed words: cerro 21159, cerros 720, nevado 280, monte 33, laguna 30, pico 22, rio 10, lagunas 7. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### peruvian/river.txt
- Source: GeoNames country dump files, one per country: PE (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 13
- Changes: Name column only, feature code(s) STM (12,607 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: arroyo, cerro, cerros, isla, islas, lago, lagos, laguna, lagunas, monte, montes, nevado, pico, rio, rios, sierra, volcan. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 3,509. Most removed words: rio 3475, cerro 9, laguna 6, monte 5, isla 3, arroyo 3, river 3, montes 2. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### peruvian/town.txt
- Source: GeoNames country dump files, one per country: PE (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 200
- Changes: Name column only. Feature class P rows (47,493 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### polish/lake.txt
- Source: GeoNames country dump files, one per country: PL (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 958 (weighted: yes, count of places with the name)
- Removed by the setting filter: 1
- Changes: Name column only, feature code(s) LK, LKS (1,063 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: gora, gory, jezioro, potok, rzeka, wyspa, wyspy. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 907. Most removed words: jezioro 906, lake 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### polish/mountain.txt
- Source: GeoNames country dump files, one per country: PL (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,178 (weighted: yes, count of places with the name)
- Removed by the setting filter: 1
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (1,327 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: gora, gory, jezioro, potok, rzeka, wyspa, wyspy. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (1). Stripped names: 221. Most removed words: gora 192, gory 33, peak 1. Entries outside Latin script dropped: 7. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### polish/river.txt
- Source: GeoNames country dump files, one per country: PL (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 952 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) STM (1,094 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: gora, gory, jezioro, potok, rzeka, wyspa, wyspy. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 9. Most removed words: potok 8, river 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### polish/town.txt
- Source: GeoNames country dump files, one per country: PL (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 22
- Changes: Name column only. Feature class P rows (47,935 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 3. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### portuguese/island.txt
- Source: GeoNames country dump files, one per country: PT (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 115 (weighted: yes, count of places with the name)
- Removed by the setting filter: 4
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (126 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: ilha, ilhas, lago, lagoa, lagoas, monte, morro, pico, ribeirao, rio, rios, serra. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (4). Stripped names: 36. Most removed words: ilha 30, ilhas 3, island 2, islands 1, monte 1, pico 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### portuguese/lake.txt
- Source: GeoNames country dump files, one per country: PT (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 105 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) LK, LKS (133 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: ilha, ilhas, lago, lagoa, lagoas, monte, morro, pico, ribeirao, rio, rios, serra. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (22). Stripped names: 122. Most removed words: lagoa 118, lagoas 3, lago 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### portuguese/mountain.txt
- Source: GeoNames country dump files, one per country: PT (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,422 (weighted: yes, count of places with the name)
- Removed by the setting filter: 6
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (1,671 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: ilha, ilhas, lago, lagoa, lagoas, monte, morro, pico, ribeirao, rio, rios, serra. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (60). Stripped names: 620. Most removed words: serra 388, monte 123, pico 108, morro 6, lagoa 2, rio 1, lagoas 1. Entries outside Latin script dropped: 2. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### portuguese/river.txt
- Source: GeoNames country dump files, one per country: PT (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 3,295 (weighted: yes, count of places with the name)
- Removed by the setting filter: 15
- Changes: Name column only, feature code(s) STM (3,792 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: ilha, ilhas, lago, lagoa, lagoas, monte, morro, pico, ribeirao, rio, rios, serra. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (15). Stripped names: 374. Most removed words: rio 304, monte 41, serra 11, lagoa 8, ribeirao 7, river 2, rios 1, pico 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### portuguese/town.txt
- Source: GeoNames country dump files, one per country: PT (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 104
- Changes: Name column only. Feature class P rows (16,615 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### quebecois/island.txt
- Source: GeoNames country dump files, one per country: CA admin1 10 (Quebec) (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 2,586 (weighted: yes, count of places with the name)
- Removed by the setting filter: 12
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (3,517 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: aiguille, col, cours, d'eau, decharge, dent, fleuve, ile, iles, lac, lacs, mont, montagne, montagnes, monts, pic, pointe, puy, riviere, roc, roche, ruisseau, sommet, tete. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (475). Stripped names: 3,013. Most removed words: ile 2683, iles 295, island 13, roche 13, pointe 10, lac 5, tete 4, branches 3. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### quebecois/lake.txt
- Source: GeoNames country dump files, one per country: CA admin1 10 (Quebec) (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 196
- Changes: Name column only, feature code(s) LK, LKS (53,538 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: aiguille, col, cours, d'eau, decharge, dent, fleuve, ile, iles, lac, lacs, mont, montagne, montagnes, monts, pic, pointe, puy, riviere, roc, roche, ruisseau, sommet, tete. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (3,725). Stripped names: 53,291. Most removed words: lac 52647, lacs 631, iles 118, montagne 79, tete 58, roche 54, pic 38, pointe 34. Entries outside Latin script dropped: 18. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### quebecois/mountain.txt
- Source: GeoNames country dump files, one per country: CA admin1 10 (Quebec) (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,449 (weighted: yes, count of places with the name)
- Removed by the setting filter: 7
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (1,687 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: aiguille, col, cours, d'eau, decharge, dent, fleuve, ile, iles, lac, lacs, mont, montagne, montagnes, monts, pic, pointe, puy, riviere, roc, roche, ruisseau, sommet, tete. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (78). Stripped names: 868. Most removed words: mont 516, montagne 269, monts 31, lac 23, pic 20, montagnes 8, hill 6, roche 5. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### quebecois/river.txt
- Source: GeoNames country dump files, one per country: CA admin1 10 (Quebec) (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 61
- Changes: Name column only, feature code(s) STM (13,668 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: aiguille, col, cours, d'eau, decharge, dent, fleuve, ile, iles, lac, lacs, mont, montagne, montagnes, monts, pic, pointe, puy, riviere, roc, roche, ruisseau, sommet, tete. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (650). Stripped names: 12,211. Most removed words: ruisseau 7358, riviere 2490, cours 1904, d'eau 1904, decharge 426, lac 143, pointe 14, iles 14. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### quebecois/town.txt
- Source: GeoNames country dump files, one per country: CA admin1 10 (Quebec) (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 2,544 (weighted: yes, count of places with the name)
- Removed by the setting filter: 30
- Changes: Name column only. Feature class P rows (2,735 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### romanian/island.txt
- Source: GeoNames country dump files, one per country: RO (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 80 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (85 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: insula, lac, lacul, munte, muntele, munti, raul. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 20. Most removed words: insula 19, island 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### romanian/lake.txt
- Source: GeoNames country dump files, one per country: RO (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 343 (weighted: yes, count of places with the name)
- Removed by the setting filter: 1
- Changes: Name column only, feature code(s) LK, LKS (356 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: insula, lac, lacul, munte, muntele, munti, raul. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (1). Stripped names: 286. Most removed words: lacul 264, lake 21, lac 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### romanian/mountain.txt
- Source: GeoNames country dump files, one per country: RO (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 9
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (8,396 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: insula, lac, lacul, munte, muntele, munti, raul. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (2). Stripped names: 143. Most removed words: muntele 134, lacul 6, mountains 1, lac 1, munte 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### romanian/river.txt
- Source: GeoNames country dump files, one per country: RO (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 3,413 (weighted: yes, count of places with the name)
- Removed by the setting filter: 11
- Changes: Name column only, feature code(s) STM (3,850 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: insula, lac, lacul, munte, muntele, munti, raul. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 14. Most removed words: raul 11, lacul 2, river 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### romanian/town.txt
- Source: GeoNames country dump files, one per country: RO (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 50
- Changes: Name column only. Feature class P rows (18,247 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### russian/island.txt
- Source: GeoNames country dump files, one per country: RU (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 4,602 (weighted: yes, count of places with the name)
- Removed by the setting filter: 5
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (5,653 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: gora, gory, hrebet, khrebet, ostrov, ozero, pereval, pik, rechka, reka, ruchei, ruchey, sopka. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 5,034. Most removed words: ostrov 5010, island 23, islands 5, gora 2, ozero 1, ridge 1. Entries outside Latin script dropped: 5. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### russian/lake.txt
- Source: GeoNames country dump files, one per country: RU (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 13
- Changes: Name column only, feature code(s) LK, LKS (20,787 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: gora, gory, hrebet, khrebet, ostrov, ozero, pereval, pik, rechka, reka, ruchei, ruchey, sopka. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (4). Stripped names: 19,453. Most removed words: ozero 19489, lake 24, ostrov 4, pereval 4, gory 1, lakes 1, reka 1. Entries outside Latin script dropped: 121. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### russian/mountain.txt
- Source: GeoNames country dump files, one per country: RU (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 18
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (22,563 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: gora, gory, hrebet, khrebet, ostrov, ozero, pereval, pik, rechka, reka, ruchei, ruchey, sopka. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (57). Stripped names: 21,739. Most removed words: gora 19233, khrebet 1852, sopka 562, gory 321, pik 63, pereval 15, mountain 8, mt 7. Entries outside Latin script dropped: 25. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### russian/river.txt
- Source: GeoNames country dump files, one per country: RU (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 102
- Changes: Name column only, feature code(s) STM (78,620 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: gora, gory, hrebet, khrebet, ostrov, ozero, pereval, pik, rechka, reka, ruchei, ruchey, sopka. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (27). Stripped names: 560. Most removed words: rechka 268, ruchey 238, reka 23, river 11, stream 5, pereval 5, pik 4, ozero 3. Entries outside Latin script dropped: 433. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### russian/town.txt
- Source: GeoNames country dump files, one per country: RU (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 192
- Changes: Name column only. Feature class P rows (203,264 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 276. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first. Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### scottish/island.txt
- Source: GeoNames country dump files, one per country: GB admin1 SCT (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,718 (weighted: yes, count of places with the name)
- Removed by the setting filter: 1
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (2,479 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: abhainn, beinn, carn, creag, eilean, meall, sgurr, stob. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (442). Stripped names: 1,419. Most removed words: eilean 1028, island 247, isle 63, islands 20, hill 18, meall 14, beinn 9, loch 9. Entries outside Latin script dropped: 2. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### scottish/lake.txt
- Source: GeoNames country dump files, one per country: GB admin1 SCT (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 680 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) LK, LKS (896 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: abhainn, beinn, carn, creag, eilean, meall, sgurr, stob. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (163). Stripped names: 789. Most removed words: loch 783, beinn 5, lake 3, carn 2, eilean 1, creag 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### scottish/mountain.txt
- Source: GeoNames country dump files, one per country: GB admin1 SCT (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 6
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (11,055 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: abhainn, beinn, carn, creag, eilean, meall, sgurr, stob. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (1,428). Stripped names: 5,662. Most removed words: hill 2170, meall 846, beinn 779, carn 621, creag 610, sgurr 220, loch 200, stob 137. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### scottish/river.txt
- Source: GeoNames country dump files, one per country: GB admin1 SCT (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 938 (weighted: yes, count of places with the name)
- Removed by the setting filter: 2
- Changes: Name column only, feature code(s) STM (999 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: abhainn, beinn, carn, creag, eilean, meall, sgurr, stob. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (7). Stripped names: 259. Most removed words: river 233, abhainn 21, loch 5, beinn 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### scottish/town.txt
- Source: GeoNames country dump files, one per country: GB admin1 SCT (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 12
- Changes: Name column only. Feature class P rows (6,667 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### serbian/lake.txt
- Source: GeoNames country dump files, one per country: RS (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 43 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) LK, LKS (46 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: jezero, otok, planina, potok, reka, rijeka, vrh. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (2). Stripped names: 31. Most removed words: jezero 31. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### serbian/mountain.txt
- Source: GeoNames country dump files, one per country: RS (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 3,747 (weighted: yes, count of places with the name)
- Removed by the setting filter: 2
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (5,218 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: jezero, otok, planina, potok, reka, rijeka, vrh. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (9). Stripped names: 308. Most removed words: vrh 263, planina 43, jezero 1, mountain 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### serbian/river.txt
- Source: GeoNames country dump files, one per country: RS (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,617 (weighted: yes, count of places with the name)
- Removed by the setting filter: 1
- Changes: Name column only, feature code(s) STM (1,899 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: jezero, otok, planina, potok, reka, rijeka, vrh. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (12). Stripped names: 1,015. Most removed words: reka 644, potok 365, rijeka 5, jezero 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### serbian/town.txt
- Source: GeoNames country dump files, one per country: RS (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 19
- Changes: Name column only. Feature class P rows (9,514 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### south-african/island.txt
- Source: GeoNames country dump files, one per country: ZA (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 82 (weighted: yes, count of places with the name)
- Removed by the setting filter: 1
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (100 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: beek, berg, eiland, eilanden, meer, meren, rivier. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (1). Stripped names: 49. Most removed words: island 39, eiland 6, islands 4. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### south-african/lake.txt
- Source: GeoNames country dump files, one per country: ZA (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 181 (weighted: yes, count of places with the name)
- Removed by the setting filter: 9
- Changes: Name column only, feature code(s) LK, LKS (209 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: beek, berg, eiland, eilanden, meer, meren, rivier. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 14. Most removed words: lake 13, lakes 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### south-african/mountain.txt
- Source: GeoNames country dump files, one per country: ZA (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 10
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (14,550 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: beek, berg, eiland, eilanden, meer, meren, rivier. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (3). Stripped names: 868. Most removed words: hill 355, berg 174, mount 105, peak 93, ridge 61, mountain 31, hills 22, mountains 15. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### south-african/river.txt
- Source: GeoNames country dump files, one per country: ZA (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 3,638 (weighted: yes, count of places with the name)
- Removed by the setting filter: 2
- Changes: Name column only, feature code(s) STM (4,488 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: beek, berg, eiland, eilanden, meer, meren, rivier. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (1). Stripped names: 170. Most removed words: river 125, creek 17, stream 16, rivier 8, berg 2, peak 1, brook 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### south-african/town.txt
- Source: GeoNames country dump files, one per country: ZA (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 24
- Changes: Name column only. Feature class P rows (13,529 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### spanish/island.txt
- Source: GeoNames country dump files, one per country: ES (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 271 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (281 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: arroyo, cerro, cerros, isla, islas, lago, lagos, laguna, lagunas, monte, montes, nevado, pico, rio, rios, sierra, volcan. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (2). Stripped names: 108. Most removed words: isla 95, islas 8, islands 3, island 2, monte 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### spanish/lake.txt
- Source: GeoNames country dump files, one per country: ES (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 138 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) LK, LKS (147 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: arroyo, cerro, cerros, isla, islas, lago, lagos, laguna, lagunas, monte, montes, nevado, pico, rio, rios, sierra, volcan. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (3). Stripped names: 99. Most removed words: laguna 73, lago 20, lagunas 5, rio 2, lakes 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### spanish/mountain.txt
- Source: GeoNames country dump files, one per country: ES (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 4,022 (weighted: yes, count of places with the name)
- Removed by the setting filter: 13
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (4,497 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: arroyo, cerro, cerros, isla, islas, lago, lagos, laguna, lagunas, monte, montes, nevado, pico, rio, rios, sierra, volcan. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (15). Stripped names: 1,698. Most removed words: sierra 980, cerro 308, pico 211, monte 160, montes 33, cerros 8, rio 1, lagos 1. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### spanish/river.txt
- Source: GeoNames country dump files, one per country: ES (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 3,096 (weighted: yes, count of places with the name)
- Removed by the setting filter: 19
- Changes: Name column only, feature code(s) STM (3,753 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: arroyo, cerro, cerros, isla, islas, lago, lagos, laguna, lagunas, monte, montes, nevado, pico, rio, rios, sierra, volcan. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (16). Stripped names: 3,159. Most removed words: arroyo 1671, rio 1489, monte 3, sierra 2, lagunas 1, pico 1, montes 1, laguna 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### spanish/town.txt
- Source: GeoNames country dump files, one per country: ES (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 240
- Changes: Name column only. Feature class P rows (30,916 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 2. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### swedish/island.txt
- Source: GeoNames country dump files, one per country: SE (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 4,466 (weighted: yes, count of places with the name)
- Removed by the setting filter: 20
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (6,052 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: alv, berg, fjall, sjo. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 0. Most removed words: none. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### swedish/lake.txt
- Source: GeoNames country dump files, one per country: SE (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 17
- Changes: Name column only, feature code(s) LK, LKS (10,969 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: alv, berg, fjall, sjo. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 5. Most removed words: lake 3, sjo 2. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### swedish/mountain.txt
- Source: GeoNames country dump files, one per country: SE (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 4
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (7,576 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: alv, berg, fjall, sjo. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 0. Most removed words: none. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### swedish/river.txt
- Source: GeoNames country dump files, one per country: SE (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 2,406 (weighted: yes, count of places with the name)
- Removed by the setting filter: 3
- Changes: Name column only, feature code(s) STM (2,801 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: alv, berg, fjall, sjo. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 3. Most removed words: alv 2, river 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### swedish/town.txt
- Source: GeoNames country dump files, one per country: SE (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 23
- Changes: Name column only. Feature class P rows (28,471 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### swiss/lake.txt
- Source: GeoNames country dump files, one per country: CH (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 955 (weighted: yes, count of places with the name)
- Removed by the setting filter: 2
- Changes: Name column only, feature code(s) LK, LKS (1,138 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: aiguille, bach, berg, berge, cima, col, colle, cours, d'eau, decharge, dent, fiume, fleuve, fluss, gebirge, ile, iles, insel, inseln, isola, isole, lac, lacs, lago, mont, montagne, montagnes, monte, monti, monts, pic, pizzo, pointe, punta, puy, riviere, roc, roche, ruisseau, see, sommet, strom, tete, torrente. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (29). Stripped names: 224. Most removed words: lac 100, lago 87, see 30, lake 4, lacs 3, mont 2. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### swiss/mountain.txt
- Source: GeoNames country dump files, one per country: CH (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 12
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (8,538 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: aiguille, bach, berg, berge, cima, col, colle, cours, d'eau, decharge, dent, fiume, fleuve, fluss, gebirge, ile, iles, insel, inseln, isola, isole, lac, lacs, lago, mont, montagne, montagnes, monte, monti, monts, pic, pizzo, pointe, punta, puy, riviere, roc, roche, ruisseau, see, sommet, strom, tete, torrente. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (108). Stripped names: 819. Most removed words: pizzo 210, cima 132, pointe 127, mont 88, tete 69, dent 46, monte 42, punta 32. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### swiss/river.txt
- Source: GeoNames country dump files, one per country: CH (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 174 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) STM (178 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: aiguille, bach, berg, berge, cima, col, colle, cours, d'eau, decharge, dent, fiume, fleuve, fluss, gebirge, ile, iles, insel, inseln, isola, isole, lac, lacs, lago, mont, montagne, montagnes, monte, monti, monts, pic, pizzo, pointe, punta, puy, riviere, roc, roche, ruisseau, see, sommet, strom, tete, torrente. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 8. Most removed words: bach 6, fiume 2. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### swiss/town.txt
- Source: GeoNames country dump files, one per country: CH (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 24
- Changes: Name column only. Feature class P rows (13,201 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### tanzanian/island.txt
- Source: GeoNames country dump files, one per country: TZ (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 304 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (311 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: kisiwa, mlima, mto, ziwa. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 268. Most removed words: island 236, kisiwa 13, islands 13, islet 4, islets 2. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### tanzanian/lake.txt
- Source: GeoNames country dump files, one per country: TZ (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 86 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) LK, LKS (86 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: kisiwa, mlima, mto, ziwa. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 84. Most removed words: lake 84. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### tanzanian/mountain.txt
- Source: GeoNames country dump files, one per country: TZ (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 2,359 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (2,453 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: kisiwa, mlima, mto, ziwa. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (1). Stripped names: 328. Most removed words: hill 185, hills 88, mountains 33, mountain 10, ridge 9, mlima 2, peak 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### tanzanian/river.txt
- Source: GeoNames country dump files, one per country: TZ (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,941 (weighted: yes, count of places with the name)
- Removed by the setting filter: 2
- Changes: Name column only, feature code(s) STM (2,050 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: kisiwa, mlima, mto, ziwa. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (2). Stripped names: 524. Most removed words: river 501, mto 20, stream 2, creek 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### tanzanian/town.txt
- Source: GeoNames country dump files, one per country: TZ (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 2
- Changes: Name column only. Feature class P rows (7,758 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### thai/island.txt
- Source: GeoNames country dump files, one per country: TH (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 768 (weighted: yes, count of places with the name)
- Removed by the setting filter: 1
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (1,076 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: bueng, doi, huai, khao, khlong, ko, nam, phu, thale. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (4). Stripped names: 1,060. Most removed words: ko 1065, khao 21, nam 4, thale 3, huai 3, phu 2, khlong 2, island 2. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### thai/mountain.txt
- Source: GeoNames country dump files, one per country: TH (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 33
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (11,936 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: bueng, doi, huai, khao, khlong, ko, nam, phu, thale. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (72). Stripped names: 11,118. Most removed words: khao 6843, doi 2836, phu 1687, huai 423, nam 300, ko 96, khlong 76, thale 7. Entries outside Latin script dropped: 4. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### thai/river.txt
- Source: GeoNames country dump files, one per country: TH (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 24
- Changes: Name column only, feature code(s) STM (9,434 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: bueng, doi, huai, khao, khlong, ko, nam, phu, thale. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (39). Stripped names: 9,011. Most removed words: huai 4971, khlong 3152, nam 1317, khao 104, ko 87, phu 36, bueng 9, thale 5. Entries outside Latin script dropped: 12. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### thai/town.txt
- Source: GeoNames country dump files, one per country: TH (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 130
- Changes: Name column only. Feature class P rows (87,255 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 10. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first. Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### turkish/island.txt
- Source: GeoNames country dump files, one per country: TR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 311 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (382 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: adasi, cay, cayi, dag, dagi, daglari, dere, gol, golu, irmagi, irmak, nehir, nehri, tepe. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 10. Most removed words: island 5, adasi 2, islet 1, golu 1, islands 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### turkish/lake.txt
- Source: GeoNames country dump files, one per country: TR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 238 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) LK, LKS (283 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: adasi, cay, cayi, dag, dagi, daglari, dere, gol, golu, irmagi, irmak, nehir, nehri, tepe. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 250. Most removed words: golu 195, gol 51, lake 4. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### turkish/mountain.txt
- Source: GeoNames country dump files, one per country: TR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 5
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (12,920 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: adasi, cay, cayi, dag, dagi, daglari, dere, gol, golu, irmagi, irmak, nehir, nehri, tepe. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (5). Stripped names: 2,432. Most removed words: tepe 2037, dag 333, gol 18, mountains 11, mount 10, dagi 8, hill 6, mountain 5. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### turkish/river.txt
- Source: GeoNames country dump files, one per country: TR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 4,650 (weighted: yes, count of places with the name)
- Removed by the setting filter: 1
- Changes: Name column only, feature code(s) STM (6,287 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: adasi, cay, cayi, dag, dagi, daglari, dere, gol, golu, irmagi, irmak, nehir, nehri, tepe. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (4). Stripped names: 1,401. Most removed words: dere 1183, cay 169, nehri 17, river 16, gol 5, irmak 4, cayi 3, dag 3. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### turkish/town.txt
- Source: GeoNames country dump files, one per country: TR (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 5
- Changes: Name column only. Feature class P rows (55,079 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### ukrainian/island.txt
- Source: GeoNames country dump files, one per country: UA (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 96 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (99 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: hora, ostriv, ozero, pik, richka. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 78. Most removed words: ostriv 76, island 2. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### ukrainian/lake.txt
- Source: GeoNames country dump files, one per country: UA (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 246 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) LK, LKS (275 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: hora, ostriv, ozero, pik, richka. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 264. Most removed words: ozero 262, lake 2. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### ukrainian/mountain.txt
- Source: GeoNames country dump files, one per country: UA (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 514 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (537 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: hora, ostriv, ozero, pik, richka. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 281. Most removed words: hora 277, hill 4, mount 2, hills 1, mountain 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### ukrainian/river.txt
- Source: GeoNames country dump files, one per country: UA (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,407 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) STM (1,605 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: hora, ostriv, ozero, pik, richka. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (2). Stripped names: 57. Most removed words: river 52, richka 2, stream 2, ostriv 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash). Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### ukrainian/town.txt
- Source: GeoNames country dump files, one per country: UA (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 24
- Changes: Name column only. Feature class P rows (33,745 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 3. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first. Romanization: the name column is already Latin for most rows. Where GeoNames gives a non-Latin name it is dropped, and the romanization kept is the one GeoNames uses (no system is applied by us).

### vietnamese/island.txt
- Source: GeoNames country dump files, one per country: VN (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 460 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (500 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: dao, ho, nui, song. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 13. Most removed words: island 6, nui 3, ho 2, dao 2. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### vietnamese/lake.txt
- Source: GeoNames country dump files, one per country: VN (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 245 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) LK, LKS (250 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: dao, ho, nui, song. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (1). Stripped names: 211. Most removed words: ho 209, song 5, nui 3, lake 3. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### vietnamese/mountain.txt
- Source: GeoNames country dump files, one per country: VN (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 4,085 (weighted: yes, count of places with the name)
- Removed by the setting filter: 14
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (4,393 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: dao, ho, nui, song. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (9). Stripped names: 2,151. Most removed words: nui 2121, ho 39, song 11, dao 5, hill 2, mountains 1, mountain 1. Entries outside Latin script dropped: 3. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### vietnamese/river.txt
- Source: GeoNames country dump files, one per country: VN (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 4,035 (weighted: yes, count of places with the name)
- Removed by the setting filter: 15
- Changes: Name column only, feature code(s) STM (4,310 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: dao, ho, nui, song. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 804. Most removed words: song 715, ho 85, nui 5, dao 4, river 2. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### vietnamese/town.txt
- Source: GeoNames country dump files, one per country: VN (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with the name)
- Removed by the setting filter: 94
- Changes: Name column only. Feature class P rows (41,977 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 1. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

### welsh/island.txt
- Source: GeoNames country dump files, one per country: GB admin1 WLS (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 94 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) ISL, ISLS, ISLET (97 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: afon, allt, bryn, carn, cefn, crug, drum, foel, garn, llyn, moel, mynydd, nant, pen, ynys. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (1). Stripped names: 61. Most removed words: ynys 34, island 21, mynydd 2, islands 1, isle 1, pen 1, hill 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### welsh/mountain.txt
- Source: GeoNames country dump files, one per country: GB admin1 WLS (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1,947 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) MT, MTS, PK, PKS, HLL, HLLS, RDGE (2,470 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: afon, allt, bryn, carn, cefn, crug, drum, foel, garn, llyn, moel, mynydd, nant, pen, ynys. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (222). Stripped names: 1,416. Most removed words: pen 349, hill 203, mynydd 192, moel 153, cefn 128, bryn 123, foel 122, allt 79. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### welsh/river.txt
- Source: GeoNames country dump files, one per country: GB admin1 WLS (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 107 (weighted: yes, count of places with the name)
- Removed by the setting filter: 0
- Changes: Name column only, feature code(s) STM (113 rows read). Each name first cut at the first "/" or ",". Generic feature words removed as separate words, ignoring case and accents: branch, branches, brook, brooks, creek, creeks, fell, fells, hill, hills, island, islands, isle, isles, islet, islets, lake, lakes, loch, lough, mount, mountain, mountains, mounts, mt, mts, peak, peaks, ridge, ridges, river, rivers, stream, streams. Plus the words for this culture: afon, allt, bryn, carn, cefn, crug, drum, foel, garn, llyn, moel, mynydd, nant, pen, ynys. Connecting words (of, de, del, di, da, do, du, des, la, le, les, el, los, las, und, e, ye, y, yr) are removed from the two ends of a name only when a feature word was removed next to them. A name that then starts lower case is dropped as a fragment. Names left empty are dropped (0). Stripped names: 99. Most removed words: afon 61, river 33, brook 4, nant 1. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of rows with that name. The 5000 cut is by that count, with ties broken by a stable SHA-1 hash (a stable hash).

### welsh/town.txt
- Source: GeoNames country dump files, one per country: GB admin1 WLS (https://download.geonames.org/export/dump/<CC>.zip)
- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (GeoNames terms: https://www.geonames.org/, readme: https://download.geonames.org/export/dump/readme.txt, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 3,405 (weighted: yes, count of places with the name)
- Removed by the setting filter: 6
- Changes: Name column only. Feature class P rows (3,796 rows read). Each name first cut at the first "/" or "," ("Kiruna/Giron" -> "Kiruna"). Rows sorted by population (column 15) highest first, ties by SHA-1 of the geonameid, then passed to the cleaning step with count weights (one per source row) and the source ranking. Feature words are not stripped from towns, because San, Rio, Monte and similar are part of town names. The cleaning step removes digits, brackets and footnote marks and normalises dashes and apostrophes. Entries outside Latin script dropped: 0. Repeats ignoring case are counted. The weight is the number of P rows with that name. The 5000 cut is by that count, and ties keep the more populous names first.

## Historical names: GeoNames and Wikidata

The `historic` files hold names of things that once existed: abandoned and
destroyed settlements, former regions and states, ancient cities, old
currencies, obsolete units, titles of rank and office, and trading companies
dissolved before 1950.

The settlement and region files use the GeoNames country dump files (CC BY
4.0, attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0") for the 60
countries in the place-name section. The other files, and part of the region
file, come from Wikidata (CC0). Each entry names the feature codes or the
Wikidata classes it used.

### historic/ancient-city.txt
- Source: Wikidata Query Service, items that are instance of ancient city (Q15661340) or a subclass, English labels
- Licence: CC0, https://creativecommons.org/publicdomain/zero/1.0/ (attribution: none required)
- Fetched: 2026-11-08
- Entries: 4,580 (weighted: no)
- Removed by the setting filter: 38
- Changes: Stripped parentheses and the prefixes or suffixes "ancient city of", "ruins of", "ancient", "ruins", "archaeological site". Dropped labels that still hold a descriptive word (ancient, ruins, archaeological, site, remains, city, town, village, settlement, temple, necropolis, tell, tumulus, fortress, cemetery, district, region). The cleaning step dropped 36 non-Latin labels. Five duplicate labels were merged (different places with one label, not counted). A second pass then removed descriptive labels that start in lower case ("oppidum of Gergovie", "poblat ibèric de la Pleta", "history of Ajmer"), keeping real lower-case articles (al-, la).

### historic/company.txt
- Source: Wikidata Query Service, items that are instance of company, business, chartered company, trading company, public company or similar, with a dissolution date (P576) before 1950, English labels (two queries, comp and comp2)
- Licence: CC0, https://creativecommons.org/publicdomain/zero/1.0/ (attribution: none required)
- Fetched: 2026-11-08
- Entries: 59 (weighted: no, each entry is one company)
- Removed by the setting filter: 0
- Changes: Removed parentheses. Kept labels that hold a company word (company, compagnie, companhia, and so on) and a trade word (India, Trading, Navigation, Fur, Levant, and so on). Dropped labels about factories, mines, railways, banks, utilities, oil and present-day brands. Dropped a few leftovers by hand-written patterns. The cleaning step dropped 3 non-Latin names. Active firms such as the Hudson's Bay Company were not in the data because they have no dissolution date. A second pass then removed Swedish Match Company Ltd, a present-day brand.

### historic/currency.txt
- Source: Wikidata Query Service, items that are instance of historical currency (Q3434430) or currency (Q8142) with an end time (P582), English labels
- Licence: CC0, https://creativecommons.org/publicdomain/zero/1.0/ (attribution: none required)
- Fetched: 2026-11-08
- Entries: 138 (weighted: yes, count of currency items that use the unit)
- Removed by the setting filter: 3
- Changes: Removed parentheses. Skipped labels with digits or the words currency, coin, money, unit, system, standard, gram, of, note. Kept only the last word of the label (the unit, so "Venetian lira" becomes Lira). Passed one unit per currency item with count weights (one per source row). A second pass then removed twelve label fragments that are not currency units: AM-Lira, Account, Asia, Bon, Constante, Corriente, Nacional, Novo, Points, Scots, Type, XRE.

### historic/region.txt
- Source: GeoNames dump files as above (feature codes RGNH, ADMH, ADM1H to ADM5H, PCLH) plus Wikidata Query Service, https://query.wikidata.org/sparql, items that are instance of historical country (Q3024240) or former administrative territorial entity (Q19953632) with English labels
- Licence: GeoNames CC BY 4.0 (attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0"). Wikidata CC0, https://creativecommons.org/publicdomain/zero/1.0/
- Fetched: 2026-11-08
- Entries: 4,980 (weighted: yes, count of GeoNames rows and Wikidata items with that name)
- Removed by the setting filter: 60
- Changes: Joined the GeoNames names and the Wikidata labels, one row each. Dropped labels that hold generic administrative words (saviet, raion, rayon, volost, mura, gun, machi, cho, electoral, district, municipality, county, parish, restoration, commune, war, union, people, gemeente, census area, village, and the bare words Central, North, Or). The cleaning step then dropped 126 non-Latin names, merged 488 repeats and kept the 5,000 highest counts. The list is mostly Portuguese, French and Japanese old local units plus the Wikidata states. A second pass then turned "arrondissement of X" into X and removed other entries that start with a lower-case descriptor ("taifa of Lorca", "feudal Japan" and similar).

### historic/settlement.txt

- Licence: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ (attribution: "GeoNames, https://www.geonames.org/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of places with that name)
- Removed by the setting filter: 135
- Changes: Read the name column (field 2) of rows whose feature code is PPLH, PPLQ or PPLW (47,109 rows). Passed one name per row to the cleaning step with count weights (one per source row). The cleaning step dropped 47 non-Latin names, merged 7,880 repeats and kept the 5,000 highest counts.

### historic/title.txt
- Source: Wikidata Query Service, subclasses and instances of noble title (Q355567), title of honor (Q3320743) and historical position (Q114962596), English labels (two queries, title and title2)
- Licence: CC0, https://creativecommons.org/publicdomain/zero/1.0/ (attribution: none required)
- Fetched: 2026-11-08
- Entries: 1,128 (weighted: no)
- Removed by the setting filter: 1
- Changes: Kept only single-word labels (one hyphen allowed) of three letters or more that are not all capitals. This drops orders, decorations, honorary degrees and "X of Y" holders. Capitalised the first letter. A second pass then removed Nazi-era titles (Führerstadt, Reichsführer-SS, Wehrwirtschaftsführer).

### historic/unit.txt
- Source: Wikidata Query Service, items that are instance of obsolete unit of measurement (Q28607529) or obsolete unit of length (Q2534228) or a subclass, English labels
- Licence: CC0, https://creativecommons.org/publicdomain/zero/1.0/ (attribution: none required)
- Fetched: 2026-11-08
- Entries: 63 (weighted: no)
- Removed by the setting filter: 0
- Changes: Kept single-word labels (one hyphen allowed) of at least three letters, capitalised the first letter. Removed every item that is also in the currency query. Removed a hand list of non-units that the class held (Einstein, Candlepower, Borysthenes, Aurelianus, Follis, Pfennig, Stater, Tetradrachm, Zaire, Reaal, Frizatik, Hekte, Keration, Pentonkion, Poronkusema, Aureus, Peso, Peseta, Dinar, Tochka, Line, Hide, Butt).

## Hard words: Open English WordNet

Every `word` file comes from Open English WordNet, 2025 edition
(https://github.com/globalwordnet/english-wordnet/releases/download/2025-edition/english-wordnet-2025.xml.gz).
The licence is CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). The
XML file states it. Attribution: "Open English WordNet, https://en-word.net/,
CC BY 4.0".

Method for every file. Collect the noun lemmas of every synset in the hyponym
closure of the root synsets that the entry names (synset ids are
`oewn-<number>-n`). Only the "hyponym" relation is followed, so instances and
proper nouns are left out. Keep lemmas that are one word of letters, written
all in lower case in WordNet, with at least 3 letters. This drops brands,
trademarks and proper nouns. Drop synsets whose definition marks them as
slang, derogatory, offensive, vulgar, obscene, disparaging, contemptuous,
insulting, informal, pejorative, a trademark, a brand name, fictional or
science fiction. Drop the excluded subtrees and the junk words that the entry
names. For animal, bird, fish, insect, reptile, plant and tree, also drop
taxonomic words that end in -iid, -oid, -ian, -ean, -ae or -ous. Raise the
first letter to a capital. The lists are plain. A word listed under two senses
is one word, not a count.

### word/animal.txt
- Source: Open English Wordnet 2025 (section intro)
- Licence: CC BY 4.0 (attribution: "Open English Wordnet, https://en-word.net/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 2224 (weighted: no)
- Removed by the setting filter: 6
- Changes: root synsets: animal 00015568, minus subtrees domestic animal, Canis familiaris, offspring, larva, game, young mammal. Steps as in the section intro.

### word/bird.txt
- Source: Open English Wordnet 2025 (section intro)
- Licence: CC BY 4.0 (attribution: "Open English Wordnet, https://en-word.net/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 528 (weighted: no)
- Removed by the setting filter: 2
- Changes: root synsets: bird 01505702. Steps as in the section intro.

### word/fish.txt
- Source: Open English Wordnet 2025 (section intro)
- Licence: CC BY 4.0 (attribution: "Open English Wordnet, https://en-word.net/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 426 (weighted: no)
- Removed by the setting filter: 0
- Changes: root synsets: fish 02514684. Steps as in the section intro.

### word/insect.txt
- Source: Open English Wordnet 2025 (section intro)
- Licence: CC BY 4.0 (attribution: "Open English Wordnet, https://en-word.net/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 234 (weighted: no)
- Removed by the setting filter: 0
- Changes: root synsets: insect 02162607. Steps as in the section intro.

### word/landform.txt
- Source: Open English Wordnet 2025 (section intro)
- Licence: CC BY 4.0 (attribution: "Open English Wordnet, https://en-word.net/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 258 (weighted: no)
- Removed by the setting filter: 1
- Changes: root synsets: geological formation 09310874, natural elevation 09389214, body of water 09248053 (OEWN has no 'landform' lemma). Steps as in the section intro.

### word/machine.txt
- Source: Open English Wordnet 2025 (section intro)
- Licence: CC BY 4.0 (attribution: "Open English Wordnet, https://en-word.net/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 324 (weighted: no)
- Removed by the setting filter: 0
- Changes: root synsets: machine 03705309, mechanism 03743963 (the broader synset 'device' 03187746 was left out: it pulled in instruments, supports and general junk). Steps as in the section intro.

### word/occupation.txt
- Source: Open English Wordnet 2025 (section intro)
- Licence: CC BY 4.0 (attribution: "Open English Wordnet, https://en-word.net/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 397 (weighted: no)
- Removed by the setting filter: 2
- Changes: root synsets: craftsperson 09995160, skilled worker 10625393, artisan 09994178, laborer 10260997, craftsman 82200052 and 86306106, tradesman 81511461, minus the subtrees functionary, military personnel, editor, aeronaut. Steps as in the section intro.

### word/plant.txt
- Source: Open English Wordnet 2025 (section intro)
- Licence: CC BY 4.0 (attribution: "Open English Wordnet, https://en-word.net/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 1160 (weighted: no)
- Removed by the setting filter: 4
- Changes: root synsets: flowering plant 11685823, herb 12226211, shrub 13133423 (under 5000, so no hash sampling was needed). Steps as in the section intro.

### word/reptile.txt
- Source: Open English Wordnet 2025 (section intro)
- Licence: CC BY 4.0 (attribution: "Open English Wordnet, https://en-word.net/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 159 (weighted: no)
- Removed by the setting filter: 2
- Changes: root synsets: reptile 01663732. Steps as in the section intro.

### word/textile.txt
- Source: Open English Wordnet 2025 (section intro)
- Licence: CC BY 4.0 (attribution: "Open English Wordnet, https://en-word.net/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 197 (weighted: no)
- Removed by the setting filter: 1
- Changes: root synsets: fabric/cloth 03314753, minus subtrees piece of cloth, mesh. Steps as in the section intro.

### word/tool.txt
- Source: Open English Wordnet 2025 (section intro)
- Licence: CC BY 4.0 (attribution: "Open English Wordnet, https://en-word.net/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 352 (weighted: no)
- Removed by the setting filter: 0
- Changes: root synsets: tool 04459089, hand tool 03494245, implement 03569147. Steps as in the section intro.

### word/tree.txt
- Source: Open English Wordnet 2025 (section intro)
- Licence: CC BY 4.0 (attribution: "Open English Wordnet, https://en-word.net/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 451 (weighted: no)
- Removed by the setting filter: 0
- Changes: root synsets: tree 13124818. Steps as in the section intro.

### word/vessel.txt
- Source: Open English Wordnet 2025 (section intro)
- Licence: CC BY 4.0 (attribution: "Open English Wordnet, https://en-word.net/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 126 (weighted: no)
- Removed by the setting filter: 0
- Changes: root synsets: boat 02861626, ship 04201332, vessel/watercraft 04537861. Steps as in the section intro.

### word/weapon.txt
- Source: Open English Wordnet 2025 (section intro)
- Licence: CC BY 4.0 (attribution: "Open English Wordnet, https://en-word.net/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 105 (weighted: no)
- Removed by the setting filter: 0
- Changes: root synsets: weapon/arm 04572661. Steps as in the section intro.

### word/weather.txt
- Source: Open English Wordnet 2025 (section intro)
- Licence: CC BY 4.0 (attribution: "Open English Wordnet, https://en-word.net/, CC BY 4.0")
- Fetched: 2026-11-08
- Entries: 168 (weighted: no)
- Removed by the setting filter: 0
- Changes: root synsets: atmospheric phenomenon 11445694, weather 11545095, storm 11482925, wind/air current 11546388. Steps as in the section intro.

## Genus names: NCBI Taxonomy

Every `taxon` file comes from the NCBI Taxonomy dump
(https://ftp.ncbi.nlm.nih.gov/pub/taxonomy/taxdump.tar.gz, files nodes.dmp and
names.dmp). The licence is public domain. It is US government data, and the
NCBI policy (https://www.ncbi.nlm.nih.gov/home/about/policies/) places no
restrictions on the use or distribution of the data. NCBI asks for
acknowledgment: "NCBI Taxonomy, https://www.ncbi.nlm.nih.gov/taxonomy".

Method. Take the scientific names of nodes with the rank genus. The weight is
the number of descendant nodes with the rank species, and each species counts
for its nearest genus. Drop genera with no species. Drop names that contain
environmental, unclassified, uncultured, incertae, Candidatus or a digit, and
names that are not one Latin word with a capital first letter. Sort each genus
into a file by its lineage: Metazoa (taxid 33208), Viridiplantae (33090),
Fungi (4751) and Bacteria (2). The name rules dropped 1,508 genera in all.

### taxon/genus-animal.txt
- Source: NCBI Taxonomy taxdump (section intro)
- Licence: public domain, NCBI data policy
- Fetched: 2026-11-08
- Entries: 5000 (weighted: yes, count of species)
- Removed by the setting filter: 253
- Changes: as in the section intro.

### taxon/genus-bacterium.txt
- Source: NCBI Taxonomy taxdump (section intro)
- Licence: public domain, NCBI data policy
- Fetched: 2026-11-08
- Entries: 4794 (weighted: yes, count of species)
- Removed by the setting filter: 33
- Changes: as in the section intro.

### taxon/genus-fungus.txt
- Source: NCBI Taxonomy taxdump (section intro)
- Licence: public domain, NCBI data policy
- Fetched: 2026-11-08
- Entries: 5000 (weighted: yes, count of species)
- Removed by the setting filter: 28
- Changes: as in the section intro.

### taxon/genus-plant.txt
- Source: NCBI Taxonomy taxdump (section intro)
- Licence: public domain, NCBI data policy
- Fetched: 2026-11-08
- Entries: 5000 (weighted: yes, count of species)
- Removed by the setting filter: 61
- Changes: as in the section intro.

## Materials: Wikidata

Every `material` file comes from the Wikidata Query Service
(https://query.wikidata.org/sparql). Wikidata data is CC0
(https://www.wikidata.org/wiki/Wikidata:Licensing). Wikidata writes labels of
common nouns in lower case, so the first letter is raised to a capital. The
rest of each label is kept as written.

### material/alloy.txt
- Source: Wikidata, subclasses (P279+) and instances (P31) of Q37756 (alloy)
- Licence: CC0
- Fetched: 2026-11-08
- Entries: 98 (weighted: no)
- Removed by the setting filter: 1
- Changes: 567 items. Kept lower-case labels without digits, brackets or slash, at most two words. Dropped the descriptive "x alloy" entries, hydrides, carbides, metallurgical phases (martensite, austenite and similar), meteorite minerals, and trade names or trademarks even when written in lower case (inconel, kovar, vitallium, hiduminium, aludur, platinit, meehanite, anticorodal, alcofer). Dropped dental and process entries. A second pass then removed ten more trade names by hand: Aldrey, Alfenide, Alumel, Chromel, Elektron, Elinvar, Invar, Nichrome, Permalloy and Perminvar. More than 40 remained, so no merge into material/metal. Capital first letter added.

### material/element.txt
- Source: Wikidata, items with P31 = Q11344 (chemical element) that have an atomic number (P1086)
- Licence: CC0
- Fetched: 2026-11-08
- Entries: 113 (weighted: no)
- Removed by the setting filter: 5 (mercury, neptunium, plutonium, titanium, selenium)
- Changes: Dropped the placeholder systematic names for undiscovered elements (unbinilium and the like, 56 items). Of the 118 real elements, 5 were removed by the filter. Capital first letter added. British spellings as Wikidata gives them (aluminium, caesium), sulfur with f.

### material/gemstone.txt
- Source: Wikidata, subclasses (P279+) and instances (P31) of Q83437 (gemstone)
- Licence: CC0
- Fetched: 2026-11-08
- Entries: 46 (weighted: no)
- Removed by the setting filter: 1
- Changes: 151 items. Kept lower-case labels without digits or brackets and with at most two words. Dropped generic or descriptive entries (gem, birthstone, cabochon, synthetic and simulant items, precious stone, rose, sardine) and compound mixes (agate-jasper, azurite-malachite). Famous single stones (capitalised, mostly named jewels and museum seals) were dropped by the lower-case rule. Capital first letter added.

### material/mineral.txt
- Source: Wikidata, items with P31 = Q12089225 (mineral species), English labels
- Licence: CC0 (https://creativecommons.org/publicdomain/zero/1.0/)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: no)
- Removed by the setting filter: 22
- Changes: 6,310 labels. Dropped labels that start with a capital, hold digits, brackets, slash or comma, have more than two words, or contain "group" or "series", or end in a single-letter suffix such as "-Q". 5,675 remained. Capital first letter added. Over the 5,000 cap, so a stable hash kept a stable pseudo-random 5,000 (653 cut). RRUFF IMA list not used (see Rejected).

### material/rock.txt
- Source: Wikidata, subclasses (P279+) of Q8063 (rock) with at least 6 Wikipedia language editions (sitelinks) as a proxy for "common"
- Licence: CC0
- Fetched: 2026-11-08
- Entries: 300 (weighted: no)
- Removed by the setting filter: 2
- Changes: 427 items with 6 or more sitelinks. Kept labels that start lower case, have no digits, brackets, slash or comma, and at most two words. Dropped by word and by hand: concrete, ore, meteorite, tool and building material words, and a short list (shotcrete, papercrete, suiseki, sarsen, coltan, wad and similar). Capital first letter added.

## Star and constellation names

The proper names of stars come from the IAU Working Group on Star Names. The
constellation names come from Wikidata (CC0) and match the 88 IAU
constellations.

### star/constellation.txt
- Source: Wikidata, items with P31 = Q8928 (constellation), Latin (la) label, plus Aries (Q10584) and Cancer (Q8849) which Wikidata types differently
- Licence: CC0
- Fetched: 2026-11-08
- Entries: 88 (weighted: no)
- Removed by the setting filter: 0
- Changes: Took the Latin labels of the 86 matching items, replaced the old spelling "Maior" with "Major" in Canis Major and Ursa Major to match the IAU names, dropped the 5 extra items (historic or Chinese asterisms without Latin label). Result checked against the list of 88 IAU names. Latin Bootes written without diaeresis.

### star/proper.txt
- Source: IAU Catalog of Star Names (IAU-CSN), IAU WGSN, as mirrored by the WGSN secretary at https://www.pas.rochester.edu/~emamajek/WGSN/IAU-CSN.txt (last updated 2022-04-04). The IAU page https://www.iau.org/public/themes/naming_stars/ returned 404 from curl.
- Licence: Creative Commons Attribution, version not stated, per the file header: "All IAU-produced products (Images, Videos, Texts) are released under Creative Commons Attribution" (attribution: "IAU Working Group on Star Names (WGSN), IAU Catalog of Star Names, https://www.iau.org/public/themes/naming_stars/").
- Fetched: 2026-11-08
- Entries: 449 (weighted: no)
- Removed by the setting filter: 2 (plus 1 removed as non-Latin script)
- Changes: Read column 2 (name with diacritics, fixed width columns 19 to 36), skipped comment lines. Names kept as written (many are two words, for example Arkab Posterior). Includes exoplanet host star names from the IAU NameExoWorlds contest.

## Drug names: FDA National Drug Code directory

The `drug` file holds generic substance names, never brand names. It comes
from the US FDA National Drug Code directory, which is US government data in
the public domain.

### drug/generic.txt
- Source: US FDA National Drug Code directory, https://www.accessdata.fda.gov/cder/ndctext.zip (product.txt, column SUBSTANCENAME, file dated 2026-11-06)
- Licence: public domain (US government data, openFDA/NDC directory)
- Fetched: 2026-11-08
- Entries: 1,173 (weighted: yes, count of NDC products using the substance)
- Removed by the setting filter: 49
- Changes: Used products of type HUMAN PRESCRIPTION DRUG and HUMAN OTC DRUG only (113,819 rows). Kept rows whose SUBSTANCENAME is a single word of A to Z (no semicolon, no space), 37,516 rows, one per product. Converted from all caps with the normal-case step. Each source row counts once toward the weight. The SUBSTANCENAME column was used instead of NONPROPRIETARYNAME because it is the clean active ingredient and is already in caps. It holds a few non-drug substances (Alcohol, Menthol, Oxygen, some homeopathic and plant names).

## Vessel names: Wikidata and NOAA

Every `ship` file except `fishing` comes from the Wikidata Query Service
(https://query.wikidata.org/sparql). Wikidata data is CC0
(https://www.wikidata.org/wiki/Wikidata:Licensing). The `fishing` file comes
from NOAA Fisheries, as its entry says.

Method for the Wikidata files. Take one row per ship item. Leave out
fictional ships: items that are an instance of fictional ship (Q16708006) or
that come from a fictional universe. Use the label in the language that the
entry names. Drop text in brackets. Remove leading ship prefixes (USS, HMS,
SMS, MV, SS, ex- and similar) and leading type words ("German destroyer").
Remove trailing Roman numerals and digits that count repeats. Drop entries
that hold digits, commas, slashes, colons or "&", entries with the words
class, type, wreck or unnamed, hull codes such as G192, and names of more than
five words. The weight is the number of ship items that carry the name.

A second pass then cleaned every file:

- Remove more leading prefixes: MF, MS, MV, SS, STS, USCS, USNS, USAT, USRC,
  USLHT, NOAAS, TS, SY, RV, MT, MY, PS, HMHS, HMAV, Schulschiff and
  Segelschiff.
- Turn labels such as "Japanese seaplane carrier Mizuho" into the bare name.
- Drop names that hold a shipping line, cruise line or race sponsor brand:
  Maersk, CMA CGM, MSC, Hapag, COSCO, OOCL, Hanjin, Evergreen and its
  "Ever ..." names, NYK, MOL, APL, ZIM, Wan Hai, Yang Ming, Stena, Carnival,
  Celebrity, Costa, AIDA, Hurtigruten, Cunard, Disney and racing yacht
  sponsors such as Ericsson, Telefónica, Mapfre, Banque Populaire and the
  "Team ..." yachts. Naval ships named after John Ericsson stay.
- Drop labels that describe a vessel or a place instead of naming a ship,
  for example "Lumber hooker", "Lövö cable ferry", and in the merchant and
  sailing lists the ferry crossings named "... Ferry".

The second pass removed 140 entries from `merchant`, 21 from `sailing` and
merged a few repeats in `naval-french` and `naval-japanese`. The Entries
counts below are the final counts.

### ship/fishing.txt
- Source: NOAA Fisheries Greater Atlantic Regional Fisheries Office, Commercial Permits Data, 2026 vessel permits file https://apps-garfo.fisheries.noaa.gov/permits/data/permits_2026.csv (index page https://apps-garfo.fisheries.noaa.gov/permits/)
- Licence: US government work, public domain (no licence statement on the data page, NOAA data is published by a US federal agency, 17 U.S.C. 105)
- Fetched: 2026-11-08
- Entries: 3,190 (weighted: yes, count of vessels with that name)
- Removed by the setting filter: 28
- Changes: column VESSEL NAME of 3,914 permit rows (one row per vessel). Dropped names with digits, shorter than 3 characters, or NO NAME, UNNAMED, NONE, TBD, SKIFF and similar. Leading 'S S', 'F V' removed. Trailing Roman numerals II to XII removed. Every name converted with the normal-case step because the source is ALL CAPS. Covers the Greater Atlantic region (Maine to North Carolina) only.

### ship/merchant.txt
- Source: Wikidata Query Service, queries merchant.rq and merchant3.rq (3.rq lists about 1,400 types: cargo ship, passenger vessel, ocean liner, tanker, bulk carrier, merchant vessel and subclasses, with military/research/icebreaker-like classes excluded by label)
- Licence: CC0 1.0 (https://creativecommons.org/publicdomain/zero/1.0/)
- Fetched: 2026-11-08
- Entries: 4,860 (weighted: yes, count of ship items with that name)
- Removed by the setting filter: 618
- Changes: items with the direct instance-of types only. Label language en. Ships also found in the naval sets were removed by item id. Labels beginning IMO or ENI (identifier-only labels) dropped. HSC prefix removed. Shared cleaning. The cap of 5000 applies: about 25,000 names exist, so the cleaning step kept the highest weights and broke ties by stable hash.

### ship/naval-australian.txt

- Licence: CC0 1.0 (https://creativecommons.org/publicdomain/zero/1.0/)
- Fetched: 2026-11-08
- Entries: 131 (weighted: yes, count of ship items with that name)
- Removed by the setting filter: 0
- Changes: Wikidata warship items (instance of or subclass of warship, Q2031121, P31/P279*) whose country (P17), country of registry (P8047) or operator's country (P137/P17) is one of: Q408 Australia. Label language: en. Then the shared cleaning.

### ship/naval-british.txt

- Licence: CC0 1.0 (https://creativecommons.org/publicdomain/zero/1.0/)
- Fetched: 2026-11-08
- Entries: 2,516 (weighted: yes, count of ship items with that name)
- Removed by the setting filter: 99
- Changes: Wikidata warship items (instance of or subclass of warship, Q2031121, P31/P279*) whose country (P17), country of registry (P8047) or operator's country (P137/P17) is one of: Q145 United Kingdom. Label language: en. Then the shared cleaning.

### ship/naval-canadian.txt

- Licence: CC0 1.0 (https://creativecommons.org/publicdomain/zero/1.0/)
- Fetched: 2026-11-08
- Entries: 252 (weighted: yes, count of ship items with that name)
- Removed by the setting filter: 2
- Changes: Wikidata warship items (instance of or subclass of warship, Q2031121, P31/P279*) whose country (P17), country of registry (P8047) or operator's country (P137/P17) is one of: Q16 Canada. Label language: en. Then the shared cleaning.

### ship/naval-danish.txt

- Licence: CC0 1.0 (https://creativecommons.org/publicdomain/zero/1.0/)
- Fetched: 2026-11-08
- Entries: 56 (weighted: yes, count of ship items with that name)
- Removed by the setting filter: 1
- Changes: Wikidata warship items (instance of or subclass of warship, Q2031121, P31/P279*) whose country (P17), country of registry (P8047) or operator's country (P137/P17) is one of: Q35 Denmark. Label language: da, fallback English. Then the shared cleaning.

### ship/naval-dutch.txt

- Licence: CC0 1.0 (https://creativecommons.org/publicdomain/zero/1.0/)
- Fetched: 2026-11-08
- Entries: 167 (weighted: yes, count of ship items with that name)
- Removed by the setting filter: 1
- Changes: Wikidata warship items (instance of or subclass of warship, Q2031121, P31/P279*) whose country (P17), country of registry (P8047) or operator's country (P137/P17) is one of: Q55 Netherlands, Dutch Republic, Q29999 Kingdom of the Netherlands. Label language: nl. Then the shared cleaning.

### ship/naval-french.txt

- Licence: CC0 1.0 (https://creativecommons.org/publicdomain/zero/1.0/)
- Fetched: 2026-11-08
- Entries: 784 (weighted: yes, count of ship items with that name)
- Removed by the setting filter: 28
- Changes: Wikidata warship items (instance of or subclass of warship, Q2031121, P31/P279*) whose country (P17), country of registry (P8047) or operator's country (P137/P17) is one of: Q142 France, Kingdom of France, French Empire, French Third Republic, Vichy France. Label language: fr. Then the shared cleaning.

### ship/naval-german.txt

- Licence: CC0 1.0 (https://creativecommons.org/publicdomain/zero/1.0/)
- Fetched: 2026-11-08
- Entries: 184 (weighted: yes, count of ship items with that name)
- Removed by the setting filter: 1
- Changes: Wikidata warship items (instance of or subclass of warship, Q2031121, P31/P279*) whose country (P17), country of registry (P8047) or operator's country (P137/P17) is one of: Q183 Germany, German Empire, Nazi Germany, Weimar Republic, West Germany, East Germany. Label language: de. Then the shared cleaning.

### ship/naval-italian.txt

- Licence: CC0 1.0 (https://creativecommons.org/publicdomain/zero/1.0/)
- Fetched: 2026-11-08
- Entries: 297 (weighted: yes, count of ship items with that name)
- Removed by the setting filter: 6
- Changes: Wikidata warship items (instance of or subclass of warship, Q2031121, P31/P279*) whose country (P17), country of registry (P8047) or operator's country (P137/P17) is one of: Q38 Italy, Kingdom of Italy, Q1397145. Label language: it. Then the shared cleaning.

### ship/naval-japanese.txt

- Licence: CC0 1.0 (https://creativecommons.org/publicdomain/zero/1.0/)
- Fetched: 2026-11-08
- Entries: 472 (weighted: yes, count of ship items with that name)
- Removed by the setting filter: 0
- Changes: Wikidata warship items (instance of or subclass of warship, Q2031121, P31/P279*) whose country (P17), country of registry (P8047) or operator's country (P137/P17) is one of: Q17 Japan, Empire of Japan. Label language: English (Hepburn romanization), because ja labels are not Latin. Then the shared cleaning.

### ship/naval-norwegian.txt

- Licence: CC0 1.0 (https://creativecommons.org/publicdomain/zero/1.0/)
- Fetched: 2026-11-08
- Entries: 67 (weighted: yes, count of ship items with that name)
- Removed by the setting filter: 0
- Changes: Wikidata warship items (instance of or subclass of warship, Q2031121, P31/P279*) whose country (P17), country of registry (P8047) or operator's country (P137/P17) is one of: Q20 Norway. Label language: nb, fallback English. Then the shared cleaning.

### ship/naval-russian.txt

- Licence: CC0 1.0 (https://creativecommons.org/publicdomain/zero/1.0/)
- Fetched: 2026-11-08
- Entries: 431 (weighted: yes, count of ship items with that name)
- Removed by the setting filter: 5
- Changes: Wikidata warship items (instance of or subclass of warship, Q2031121, P31/P279*) whose country (P17), country of registry (P8047) or operator's country (P137/P17) is one of: Q159 Russia, Soviet Union, Russian Empire. Label language: English (transliterated), because ru labels are Cyrillic. Then the shared cleaning.

### ship/naval-spanish.txt

- Licence: CC0 1.0 (https://creativecommons.org/publicdomain/zero/1.0/)
- Fetched: 2026-11-08
- Entries: 272 (weighted: yes, count of ship items with that name)
- Removed by the setting filter: 7
- Changes: Wikidata warship items (instance of or subclass of warship, Q2031121, P31/P279*) whose country (P17), country of registry (P8047) or operator's country (P137/P17) is one of: Q29 Spain. Label language: es. Then the shared cleaning.

### ship/naval-swedish.txt

- Licence: CC0 1.0 (https://creativecommons.org/publicdomain/zero/1.0/)
- Fetched: 2026-11-08
- Entries: 108 (weighted: yes, count of ship items with that name)
- Removed by the setting filter: 4
- Changes: Wikidata warship items (instance of or subclass of warship, Q2031121, P31/P279*) whose country (P17), country of registry (P8047) or operator's country (P137/P17) is one of: Q34 Sweden. Label language: sv. Then the shared cleaning.

### ship/naval-us.txt
- Source: Dictionary of American Naval Fighting Ships (DANFS), Naval History and Heritage Command. Ship names read from the archived page addresses (slugs) of history.navy.mil/research/histories/ship-histories/danfs/*, listed by the Wayback Machine CDX API (https://web.archive.org/cdx/search/cdx?url=history.navy.mil/research/histories/ship-histories/danfs/*&output=json&fl=original&collapse=urlkey&filter=statuscode:200, 9,445 URLs, 9,069 distinct slugs). 
- Licence: public domain (work of the US Navy, a US government agency, 17 U.S.C. 105). The CDX listing is only a list of public URLs.
- Fetched: 2026-11-08
- Entries: 4,999 (weighted: yes, number of US Navy ships that carried the name: the larger of the distinct Roman-numbered entries seen and the highest numeral seen, so gaps in the archive do not lower a count)
- Removed by the setting filter: 47
- Changes: lower-cased page slugs, so capitals and apostrophes are rebuilt. Dropped file extensions and query strings. Cut descriptors after "--" (hull and years, for example "kearsarge-iv--lhd-3-"). Removed the trailing Roman numeral and trailing hull designators (for example "-de-580", "-ca-34"). Dropped slugs with digits (LST-nnn, S-46, YHB10 and other hull-number entries) and rank-prefixed ones (1st Lt., and so on). Hyphens and underscores became spaces. Title case through the normal-case step ("of", "de", "la" and similar stay lower case). A leading "o" joined to the next word became "O'" (O'Brien). Dropped names with a single-letter token (initials such as "General G O Squier") and one-word names under 3 letters. Dropped the junk slug "sorgo-ii-xxxwrong". The prefix and description rules of the second pass in the section intro ran on each name. Lost apostrophes and hyphens elsewhere are not recovered ("St Marys", "Saint Croix River"). The Wayback listing is incomplete: 5,566 distinct names exist before the 5,000 cap, and 520 ones with weight 1 were cut by the cleaning step (stable hash). Entry counts are lower bounds when later ships of a name were never archived. The URL slugs lose capitals inside words, apostrophes and hyphens. A second pass then took the spelling of the earlier Wikidata naval-us list (CC0) wherever its letters match a DANFS name, for 19 names (DeLong, MacKenzie, O'Hare, John S McCain, Shangri-La and others), and merged the one repeat this made.

### ship/sailing.txt
- Source: Wikidata Query Service, queries subs_sail (type tree under sailing ship Q170483) and sailing2.rq (about 200 types: clipper, barque, brig, schooner, full-rigged ship, East Indiaman, galleon, caravel, tall ship and so on, class types such as sloop/corvette/aviso classes removed by label)
- Licence: CC0 1.0 (https://creativecommons.org/publicdomain/zero/1.0/)
- Fetched: 2026-11-08
- Entries: 2,726 (weighted: yes, count of ship items with that name)
- Removed by the setting filter: 54
- Changes: items with the direct instance-of types only, label language en, warships (items present in the naval sets) removed by item id. Suffix '-Canmore' (the label convention of imported Scottish shipwreck records) removed. Shared cleaning. No separate whaling or Dutch Asiatic Shipping data set was added.

## Organization names: GLEIF, Companies House, IRS, Charity Commission, FDIC, OLMS and USGS

Every file below comes from an official register of legal entities, organizations or sites. None is a brand list. Common cleaning for every file: Commas, semicolons and similar marks become spaces. Rows with digits, parentheses, slashes, web addresses, "c/o", "dba", "fka", "attn", "test", "null", "unknown" or "n/a" parts are dropped. ALL CAPS sources go through the normal-case step with legal forms (LLC, LLP, PLC, AG, SA, NV, BV, AB, AS, KK, GmbH, SpA, and similar) kept in their usual case, "Inc", "Ltd", "Corp" and "Co" in Title case. Then the cleaning step with count weights (one per source row): one plain name per register row, the weight is the number of registered entities with that exact name (ignoring case). The cap keeps the highest counts.

**GLEIF LEI records**

- Source: GLEIF Level 1 data, API https://api.gleif.org/api/v1/lei-records, filter[entity.legalAddress.country]=<ISO code>, page[size]=200, pages 1 to 50 (the API allows 10,000 results per filter, so the first 10,000 records per country in API order, fewer where the country has fewer or a request failed). Raw JSON saved from legalName, transliteratedOtherNames, legalForm id and status.
- Licence: CC0 (https://www.gleif.org/en/about/open-data : "provided under a Creative Commons (CC0) license")
- Fetched: 2026-11-08
- Name rule: the legal name when it is Latin script, else the first Latin entry of transliteratedOtherNames, else the row is dropped. For Korea the transliterations (lower case Revised Romanization of Korean) were not used, so only names written in Latin script remain. Mixed-case names are kept as the register writes them. In "pt/es/fr/it/nl/de" connector words (de, da, do, dos, e, y, la, del, di, van, von, of, and, the) are lower case when a name was ALL CAPS. Names with 4 words or fewer, ending in a common Indian family name and holding no organisation word are dropped as bare person names (all countries).

**IRS Exempt Organizations Business Master File**

- Source: https://www.irs.gov/pub/irs-soi/eo1.csv, eo2.csv, eo3.csv, eo4.csv (column NAME), links from https://www.irs.gov/charities-non-profits/exempt-organizations-business-master-file-extract-eo-bmf
- Licence: US federal government data, public domain (17 U.S.C. 105)
- Fetched: 2026-11-08
- Note: the IRS gives chapter and affiliate bodies of one group the same name, so counts can be large (hundreds or thousands). They are real separate registered entities. Some names are cut off at 70 characters by the register.

### bank/american.txt
- Source: FDIC BankFind Suite institutions API https://api.fdic.gov/banks/institutions?fields=NAME&limit=10000&offset=0|10000|20000 (27,835 institutions, active, inactive and historic)
- Licence: US federal government data, public domain (17 U.S.C. 105). The API docs state no licence text.
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of FDIC institutions that used the exact name)
- Removed by the setting filter: 224
- Changes: names shorter than 5 characters dropped (acronyms). 27,319 rows after cleaning. Source case kept.

### charity/british.txt
- Source: Charity Commission for England and Wales register extract https://ccewuksprdoneregsadata1.blob.core.windows.net/data/txt/publicextract.charity.zip (file publicextract.charity.txt, column charity_name, linked from https://register-of-charities.charitycommission.gov.uk/en/register/full-register-download)
- Licence: Open Government Licence v3.0 (the register site states "All content is available under the Open Government Licence v3.0", https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) (attribution: "Contains public sector information licensed under the Open Government Licence v3.0, Charity Commission for England and Wales")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of registered charities, past and present, with the name)
- Removed by the setting filter: 1931
- Changes: rows with linked_charity_number 0 or 1 only (one row per main charity, removed charities included, 333,208 rows after cleaning). ALL CAPS to normal case. Some names are bare person names (trusts named for a person) and stay.

### corporation/american.txt
- Source: GLEIF, country US (see section intro)
- Licence: CC0 (https://www.gleif.org/en/about/open-data)
- Fetched: 2026-11-08
- Entries: 3,846 (weighted: yes, count of LEI-registered entities with the name)
- Removed by the setting filter: 86
- Changes: section intro. Input rows after the Latin-name rule: 3,936

### corporation/australian.txt
- Source: GLEIF, country AU (see section intro)
- Licence: CC0 (https://www.gleif.org/en/about/open-data)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of LEI-registered entities with the name)
- Removed by the setting filter: 97
- Changes: section intro. Input rows after the Latin-name rule: 8,519

### corporation/brazilian.txt
- Source: GLEIF, country BR (see section intro)
- Licence: CC0 (https://www.gleif.org/en/about/open-data)
- Fetched: 2026-11-08
- Entries: 3,871 (weighted: yes, count of LEI-registered entities with the name)
- Removed by the setting filter: 41
- Changes: section intro. Input rows after the Latin-name rule: 3,924

### corporation/british.txt
- Source: Companies House Free Company Data Product, BasicCompanyDataAsOneFile-2026-11-01.zip (http://download.companieshouse.gov.uk/BasicCompanyDataAsOneFile-2026-11-01.zip, 5,711,779 live UK companies, column CompanyName)
- Licence: Open Government Licence v3.0 (https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/), confirmed by the project owner on 2026-11-08 (attribution: "Contains public sector information licensed under the Open Government Licence v3.0. Contains data from Companies House")
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: no)
- Removed by the setting filter: 37,965
- Changes: every name went through the same cleaning as the GLEIF names (see the section intro): rows with digits, brackets, slashes or web parts dropped, ALL CAPS turned to normal case with legal forms kept (Ltd, PLC, LLP, CIC), small joining words (of, and, the) in lower case, and bare person names dropped. 574,379 rows were dropped this way and 5,137,400 kept. A letter after "&" is raised to a capital ("A&A"). Names that are only a legal form ("Ltd") are dropped. UK company names are unique by law, so the 3,908 repeats left after cleaning are cleaning leftovers, not counts. The list is therefore plain: a stable hash sample of 5,000 names from the whole register, sorted A to Z. This replaces an earlier list from the first 10,000 GLEIF records for GB, which leaned to funds and holding companies.

### corporation/canadian.txt
- Source: GLEIF, country CA (see section intro)
- Licence: CC0 (https://www.gleif.org/en/about/open-data)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of LEI-registered entities with the name)
- Removed by the setting filter: 99
- Changes: section intro. Input rows after the Latin-name rule: 7,419

### corporation/danish.txt
- Source: GLEIF, country DK (see section intro)
- Licence: CC0 (https://www.gleif.org/en/about/open-data)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of LEI-registered entities with the name)
- Removed by the setting filter: 63
- Changes: section intro. Input rows after the Latin-name rule: 8,279

### corporation/dutch.txt
- Source: GLEIF, country NL (see section intro)
- Licence: CC0 (https://www.gleif.org/en/about/open-data)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of LEI-registered entities with the name)
- Removed by the setting filter: 50
- Changes: section intro. Input rows after the Latin-name rule: 9,634

### corporation/finnish.txt
- Source: GLEIF, country FI (see section intro)
- Licence: CC0 (https://www.gleif.org/en/about/open-data)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of LEI-registered entities with the name)
- Removed by the setting filter: 37
- Changes: section intro. Input rows after the Latin-name rule: 9,653

### corporation/form.txt
- Source: the same Companies House file as corporation/word, plus the GLEIF LEI records of all 21 countries
- Licence: Open Government Licence v3.0 (https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) for the Companies House data, confirmed by the project owner on 2026-11-08 (attribution: "Contains public sector information licensed under the Open Government Licence v3.0. Contains data from Companies House"). CC0 for the GLEIF part.
- Fetched: 2026-11-08
- Entries: 104 (weighted: yes, count of legal entities whose name holds the form word, once per entity)
- Removed by the setting filter: 0
- Changes: a curated set of about 100 legal forms and company descriptors (Limited, Ltd, LLC, GmbH, AG, KK, Holdings, Industries, Consolidated, International, Group, Trust and so on) was counted. Forms are written in their usual case (GmbH, SpA, KGaA, eGbR, Ltd, Inc). Only forms that occur are listed.

### corporation/french.txt
- Source: GLEIF, country FR (see section intro)
- Licence: CC0 (https://www.gleif.org/en/about/open-data)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of LEI-registered entities with the name)
- Removed by the setting filter: 79
- Changes: section intro. Input rows after the Latin-name rule: 9,107

### corporation/german.txt
- Source: GLEIF, country DE (see section intro)
- Licence: CC0 (https://www.gleif.org/en/about/open-data)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of LEI-registered entities with the name)
- Removed by the setting filter: 85
- Changes: section intro. Input rows after the Latin-name rule: 8,353

### corporation/indian.txt
- Source: GLEIF, country IN (see section intro)
- Licence: CC0 (https://www.gleif.org/en/about/open-data)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of LEI-registered entities with the name)
- Removed by the setting filter: 147
- Changes: section intro. Input rows after the Latin-name rule: 8,997

### corporation/italian.txt
- Source: GLEIF, country IT (see section intro)
- Licence: CC0 (https://www.gleif.org/en/about/open-data)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of LEI-registered entities with the name)
- Removed by the setting filter: 125
- Changes: section intro. Input rows after the Latin-name rule: 9,185

### corporation/japanese.txt
- Source: GLEIF, country JP (see section intro)
- Licence: CC0 (https://www.gleif.org/en/about/open-data)
- Fetched: 2026-11-08
- Entries: 234 (weighted: no (no name repeats in the register rows, written plain, first 5000 kept in register order if cut))
- Removed by the setting filter: 3
- Changes: section intro. Input rows after the Latin-name rule: 237

### corporation/korean.txt
- Source: GLEIF, country KR (see section intro)
- Licence: CC0 (https://www.gleif.org/en/about/open-data)
- Fetched: 2026-11-08
- Entries: 113 (weighted: no (no name repeats in the register rows, written plain, first 5000 kept in register order if cut))
- Removed by the setting filter: 1
- Changes: section intro. Input rows after the Latin-name rule: 114

### corporation/mexican.txt
- Source: GLEIF, country MX (see section intro)
- Licence: CC0 (https://www.gleif.org/en/about/open-data)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: no (no name repeats in the register rows, written plain, first 5000 kept in register order if cut))
- Removed by the setting filter: 56
- Changes: section intro. Input rows after the Latin-name rule: 5,662

### corporation/norwegian.txt
- Source: GLEIF, country NO (see section intro)
- Licence: CC0 (https://www.gleif.org/en/about/open-data)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of LEI-registered entities with the name)
- Removed by the setting filter: 55
- Changes: section intro. Input rows after the Latin-name rule: 9,518

### corporation/polish.txt
- Source: GLEIF, country PL (see section intro)
- Licence: CC0 (https://www.gleif.org/en/about/open-data)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of LEI-registered entities with the name)
- Removed by the setting filter: 58
- Changes: section intro. Input rows after the Latin-name rule: 8,428

### corporation/south-african.txt
- Source: GLEIF, country ZA (see section intro)
- Licence: CC0 (https://www.gleif.org/en/about/open-data)
- Fetched: 2026-11-08
- Entries: 2,379 (weighted: yes, count of LEI-registered entities with the name)
- Removed by the setting filter: 17
- Changes: section intro. Input rows after the Latin-name rule: 2,398

### corporation/spanish.txt
- Source: GLEIF, country ES (see section intro)
- Licence: CC0 (https://www.gleif.org/en/about/open-data)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of LEI-registered entities with the name)
- Removed by the setting filter: 157
- Changes: section intro. Input rows after the Latin-name rule: 7,356

### corporation/swedish.txt
- Source: GLEIF, country SE (see section intro)
- Licence: CC0 (https://www.gleif.org/en/about/open-data)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: no (no name repeats in the register rows, written plain, first 5000 kept in register order if cut))
- Removed by the setting filter: 28
- Changes: section intro. Input rows after the Latin-name rule: 9,374

### corporation/swiss.txt
- Source: GLEIF, country CH (see section intro)
- Licence: CC0 (https://www.gleif.org/en/about/open-data)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of LEI-registered entities with the name)
- Removed by the setting filter: 87
- Changes: section intro. Input rows after the Latin-name rule: 9,042

### corporation/word.txt
- Source: Companies House Free Company Data Product, BasicCompanyDataAsOneFile-2026-11-01.zip (http://download.companieshouse.gov.uk/BasicCompanyDataAsOneFile-2026-11-01.zip, 5,711,779 live UK companies, column CompanyName), plus the GLEIF LEI records of the English-language registers (US, GB, CA, AU, ZA and IN, see the GLEIF note in the section intro).
- Licence: Open Government Licence v3.0 (https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) for the Companies House data, confirmed by the project owner on 2026-11-08 (attribution: "Contains public sector information licensed under the Open Government Licence v3.0. Contains data from Companies House"). CC0 for the GLEIF part.
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of legal entities whose name holds the word, once per entity)
- Removed by the setting filter: 471
- Changes: each name split on spaces, names with digits or web parts skipped, one count per word per name. Dropped: words under 3 letters, words of 3 letters taken from ALL CAPS names, words of 4 letters or fewer without a vowel, words with "&", stop words (the, of, and, de, la, van and similar), and every legal form or company descriptor (see corporation/form). ALL CAPS names and long all caps words were turned to Title case. Words used by fewer than 3 entities were dropped before the cap. Person names are not removed. GLEIF records of other countries count toward corporation/form only, so legal-form words of other languages (Spółka, Responsabilità) stay out of this list.

### foundation/american.txt
- Source: IRS EO BMF files eo1 to eo4 (see section intro)
- Licence: public domain
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of registered exempt organizations with the name)
- Removed by the setting filter: 2228
- Changes: kept names holding the whole word Foundation, Fund, Trust or Endowment (277,911 rows after cleaning). "&AMP." turned to "&". ALL CAPS to normal case.

### mine/american.txt
- Source: USGS Mineral Resources Data System, https://mrdata.usgs.gov/mrds/mrds-csv.zip (mrds.csv, column site_name, 304,632 sites)
- Licence: US federal government data, public domain (USGS)
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of MRDS sites with the name)
- Removed by the setting filter: 1474
- Changes: country United States only (266,599 sites). Dropped placeholder and description names (Unknown, Unnamed, Unk, no name, Outcrop, Geothermal, Reported, Dept, Highway, Sample, Occurrence, Section, Township codes) and names made only of generic words (gravel, pit, quarry, mine, prospect, cinder, basalt, creek, group and similar). Trailing Mine, Prospect, Claim, Group, Pit, Quarry were NOT stripped: only about 43 percent of names end in one of them, not most.

### society/american.txt
- Source: IRS EO BMF files eo1 to eo4 (see section intro)
- Licence: public domain
- Fetched: 2026-11-08
- Entries: 5,000 (weighted: yes, count of registered exempt organizations with the name)
- Removed by the setting filter: 1348
- Changes: kept names holding the whole word Society, Guild, Brotherhood, Sisterhood, Order, Lodge, League, Association, Union or Institute (262,376 rows after cleaning). ALL CAPS to normal case.

### union/american.txt
- Source: US Department of Labor OLMS Online Public Disclosure Room yearly data, https://olmsapps.dol.gov/olpdr/GetYearlyFileServlet (files for 2000, 2002, 2010 and 2026, member lm_data_data_<year>.txt, column UNION_NAME). The www.dol.gov pages refused automated access (403), so only the olmsapps.dol.gov endpoint the disclosure app itself uses was called, 4 download requests.
- Licence: US federal government data, public domain
- Fetched: 2026-11-08
- Entries: 1,288 (weighted: yes, count of labor organizations, by file number, with the name)
- Removed by the setting filter: 18
- Changes: one name per union file number (F_NUM, later year wins), 32,585 unions, 31,937 after cleaning. The register writes abbreviated names (Empls, Asn, Natl, Ind) and the affiliate (AFL-CIO, IBT, SEIU), kept as written. ALL CAPS to normal case with AFL-CIO, IBT, SEIU, UAW, AFSCME, IBEW, UFCW, CWA, AFT, NEA, IAM and USW upper case.

## Rejected sources

- GeoNames alternateNamesV2 and asciiname columns: not used, only the name column is used.
- GeoNames GB admin1 NIR (Northern Ireland): no culture group was specified, so not written.
- GeoNames NZ for maori: cannot be split from new-zealander in the data, skipped as briefed.
- Wikidata person counts for the Roman name items: the counts were almost all zero, so the Roman lists are plain.
- Wikidata query with units that have an end time (P582, P576, P3999) as units: it returned coins, currencies, crypto tokens and company names, so it was dropped.
- RRUFF IMA mineral list (https://rruff.info/ima/): not used. Wikidata already covers mineral species under CC0, and RRUFF licence terms were not checked in detail.
- material/compound: skipped (optional). The Wikidata queries for compounds gave no usable result (instances of Q11173 and Q15026 returned nothing), and no further hunting was done.
- IAU page https://www.iau.org/public/themes/naming_stars/: returned 404 for curl, so the WGSN mirror file was used for the data and its header for the licence.
- SEC EDGAR cik-lookup-data.txt (https://www.sec.gov/Archives/edgar/cik-lookup-data.txt): answered 403 "Undeclared Automated Tool" to the declared User-Agent. Stopped. The word and form lists use Companies House and GLEIF instead.
- US Department of Labor www.dol.gov data pages (https://www.dol.gov/agencies/olms/data/data-library): 403 Access Denied. Stopped using that host. The OLMS disclosure app host olmsapps.dol.gov served the yearly files normally and was used.
- OLMS yearly files for 2020, 2014 and 2008: the encrypted file codes returned "no such file". Not retried. Only 2000, 2002, 2010 and 2026 were used.
- OpenCorporates and similar commercial registers: not open licensed, not tried.
- DANFS via jrnold/danfs SQLite copy (https://s3.amazonaws.com/data.jrnold.me/danfs/danfs.sqlite3): the file no longer exists (HTTP 404).
- Naval History and Heritage Command, Online DANFS (https://www.history.navy.mil/): every page and API path answered 404 on 2026-11-08, and the archived index page loads its list by script from an API that is not archived.
- Hazegray DANFS transcription (https://www.hazegray.org/danfs/): connection failed.
- history.navy.mil DANFS pages (live site) and the jrnold/danfs GitHub repository: the live site answers 404 for the old addresses on 2026-11-08, and the repository (archived, no licence declared) holds only scraper code and a notebook, no data. Neither used.
- Internet Archive OCR of the printed DANFS volumes (archive.org dictionaryofamer01wash_0 and others): public domain, but the OCR headings are noisy (for example "AbileHe", "A bility") and ship numbers are hard to count. Not used. A cleaner DANFS copy is still the better source for naval-us.
- US Coast Guard Merchant Vessels of the United States data (dco.uscg.mil): answered 403, so the site was dropped.
- Wikipedia lists of ship names (CC-BY-SA): share-alike, avoided.
- Dutch Asiatic Shipping and whaling voyage databases: not pursued, Wikidata sailing list already has 2,744 entries.
- Finnish DVV name files on avoindata.fi (https://www.avoindata.fi/data/en/dataset/none/resource/08c89936-a230-42e9-a9fc-288632e234f5): the portal and its API answered 403 Forbidden to honest requests, and dvv.fi also gave 403. Stopped as required. No other open copy found.
- Statistics Denmark (https://www.dst.dk/da/Statistik/emner/borgere/navne): no name table in the StatBank API (checked all 5,761 tables), only the interactive "Hvor mange hedder" tool, no terms for bulk reuse.
- Dutch names: the Meertens databank is not openly licensed. Data.overheid.nl and CBS have no open per-name counts.
- Statbel pages through WebFetch showed a human-verification page. The files were then reached by plain requests with the honest User-Agent and no check was bypassed, and no captcha was solved.
- Berlin open data (daten.berlin.de): 403 Forbidden, stopped.
- Cologne and Hamburg open data portals: no usable API found, not pursued. Smaller NRW cities (Moers, Wesel, Arnsberg, Krefeld, Kleve) skipped because they are tiny and add little.
- Czech Ministry of the Interior and Czech Statistical Office: name frequency lists were last published in 2016 (regional pages only), no clear national open dataset or licence.
- Estonian Statistics Office (andmed.stat.ee): no name tables found.
- Lithuanian open data portal (data.gov.lt): API returned HTTP 500, no name dataset found elsewhere.
- Hungarian (KSH) and Croatian (DZS) offices: no open per-name count dataset found.
- Norwegian surnames, Austrian surnames, Latvian surnames: no open table found.
- SSA direct download (https://www.ssa.gov/oact/babynames/): answers 403 to automated downloads, not used. Data came from the CC0 babynames copy.
- Idescat names (Catalan, catalan/given-* and family): the API gives 25 names per request (about 2,750 requests) and the API terms of use page did not load, so the licence is unclear. Skipped.
- Eustat (Basque): skipped, licence not checked (optional source).
- England, Scotland and Quebec surname counts: no open full-list source found (see gaps in the report). Ireland and France surname lists were found and written.
- Wikidata given-name items for Chinese citizens (P735): hold many Western names and tone-marked pinyin, replaced by label derivation.
- Ethnic groups zulu, akan, hawaiian, xhosa, amhara: too few people with name items (under 40 names), nothing written.
- Wikidata main endpoint (query.wikidata.org): not needed, QLever was fast enough.
- Princeton WordNet 3.x (wordnet.princeton.edu): not used by instruction, OEWN used instead.
- word/raptor: only 36 usable words in the bird of prey closure, below the 40 minimum, not written.
- Root synset 'device' (03187746) for word/machine: mostly instruments, supports and non-hardware senses.
