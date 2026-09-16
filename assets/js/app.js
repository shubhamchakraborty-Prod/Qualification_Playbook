/* Swift AI Academy - Qualification Playbook
   Renderer, search index, table filters and the Credential Navigator.
   No build step, no dependencies. */

(function () {
  "use strict";

  var PB = window.PLAYBOOK;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function strip(html) {
    var d = document.createElement("div");
    d.innerHTML = html;
    return (d.textContent || "").replace(/\s+/g, " ").trim();
  }
  function slug(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }

  /* ---------------------------------------------------------- chips */
  var CHIP_RULES = [
    { re: /^(yes|approved|mandatory)/i, cls: "ok" },
    { re: /^(no|false|not directly|normally no)/i, cls: "no" },
    { re: /^(depends|potentially|often|usually|medium-high|medium)/i, cls: "warn" },
    { re: /^(very high|high|p0)/i, cls: "hi" },
    { re: /^(low|p2)/i, cls: "ok" },
    { re: /^p1/i, cls: "warn" }
  ];
  function chipClass(v) {
    for (var i = 0; i < CHIP_RULES.length; i++) if (CHIP_RULES[i].re.test(v)) return CHIP_RULES[i].cls;
    return "";
  }

  /* ---------------------------------------------------------- reading mode */
  var MODE_KEY = "saa-playbook-mode";
  var MODE = "i";
  try { var sm = localStorage.getItem(MODE_KEY); if (sm && /^[bia]$/.test(sm)) MODE = sm; } catch (e) {}
  function setMode(m) {
    if (m === MODE) return;
    MODE = m;
    try { localStorage.setItem(MODE_KEY, m); } catch (e) {}
    renderAll();
  }
  function modeMeta() {
    return PB.modes.filter(function (x) { return x.k === MODE; })[0];
  }

  function refSup(ref) {
    if (!ref) return "";
    return " <sup class='ref' data-ref='" + esc(ref) + "'>" + esc(ref) + "</sup>";
  }

  /* ================================================== BLOCK RENDERERS */
  var R = {};

  R.prose = function (b) { return '<div class="block prose">' + b.html + "</div>"; };

  R.heading = function (b) { return '<h3 class="sub-heading">' + esc(b.text) + "</h3>"; };

  R.callout = function (b) {
    return '<div class="block"><div class="callout ' + esc(b.tone || "") + '">' +
      (b.title ? "<h4>" + esc(b.title) + "</h4>" : "") +
      "<p>" + b.html + "</p></div></div>";
  };

  R.flow = function (b) {
    var h = '<div class="block">';
    if (b.title) h += '<div class="block-title"><h3>' + esc(b.title) + "</h3></div>";
    h += '<div class="flow">';
    if (b.root) h += '<div class="flow-root">' + esc(b.root) + "</div>";
    h += '<ol class="' + (b.orientation === "fan" ? "fan" : "") + '">';
    b.steps.forEach(function (s) { h += "<li>" + esc(s) + "</li>"; });
    return h + "</ol></div></div>";
  };
  // .fan modifier lives on the <ol>; mirror it on the wrapper for the CSS selector
  var _flow = R.flow;
  R.flow = function (b) {
    return _flow(b).replace('<div class="flow">', '<div class="flow' + (b.orientation === "fan" ? " fan" : "") + '">');
  };

  R.tree = function (b) {
    var h = '<div class="block">';
    if (b.title) h += '<div class="block-title"><h3>' + esc(b.title) + "</h3></div>";
    h += '<div class="tree"><div class="tree-root">' + esc(b.root) + '</div><div class="tree-grid">';
    b.branches.forEach(function (br) {
      h += '<div class="tree-branch"><b>' + esc(br.label) + "</b><ul>";
      br.nodes.forEach(function (n) { h += "<li>" + esc(n) + "</li>"; });
      h += "</ul>" + (br.outcome ? '<span class="out">' + esc(br.outcome) + "</span>" : "") + "</div>";
    });
    return h + "</div></div></div>";
  };

  R.cards = function (b) {
    var h = '<div class="block">';
    if (b.title) h += '<div class="block-title"><h3>' + esc(b.title) + "</h3></div>";
    h += '<div class="cards">';
    b.items.forEach(function (c) {
      h += '<div class="card">' +
        (c.tag ? '<span class="tag">' + esc(c.tag) + "</span>" : "") +
        "<h4>" + esc(c.title) + "</h4><p>" + esc(c.body) + refSup(c.ref) + "</p></div>";
    });
    return h + "</div></div>";
  };

  R.split = function (b) {
    function col(c) {
      var h = '<div class="split-col"><h4>' + esc(c.title) + "</h4><ul>";
      c.items.forEach(function (i) { h += "<li>" + esc(i) + "</li>"; });
      return h + "</ul></div>";
    }
    return '<div class="block">' +
      (b.title ? '<div class="block-title"><h3>' + esc(b.title) + "</h3></div>" : "") +
      '<div class="split">' + col(b.left) + col(b.right) + "</div></div>";
  };

  R.layers = function (b) {
    var h = '<div class="block">';
    if (b.title) h += '<div class="block-title"><h3>' + esc(b.title) + "</h3></div>";
    h += '<div class="layers">';
    b.items.forEach(function (l) {
      h += '<div class="layer" data-layer="' + esc(l.key) + '"><span class="k">LAYER ' + esc(l.key) +
        "</span><h4>" + esc(l.title) + "</h4><p>" + esc(l.body) + "</p></div>";
    });
    return h + "</div></div>";
  };

  R.accordion = function (b) {
    var h = '<div class="block">';
    if (b.title) h += '<div class="block-title"><h3>' + esc(b.title) + "</h3></div>";
    h += '<div class="acc">';
    b.items.forEach(function (it) {
      h += "<details><summary>" + esc(it.q) + '</summary><div class="acc-body">' + it.a + "</div></details>";
    });
    return h + "</div></div>";
  };

  R.templates = function (b) {
    var h = '<div class="block">';
    b.items.forEach(function (t, i) {
      h += '<div class="tpl"><div class="tpl-head"><b>' + esc(t.label) + "</b>" +
        '<button class="tpl-copy" data-tpl="' + i + '" type="button">Copy</button></div>' +
        (t.subject ? '<div class="tpl-subject"><b>Subject</b>' + esc(t.subject) + "</div>" : "") +
        "<pre>" + esc(t.body) + "</pre></div>";
    });
    return h + "</div>";
  };

  R.phases = function (b) {
    var h = '<div class="block">';
    if (b.title) h += '<div class="block-title"><h3>' + esc(b.title) + "</h3></div>";
    h += '<div class="phases">';
    b.items.forEach(function (p) {
      h += '<div class="phase"><div class="phase-head"><b>' + esc(p.label) + "</b>" +
        (p.note ? "<span>" + esc(p.note) + "</span>" : "") + "</div><ul>";
      p.rows.forEach(function (r) { h += "<li><b>" + esc(r[0]) + "</b>" + esc(r[1]) + "</li>"; });
      h += "</ul></div>";
    });
    return h + "</div></div>";
  };

  R.table = function (b) {
    var cols = b.columns;
    if (MODE === "b" && PB.cols[b.id]) {
      var keep = PB.cols[b.id];
      cols = cols.filter(function (c) { return keep.indexOf(c.key) !== -1; });
    }
    var tools = "";
    var filterCols = cols.filter(function (c) { return c.filter; });

    if (b.searchable || filterCols.length) {
      tools += '<div class="table-tools" data-tools="' + esc(b.id) + '">';
      if (b.searchable) {
        tools += '<div class="tbl-search"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>' +
          '<input type="search" placeholder="Search this table" data-tsearch="' + esc(b.id) + '" aria-label="Search table"></div>';
      }
      filterCols.forEach(function (c) {
        var seen = [], vals = [];
        b.rows.forEach(function (r) {
          var v = r[c.key];
          if (v && seen.indexOf(v) === -1) { seen.push(v); vals.push(v); }
        });
        vals.sort();
        tools += '<select class="filter" data-tfilter="' + esc(b.id) + '" data-key="' + esc(c.key) + '" aria-label="Filter by ' + esc(c.label) + '">' +
          '<option value="">' + esc(c.label) + ": all</option>";
        vals.forEach(function (v) { tools += '<option value="' + esc(v) + '">' + esc(v) + "</option>"; });
        tools += "</select>";
      });
      tools += '<button class="btn-clear" data-tclear="' + esc(b.id) + '" type="button">Reset</button>';
      tools += '<span class="tbl-count" data-tcount="' + esc(b.id) + '"></span></div>';
    }

    var head = "<tr>" + cols.map(function (c) {
      return '<th class="' + (c.width || "") + '">' + esc(c.label) + "</th>";
    }).join("") + "</tr>";

    var body = b.rows.map(function (r, ri) {
      var cells = cols.map(function (c, ci) {
        var v = r[c.key] == null ? "" : String(r[c.key]);
        var inner = c.chip && v ? '<span class="chip ' + chipClass(v) + '">' + esc(v) + "</span>" : esc(v);
        if (ci === cols.length - 1 && r.ref) inner += refSup(r.ref);
        return '<td class="' + (c.width || "") + '" data-label="' + esc(c.label) + '" data-key="' + esc(c.key) + '">' + inner + "</td>";
      }).join("");
      return '<tr data-row="' + ri + '">' + cells + "</tr>";
    }).join("");

    return '<div class="block" data-table="' + esc(b.id) + '">' +
      (b.title ? '<div class="block-title"><h3>' + esc(b.title) + "</h3></div>" : "") +
      (b.note ? '<p class="block-note">' + esc(b.note) + "</p>" : "") +
      tools +
      '<div class="table-scroll"><table><thead>' + head + "</thead><tbody>" + body +
      '<tr class="empty-row" hidden><td colspan="' + cols.length + '">No rows match these filters.</td></tr>' +
      "</tbody></table></div></div>";
  };

  R.plain = function (pl) {
    // pl.lede already runs as the section summary in beginner mode; do not repeat it
    var h = '<div class="block plain"><div class="plain-points">';
    pl.points.forEach(function (pt) {
      h += '<div class="plain-point"><h4>' + esc(pt.h) + "</h4><p>" + esc(pt.p) + "</p></div>";
    });
    h += "</div>";
    h += '<div class="analogy"><span class="k">Think of it like this</span><p>' + esc(pl.analogy) + "</p></div>";
    h += '<div class="plain-next"><span class="k">What to do next</span><ol>';
    pl.next.forEach(function (n) { h += "<li>" + esc(n) + "</li>"; });
    h += "</ol></div></div>";
    return h;
  };

  R.pro = function (items) {
    var h = '<div class="block pro"><div class="pro-head"><span class="k">Practitioner notes</span>' +
      "<p>The caveats, the things to verify, and the traps that are not obvious from the tables above.</p></div>";
    items.forEach(function (n) {
      h += '<div class="pro-note"><h4>' + esc(n.h) + "</h4><p>" + esc(n.p) + "</p></div>";
    });
    return h + "</div>";
  };

  R.navigator = function () {
    var opts = PB.navigator.map(function (n, i) {
      return '<option value="' + i + '">' + esc(n.outcome) + "</option>";
    }).join("");
    return '<div class="block"><div class="nav-tool">' +
      '<div class="nav-tool-head"><label for="navSelect">Desired learner outcome</label>' +
      '<select id="navSelect">' + opts + "</select></div>" +
      '<div class="nav-res" id="navRes"></div>' +
      '<div class="nav-foot-bar"><div class="nav-layers" id="navLayers"></div>' +
      '<a class="btn-sm" id="navJump" href="#">Open the detail<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg></a></div>' +
      "</div></div>";
  };

  /* ================================================== BUILD PAGE */
  function renderSection(s) {
    var pl = PB.plain[s.id];
    var wwh = (MODE === "b" && pl && pl.wwh) ? pl.wwh : s.wwh;

    var h = '<section class="section" id="' + esc(s.id) + '">';
    h += '<div class="section-head"><span class="num">' + esc(s.num) + " / " + esc(s.eyebrow) + "</span>" +
      "<h2>" + esc(s.title) + "</h2>" +
      '<p class="section-summary">' + esc(MODE === "b" && pl ? pl.lede : s.summary) + "</p></div>";
    h += '<div class="wwh">' +
      '<div class="wwh-card"><span class="k">What</span><p>' + esc(wwh.what) + "</p></div>" +
      '<div class="wwh-card"><span class="k">Why</span><p>' + esc(wwh.why) + "</p></div>" +
      '<div class="wwh-card"><span class="k">How</span><p>' + esc(wwh.how) + "</p></div></div>";

    if (MODE === "b" && pl) h += R.plain(pl);

    s.blocks.forEach(function (b) {
      // Beginner mode drops the citation-heavy regulatory prose; the plain
      // explainer above covers the same ground in simpler language.
      if (MODE === "b" && b.t === "prose") return;
      if (R[b.t]) h += R[b.t](b);
    });

    if (MODE === "a" && PB.pro[s.id]) h += R.pro(PB.pro[s.id]);

    return h + "</section>";
  }

  function renderSources() {
    var h = '<section class="section" id="sources">' +
      '<div class="section-head"><span class="num">15 / REFERENCES</span><h2>Sources</h2>' +
      '<p class="section-summary">Every claim in this playbook traces to a primary source. ' + esc(PB.meta.verified) + '.</p></div>' +
      '<div class="sources">';
    PB.sources.forEach(function (s) {
      h += '<div class="src" id="src-' + slug(s.n) + '"><span class="n">[' + esc(s.n) + ']</span>' +
        '<a href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' + esc(s.label) + "</a></div>";
    });
    return h + "</div></section>";
  }

  function renderNav() {
    var h = '<div class="sidenav-title">Sections</div>';
    PB.sections.forEach(function (s) {
      h += '<a class="navlink" href="#' + esc(s.id) + '"><span class="n">' + esc(s.num) + "</span><span>" + esc(s.title) + "</span></a>";
    });
    h += '<a class="navlink" href="#sources"><span class="n">15</span><span>Sources</span></a>';
    h += '<div class="nav-foot"><p>' + esc(PB.meta.verified) + ".</p><p>" + esc(PB.meta.owner) + " &middot; v" + esc(PB.meta.version) + "</p></div>";
    return h;
  }

  function renderHero() {
    var tables = 0, rows = 0;
    PB.sections.forEach(function (s) {
      s.blocks.forEach(function (b) { if (b.t === "table") { tables++; rows += b.rows.length; } });
    });
    return '<header class="hero">' +
      '<img class="hero-logo" src="assets/img/logo-mark.svg" alt="">' +
      '<span class="eyebrow">Swift AI Academy &middot; Credential Strategy</span>' +
      "<h1>" + esc(PB.meta.title) + "</h1>" +
      '<p class="hero-lede">' + esc(PB.meta.strapline) + "</p>" +
      '<div class="hero-mode"><span class="k">Reading mode: ' + esc(modeMeta().label) + "</span><p>" + esc(modeMeta().blurb) + "</p></div>" +
      '<div class="hero-stats">' +
      '<div class="hero-stat"><b>' + PB.sections.length + '</b><span>Sections</span></div>' +
      '<div class="hero-stat"><b>' + tables + '</b><span>Master tables</span></div>' +
      '<div class="hero-stat"><b>' + rows + '</b><span>Mapped rows</span></div>' +
      '<div class="hero-stat"><b>36</b><span>States &amp; UTs</span></div>' +
      '<div class="hero-stat"><b>' + PB.sources.length + '</b><span>Primary sources</span></div>' +
      "</div>" +
      '<div class="hero-cta">' +
      '<a class="btn btn-gold" href="#navigator"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2.2 5-5 2.2 2.2-5z"/></svg>Open the Credential Navigator</a>' +
      '<a class="btn btn-ghost" href="#start">Read the strategy</a>' +
      "</div></header>";
  }

  /* ================================================== GLOSSARY (beginner) */
  var GLOSS_SEL = ".plain p, .prose p, .callout p, .wwh-card p, .section-summary, .acc-body p, .layer p, .card p";

  function applyGlossary() {
    if (MODE !== "b") return;
    var terms = Object.keys(PB.gloss).sort(function (a, b) { return b.length - a.length; });
    $$(GLOSS_SEL).forEach(function (el) {
      var used = {};
      var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
      var nodes = [], n;
      while ((n = walker.nextNode())) {
        if (!n.parentElement.closest("abbr, a, sup, code")) nodes.push(n);
      }
      nodes.forEach(function (node) {
        var text = node.nodeValue, frag = null, cursor = 0;
        for (var i = 0; i < terms.length; i++) {
          var t = terms[i];
          if (used[t]) continue;
          var re = new RegExp("(^|[^\\w-])(" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")(?![\\w-])");
          var m = re.exec(text.slice(cursor));
          if (!m) continue;
          var at = cursor + m.index + m[1].length;
          frag = frag || document.createDocumentFragment();
          frag.appendChild(document.createTextNode(text.slice(cursor, at)));
          var ab = document.createElement("abbr");
          ab.setAttribute("title", PB.gloss[t]);
          ab.textContent = m[2];
          frag.appendChild(ab);
          cursor = at + m[2].length;
          used[t] = 1;
        }
        if (frag) {
          frag.appendChild(document.createTextNode(text.slice(cursor)));
          node.parentNode.replaceChild(frag, node);
        }
      });
    });
  }

  /* ================================================== SEARCH INDEX */
  var INDEX = [];

  function indexText(sec, title, text, anchor) {
    text = strip(text);
    if (!text) return;
    INDEX.push({ s: sec.title, sid: sec.id, t: title, b: text, low: (title + " " + text).toLowerCase(), a: anchor || sec.id });
  }

  function buildIndex() {
    PB.sections.forEach(function (sec) {
      indexText(sec, sec.title, sec.summary + " " + sec.wwh.what + " " + sec.wwh.why + " " + sec.wwh.how);
      sec.blocks.forEach(function (b) {
        if (b.t === "prose") indexText(sec, sec.title, b.html);
        else if (b.t === "callout") indexText(sec, b.title || sec.title, b.html);
        else if (b.t === "flow") indexText(sec, b.title || sec.title, (b.root || "") + " " + b.steps.join(". "));
        else if (b.t === "tree") indexText(sec, b.title || sec.title, b.branches.map(function (x) { return x.label + " " + x.nodes.join(" "); }).join(" "));
        else if (b.t === "cards") b.items.forEach(function (c) { indexText(sec, c.title, c.body); });
        else if (b.t === "split") indexText(sec, b.title || sec.title, b.left.title + " " + b.left.items.join(". ") + " " + b.right.title + " " + b.right.items.join(". "));
        else if (b.t === "layers") b.items.forEach(function (l) { indexText(sec, "Layer " + l.key + ": " + l.title, l.body); });
        else if (b.t === "accordion") b.items.forEach(function (i) { indexText(sec, i.q, i.a); });
        else if (b.t === "templates") b.items.forEach(function (t) { indexText(sec, t.label, (t.subject || "") + " " + t.body); });
        else if (b.t === "phases") b.items.forEach(function (p) { indexText(sec, p.label, p.rows.map(function (r) { return r[0] + ": " + r[1]; }).join(". ")); });
        else if (b.t === "table") {
          b.rows.forEach(function (r) {
            var first = b.columns[0].key;
            var rest = b.columns.slice(1).map(function (c) { return r[c.key]; }).filter(Boolean).join(" . ");
            indexText(sec, String(r[first]) + "  |  " + (b.title || ""), rest);
          });
        }
      });
    });
    PB.sections.forEach(function (sec) {
      var pl = PB.plain[sec.id];
      if (pl) {
        indexText(sec, sec.title + " in plain words", pl.lede + " " + pl.analogy);
        pl.points.forEach(function (pt) { indexText(sec, pt.h, pt.p); });
      }
      (PB.pro[sec.id] || []).forEach(function (n) { indexText(sec, n.h, n.p); });
    });
    PB.sources.forEach(function (s) {
      INDEX.push({ s: "Sources", sid: "sources", t: s.label, b: s.url, low: (s.label + " " + s.url).toLowerCase(), a: "sources" });
    });
  }

  function search(q) {
    q = q.trim().toLowerCase();
    if (q.length < 2) return [];
    var terms = q.split(/\s+/);
    var out = [];
    for (var i = 0; i < INDEX.length; i++) {
      var it = INDEX[i], score = 0, ok = true;
      for (var j = 0; j < terms.length; j++) {
        var pos = it.low.indexOf(terms[j]);
        if (pos === -1) { ok = false; break; }
        score += pos < 60 ? 3 : 1;
        if (it.t.toLowerCase().indexOf(terms[j]) !== -1) score += 5;
      }
      if (ok) out.push({ it: it, score: score });
    }
    out.sort(function (a, b) { return b.score - a.score; });
    return out.slice(0, 40).map(function (x) { return x.it; });
  }

  function hl(text, q) {
    var terms = q.trim().split(/\s+/).filter(function (t) { return t.length > 1; });
    var h = esc(text);
    terms.forEach(function (t) {
      h = h.replace(new RegExp("(" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "<mark>$1</mark>");
    });
    return h;
  }

  /* ================================================== TABLE FILTERING */
  function applyTable(id) {
    var wrap = $('[data-table="' + id + '"]');
    if (!wrap) return;
    var input = $('[data-tsearch="' + id + '"]');
    var q = input ? input.value.trim().toLowerCase() : "";
    var filters = {};
    $$('[data-tfilter="' + id + '"]').forEach(function (sel) {
      sel.classList.toggle("on", !!sel.value);
      if (sel.value) filters[sel.dataset.key] = sel.value;
    });

    var shown = 0, total = 0;
    $$("tbody tr", wrap).forEach(function (tr) {
      if (tr.classList.contains("empty-row")) return;
      total++;
      var ok = true;
      for (var k in filters) {
        var cell = $('[data-key="' + k + '"]', tr);
        if (!cell || cell.textContent.trim() !== filters[k]) { ok = false; break; }
      }
      if (ok && q) ok = tr.textContent.toLowerCase().indexOf(q) !== -1;
      tr.hidden = !ok;
      if (ok) shown++;
    });

    var empty = $(".empty-row", wrap);
    if (empty) empty.hidden = shown !== 0;
    var count = $('[data-tcount="' + id + '"]');
    if (count) count.textContent = shown === total ? total + " rows" : shown + " of " + total;
  }

  /* ================================================== NAVIGATOR */
  var LAYER_NAME = { A: "Programme", B: "Industry / OEM", C: "NSQF", D: "Institutional", E: "Academic credit", F: "State" };

  function updateNavigator() {
    var sel = $("#navSelect");
    if (!sel) return;
    var n = PB.navigator[sel.value | 0];
    $("#navRes").innerHTML =
      '<div class="nav-res-item hero-item"><span class="k">Regulatory pathway</span><span class="v">' + esc(n.pathway) + "</span></div>" +
      '<div class="nav-res-item"><span class="k">Organisation to approach</span><span class="v">' + esc(n.org) + "</span></div>" +
      '<div class="nav-res-item"><span class="k">Main approval</span><span class="v">' + esc(n.approval) + "</span></div>" +
      '<div class="nav-res-item"><span class="k">Practical first move</span><span class="v">' + esc(n.move) + "</span></div>";
    $("#navLayers").innerHTML = n.layers.map(function (l) {
      return '<span class="chip">Layer ' + esc(l) + " &middot; " + esc(LAYER_NAME[l] || "") + "</span>";
    }).join("");
    var target = PB.sections.filter(function (s) { return s.id === n.section; })[0];
    var jump = $("#navJump");
    jump.setAttribute("href", "#" + n.section);
    jump.firstChild.nodeValue = "Open " + (target ? target.title : "detail");
  }

  /* ================================================== THEME */
  var THEME_KEY = "saa-playbook-theme";
  function setTheme(t) {
    if (t) document.documentElement.setAttribute("data-theme", t);
    else document.documentElement.removeAttribute("data-theme");
    try { t ? localStorage.setItem(THEME_KEY, t) : localStorage.removeItem(THEME_KEY); } catch (e) {}
  }
  function currentTheme() {
    var set = document.documentElement.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  /* ================================================== SCROLL SPY */
  var spyObs = null;
  function initSpy() {
    if (spyObs) spyObs.disconnect();
    var links = {};
    $$(".navlink").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
    spyObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        $$(".navlink").forEach(function (a) { a.classList.remove("active"); });
        var a = links[e.target.id];
        if (a) {
          a.classList.add("active");
          if (window.innerWidth > 1080) a.scrollIntoView({ block: "nearest" });
        }
      });
    }, { rootMargin: "-80px 0px -72% 0px", threshold: 0 });
    $$("section.section").forEach(function (s) { spyObs.observe(s); });
  }

  /* ================================================== SEARCH MODAL */
  function initSearch() {
    var modal = $("#searchModal"), input = $("#searchInput"), res = $("#searchResults");
    var sel = -1, items = [];

    function open() {
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
      input.value = ""; render("");
      setTimeout(function () { input.focus(); }, 30);
    }
    function close() {
      modal.classList.remove("open");
      document.body.style.overflow = "";
    }
    function render(q) {
      items = search(q);
      sel = -1;
      if (!q || q.trim().length < 2) {
        res.innerHTML = '<div class="modal-empty">Type at least two characters. Search covers every table row, template, myth and source.</div>';
        return;
      }
      if (!items.length) {
        res.innerHTML = '<div class="modal-empty">Nothing matches &ldquo;' + esc(q) + '&rdquo;.</div>';
        return;
      }
      res.innerHTML = items.map(function (it, i) {
        return '<a class="res" data-i="' + i + '" href="#' + esc(it.a) + '">' +
          '<span class="rs">' + esc(it.s) + "</span>" +
          '<span class="rt">' + hl(it.t, q) + "</span>" +
          '<span class="rb">' + hl(it.b.slice(0, 210), q) + "</span></a>";
      }).join("");
    }
    function move(d) {
      var nodes = $$(".res", res);
      if (!nodes.length) return;
      if (sel >= 0) nodes[sel].classList.remove("sel");
      sel = (sel + d + nodes.length) % nodes.length;
      nodes[sel].classList.add("sel");
      nodes[sel].scrollIntoView({ block: "nearest" });
    }

    $("#searchBtn").addEventListener("click", open);
    $(".modal-bd", modal).addEventListener("click", close);
    input.addEventListener("input", function () { render(input.value); });
    res.addEventListener("click", function (e) {
      var a = e.target.closest(".res");
      if (a) close();
    });
    input.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown") { e.preventDefault(); move(1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); move(-1); }
      else if (e.key === "Enter") {
        var nodes = $$(".res", res);
        if (nodes.length) { (sel >= 0 ? nodes[sel] : nodes[0]).click(); }
      }
    });
    document.addEventListener("keydown", function (e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); modal.classList.contains("open") ? close() : open(); }
      else if (e.key === "Escape" && modal.classList.contains("open")) close();
      else if (e.key === "/" && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName) && !modal.classList.contains("open")) {
        e.preventDefault(); open();
      }
    });
  }

  /* ================================================== BOOT */
  function renderModeSwitch() {
    return PB.modes.map(function (m) {
      return '<button type="button" class="mode-btn' + (m.k === MODE ? " on" : "") +
        '" data-mode="' + m.k + '" aria-pressed="' + (m.k === MODE) + '" title="' + esc(m.blurb) + '">' +
        '<span class="full">' + esc(m.label) + '</span><span class="abbr">' + esc(m.short) + "</span></button>";
    }).join("");
  }

  function renderAll() {
    var y = window.scrollY;
    var active = null;
    $$("section.section").forEach(function (sec) {
      if (!active && sec.getBoundingClientRect().bottom > 90) active = sec.id;
    });

    document.documentElement.setAttribute("data-mode", MODE);
    $("#modeSwitch").innerHTML = renderModeSwitch();
    $("#content").innerHTML = renderHero() + '<div class="wrap">' +
      PB.sections.map(renderSection).join("") + renderSources() +
      '<footer class="pagefoot"><p>' + esc(PB.meta.disclaimer) + '</p>' +
      "<p>" + esc(PB.meta.owner) + " &middot; " + esc(PB.meta.title) + " &middot; v" + esc(PB.meta.version) + "</p></footer>" +
      "</div>";

    applyGlossary();
    initSpy();
    updateNavigator();
    $$("[data-table]").forEach(function (w) { applyTable(w.dataset.table); });

    // hold the reader roughly where they were rather than throwing them to the top
    var prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    if (active) {
      var el = document.getElementById(active);
      if (el) el.scrollIntoView();
      else window.scrollTo(0, y);
    } else {
      window.scrollTo(0, y);
    }
    document.documentElement.style.scrollBehavior = prev;
  }

  function boot() {
    try {
      var saved = localStorage.getItem(THEME_KEY);
      if (saved) document.documentElement.setAttribute("data-theme", saved);
    } catch (e) {}

    $("#sidenav").innerHTML = renderNav();
    document.documentElement.setAttribute("data-mode", MODE);
    $("#modeSwitch").innerHTML = renderModeSwitch();
    $("#content").innerHTML = renderHero() + '<div class="wrap">' +
      PB.sections.map(renderSection).join("") + renderSources() +
      '<footer class="pagefoot"><p>' + esc(PB.meta.disclaimer) + '</p>' +
      "<p>" + esc(PB.meta.owner) + " &middot; " + esc(PB.meta.title) + " &middot; v" + esc(PB.meta.version) + "</p></footer>" +
      "</div>";

    applyGlossary();
    buildIndex();
    initSearch();
    initSpy();
    updateNavigator();

    // table tools
    document.addEventListener("input", function (e) {
      if (e.target.dataset && e.target.dataset.tsearch) applyTable(e.target.dataset.tsearch);
    });
    document.addEventListener("change", function (e) {
      if (e.target.dataset && e.target.dataset.tfilter) applyTable(e.target.dataset.tfilter);
      if (e.target.id === "navSelect") updateNavigator();
    });
    document.addEventListener("click", function (e) {
      var clear = e.target.closest("[data-tclear]");
      if (clear) {
        var id = clear.dataset.tclear;
        var inp = $('[data-tsearch="' + id + '"]');
        if (inp) inp.value = "";
        $$('[data-tfilter="' + id + '"]').forEach(function (s) { s.value = ""; });
        applyTable(id);
        return;
      }
      var cp = e.target.closest(".tpl-copy");
      if (cp) {
        var pre = cp.closest(".tpl").querySelector("pre");
        var text = pre.textContent;
        var subj = cp.closest(".tpl").querySelector(".tpl-subject");
        if (subj) text = subj.textContent.replace(/^Subject/, "Subject: ") + "\n\n" + text;
        (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject()).then(function () {
          cp.textContent = "Copied"; cp.classList.add("done");
          setTimeout(function () { cp.textContent = "Copy"; cp.classList.remove("done"); }, 1800);
        }).catch(function () {
          var r = document.createRange(); r.selectNodeContents(pre);
          var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
        });
        return;
      }
      var ref = e.target.closest("sup.ref");
      if (ref) {
        var want = String(ref.dataset.ref);
        var hit = PB.sources.filter(function (s) { return String(s.n).split(",").indexOf(want) !== -1; })[0];
        var el = document.getElementById("src-" + slug(hit ? hit.n : want));
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.style.transition = "background .25s";
          el.style.background = "var(--gold-50)";
          setTimeout(function () { el.style.background = ""; }, 1800);
        }
        return;
      }
      if (e.target.closest("#menuBtn")) { toggleNav(); return; }
      if (e.target.closest(".navlink") && window.innerWidth <= 1080) { toggleNav(false); return; }
      if (e.target.id === "scrim") { toggleNav(false); return; }
      var mb = e.target.closest(".mode-btn");
      if (mb) { setMode(mb.dataset.mode); return; }
      if (e.target.closest("#themeBtn")) { setTheme(currentTheme() === "dark" ? "light" : "dark"); return; }
      if (e.target.closest("#printBtn")) { window.print(); return; }
    });

    // initialise counts
    $$("[data-table]").forEach(function (w) { applyTable(w.dataset.table); });

    function toggleNav(force) {
      var nav = $("#sidenav"), scrim = $("#scrim");
      var open = force === undefined ? !nav.classList.contains("open") : force;
      nav.classList.toggle("open", open);
      scrim.classList.toggle("open", open);
      document.body.style.overflow = open ? "hidden" : "";
    }

    // deep link on load
    if (location.hash) {
      var t = document.getElementById(location.hash.slice(1));
      if (t) setTimeout(function () { t.scrollIntoView(); }, 60);
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
