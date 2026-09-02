# Your Name — Art Portfolio

A single-file, no-build portfolio site: `index.html` contains all the HTML, CSS, and JS.
No frameworks, no build step — you can edit it in any text editor and it just works.

## 1. Customize

Open `index.html` and edit:

- **Name & nav** — search for `Your Name` (appears in the `<title>`, nav brand, and footer).
- **Hero headline & intro** — inside `<section class="hero">`.
- **Featured piece** — the `.featured-tile` block near the top (title, medium, year, size in the caption below it).
- **Gallery works** — scroll to the `const WORKS = [...]` array near the bottom of the file.
  Each object is one artwork:
  ```js
  { title:"Held Light", medium:"Oil on canvas", year:"2025", size:"120 × 90 cm",
    tone:"g-dusty", gridClass:"c1", desc:"..." }
  ```
  Add, remove, or reorder entries freely — the grid rebuilds itself from this array.
- **About section** — artist statement, city, medium, exhibitions.
- **Contact** — email address and social links in the footer.

### Swapping in real images

Right now each tile is a colored placeholder (the `tone` classes like `g-clay`, `g-sage`).
To use real photos of your work instead:

1. Put your image files in an `/images` folder next to `index.html`.
2. In the `WORKS` array, add an `img` field, e.g. `img:"images/held-light.jpg"`.
3. In the tile-building script, change:
   ```js
   <div class="art ${w.tone}"></div>
   ```
   to:
   ```js
   <div class="art" style="background-image:url('${w.img}'); background-size:cover; background-position:center;"></div>
   ```
   (and the same for `lbArt` in the lightbox logic, and the featured tile).

Use well-lit, evenly cropped photos — square or 4:5 ratio works best with this layout.

## 2. Preview locally

Just double-click `index.html`, or run a tiny local server from this folder:
```bash
python3 -m http.server 8000
```
then visit `http://localhost:8000`.

## 3. Deploy with GitHub Pages (free, and yes — good choice since you already have GitHub)

1. Create a new repository on GitHub, e.g. `your-username.github.io` (for a root domain)
   or any name like `art-portfolio` (for a project subpath).
2. Push this folder's contents to that repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```
3. On GitHub: go to the repo → **Settings → Pages** → under "Build and deployment",
   set **Source** to "Deploy from a branch", branch `main`, folder `/ (root)` → **Save**.
4. Your site will be live within a minute or two at:
   - `https://your-username.github.io/` if the repo is named `your-username.github.io`
   - `https://your-username.github.io/your-repo/` otherwise

Every time you push a change to `main`, the live site updates automatically.

### Custom domain (optional)
In the same **Settings → Pages** panel, add your domain under "Custom domain."
You'll then add a `CNAME` record (or `A` records for an apex domain) at your domain
registrar pointing to GitHub's Pages servers — GitHub shows the exact values to use.
