/* ============================================================
   Home page logic — grid, search, filters, categories, verses
   ============================================================ */

(function () {
  const grid = document.getElementById("grid");
  const chipsEl = document.getElementById("chips");
  const searchEl = document.getElementById("search");
  const countEl = document.getElementById("resultCount");

  let activeTag = "All";
  let query = "";

  /* ---------- card markup ---------- */
  function cardHTML(s) {
    const fav = isFavorite(s.id);
    const grad = `background:linear-gradient(135deg, ${s.colors[0]}, ${s.colors[1]})`;
    return `
      <a class="story-card reveal" href="story.html?id=${encodeURIComponent(s.id)}"
         data-id="${s.id}" aria-label="${esc(s.title)}">
        <div class="card-art" style="${grad}">
          <span class="card-badge">${esc(s.testament)}</span>
          <button class="card-fav" type="button" data-fav="${s.id}"
                  aria-pressed="${fav}" aria-label="${fav ? "Remove from" : "Add to"} favorites">
            ${heartIcon(fav)}
          </button>
          ${ICONS[s.icon] || ""}
        </div>
        <div class="card-body">
          <h3>${esc(s.title)}</h3>
          <p>${esc(s.summary)}</p>
          <div class="card-meta">
            <span class="dot">${esc(s.verseRef)}</span>
            <span>${s.minutes} min</span>
            <span>Ages ${esc(s.age)}</span>
          </div>
        </div>
      </a>`;
  }

  /* ---------- filtering ---------- */
  function filtered() {
    const q = query.trim().toLowerCase();
    return STORIES.filter((s) => {
      const tagOk =
        activeTag === "All" ||
        (activeTag === "Favorites" && isFavorite(s.id)) ||
        s.testament === activeTag ||
        s.category === activeTag;
      if (!tagOk) return false;
      if (!q) return true;
      const hay = [s.title, s.summary, s.category, s.testament, s.verseRef, s.verse, s.lesson]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }

  function render() {
    const list = filtered();
    if (!list.length) {
      grid.innerHTML = `
        <div class="empty-state">
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
            <circle cx="28" cy="28" r="18"/><path d="M41 41l14 14M22 28h12M28 22v12"/>
          </svg>
          <p><strong>No stories match that search.</strong><br/>Try a different word like “fish”, “courage”, or “Jesus”.</p>
        </div>`;
    } else {
      grid.innerHTML = list.map(cardHTML).join("");
    }
    countEl.textContent = `Showing ${list.length} of ${STORIES.length} stories`;
    requestAnimationFrame(() =>
      grid.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"))
    );
    wireFavs(grid);
  }

  function wireFavs(root) {
    root.querySelectorAll("[data-fav]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const added = toggleFavorite(btn.dataset.fav);
        btn.setAttribute("aria-pressed", String(added));
        btn.innerHTML = heartIcon(added);
        const s = STORY_MAP[btn.dataset.fav];
        showToast(added ? `Added "${s.title}" to favorites` : `Removed "${s.title}" from favorites`);
        if (activeTag === "Favorites") render();
      });
    });
  }

  /* ---------- chips ---------- */
  function renderChips() {
    const options = [
      { tag: "All", label: "All" },
      { tag: "Old Testament", label: "Old Testament" },
      { tag: "New Testament", label: "New Testament" },
      { tag: "Miracles", label: "Miracles" },
      { tag: "Courage", label: "Courage" },
      { tag: "Kindness", label: "Kindness" },
      { tag: "Jesus", label: "Jesus" },
      { tag: "Favorites", label: "Favorites" }
    ];
    chipsEl.innerHTML = options
      .map(
        (o) =>
          `<button class="chip" type="button" data-tag="${o.tag}" aria-pressed="${o.tag === activeTag}">${o.label}</button>`
      )
      .join("");
    chipsEl.querySelectorAll(".chip").forEach((c) =>
      c.addEventListener("click", () => {
        activeTag = c.dataset.tag;
        chipsEl.querySelectorAll(".chip").forEach((x) =>
          x.setAttribute("aria-pressed", String(x.dataset.tag === activeTag))
        );
        render();
      })
    );
  }

  /* ---------- categories section ---------- */
  const catSvg = (path, color) =>
    `<svg width="26" height="26" viewBox="0 0 64 64" fill="none" stroke="${color}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;

  const CAT_META = {
    "Old Testament": {
      color: "#b7791f", bg: "#fff3d6",
      svg: catSvg('<path d="M14 10h30a6 6 0 0 1 6 6v38H20a6 6 0 0 1-6-6V10z"/><path d="M14 48h36"/>', "#b7791f")
    },
    "New Testament": {
      color: "#6b46c1", bg: "#e7e0ff",
      svg: catSvg('<path d="M32 8v48M18 22h28"/>', "#6b46c1")
    },
    Miracles: {
      color: "#2b7cb8", bg: "#dff3ff",
      svg: catSvg('<path d="M6 24c5-5 10-5 15 0s10 5 15 0 10-5 15 0 4 4 7 4"/><path d="M6 36c5-5 10-5 15 0s10 5 15 0 10-5 15 0 4 4 7 4"/><path d="M6 48c5-5 10-5 15 0s10 5 15 0 10-5 15 0 4 4 7 4"/>', "#2b7cb8")
    },
    Courage: {
      color: "#c2740c", bg: "#fff0d9",
      svg: catSvg('<circle cx="32" cy="32" r="15"/><path d="M32 6v6M32 52v6M6 32h6M52 32h6M14 14l4 4M46 46l4 4M50 14l-4 4M18 46l-4 4"/>', "#c2740c")
    },
    Kindness: {
      color: "#d64563", bg: "#ffe9ec",
      svg: catSvg('<path d="M32 54S8 40 8 24a12 12 0 0 1 24-4 12 12 0 0 1 24 4c0 16-24 30-24 30z"/>', "#d64563")
    },
    Jesus: {
      color: "#4a7c1f", bg: "#f1ffe4",
      svg: catSvg('<path d="M32 6l7.5 15.5L56 24l-12 11.5L46.5 52 32 44l-14.5 8L20 35.5 8 24l16.5-2.5L32 6z"/>', "#4a7c1f")
    },
    Beginning: {
      color: "#d97706", bg: "#ffe9d1",
      svg: catSvg('<circle cx="32" cy="34" r="11"/><path d="M32 10v6M32 54v4M10 34h6M48 34h6M16 18l4 4M44 46l4 4M48 18l-4 4M20 46l-4 4"/><path d="M8 58h48"/>', "#d97706")
    },
    Adventure: {
      color: "#0369a1", bg: "#e2f4ff",
      svg: catSvg('<path d="M8 40h48l-6 12H14L8 40z"/><path d="M18 40V26l22 6V14l10 6v14"/>', "#0369a1")
    },
    Family: {
      color: "#db2777", bg: "#ffe9f3",
      svg: catSvg('<circle cx="20" cy="20" r="7"/><circle cx="44" cy="20" r="7"/><circle cx="32" cy="42" r="8"/><path d="M8 52c0-7 5-12 12-12M56 52c0-7-5-12-12-12M20 54c0-7 5-13 12-13s12 6 12 13"/>', "#db2777")
    },
    "Jesus' Teachings": {
      color: "#65a30d", bg: "#eefbd9",
      svg: catSvg('<path d="M18 40a8 8 0 0 1-2-15.6A9 9 0 0 1 34 20a8 8 0 0 1 14 4 8 8 0 0 1-2 15.6"/><path d="M18 40h28a6 6 0 0 1 0 12H24l-6-4-4-4a5 5 0 0 1 4-8z"/><path d="M22 44v8M40 44v8"/>', "#65a30d")
    }
  };

  function renderCategories() {
    const cats = [...new Set(STORIES.flatMap((s) => [s.testament, s.category]))];
    document.getElementById("catGrid").innerHTML = cats
      .map((c) => {
        const n = STORIES.filter(
          (s) => s.testament === c || s.category === c
        ).length;
        const meta = CAT_META[c] || { svg: catSvg('<path d="M14 10h30a6 6 0 0 1 6 6v38H20a6 6 0 0 1-6-6V10z"/>', "#8a94ab"), bg: "#f4f0e8" };
        return `<a class="cat-card" href="#stories" data-cat="${esc(c)}">
            <span class="cat-emoji" style="background:${meta.bg}">${meta.svg}</span>
            ${esc(c)}
            <span>${n} ${n === 1 ? "story" : "stories"}</span>
          </a>`;
      })
      .join("");

    document.querySelectorAll("[data-cat]").forEach((a) =>
      a.addEventListener("click", () => {
        activeTag = a.dataset.cat;
        chipsEl.querySelectorAll(".chip").forEach((x) =>
          x.setAttribute("aria-pressed", String(x.dataset.tag === activeTag))
        );
        render();
      })
    );
  }

  /* ---------- verse of the day ---------- */
  const VERSES = [
    { text: "I can do all things through Christ who strengthens me.", ref: "Philippians 4:13" },
    { text: "The LORD is my shepherd; I shall not want.", ref: "Psalm 23:1" },
    { text: "Trust in the LORD with all your heart.", ref: "Proverbs 3:5" },
    { text: "Let the little children come to me.", ref: "Matthew 19:14" },
    { text: "God is love.", ref: "1 John 4:8" },
    { text: "I am with you always, to the end of the age.", ref: "Matthew 28:20" },
    { text: "Be strong and courageous; do not be afraid.", ref: "Joshua 1:9" },
    { text: "Your word is a lamp to my feet and a light to my path.", ref: "Psalm 119:105" }
  ];
  let vIndex = 0;

  function showVerse(i) {
    const band = document.querySelector(".verse-band");
    band.querySelector("blockquote").textContent = `“${VERSES[i].text}”`;
    band.querySelector("cite").textContent = VERSES[i].ref;
  }

  /* ---------- init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    const preset = sessionStorage.getItem("llbs-filter");
    if (preset && [...new Set(STORIES.flatMap((s) => [s.testament, s.category]))].includes(preset)) {
      activeTag = preset;
      sessionStorage.removeItem("llbs-filter");
    }

    renderChips();
    renderCategories();
    render();

    let debounce;
    searchEl.addEventListener("input", () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        query = searchEl.value;
        render();
      }, 140);
    });

    document.getElementById("newVerse").addEventListener("click", () => {
      vIndex = (vIndex + 1) % VERSES.length;
      showVerse(vIndex);
    });

    document.getElementById("year").textContent = new Date().getFullYear();
  });
})();
