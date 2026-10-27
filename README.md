# Missie: tumor onder controle — BHPA op Nerdland Festival 2027

Promotiewebsite voor het experience-voorstel van BHPA (Belgian Hospital Physicists Association · BVZF · SBPH) op Nerdland Festival 2027.
Pure HTML + CSS, geen JavaScript, geen build-stap.

## Structuur

```
index.html               de pagina
css/style.css            alle opmaak
assets/img/              illustraties en plaatshouders (SVG)
assets/video/            hier komt teaser.mp4
```

## Foto's en video toevoegen

| Wat | Waar in `index.html` | Bestand |
|-----|----------------------|---------|
| Teaser-video | sectie "Het idee" | zet `teaser.mp4` in `assets/video/` |
| Foto per station | `<img src="assets/img/beeldvorming.svg">` enz. | vervang door bv. `assets/img/station-1.jpg` |
| Galerij | sectie "In beeld" | vervang elke `foto-placeholder.svg` |
| Teamfoto | sectie "Wie zijn wij?" | vervang `team.svg` |

Tips:
- Foto's: JPG of WebP, max. ca. 1600 px breed, liefst < 400 kB per stuk.
- Video: GitHub weigert bestanden > 100 MB en waarschuwt vanaf 50 MB. Grotere video? Zet hem op YouTube/Vimeo
  en gebruik de `<iframe>` die al als commentaar in `index.html` staat.
- Pas ook de `alt="..."`-tekst aan (beschrijving van de foto).

## Lokaal bekijken

Open `index.html` in je browser, of start een mini-server in deze map:

```
python -m http.server 8642
```

en surf naar http://localhost:8642

## Online zetten via GitHub Pages (organisatie BVZF-SBPH)

Zie de stappen in de chat / hieronder samengevat:

1. Maak een **public** repository aan in de organisatie: https://github.com/organizations/BVZF-SBPH/repositories/new
   (naam bv. `nerdland2027`, zonder README of .gitignore).
2. In deze map:
   ```
   git init -b main
   git add .
   git commit -m "Eerste versie website Nerdland 2027"
   git remote add origin https://github.com/BVZF-SBPH/nerdland2027.git
   git push -u origin main
   ```
3. Op GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / `(root)` → Save**.
4. Na 1 à 2 minuten staat de site op https://bvzf-sbph.github.io/nerdland2027/

Wijzigingen later online zetten:

```
git add .
git commit -m "Foto's toegevoegd"
git push
```
