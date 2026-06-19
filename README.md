# Personal Portfolio

A single-page personal portfolio built with **React + Vite**, designed to deploy for free on **GitHub Pages**. Smooth-scroll navigation, no router, no backend. Content lives in plain data files so you can update text without touching layout code.

Sections: Hero/About · Research & Publications · Maker Projects (with reusable YouTube embeds) · Contact.

---

## 1. Run it locally

You need [Node.js](https://nodejs.org) 18 or newer (includes `npm`).

```bash
npm install      # first time only — installs dependencies
npm run dev      # start the dev server (hot reload)
```

Open the URL it prints (usually http://localhost:5173). Edits save and refresh instantly.

Other scripts:

```bash
npm run build    # production build into dist/
npm run preview  # serve the production build locally to check it
npm run lint     # run ESLint
```

---

## 2. Where to edit your content

All editable copy is centralized in **`src/data/`**. You shouldn't need to touch component files for normal updates.

| File | What's in it |
|------|--------------|
| `src/data/site.js` | Your **name, title, bio, email, and social links**. Start here. |
| `src/data/publications.js` | The **Research & Publications** list. Each entry is one object; copy the template block to add more. |
| `src/data/projects.js` | The **Maker Projects** cards, including YouTube video IDs. Copy the template block to add more. |

Each data file has commented instructions and a copy-paste template at the bottom.

Placeholders are written as `[YOUR NAME]`, `[PUBLICATION TITLE]`, etc. — do a project-wide find/replace to swap in your real details.

To leave a social link off entirely, set it to an empty string `""` in `site.js` (e.g. `scholar: ""`) — empty links are automatically hidden.

---

## 3. Adding photos and videos

**Images** go in `src/assets/images/`. Import the image at the top of the relevant data file and reference it:

```js
import profile from "../assets/images/profile.webp";
// ...then in the data:  profileImage: profile,
```

Until you add a real image, the site shows a styled placeholder automatically.

Recommended sizes (keep files small for fast loading):

| Use | Aspect | Suggested size | Format | Target weight |
|-----|--------|----------------|--------|---------------|
| Profile photo (`site.js`) | 4:5 portrait | ~800 × 1000 px | `.webp` or `.jpg` | < 300 KB |
| Project image (`projects.js`) | 16:9 | ~1600 × 900 px | `.webp` or `.jpg` | < 400 KB |

**YouTube videos**: in `projects.js`, set the `youtubeId` field to the video's ID — the part after `v=` in a URL like `https://www.youtube.com/watch?v=dQw4w9WgXcQ` (here the ID is `dQw4w9WgXcQ`). A responsive 16:9 player appears automatically. Leave it `""` to show the image instead.

---

## 4. Deploy to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and publishes the site automatically every time you push to `main`.

**One-time setup:**

1. **Set the base path.** Open `vite.config.js` and change `REPO-NAME` to your repository's name:
   ```js
   base: "/my-portfolio/",   // for https://<username>.github.io/my-portfolio/
   ```
   If you're using a `<username>.github.io` repo or a custom domain, set `base: "/"` instead (see the comments in that file).

2. **Create a GitHub repo** and push this project to it:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo-name>.git
   git push -u origin main
   ```

3. **Enable Pages.** In your repo on GitHub: **Settings → Pages → Build and deployment → Source → "GitHub Actions"**.

That's it. The workflow runs on push; when it finishes (Actions tab → green check), your site is live at `https://<username>.github.io/<repo-name>/`.

**To update the site later**, just commit and push:

```bash
git add .
git commit -m "Update bio and add new project"
git push
```

The site rebuilds and redeploys automatically.
# portfolio
