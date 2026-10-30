# Missie: tumor onder controle — BHPA op Nerdland Festival 2027

Promotiewebsite voor het experience-voorstel van BHPA (Belgian Hospital Physicists Association · BVZF · SBPH) op Nerdland Festival 2027.
Statische site: HTML + CSS, één klein script, geen build-stap. Online via GitHub Pages: https://bvzf-sbph.github.io/nerdland2027/

## Structuur

```
index.html               de pagina (Nederlands)
en/index.html            dezelfde pagina in het Engels
css/style.css            alle opmaak (gedeeld door beide talen)
js/start-top.js          enige script: bij herladen bovenaan starten
assets/img/              foto's (JPG/WebP) en favicon (SVG)
assets/video/            vertual-impressie.mp4
```

`css/style.css` is opgebouwd van boven naar onder: kleuren (licht/donker), basis, onderdelen per sectie,
hulpklassen, en helemaal onderaan alle schermbreedte-regels (`@media`) en "minder animatie".

## Twee talen (NL + EN)

- Rechtsboven staat een knop **NL | EN**. Die linkt naar `index.html` en `en/index.html`.
- **Alles wat je toevoegt, voeg je in beide pagina's toe**, op dezelfde plek en met dezelfde opbouw.
- In `en/index.html` beginnen alle paden met `../` (bv. `../assets/img/foto.jpg`, `../css/style.css`).
- De `id`'s (zoals `#idee`, `#traject`) zijn in beide talen dezelfde, zodat de opmaak en de menulinks overal werken.

## Afspraken voor de code (belangrijk voor de veiligheid)

De pagina's hebben een strikte **Content-Security-Policy** (`<meta http-equiv="Content-Security-Policy">` bovenaan).
Daardoor werkt het volgende **niet**, en hoort het er ook niet in:

- geen `style="…"` op elementen → gebruik een klasse. Voor de accentkleur: `c-blue`, `c-coral`, `c-mint`, `c-sun`, `c-violet`.
  Voor de uitsnede van een foto: `focus-25`, `focus-42` (of voeg een nieuwe klasse toe in `style.css`);
- geen `<script>…</script>` in de HTML → scripts in een apart bestand in `js/`;
- geen bestanden van andere websites, behalve Google Fonts en (optioneel) een YouTube-video via `youtube-nocookie.com`.
  Iets nieuws van buitenaf nodig? Voeg het domein toe aan de CSP in **beide** pagina's.

Externe links openen in een nieuw tabblad met `target="_blank" rel="noopener"`.

## Foto's en video

- Foto's staan in `assets/img/` (JPG of WebP, max. 1600 px breed, liefst < 150 kB per stuk).
- Geef elke `<img>` een `alt` (beschrijving), `width` en `height` (de echte pixelmaten: dan verspringt de pagina niet tijdens het laden)
  en `loading="lazy"` (behalve de grote foto bovenaan).
- Foto toevoegen aan de galerij: kopieer een `<figure>`-regel in de sectie "In beeld", pas `src`, `alt`, `width`, `height`
  en `<figcaption>` (bijschrift) aan. `gallery__item--wide` = dubbel zo breed.
- De video staat in `assets/video/vertual-impressie.mp4` en laadt pas als iemand op afspelen drukt.
  GitHub weigert bestanden > 100 MB; een grotere video zet je op YouTube/Vimeo en gebruikt de `<iframe>` die als commentaar in `index.html` staat.

## Lokaal bekijken

Start een mini-server in deze map (nodig: anders werkt de taalknop niet goed):

```
python -m http.server 8642
```

en surf naar http://localhost:8642

## Online zetten

De site staat in https://github.com/BVZF-SBPH/nerdland2027 en GitHub Pages publiceert automatisch de branch `main`.
Na een push staat de nieuwe versie na 1 à 2 minuten online. Collega's pushen ook, dus haal eerst de laatste versie op:

```
git pull
git add .
git commit -m "Korte beschrijving van de wijziging"
git push
```
