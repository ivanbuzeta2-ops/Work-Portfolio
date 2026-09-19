/* ==========================================================================
   Portfolio behavior
   - Mobile menu, sticky header state, active-link highlighting
   - Renders certification + sample cards from js/content.js
   - Certification filters
   ========================================================================== */
(function () {
  "use strict";

  var data = window.SITE_CONTENT || { certifications: [], samples: [] };

  /* ---------- tiny DOM helper ---------- */
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (key) {
      var val = attrs[key];
      if (val === null || val === undefined || val === false) return;
      if (key === "class") node.className = val;
      else if (key === "text") node.textContent = val;
      else node.setAttribute(key, val === true ? "" : val);
    });
    (children || []).forEach(function (child) {
      if (child) node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
    });
    return node;
  }

  function icon(name) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "icon");
    svg.setAttribute("aria-hidden", "true");
    var use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", "#i-" + name);
    svg.appendChild(use);
    return svg;
  }

  function srOnly(text) { return el("span", { class: "sr-only", text: text }); }

  /* ---------- footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- header: shadow line after scrolling ---------- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- mobile menu ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  function setMenu(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    nav.classList.toggle("is-open", open);
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        setMenu(false);
        toggle.focus();
      }
    });
    document.addEventListener("click", function (e) {
      if (nav.classList.contains("is-open") && !nav.contains(e.target) && !toggle.contains(e.target)) setMenu(false);
    });
    window.matchMedia("(min-width: 941px)").addEventListener("change", function (mq) {
      if (mq.matches) setMenu(false);
    });
  }

  /* ---------- active link while scrolling ---------- */
  var spyMap = { strengths: "skills", "estimated-plans": "portfolio" };
  var links = {};
  document.querySelectorAll("[data-spy]").forEach(function (a) { links[a.getAttribute("data-spy")] = a; });

  function setActive(id) {
    var key = spyMap[id] || id;
    Object.keys(links).forEach(function (k) {
      if (k === key) links[k].setAttribute("aria-current", "true");
      else links[k].removeAttribute("aria-current");
    });
  }

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    document.querySelectorAll("main > section[id]").forEach(function (s) { observer.observe(s); });
  }

  /* ---------- sample estimated plans ---------- */
  var sampleGrid = document.getElementById("sample-grid");
  if (sampleGrid && data.samples && data.samples.length) {
    sampleGrid.textContent = "";
    data.samples.forEach(function (s, i) {
      var titleId = "sample-title-" + (i + 1);
      var meta = [];
      meta.push(el("span", {}, [icon("file"), s.type || "PDF"]));
      if (s.pages) meta.push(el("span", { text: s.pages + " pages" }));
      if (s.size) meta.push(el("span", { text: s.size }));

      var card = el("article", { class: "sample", "aria-labelledby": titleId }, [
        s.image
          ? el("a", { class: "sample-thumb", href: s.file, target: "_blank", rel: "noopener", tabindex: "-1" }, [
              el("img", { src: s.image, alt: s.imageAlt || "", width: 960, height: 640, loading: i < 2 ? "eager" : "lazy" })
            ])
          : null,
        el("div", { class: "sample-body" }, [
          el("h3", { id: titleId, text: s.title }),
          el("p", { class: "sample-desc", text: s.description }),
          el("ul", { class: "tags", "aria-label": "Skills demonstrated" },
            (s.skills || []).map(function (t) { return el("li", { text: t }); })),
          el("p", { class: "file-info" }, meta),
          el("div", { class: "sample-actions" }, [
            el("a", { class: "btn btn-primary on-dark", href: s.file, target: "_blank", rel: "noopener" }, [
              icon("eye"), "View Sample", srOnly(": " + s.title + " (opens in a new tab)")
            ]),
            el("a", { class: "btn btn-secondary on-dark", href: s.file, download: s.downloadName || true }, [
              icon("download"), "Download", srOnly(": " + s.title)
            ])
          ])
        ])
      ]);
      sampleGrid.appendChild(card);
    });
  }

  /* ---------- certifications ---------- */
  var certGrid = document.getElementById("cert-grid");
  var certFilters = document.getElementById("cert-filters");
  var certStatus = document.getElementById("cert-status");
  var activeFilter = "all";

  function certFiles(c) {
    if (c.files && c.files.length) return c.files;
    if (c.file) return [{ label: "View certificate", href: c.file }];
    return [];
  }

  function buildCert(c) {
    var facts = (c.facts || []).map(function (f) { return el("li", { text: f }); });
    var files = certFiles(c).map(function (f) {
      return el("a", { class: "link-btn", href: f.href, target: "_blank", rel: "noopener" }, [
        icon("file"), f.label, srOnly(" for " + c.title + " (PDF, opens in a new tab)")
      ]);
    });

    var ids = c.credentialIds && c.credentialIds.length
      ? c.credentialIds
      : (c.credentialId ? [{ label: "", id: c.credentialId }] : []);

    return el("article", { class: "cert cert--" + (c.kind || "course"), "data-cat": c.category || "" }, [
      el("div", { class: "cert-top" }, [
        el("span", { class: "cert-issuer", text: c.issuer }),
        el("span", { class: "cert-date", text: c.date })
      ]),
      el("h3", { text: c.title }),
      c.badge ? el("span", { class: "cert-badge", text: c.badge }) : null,
      facts.length ? el("ul", { class: "cert-facts" }, facts) : null,
      ids.length
        ? el("details", {}, [
            el("summary", { text: ids.length > 1 ? "Credential IDs" : "Credential ID" }),
            el("div", {}, ids.map(function (x) {
              return el("div", {}, [
                x.label ? el("span", { class: "id-label", text: x.label + ":" }) : null,
                el("code", { text: x.id })
              ]);
            }))
          ])
        : null,
      files.length ? el("div", { class: "cert-actions" }, files) : null
    ]);
  }

  function renderCerts() {
    if (!certGrid) return;
    certGrid.textContent = "";
    var shown = 0;
    (data.certifications || []).forEach(function (c) {
      if (activeFilter === "all" || c.category === activeFilter) {
        certGrid.appendChild(buildCert(c));
        shown++;
      }
    });
    if (certStatus) certStatus.textContent = "Showing " + shown + " " + (shown === 1 ? "certification" : "certifications") + ".";
  }

  function setFilter(id) {
    activeFilter = id;
    if (certFilters) {
      certFilters.querySelectorAll("button").forEach(function (b) {
        b.setAttribute("aria-pressed", String(b.getAttribute("data-filter") === id));
      });
    }
    renderCerts();
  }

  if (certGrid && data.certifications && data.certifications.length) {
    if (certFilters && data.certificationCategories) {
      data.certificationCategories.forEach(function (cat) {
        var count = cat.id === "all"
          ? data.certifications.length
          : data.certifications.filter(function (c) { return c.category === cat.id; }).length;
        if (!count) return;
        var btn = el("button", { class: "filter-btn", type: "button", "data-filter": cat.id, "aria-pressed": String(cat.id === "all") },
          [cat.label + " (" + count + ")"]);
        btn.addEventListener("click", function () { setFilter(cat.id); });
        certFilters.appendChild(btn);
      });
    }
    renderCerts();
  }

  /* "See the results" link in the strengths section jumps to the English certificates */
  document.querySelectorAll("[data-filter-link]").forEach(function (a) {
    a.addEventListener("click", function () { setFilter(a.getAttribute("data-filter-link")); });
  });
})();
