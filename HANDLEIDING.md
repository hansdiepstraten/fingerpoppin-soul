# Handleiding: de website bijwerken

De site (fingerpoppinsoul.amsterdam) staat in GitHub (`hansdiepstraten/fingerpoppin-soul`) en wordt door Cloudflare automatisch opnieuw gebouwd zodra er iets op GitHub verandert. Er zijn twee manieren om iets te wijzigen.

## Welke manier gebruik ik?

| Wat wil ik doen | Manier |
|---|---|
| Een **blogpost** schrijven of aanpassen | Sveltia CMS (`/admin`) |
| Een **pagina** aanpassen (About, Artists We Met, Hideaway, ...) | VS Code + GitHub Desktop |
| Hideaway-datums, gast-dj's, menu, e-mailadressen | VS Code + GitHub Desktop |

---

## 1. Blogposts via de CMS

1. Ga naar **fingerpoppinsoul.amsterdam/admin/** en klik **Sign In with GitHub**.
2. Kies **Blog** → **New Blog post** (of open een bestaande post).
3. Vul titel, datum, categorie, evt. afbeelding en tekst in.
4. Klik **Publish**.

Klaar. De CMS zet de post zelf op GitHub en Cloudflare bouwt de site opnieuw. Na 1-3 minuten staat hij live. Je hoeft hier niets met GitHub Desktop te doen.

Zet je **Draft** aan, dan blijft de post verborgen.

---

## 2. Pagina's aanpassen (VS Code + GitHub Desktop)

De werkmap is altijd: `C:\Users\hansd\code\fingerpoppin-soul`

### Stap 1: eerst de laatste versie ophalen
Open **GitHub Desktop** en klik **Fetch origin**. Staat er "Pull origin", klik die ook.
Dit is belangrijk: de CMS kan intussen een blogpost hebben toegevoegd, en anders loopt je push vast.

### Stap 2: bestand bewerken
Open de map in **VS Code** (File > Open Folder) en bewerk het bestand:

| Wat | Bestand |
|---|---|
| About, Artists We Met, The Hideaway, Listen, Selections, homepage | `src/pages/*.astro` |
| Hideaway: seizoen, datums, gast-dj's | `src/data/hideaway.ts` |
| Sitenaam, menu, e-mailadressen, socials | `src/data/site.ts` |
| Rare LP's en Hattricks | `src/data/selections.ts` |
| Afbeeldingen | `public/images/` |

Een afbeelding gebruik je in een pagina als `/images/naam.jpg` (zonder `public`).

Let op bij tekst: behoud de aanhalingstekens, komma's en haakjes `{ } [ ]` zoals ze zijn.

### Stap 3: lokaal bekijken
Open in VS Code een terminal en start:

```
npm run dev
```

Open het adres dat in de terminal staat (meestal `http://localhost:4321`). Na elke **Ctrl+S** ververst de pagina vanzelf. Stoppen met **Ctrl+C**.

Staat er een foutmelding in plaats van je pagina, dan zit er een tikfout in je laatste wijziging.

### Stap 4: live zetten
In **GitHub Desktop**:
1. Je ziet je gewijzigde bestanden links staan.
2. Typ rechtsonder een korte omschrijving en klik **Commit to master**.
3. Klik **Push origin**.

Cloudflare bouwt nu de site opnieuw. Na 1-3 minuten staat de wijziging live (controleren kan in Cloudflare > Workers & Pages > fingerpoppin-soul > Deployments).

---

## Een nieuwe pagina toevoegen

1. Kopieer in `src/pages/` een bestaande pagina (bijv. `about.astro`) en geef de kopie een nieuwe naam, bijv. `contact.astro`. Die staat dan op `/contact`.
2. Pas titel en inhoud aan.
3. Wil je hem in het menu: voeg een regel toe in `nav` in `src/data/site.ts`.
4. Daarna stap 3 en 4 hierboven.

## Handige weetjes

- **Alt+Z** in VS Code laat lange regels afbreken in het venster.
- Weet je niet zeker of je iets stuk maakt? Wat je niet pusht, blijft alleen op je eigen computer.
- Een commit terugdraaien kan altijd: in GitHub Desktop rechtsklikken op de commit > **Revert**.
- GitHub Desktop moet naar `C:\Users\hansd\code\fingerpoppin-soul` wijzen (linksboven bij "Current repository"). Staat daar iets anders, dan zie je "0 changed files".
