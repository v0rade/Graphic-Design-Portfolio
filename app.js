/* ==========================================================================
   Portfolio — behaviour (no dependencies)
   ========================================================================== */
(() => {
  const S = window.SITE;
  const CATS = window.CATEGORIES;
  const ALL = window.PROJECTS.filter(p => p.status !== "pending");
  const $ = (s, el = document) => el.querySelector(s);
  const pad = n => String(n).padStart(2, "0");
  const catLabel = id => (CATS.find(c => c.id === id) || {}).label || id;

  // Stable display numbers based on order of visible projects
  ALL.forEach((p, i) => (p.no = pad(i + 1)));

  /* ---------- Site text ---------- */
  document.querySelectorAll("[data-site]").forEach(el => {
    const v = S[el.dataset.site];
    if (v) el.textContent = v;
  });
  document.title = `${S.name} — ${S.role}`;
  const yr = new Date().getFullYear();
  $("#year").textContent = yr;
  $("#footYear").textContent = yr;

  const items = [...S.disciplines, ...S.disciplines];
  $("#ticker").innerHTML = items.map(w => `<span>${w}</span>`).join("");

  $("#statement").innerHTML = S.statement;
  $("#services").innerHTML = S.services.map(s => `<li>${s}</li>`).join("");
  $("#tools").innerHTML = S.tools.map(s => `<li>${s}</li>`).join("");
  $("#experience").innerHTML = S.experience
    .map(e => `<li>${e.role}<small>${e.place} · ${e.years}</small></li>`).join("");

  const mail = $("#mail");
  mail.textContent = S.email;
  mail.href = `mailto:${S.email}`;
  $("#links").innerHTML = S.links
    .map(l => `<a href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`).join("");

  /* ---------- Header state ---------- */
  const header = $("#header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Filters ---------- */
  let active = "all";
  let visible = ALL;
  const counts = ALL.reduce((m, p) => ((m[p.category] = (m[p.category] || 0) + 1), m), {});
  const filterDefs = [{ id: "all", label: "All" }, ...CATS.filter(c => counts[c.id])];
  const filtersEl = $("#filters");
  filtersEl.innerHTML = filterDefs.map(f => `
    <button class="filter" role="tab" data-filter="${f.id}" aria-selected="${f.id === active}">
      ${f.label}<sup>${f.id === "all" ? ALL.length : counts[f.id]}</sup>
    </button>`).join("");
  filtersEl.addEventListener("click", e => {
    const b = e.target.closest(".filter");
    if (!b || b.dataset.filter === active) return;
    active = b.dataset.filter;
    filtersEl.querySelectorAll(".filter")
      .forEach(x => x.setAttribute("aria-selected", x.dataset.filter === active));
    render();
  });

  /* ---------- Grid ---------- */
  const grid = $("#grid");
  const io = "IntersectionObserver" in window
    ? new IntersectionObserver(entries => entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      }), { rootMargin: "0px 0px -8% 0px" })
    : null;

  function render() {
    visible = active === "all" ? ALL : ALL.filter(p => p.category === active);
    $("#workCount").textContent = `(${pad(visible.length)})`;
    grid.innerHTML = visible.map(p => `
      <article class="card reveal" tabindex="0" data-id="${p.id}" aria-label="Open project: ${p.title}">
        <figure><img src="${p.images[0]}" alt="${p.title} — ${p.discipline}" loading="lazy"></figure>
        <div class="card-meta">
          <span class="no">${p.no}</span>
          <h3>${p.title}</h3>
          <span class="disc">${p.discipline}</span>
        </div>
      </article>`).join("");
    grid.querySelectorAll(".card").forEach(c => (io ? io.observe(c) : c.classList.add("in")));
  }
  render();

  grid.addEventListener("click", e => {
    const c = e.target.closest(".card");
    if (c) openProject(c.dataset.id, true);
  });
  grid.addEventListener("keydown", e => {
    const c = e.target.closest(".card");
    if (c && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openProject(c.dataset.id, true); }
  });

  /* ---------- Modal ---------- */
  const modal = $("#modal");
  let current = -1;
  let lastFocus = null;

  function fill(p) {
    $("#mNo").textContent = `${p.no} — ${catLabel(p.category)}`;
    $("#mTitle").textContent = p.title;
    $("#mClient").textContent = p.client;
    $("#mDisc").textContent = p.discipline;
    $("#mYear").textContent = p.year;
    $("#mSummary").textContent = p.summary;
    $("#mTags").innerHTML = (p.tags || []).map(t => `<li>${t}</li>`).join("");
    const media = $("#mMedia");
    media.scrollTop = 0;
    media.innerHTML = p.images
      .map((src, i) => `<img src="${src}" alt="${p.title} — image ${i + 1}">`).join("");
    media.querySelectorAll("img").forEach(img => {
      const done = () => img.classList.add("loaded");
      img.complete ? requestAnimationFrame(done) : img.addEventListener("load", done, { once: true });
    });
    modal.scrollTop = 0;
  }

  function openProject(id, push) {
    let list = visible;
    let idx = list.findIndex(p => p.id === id);
    if (idx < 0) { list = ALL; idx = ALL.findIndex(p => p.id === id); visible = list; }
    if (idx < 0) return;
    current = idx;
    fill(list[idx]);
    if (!modal.classList.contains("open")) {
      lastFocus = document.activeElement;
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("locked");
      $("#mClose").focus({ preventScroll: true });
    }
    const hash = `#project/${id}`;
    if (location.hash !== hash) history[push ? "pushState" : "replaceState"](null, "", hash);
  }

  function closeProject(fromPop) {
    if (!modal.classList.contains("open")) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("locked");
    if (!fromPop && location.hash.startsWith("#project/")) {
      history.pushState(null, "", location.pathname + location.search);
    }
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  }

  function step(dir) {
    if (current < 0) return;
    const next = (current + dir + visible.length) % visible.length;
    openProject(visible[next].id, false);
  }

  $("#mClose").addEventListener("click", () => closeProject(false));
  $("#mPrev").addEventListener("click", () => step(-1));
  $("#mNext").addEventListener("click", () => step(1));
  document.addEventListener("keydown", e => {
    if (!modal.classList.contains("open")) return;
    if (e.key === "Escape") closeProject(false);
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  });

  const fromHash = () => {
    const m = location.hash.match(/^#project\/(.+)$/);
    m ? openProject(decodeURIComponent(m[1]), false) : closeProject(true);
  };
  window.addEventListener("popstate", fromHash);
  fromHash();
})();
