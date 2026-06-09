/* ============================================================
   Behavior: nav scroll state, PT/EN toggle, project expand,
   scroll-reveal with stagger. Respects prefers-reduced-motion.
   ============================================================ */
(function () {
  "use strict";

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.__LANG = "pt";

  /* ---------- capture PT baseline ---------- */
  const ptMap = {};
  document.querySelectorAll(".i18n").forEach((el) => {
    if (!el.id) return;
    ptMap[el.id] = el.hasAttribute("data-alt") ? el.getAttribute("alt") : el.innerHTML;
  });

  /* ---------- language toggle ---------- */
  const langToggle = document.getElementById("langToggle");
  const langLabel = document.getElementById("langLabel");
  const htmlEl = document.documentElement;

  function applyText(el, value) {
    if (value == null) return;
    if (el.hasAttribute("data-alt")) {
      el.setAttribute("alt", value);
    } else {
      el.innerHTML = value;
    }
  }

  function setLang(lang) {
    window.__LANG = lang;
    const els = document.querySelectorAll(".i18n");

    const swap = () => {
      els.forEach((el) => {
        if (!el.id) return;
        const value = lang === "en" ? window.EN[el.id] : ptMap[el.id];
        applyText(el, value);
      });
    };

    if (reduce) {
      swap();
    } else {
      els.forEach((el) => { if (!el.hasAttribute("data-alt")) el.classList.add("swapping"); });
      setTimeout(() => {
        swap();
        els.forEach((el) => el.classList.remove("swapping"));
      }, 200);
    }

    // toggle button shows the language you can switch TO
    langLabel.textContent = lang === "en" ? "PT" : "EN";
    langToggle.querySelector('[aria-hidden="true"]').textContent = lang === "en" ? "🇧🇷" : "🌐";
    langToggle.setAttribute("aria-label", lang === "en" ? "Mudar para Português" : "Switch to English");
    htmlEl.setAttribute("lang", lang === "en" ? "en" : "pt-BR");
  }

  langToggle.addEventListener("click", () => {
    setLang(window.__LANG === "pt" ? "en" : "pt");
  });

  /* ---------- nav scroll border ---------- */
  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- project expand ---------- */
  document.querySelectorAll(".project-head").forEach((btn) => {
    btn.addEventListener("click", () => {
      const project = btn.closest(".project");
      const open = project.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  /* ---------- scroll reveal with stagger ---------- */
  if (reduce) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
  } else {
    const io = new IntersectionObserver((entries) => {
      const shown = entries.filter((e) => e.isIntersecting);
      shown.forEach((entry, i) => {
        setTimeout(() => entry.target.classList.add("in"), i * 80);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    // Safety net: in throttled/background contexts the opacity transition can
    // stall "running" and never reach its end frame, leaving content invisible.
    // Reveal everything and force any stalled transitions to their final state.
    setTimeout(() => {
      document.querySelectorAll(".reveal").forEach((el) => {
        el.classList.add("in");
        if (el.getAnimations) {
          el.getAnimations().forEach((a) => { try { a.finish(); } catch (e) {} });
        }
      });
    }, 1400);
  }
  /* ---------- hero photo carousel ---------- */
  (function () {
    const track = document.getElementById("heroTrack");
    if (!track) return;
    const slides = Array.from(track.querySelectorAll(".photo-slide"));
    const dotsWrap = document.getElementById("heroDots");
    const prev = document.getElementById("heroPrev");
    const next = document.getElementById("heroNext");
    if (slides.length < 2) { if (prev) prev.style.display = "none"; if (next) next.style.display = "none"; return; }

    let i = slides.findIndex((s) => s.classList.contains("is-active"));
    if (i < 0) i = 0;

    const dots = slides.map((_, n) => {
      const b = document.createElement("button");
      b.className = "photo-dot" + (n === i ? " is-active" : "");
      b.type = "button";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-label", "Foto " + (n + 1));
      b.addEventListener("click", () => { go(n); restart(); });
      dotsWrap.appendChild(b);
      return b;
    });

    function go(n) {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle("is-active", k === i));
      dots.forEach((d, k) => {
        d.classList.toggle("is-active", k === i);
        d.setAttribute("aria-selected", k === i ? "true" : "false");
      });
    }

    prev.addEventListener("click", () => { go(i - 1); restart(); });
    next.addEventListener("click", () => { go(i + 1); restart(); });

    let timer = null;
    function start() {
      if (reduce) return;
      timer = setInterval(() => go(i + 1), 4500);
    }
    function restart() { if (timer) clearInterval(timer); start(); }

    const frame = track.closest(".photo-frame");
    frame.addEventListener("mouseenter", () => { if (timer) clearInterval(timer); });
    frame.addEventListener("mouseleave", start);
    frame.addEventListener("focusin", () => { if (timer) clearInterval(timer); });
    frame.addEventListener("focusout", start);

    start();
  })();

  /* ---------- startups-on-dates carousel ---------- */
  (function () {
    const root = document.querySelector("[data-startup-carousel]");
    if (!root) return;
    const viewport = root.querySelector(".startup-viewport");
    const track = root.querySelector("[data-startup-track]");
    const chips = Array.from(track.children);
    const prev = root.querySelector("[data-startup-prev]");
    const next = root.querySelector("[data-startup-next]");
    if (chips.length < 2) { prev.style.display = "none"; next.style.display = "none"; return; }

    let offset = 0;
    function maxOffset() { return Math.max(0, track.scrollWidth - viewport.clientWidth); }
    function step() { return Math.max(viewport.clientWidth * 0.7, 180); }
    function apply() {
      offset = Math.min(Math.max(offset, 0), maxOffset());
      track.style.transform = "translateX(" + -offset + "px)";
    }
    function go(dir) {
      const m = maxOffset();
      if (dir > 0 && offset >= m - 1) offset = 0;          // loop to start
      else if (dir < 0 && offset <= 0) offset = m;          // loop to end
      else offset += dir * step();
      apply();
    }
    prev.addEventListener("click", () => { go(-1); restart(); });
    next.addEventListener("click", () => { go(1); restart(); });
    window.addEventListener("resize", apply);

    let timer = null;
    function start() { if (!reduce) timer = setInterval(() => go(1), 3500); }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    function restart() { stop(); start(); }
    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);
    root.addEventListener("focusin", stop);
    root.addEventListener("focusout", start);
    start();
  })();
})();
