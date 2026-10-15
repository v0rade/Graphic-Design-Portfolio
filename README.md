# Selected Works — Contemporary Graphic Design & Art Direction Portfolio

[![Live Deployment](https://img.shields.io/badge/Live_App-design--alpha--mauve.vercel.app-FF4A1C?style=for-the-badge&logo=vercel&logoColor=white)](https://design-alpha-mauve.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-121212?style=for-the-badge&logo=github&logoColor=white)](https://github.com/v0rade/Graphic-Design-Portfolio)
[![Tech Stack](https://img.shields.io/badge/Stack-Vanilla_HTML5_/_CSS3_/_ES6-2bb55a?style=for-the-badge)](https://design-alpha-mauve.vercel.app/)

A professional graphic design portfolio and creative studio showcase built with contemporary editorial art direction, Swiss typographic discipline, and zero runtime dependencies. Designed for pairing clean visual hierarchy with authentic print textures and identity systems.

---

## 🌐 Live Demo & Deployment

**Production URL:** [https://design-alpha-mauve.vercel.app/](https://design-alpha-mauve.vercel.app/)

The site is deployed continuously on Vercel from the `main` branch. Any commit pushed to GitHub automatically triggers an instantaneous static build and global CDN rollout.

---

## 🧪 App Test & Live Audit Report

Automated and visual testing performed directly on the live production deployment (`https://design-alpha-mauve.vercel.app/`):

| Test Category | Target / Feature | Result | Notes |
|---|---|---|---|
| **HTTP Status Code** | Core HTML (`/`) | `200 OK` | Served with UTF-8 encoding via Vercel Edge |
| **Stylesheets** | `/styles.css` | `200 OK` | Fluid typography, dark mode accents, responsive breakpoints |
| **Script Bundles** | `/app.js`, `/projects.js` | `200 OK` | Zero dependencies; modular project data |
| **Image Assets** | 13 High-res Artwork Files (`/assets/work/*.jpg`) | `200 OK` | All project photographs & mockups loaded cleanly with no 404s |
| **Routing / Deep Links** | `#project/{id}` (e.g. `#project/periphery`) | `Pass` | Modal opens directly on direct URL access or browser refresh |
| **Keyboard Navigation** | `Esc` (Close), `←` / `→` (Prev/Next) | `Pass` | Full modal navigation without requiring mouse clicks |
| **Scroll Reveal** | `IntersectionObserver` Card Reveals | `Pass` | Lazy loading with hardware-accelerated transforms |
| **Responsive Grid** | Mobile (390px) to Desktop (1440px+) | `Pass` | Dynamic multi-column masonry adapts across all screen widths |

---

## 🎨 Featured Design Disciplines & Projects

All projects in this portfolio feature original concepts, intentional art direction, and realistic print/editorial finishes:

### 1. Posters & Cultural Events
* **Low Tide Sessions:** Two-color risograph poster for an electronic music festival in Amsterdam. Fluorescent pink and teal overprinted on uncoated deckled paper with a Swiss typographic grid and sinusoidal wave interference.
* **Kinetic Bodies:** Contemporary dance performance poster wheatpasted on urban concrete. Coarse halftone dot action photography overprinted against a cadmium red disc.
* **Salt & Clay:** Exhibition poster for contemporary ceramics. Restrained high-contrast display serif typography with ample negative space and studio still-life photography.

### 2. Brand Identity Systems
* **Morrow Coffee Roasters:** Warm tactile visual identity for a specialty roaster featuring an espresso-bean rising sun emblem, kraft packaging, linen stationery, and an earthy terracotta/sage color system.
* **Halden Architects:** Strict monochrome identity on cast concrete. Architectural logo mark constructed from offset rectangles, blind-embossed stationery, and hard-cover monographs.
* **Pulso Community Radio:** Energetic, loud brand system with an electric orange and cobalt blue palette, customized *p*-soundwave wordmark, studio-shot tote bags, badge pins, and app interface.

### 3. Packaging Design
* **Wildbrine Fermented Tonics:** Aluminum beverage cans in saturated chartreuse, coral, and ultramarine. Heavy condensed typography combined with delicate single-line botanical illustrations.
* **Mirelle Skincare:** Minimalist apothecary aesthetic featuring frosted amber glass dropper bottles, travertine stone styling, fine serif type, and numbered botanical formulas.

### 4. Editorial & Publications
* **Periphery Magazine (Issue 12 — "The Edge of Cities"):** Independent architecture quarterly featuring brutalist cover photography, extended grotesque masthead, multi-column editorial grid, and high-impact pull-quote spreads.

### 5. Social & Campaigns
* **Stride Club — "Run The City":** High-energy social grid campaign combining safety-volt typography tiles, high-contrast black-and-white city running photography, and color-blocked graphic accents.

### 6. Design Movements & Brutalism
* **Jazz Nights (Swiss International Style):** Strict asymmetric grid, concentric soundwave geometry, and lowercase neo-grotesque type in black and vermilion.
* **Raw Signal (Brutalist Lecture Series):** Exposed layout grids, monospaced typography, photocopy toner bleed, and an acid-green accent field.

---

## 🛠️ Architecture & Tech Stack

* **No Framework Overhead:** Built strictly using semantic HTML5, modern CSS3, and ES6 JavaScript. Instant time-to-first-byte (TTFB) and zero bundle installation step.
* **Typography:**
  * Sans-Serif: [Inter Tight](https://fonts.google.com/specimen/Inter+Tight) (Swiss clarity & geometric stability)
  * Serif: [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) (Editorial rhythm & warmth)
* **CSS Multi-Column Masonry:** Native CSS columns prevent layout shift while gracefully handling different aspect ratios (2:3 posters, 3:2 flatlays, 4:5 editorial, and square crops).
* **Accessible Modal System:** Focus-trapping modal with ARIA attributes (`role="dialog"`, `aria-modal="true"`) and scroll locking on `<body>`.

---

## 📁 Repository Structure

```
Graphic-Design-Portfolio/
├── index.html              # Semantic HTML markup & modal shell
├── styles.css              # Editorial typography, grid, modal & mobile styles
├── app.js                  # View logic, filtering, deep-linking, keyboard handlers
├── projects.js             # Centralized site settings & project metadata
├── README.md               # Project documentation & test verification
└── assets/
    └── work/               # High-resolution portfolio imagery
        ├── halden.jpg
        ├── jazz-nights.jpg
        ├── kinetic-bodies.jpg
        ├── low-tide-sessions.jpg
        ├── mirelle.jpg
        ├── morrow.jpg
        ├── periphery.jpg
        ├── periphery-2.jpg
        ├── pulso.jpg
        ├── raw-signal.jpg
        ├── salt-and-clay.jpg
        ├── stride-club.jpg
        └── wildbrine.jpg
```

---

## ⚙️ How to Personalize

To adapt this portfolio for your own name and works, edit **`projects.js`**:

1. **Personal Information:**
   ```javascript
   window.SITE = {
     name: "Your Name",
     role: "Graphic Designer & Art Director",
     email: "hello@yourname.com",
     ...
   };
   ```
2. **Adding or Modifying Projects:**
   Add new items or edit existing objects in the `window.PROJECTS` array:
   ```javascript
   {
     id: "my-project-id",
     title: "Project Title",
     category: "posters", // posters | identity | packaging | editorial | campaign | movements
     client: "Client Name",
     discipline: "Festival Poster",
     year: "2026",
     images: ["assets/work/my-image.jpg"],
     summary: "Short project description...",
     tags: ["Typography", "Grid"]
   }
   ```
3. Commit and push:
   ```bash
   git add projects.js
   git commit -m "Update profile details"
   git push origin main
   ```
   Vercel will redeploy your changes automatically within seconds.

---

## 📄 License

Original design concepts and template codebase are open-source and available under the [MIT License](LICENSE).
