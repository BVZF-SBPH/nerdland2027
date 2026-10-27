# Missie: tumor onder controle — BHPA op Nerdland Festival 2027

Promotiewebsite voor het experience-voorstel van BHPA (Belgian Hospital Physicists Association · BVZF · SBPH) op Nerdland Festival 2027.
Pure HTML + CSS, geen JavaScript, geen build-stap.

## Structuur

```
index.html               de pagina
css/style.css            alle opmaak
assets/img/              foto's (JPG), favicon en teamplaatshouder (SVG)
assets/video/            vertual-impressie.mp4
```

## Foto's en video

- Foto's staan in `assets/img/` (JPG, max. 1600 px breed, ca. 100 kB per stuk).
- De video staat in `assets/video/vertual-impressie.mp4`. GitHub weigert bestanden > 100 MB;
  een grotere video zet je op YouTube/Vimeo en gebruikt de `<iframe>` die als commentaar in `index.html` staat.
- Foto toevoegen aan de galerij: kopieer een `<figure>`-regel in de sectie "In beeld", pas `src`,
  `alt` (beschrijving) en `<figcaption>` (bijschrift) aan. `gallery__item--wide` = dubbel zo breed.
- De teamfoto ontbreekt nog: vervang `assets/img/team.svg` in de sectie "Wie zijn wij?".

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
