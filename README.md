# Portfolio Website

A fast, dependency-free static portfolio site (HTML + CSS + JS).

## Preview
Double-click `index.html`, or open it in any browser.

## Personalise
Edit **`projects.js`** — you won't need to touch any other file:
- `SITE`: your name, role, email, social links, bio statement, services, tools and experience.
- `PROJECTS`: title, client, year, description and tags for each project.
  - Projects marked `status: "pending"` are hidden. Add the image to `assets/work/` and delete that line to publish the project.
  - A project can have several images: `images: [W + "a.jpg", W + "b.jpg"]`.

## Features
- Category filters with counts
- Masonry grid with scroll-reveal animation
- Full-screen project viewer; each project has its own link (`#project/morrow`)
- Keyboard support: ← → to move between projects, Esc to close
- Responsive layout; respects reduced-motion settings

## Publish (free)
- **Netlify Drop:** drag this folder onto https://app.netlify.com/drop
- **GitHub Pages:** push the folder to a repository → Settings → Pages → deploy from the `main` branch
- **Vercel:** `npx vercel` inside this folder
