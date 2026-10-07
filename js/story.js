/* ============================================================
   Story reader page — render, read-aloud, favorites, progress
   ============================================================ */

(function () {
  const topEl = document.getElementById("readerTop");
  const mainEl = document.getElementById("main");

  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const story = id ? STORY_MAP[id] : null;

  /* ---------- not found ---------- */
  if (!story) {
    document.title = "Story not found — Little Lights Bible Stories";
    topEl.innerHTML = "";
    mainEl.innerHTML = `
      <div class="not-found">
        <h1>Oops — that story wandered off</h1>
        <p style="color:var(--ink-soft);max-width:46ch;margin:0 auto 24px">
          We couldn't find that story. Maybe it's still out with the sheep — let's head back to the library.
        </p>
        <a class="btn btn-primary" href="index.html#stories">Back to all stories</a>
      </div>`;
    return;
  }

  document.title = `${story.title} — Little Lights Bible Stories`;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", story.summary);

  const idx = STORIES.indexOf(story);
  const prev = STORIES[(idx - 1 + STORIES.length) % STORIES.length];
  const next = STORIES[(idx + 1) % STORIES.length];
  const grad = `background:linear-gradient(135deg, ${story.colors[0]}, ${story.colors[1]})`;

  const related = STORIES.filter(
    (s) =>
      s.id !== story.id &&
      (s.testament === story.testament || s.category === story.category)
  ).slice(0, 4);

  /* ---------- top section ---------- */
  topEl.innerHTML = `
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="index.html">Home</a> <span aria-hidden="true">›</span>
      <a href="index.html#stories">Stories</a> <span aria-hidden="true">›</span>
      <a href="index.html#stories" data-filter="${esc(story.testament)}">${esc(story.testament)}</a>
      <span aria-hidden="true">›</span>
      <span aria-current="page">${esc(story.title)}</span>
    </nav>

    <div class="reader-hero">
      <div>
        <div class="reader-tags">
          <span class="tag accent">${esc(story.category)}</span>
          <span class="tag">${esc(story.testament)}</span>
          <span class="tag">Ages ${esc(story.age)}</span>
          <span class="tag">⏱ ${story.minutes} min read</span>
        </div>
        <h1>${esc(story.title)}</h1>
        <p class="reader-sub">${esc(story.summary)}</p>
      </div>
      <div class="reader-art" style="${grad}" aria-hidden="true">${ICONS[story.icon]}</div>
    </div>

    <div class="action-bar" role="group" aria-label="Story actions">
      <button class="action-btn" id="btnListen" aria-pressed="false">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a9 9 0 0 1 0 14"/></svg>
        <span id="listenLabel">Listen to story</span>
      </button>
      <button class="action-btn" id="btnFav" aria-pressed="false">
        <span id="favIcon"></span><span id="favLabel">Save to favorites</span>
      </button>
      <button class="action-btn" id="btnFont"><span id="fontLabel">Bigger text</span></button>
      <button class="action-btn" id="btnPrint">Print story</button>
      <button class="action-btn" id="btnShare">Share</button>
    </div>`;

  /* ---------- main content ---------- */
  mainEl.innerHTML = `
    <div class="story-layout">
      <article class="prose" id="story-body">
        <p class="summary">${esc(story.summary)}</p>
        ${story.body
          .map((p, i) => `<p class="body-text${i === 0 ? " drop" : ""}">${esc(p)}</p>`)
          .join("")}

        <div class="pull-verse">
          <p>“${esc(story.verse)}”</p>
          <cite>${esc(story.verseRef)}</cite>
        </div>

        <div class="box lesson">
          <div class="box-head">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/></svg>
            The Lesson
          </div>
          <div class="box-body"><p>${esc(story.lesson)}</p></div>
        </div>

        <div class="box lesson" style="margin-top:18px">
          <div class="box-head" style="background:var(--grape)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            Talk About It
          </div>
          <div class="box-body">
            <ul>${story.questions.map((q) => `<li>${esc(q)}</li>`).join("")}</ul>
          </div>
        </div>

        <div class="box activity">
          <div class="box-head">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            Try This Activity
          </div>
          <div class="box-body"><p>${esc(story.activity)}</p></div>
        </div>
      </article>

      <aside class="reader-side" aria-label="Story information">
        <div class="side-card">
          <h3>Reading Progress</h3>
          <div class="progress-wrap">
            <div class="progress-track"><div class="progress-fill" id="progressFill"></div></div>
            <span class="progress-label" id="progressLabel">0% read</span>
          </div>
        </div>

        <div class="side-card">
          <h3>Story Facts</h3>
          <ul class="fact-list">
            <li><b>Book reference</b><span>${esc(story.ref)}</span></li>
            <li><b>Testament</b><span>${esc(story.testament)}</span></li>
            <li><b>Theme</b><span>${esc(story.category)}</span></li>
            <li><b>Reading time</b><span>${story.minutes} min</span></li>
            <li><b>Best for</b><span>Ages ${esc(story.age)}</span></li>
          </ul>
        </div>

        <div class="side-card">
          <h3>Memory Verse</h3>
          <p style="font-family:var(--font-head);font-size:1.05rem;margin:0 0 8px">“${esc(story.verse)}”</p>
          <b style="font-size:.8rem;letter-spacing:.08em;text-transform:uppercase;color:var(--grape)">${esc(story.verseRef)}</b>
        </div>

        ${
          related.length
            ? `<div class="side-card">
                <h3>More Like This</h3>
                <div class="related-list">
                  ${related
                    .map(
                      (r) => `
                    <a class="related-item" href="story.html?id=${encodeURIComponent(r.id)}">
                      <span class="related-thumb" style="background:linear-gradient(135deg, ${r.colors[0]}, ${r.colors[1]});color:#fff">${ICONS[r.icon]}</span>
                      <span><strong>${esc(r.title)}</strong><em>${esc(r.category)} · ${r.minutes} min</em></span>
                    </a>`
                    )
                    .join("")}
                </div>
              </div>`
            : ""
        }
      </aside>
    </div>

    <nav class="pager" aria-label="Previous and next story">
      <a href="story.html?id=${encodeURIComponent(prev.id)}">
        <span class="dir">← Previous story</span>
        <strong>${esc(prev.title)}</strong>
      </a>
      <a class="next" href="story.html?id=${encodeURIComponent(next.id)}">
        <span class="dir">Next story →</span>
        <strong>${esc(next.title)}</strong>
      </a>
    </nav>`;

  /* ---------- favorites button ---------- */
  const favBtn = document.getElementById("btnFav");
  function paintFav() {
    const on = isFavorite(story.id);
    favBtn.setAttribute("aria-pressed", String(on));
    document.getElementById("favIcon").innerHTML = heartIcon(on);
    document.getElementById("favLabel").textContent = on ? "Saved" : "Save to favorites";
  }
  paintFav();
  favBtn.addEventListener("click", () => {
    const added = toggleFavorite(story.id);
    paintFav();
    showToast(added ? `Added "${story.title}" to favorites` : "Removed from favorites");
  });

  /* ---------- font size ---------- */
  let big = false;
  const fontBtn = document.getElementById("btnFont");
  fontBtn.addEventListener("click", () => {
    big = !big;
    document.documentElement.style.setProperty("--fs-story", big ? "1.4rem" : "1.15rem");
    document.getElementById("fontLabel").textContent = big ? "Smaller text" : "Bigger text";
  });

  /* ---------- print & share ---------- */
  document.getElementById("btnPrint").addEventListener("click", () => window.print());

  document.getElementById("btnShare").addEventListener("click", async () => {
    const shareData = { title: story.title, text: story.summary, url: location.href };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(location.href);
        showToast("Link copied to clipboard!");
      }
    } catch {
      /* user cancelled share */
    }
  });

  /* ---------- read aloud (Web Speech API) ---------- */
  const listenBtn = document.getElementById("btnListen");
  const listenLabel = document.getElementById("listenLabel");
  const supported = "speechSynthesis" in window;
  let speaking = false;

  if (!supported) {
    listenBtn.disabled = true;
    listenLabel.textContent = "Listen (not supported)";
  }

  function stopListening() {
    window.speechSynthesis?.cancel();
    speaking = false;
    listenBtn.classList.remove("playing");
    listenBtn.setAttribute("aria-pressed", "false");
    listenLabel.textContent = "Listen to story";
  }

  listenBtn.addEventListener("click", () => {
    if (!supported) return;
    if (speaking) {
      stopListening();
      return;
    }
    const text = [
      `Here is the story of ${story.title}.`,
      ...story.body,
      `Our memory verse is ${story.verse}. ${story.verseRef}.`,
      `The lesson is: ${story.lesson}`
    ].join(". ");

    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 0.92;
    utter.pitch = 1.05;

    const voices = window.speechSynthesis.getVoices();
    const preferred =
      voices.find((v) => /en[-_]/i.test(v.lang) && /female|samantha|zira|google us english/i.test(v.name)) ||
      voices.find((v) => /^en/i.test(v.lang));
    if (preferred) utter.voice = preferred;

    utter.onend = stopListening;
    utter.onerror = stopListening;

    speaking = true;
    listenBtn.classList.add("playing");
    listenBtn.setAttribute("aria-pressed", "true");
    listenLabel.textContent = "Stop listening";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  });

  /* some browsers load voices async */
  if (supported && window.speechSynthesis.getVoices().length === 0) {
    window.speechSynthesis.onvoiceschanged = () => {};
  }

  /* stop speech when leaving page */
  window.addEventListener("pagehide", stopListening);

  /* ---------- reading progress ---------- */
  const fill = document.getElementById("progressFill");
  const label = document.getElementById("progressLabel");
  function updateProgress() {
    const prose = document.getElementById("story-body");
    const rect = prose.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
    const pct = total <= 0 ? 100 : Math.round((scrolled / total) * 100);
    fill.style.width = pct + "%";
    label.textContent = pct + "% read";
  }
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();

  /* ---------- breadcrumb filter shortcut ---------- */
  topEl.querySelectorAll("[data-filter]").forEach((a) =>
    a.addEventListener("click", () => {
      sessionStorage.setItem("llbs-filter", a.dataset.filter);
    })
  );

  document.getElementById("year").textContent = new Date().getFullYear();
})();
