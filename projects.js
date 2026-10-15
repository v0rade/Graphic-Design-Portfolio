/* ==========================================================================
   PORTFOLIO CONTENT — edit this file to personalise the site.
   Projects with status: "pending" are hidden until their image exists.
   ========================================================================== */

window.SITE = {
  name: "Your Name",
  role: "Graphic Designer & Art Director",
  location: "Available worldwide",
  email: "hello@yourname.com",
  links: [
    { label: "Behance", url: "#" },
    { label: "Instagram", url: "#" },
    { label: "LinkedIn", url: "#" },
    { label: "Download CV", url: "#" }
  ],
  disciplines: [
    "Brand Identity", "Poster Design", "Packaging", "Editorial",
    "Art Direction", "Typography", "Campaigns", "Illustration"
  ],
  statement:
    "I design visual systems that feel <em>made</em>, not manufactured — built on typography, grids and the honest textures of print.",
  services: [
    "Brand Identity Systems", "Packaging Design", "Editorial & Publication",
    "Poster & Print", "Campaign & Social", "Art Direction"
  ],
  tools: [
    "Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign",
    "Figma", "Risograph & Screen Print", "Letterpress"
  ],
  experience: [
    { role: "Freelance Designer", place: "Independent", years: "2023 — Now" },
    { role: "Graphic Designer", place: "Studio Name", years: "2021 — 2023" },
    { role: "Junior Designer", place: "Agency Name", years: "2019 — 2021" }
  ]
};

window.CATEGORIES = [
  { id: "posters", label: "Posters" },
  { id: "identity", label: "Identity" },
  { id: "packaging", label: "Packaging" },
  { id: "editorial", label: "Editorial & Print" },
  { id: "campaign", label: "Campaign" },
  { id: "illustration", label: "Illustration" },
  { id: "logos", label: "Logos" },
  { id: "movements", label: "Retro & Movements" }
];

const W = "assets/work/";

window.PROJECTS = [
  /* ---------- POSTERS ---------- */
  {
    id: "low-tide-sessions", title: "Low Tide Sessions", category: "posters",
    client: "Low Tide Sessions Festival", discipline: "Festival Poster", year: "2026",
    images: [W + "low-tide-sessions.jpg"],
    summary: "Festival poster printed as a two-colour risograph. A stacked condensed headline is interrupted by a striped waveform; where fluorescent pink and teal overlap, a third ink appears — the tide made visible.",
    tags: ["Risograph", "Typography", "Swiss Grid"]
  },
  {
    id: "kinetic-bodies", title: "Kinetic Bodies", category: "posters",
    client: "Theatre Nova", discipline: "Performance Poster", year: "2026",
    images: [W + "kinetic-bodies.jpg"],
    summary: "Poster for a contemporary dance season. A coarse halftone dancer leaps across a flat red disc while the vertical title anchors the frame like a stage wing.",
    tags: ["Halftone", "Photography", "Wheatpaste"]
  },
  {
    id: "salt-and-clay", title: "Salt & Clay", category: "posters",
    client: "Museum of Craft", discipline: "Exhibition Poster", year: "2025",
    images: [W + "salt-and-clay.jpg"],
    summary: "An exhibition poster built on restraint: one vessel, one rule, one serif. Generous negative space lets the speckled glaze carry the story.",
    tags: ["Minimalism", "Serif Typography", "Still Life"]
  },
  {
    id: "atelier-nord", title: "Atelier Nord", category: "posters", status: "pending",
    client: "Atelier Nord", discipline: "Fashion Week Poster", year: "2026",
    images: [W + "atelier-nord.jpg"],
    summary: "Runway poster for an AW27 show. Monumental cropped serif letters bleed off the sheet behind a cool, overcast editorial portrait.",
    tags: ["Fashion", "Editorial Photography", "Display Serif"]
  },

  /* ---------- IDENTITY ---------- */
  {
    id: "morrow", title: "Morrow", category: "identity",
    client: "Morrow Coffee Roasters", discipline: "Brand Identity", year: "2026",
    images: [W + "morrow.jpg"],
    summary: "Identity for a small-batch roaster. The mark — a sun rising over the horizon, split like a coffee bean — anchors a warm palette of terracotta, cream, espresso and sage across packaging, cups and stationery.",
    tags: ["Logo", "Packaging", "Stationery", "Colour System"]
  },
  {
    id: "halden", title: "Halden", category: "identity",
    client: "Halden Architects", discipline: "Visual Identity", year: "2025",
    images: [W + "halden.jpg"],
    summary: "A strictly monochrome system for an architecture practice. The H is assembled from offset rectangles — plans and sections reduced to a symbol — and applied through blind emboss, cloth-bound monographs and black stock.",
    tags: ["Monochrome", "Emboss", "Print Production"]
  },
  {
    id: "pulso", title: "Pulso", category: "identity",
    client: "Pulso Community Radio", discipline: "Brand Identity", year: "2026",
    images: [W + "pulso.jpg"],
    summary: "A loud, friendly identity for a neighbourhood radio station. The lowercase p becomes a broadcast wave, and an electric orange and cobalt palette scales from mic flags to merch to the listening app.",
    tags: ["Logo", "Merchandise", "App Icon", "Pattern"]
  },

  /* ---------- PACKAGING ---------- */
  {
    id: "wildbrine", title: "Wildbrine", category: "packaging",
    client: "Wildbrine Ferments", discipline: "Beverage Packaging", year: "2026",
    images: [W + "wildbrine.jpg"],
    summary: "Can range for a sparkling fermented tonic. Each flavour owns a flat, saturated colour, paired with a condensed wordmark and single-line botanical drawings that read clearly from a fridge door.",
    tags: ["Can Design", "Illustration", "Flavour System"]
  },
  {
    id: "mirelle", title: "Mirelle", category: "packaging",
    client: "Mirelle Skin", discipline: "Skincare Packaging", year: "2025",
    images: [W + "mirelle.jpg"],
    summary: "Quiet, apothecary-inspired packaging. A fine serif wordmark, numbered formulas and amber glass make up a calm, tactile range.",
    tags: ["Skincare", "Label Design", "Art Direction"]
  },
  {
    id: "sundaze", title: "Sundaze", category: "packaging", status: "pending",
    client: "Sundaze Foods", discipline: "Food Packaging", year: "2026",
    images: [W + "sundaze.jpg"],
    summary: "Breakfast boxes in 1970s rainbow arcs and soft, bubbly serifs — nostalgic, warm and made to stand out on a supermarket shelf.",
    tags: ["Retro", "Food", "Box Design"]
  },
  {
    id: "nocta", title: "Nocta", category: "packaging", status: "pending",
    client: "Nocta Cosmetics", discipline: "Cosmetics Packaging", year: "2026",
    images: [W + "nocta.jpg"],
    summary: "Matte lipsticks and compacts in oxblood and blush, with a debossed geometric N.",
    tags: ["Cosmetics", "Deboss", "Monogram"]
  },
  {
    id: "ember-oak", title: "Ember & Oak", category: "packaging", status: "pending",
    client: "Ember & Oak", discipline: "Lifestyle Packaging", year: "2025",
    images: [W + "ember-oak.jpg"],
    summary: "Ceramic candle vessels with letterpress labels on cotton paper. Numbered scents and a classical serif suggest a slow, crafted ritual.",
    tags: ["Letterpress", "Lifestyle", "Label Design"]
  },

  /* ---------- EDITORIAL & PRINT ---------- */
  {
    id: "periphery", title: "Periphery", category: "editorial",
    client: "Periphery Quarterly", discipline: "Magazine Design", year: "2026",
    images: [W + "periphery.jpg", W + "periphery-2.jpg"],
    summary: "Art direction and layout for Issue 12 of an architecture quarterly, “The Edge of Cities”. A wide grotesk masthead and oversized issue number frame the photography; inside, serif pull quotes sit over a disciplined three-column grid.",
    tags: ["Magazine", "Layout", "Grid Systems", "InDesign"]
  },
  {
    id: "make-break-repeat", title: "Make / Break / Repeat", category: "editorial", status: "pending",
    client: "Self-initiated", discipline: "Letterpress Poster", year: "2025",
    images: [W + "make-break-repeat.jpg"],
    summary: "A hand-set wood-type poster in black and vermilion. Deep impression and uneven ink keep the process visible in the print.",
    tags: ["Letterpress", "Wood Type", "Experimental"]
  },
  {
    id: "overprint-study", title: "Overprint Study 04", category: "editorial", status: "pending",
    client: "Self-initiated", discipline: "Screen Print", year: "2025",
    images: [W + "overprint-study.jpg"],
    summary: "Three spot colours, a handful of geometric forms and the new colours that appear where they overlap.",
    tags: ["Screen Print", "Colour", "Swiss"]
  },

  /* ---------- CAMPAIGN ---------- */
  {
    id: "stride-club", title: "Stride Club", category: "campaign",
    client: "Stride Club", discipline: "Social Campaign", year: "2026",
    images: [W + "stride-club.jpg"],
    summary: "“Run The City” — a social grid system for an urban running crew. Volt-yellow type tiles, grainy black-and-white street photography and solid colour blocks make up a rhythm that holds together scrolling or viewed as a full grid.",
    tags: ["Social Media", "Campaign", "Art Direction"]
  },
  {
    id: "loop", title: "Loop", category: "campaign", status: "pending",
    client: "Loop Bike Share", discipline: "Out-of-Home", year: "2026",
    images: [W + "loop.jpg"],
    summary: "“Skip the traffic.” A billboard campaign in flat vector illustration, with mint, navy and coral and one confident line of copy.",
    tags: ["Billboard", "Illustration", "Copy"]
  },
  {
    id: "midnight-market", title: "Midnight Market", category: "campaign", status: "pending",
    client: "Midnight Market", discipline: "Digital Banners", year: "2025",
    images: [W + "midnight-market.jpg"],
    summary: "A responsive banner suite for a night food market, with hand-drawn stalls and lanterns adapted across every ad format.",
    tags: ["Digital Ads", "Illustration", "System Design"]
  },

  /* ---------- ILLUSTRATION ---------- */
  {
    id: "bust-landscape", title: "Bust / Landscape", category: "illustration", status: "pending",
    client: "Self-initiated", discipline: "Analog Collage", year: "2025",
    images: [W + "bust-landscape.jpg"],
    summary: "A surreal mixed-media collage: a classical engraving opens into mountains and clouds, held together by torn paper, halftone and flat colour.",
    tags: ["Collage", "Mixed Media", "Surreal"]
  },
  {
    id: "rooftop-dusk", title: "Rooftop at Dusk", category: "illustration", status: "pending",
    client: "Self-initiated", discipline: "Vector Illustration", year: "2026",
    images: [W + "rooftop-dusk.jpg"],
    summary: "A five-colour vector illustration with grain brushes: a rooftop garden at sunset, drawn in simple geometric shapes.",
    tags: ["Vector", "Illustrator", "Texture"]
  },

  /* ---------- LOGOS ---------- */
  {
    id: "marks-symbols", title: "Marks & Symbols", category: "logos", status: "pending",
    client: "Various", discipline: "Logo Collection", year: "2020 — 2026",
    images: [W + "marks-symbols.jpg"],
    summary: "A selection of twelve logomarks — geometric symbols, monograms and abstract forms drawn for clients and self-initiated briefs.",
    tags: ["Logo Design", "Symbols", "Monograms"]
  },
  {
    id: "ar-monogram", title: "AR Monogram", category: "logos", status: "pending",
    client: "Arden & Rowe", discipline: "Monogram Study", year: "2026",
    images: [W + "ar-monogram.jpg"],
    summary: "Six iterations and the construction of a final AR monogram, refined on a geometric grid of circles and golden-ratio guides.",
    tags: ["Monogram", "Construction", "Process"]
  },

  /* ---------- RETRO & MOVEMENTS ---------- */
  {
    id: "jazz-nights", title: "Jazz Nights", category: "movements",
    client: "Konzerthaus", discipline: "Swiss Style Poster", year: "2025",
    images: [W + "jazz-nights.jpg"],
    summary: "A homage to the International Typographic Style: an asymmetric grid, lowercase grotesk and concentric red and black arcs that break apart like syncopated rhythm.",
    tags: ["Swiss Design", "Grid", "Two Colour"]
  },
  {
    id: "raw-signal", title: "Raw Signal", category: "movements",
    client: "Raw Signal Lectures", discipline: "Brutalist Poster", year: "2026",
    images: [W + "raw-signal.jpg"],
    summary: "Poster for an underground lecture series on noise. The construction grid is left exposed, the type is monospaced and the photocopy toner is intentional — interrupted by a single acid-green block.",
    tags: ["Brutalism", "Monospace", "Photocopy"]
  },
  {
    id: "nightshift", title: "Nightshift", category: "movements", status: "pending",
    client: "Nightshift Supply", discipline: "Streetwear Graphics", year: "2026",
    images: [W + "nightshift.jpg"],
    summary: "A deck and tee drop with a screen-printed crescent and a blocky stencil wordmark in off-white and safety orange.",
    tags: ["Streetwear", "Screen Print", "Apparel"]
  },
  {
    id: "matchbooks", title: "Matchbook Series", category: "movements", status: "pending",
    client: "Self-initiated", discipline: "Vintage Labels", year: "2025",
    images: [W + "matchbooks.jpg"],
    summary: "Six matchbox labels for imagined hotels and bars, in letterpress on aged stock with script, slab and art deco lettering.",
    tags: ["Vintage", "Letterpress", "Lettering"]
  }
];
