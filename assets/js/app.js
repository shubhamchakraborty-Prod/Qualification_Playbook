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
  // mode switching is handled by the click delegate, which repaints in place
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
    } else {
      tools += '<div class="table-tools bare"><span class="tbl-count" data-tcount="' + esc(b.id) + '"></span></div>';
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
      "</tbody></table></div>" +
      '<button class="btn-more" type="button" data-tmore="' + esc(b.id) + '" hidden></button>' +
      "</div>";
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

  /* ================================================== PAGE ASSEMBLY */

  var HOME = "__home";
  var current = HOME;

  function sectionById(id) {
    return PB.sections.filter(function (s) { return s.id === id; })[0];
  }

  function readingTime(sec) {
    var words = 0;
    var pl = PB.plain[sec.id], hp = PB.helps[sec.id];
    words += strip(sec.summary + " " + (hp ? hp.answer + hp.takeaways.join(" ") : "")).split(/\s+/).length;
    if (MODE === "b" && pl) words += strip(pl.points.map(function (p) { return p.h + p.p; }).join(" ") + pl.analogy).split(/\s+/).length;
    sec.blocks.forEach(function (b) {
      if (b.t === "prose" && MODE === "b") return;
      if (b.t === "table") { words += b.rows.length * 22; return; }
      words += strip(JSON.stringify(b)).split(/\s+/).length * 0.7;
    });
    if (MODE === "a" && PB.pro[sec.id]) words += strip(PB.pro[sec.id].map(function (n) { return n.h + n.p; }).join(" ")).split(/\s+/).length;
    return Math.max(2, Math.round(words / 240));
  }

  /* ---------------------------------------------------------- home */
  function renderHome() {
    var tables = 0, rows = 0;
    PB.sections.forEach(function (s) {
      s.blocks.forEach(function (b) { if (b.t === "table") { tables++; rows += b.rows.length; } });
    });

    var h = '<header class="home-hero">' +
      '<img class="home-logo" src="assets/img/logo-mark.svg" alt="">' +
      '<span class="eyebrow">Swift AI Academy &middot; Credential Strategy</span>' +
      "<h1>Which certificate can you actually promise?</h1>" +
      '<p class="home-lede">India runs several separate credential systems. This playbook tells you which one applies to your programme, who has the authority to issue it, and what to do first.</p>' +
      '<div class="home-actions">' +
      '<a class="btn btn-gold" href="#/navigator"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2.2 5-5 2.2 2.2-5z"/></svg>Open the Credential Navigator</a>' +
      '<button class="btn btn-ghost" type="button" id="heroSearch"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>Search all ' + rows + " rows</button>" +
      "</div>" +
      '<p class="home-meta">' + esc(PB.meta.verified) + " &middot; " + PB.sections.length + " sections &middot; " + tables + " reference tables &middot; " + PB.sources.length + " primary sources</p>" +
      "</header>";

    h += '<section class="home-block"><h2 class="home-h2">Start with what you need to do</h2>' +
      '<p class="home-sub">Each one opens the page that settles it.</p><div class="tasks">';
    PB.tasks.forEach(function (t) {
      var sec = sectionById(t.to);
      h += '<a class="task" href="#/' + esc(t.to) + '"><span class="task-q">' + esc(t.q) + "</span>" +
        '<span class="task-note">' + esc(t.note) + "</span>" +
        '<span class="task-go">' + esc(sec ? sec.title : t.to) +
        '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg></span></a>';
    });
    h += "</div></section>";

    h += '<section class="home-block"><h2 class="home-h2">Or work through it in order</h2>' +
      '<p class="home-sub">Fourteen sections. Each one is a short page, not a chapter.</p><div class="secgrid">';
    PB.sections.forEach(function (s) {
      var hp = PB.helps[s.id];
      h += '<a class="seccard" href="#/' + esc(s.id) + '">' +
        '<span class="seccard-top"><span class="n">' + esc(s.num) + "</span>" +
        '<span class="badge">' + esc(PB.badges[s.id] || "") + "</span></span>" +
        "<h3>" + esc(s.title) + "</h3>" +
        "<p>" + esc(hp ? hp.answer : s.summary) + "</p>" +
        '<span class="seccard-time">' + readingTime(s) + " min read</span></a>";
    });
    h += "</div></section>";

    h += '<section class="home-block"><a class="srcbar" href="#/sources"><b>Sources</b>' +
      "<span>Every claim traces to a primary source. " + PB.sources.length + " entries covering all 76 citations.</span></a></section>";

    return '<div class="wrap home">' + h + "</div>";
  }

  /* ---------------------------------------------------------- section page */
  function renderPageHead(s) {
    var hp = PB.helps[s.id];
    var pl = PB.plain[s.id];
    var wwh = (MODE === "b" && pl && pl.wwh) ? pl.wwh : s.wwh;
    var idx = PB.sections.indexOf(s);

    var h = '<nav class="crumb"><a href="#/">Playbook</a><span>/</span><b>' + esc(s.title) + "</b></nav>";

    h += '<header class="pagehead">' +
      '<span class="eyebrow">' + esc(s.num) + " / " + esc(s.eyebrow) + " &middot; " + readingTime(s) + " min read</span>" +
      "<h1>" + esc(s.title) + "</h1>" +
      '<p class="answer">' + esc(MODE === "b" && pl ? pl.lede : (hp ? hp.answer : s.summary)) + "</p>";

    if (hp) {
      h += '<div class="minute"><span class="k">If you read nothing else</span><ul>';
      hp.takeaways.forEach(function (t) { h += "<li>" + esc(t) + "</li>"; });
      h += "</ul></div>";

      h += '<div class="jobs"><span class="k">Use this page to</span><div class="jobchips">';
      hp.jobs.forEach(function (j) { h += "<span>" + esc(j) + "</span>"; });
      h += "</div></div>";
    }

    h += '<details class="wwh-fold"><summary>What this is, why it matters, how to use it</summary>' +
      '<div class="wwh">' +
      '<div class="wwh-card"><span class="k">What</span><p>' + esc(wwh.what) + "</p></div>" +
      '<div class="wwh-card"><span class="k">Why</span><p>' + esc(wwh.why) + "</p></div>" +
      '<div class="wwh-card"><span class="k">How</span><p>' + esc(wwh.how) + "</p></div></div></details>";

    h += "</header>";
    return { html: h, idx: idx };
  }

  function renderPage(id) {
    var s = sectionById(id);
    if (!s) return renderSources();

    var head = renderPageHead(s);
    var pl = PB.plain[s.id];
    var body = "";

    if (MODE === "b" && pl) body += R.plain(pl);
    s.blocks.forEach(function (b) {
      if (MODE === "b" && b.t === "prose") return;
      if (R[b.t]) body += R[b.t](b);
    });
    if (MODE === "a" && PB.pro[s.id]) body += R.pro(PB.pro[s.id]);

    // prev / next
    var prev = PB.sections[head.idx - 1];
    var next = PB.sections[head.idx + 1];
    var foot = '<nav class="pager">';
    foot += prev
      ? '<a class="pg prev" href="#/' + esc(prev.id) + '"><span class="k">Previous</span><b>' + esc(prev.title) + "</b></a>"
      : '<a class="pg prev" href="#/"><span class="k">Back to</span><b>Home</b></a>';
    foot += next
      ? '<a class="pg next" href="#/' + esc(next.id) + '"><span class="k">Next</span><b>' + esc(next.title) + "</b></a>"
      : '<a class="pg next" href="#/sources"><span class="k">Next</span><b>Sources</b></a>';
    foot += "</nav>";

    return '<div class="wrap page">' + head.html +
      '<div class="pagebody">' + body + "</div>" + foot + "</div>";
  }

  function renderSources() {
    var h = '<nav class="crumb"><a href="#/">Playbook</a><span>/</span><b>Sources</b></nav>' +
      '<header class="pagehead"><span class="eyebrow">15 / REFERENCES</span><h1>Sources</h1>' +
      '<p class="answer">Every claim in this playbook traces to a primary source. ' + esc(PB.meta.verified) + ".</p></header>" +
      '<div class="pagebody"><div class="sources">';
    PB.sources.forEach(function (s) {
      h += '<div class="src" id="src-' + slug(s.n) + '"><span class="n">[' + esc(s.n) + ']</span>' +
        '<a href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' + esc(s.label) + "</a></div>";
    });
    h += "</div></div>" +
      '<nav class="pager"><a class="pg prev" href="#/action"><span class="k">Previous</span><b>Action plan</b></a>' +
      '<a class="pg next" href="#/"><span class="k">Back to</span><b>Home</b></a></nav>';
    return '<div class="wrap page">' + h + "</div>";
  }

  /* ---------------------------------------------------------- sidebar */
  function renderNav() {
    var h = '<a class="navlink navhome' + (current === HOME ? " active" : "") + '" href="#/">' +
      '<span class="n"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11l8-7 8 7"/><path d="M6 10v9h12v-9"/></svg></span><span>Home</span></a>';
    h += '<div class="sidenav-title">Sections</div>';
    PB.sections.forEach(function (s) {
      h += '<a class="navlink' + (current === s.id ? " active" : "") + '" href="#/' + esc(s.id) + '">' +
        '<span class="n">' + esc(s.num) + "</span><span>" + esc(s.title) + "</span></a>";
    });
    h += '<a class="navlink' + (current === "sources" ? " active" : "") + '" href="#/sources"><span class="n">15</span><span>Sources</span></a>';
    h += '<div class="nav-foot"><p>' + esc(PB.meta.verified) + ".</p><p>" + esc(PB.meta.owner) + " &middot; v" + esc(PB.meta.version) + "</p></div>";
    return h;
  }

  /* ---------------------------------------------------------- on this page */
  function renderToc() {
    var items = $$(".pagebody .block-title h3, .pagebody .sub-heading");
    if (items.length < 3) return "";
    var h = '<div class="toc"><span class="k">On this page</span><ul>';
    items.forEach(function (el, i) {
      var id = "sec-" + i;
      el.id = id;
      h += '<li><a href="#' + id + '" data-toc="' + id + '">' + esc(el.textContent) + "</a></li>";
    });
    return h + "</ul></div>";
  }

  /* ================================================== TABLE FILTERING */
  var ROW_CAP = 6;
  var expanded = {};

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
    var active = !!q || Object.keys(filters).length > 0;

    var matches = [], total = 0;
    $$("tbody tr", wrap).forEach(function (tr) {
      if (tr.classList.contains("empty-row")) return;
      total++;
      var ok = true;
      for (var k in filters) {
        var cell = $('[data-key="' + k + '"]', tr);
        if (!cell || cell.textContent.trim() !== filters[k]) { ok = false; break; }
      }
      if (ok && q) ok = tr.textContent.toLowerCase().indexOf(q) !== -1;
      if (ok) matches.push(tr);
      tr.hidden = !ok;
    });

    // Collapse long tables until the reader asks for more, or is filtering.
    var capped = 0;
    if (!active && !expanded[id] && matches.length > ROW_CAP + 2) {
      matches.forEach(function (tr, i) { if (i >= ROW_CAP) { tr.hidden = true; capped++; } });
    }

    var empty = $(".empty-row", wrap);
    if (empty) empty.hidden = matches.length !== 0;

    var more = $('[data-tmore="' + id + '"]');
    if (more) {
      if (capped) {
        more.hidden = false;
        more.textContent = "Show all " + matches.length + " rows";
      } else if (!active && expanded[id] && matches.length > ROW_CAP + 2) {
        more.hidden = false;
        more.textContent = "Show fewer";
      } else {
        more.hidden = true;
      }
    }

    var count = $('[data-tcount="' + id + '"]');
    if (count) {
      count.textContent = active
        ? matches.length + " of " + total
        : (capped ? ROW_CAP + " of " + total : total + " rows");
    }
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
        return '<a class="res" data-i="' + i + '" href="#/' + esc(it.a) + '">' +
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


  /* ================================================== ROUTER + BOOT */
  function parseHash() {
    var h = location.hash || "";
    if (h.indexOf("#/") === 0) return h.slice(2) || HOME;
    // legacy deep links (#states) and in-page anchors (#sec-3)
    var bare = h.slice(1);
    if (!bare || bare.indexOf("sec-") === 0 || bare.indexOf("src-") === 0) return null;
    return bare;
  }

  function renderModeSwitch() {
    return PB.modes.map(function (m) {
      return '<button type="button" class="mode-btn' + (m.k === MODE ? " on" : "") +
        '" data-mode="' + m.k + '" aria-pressed="' + (m.k === MODE) + '" title="' + esc(m.blurb) + '">' +
        '<span class="full">' + esc(m.label) + '</span><span class="abbr">' + esc(m.short) + "</span></button>";
    }).join("");
  }

  function paint(keepScroll) {
    document.documentElement.setAttribute("data-mode", MODE);
    document.documentElement.setAttribute("data-view", current === HOME ? "home" : "page");
    $("#modeSwitch").innerHTML = renderModeSwitch();
    $("#sidenav").innerHTML = renderNav();

    var y = keepScroll ? window.scrollY : 0;
    $("#content").innerHTML = current === HOME
      ? renderHome()
      : (current === "sources" ? renderSources() : renderPage(current));

    if (current !== HOME && current !== "sources") {
      var toc = renderToc();
      var rail = $("#rail");
      rail.innerHTML = toc;
      rail.hidden = !toc;
    } else {
      $("#rail").innerHTML = "";
      $("#rail").hidden = true;
    }

    applyGlossary();
    updateNavigator();
    $$("[data-table]").forEach(function (w) { applyTable(w.dataset.table); });

    // a citation click lands here: highlight the entry it asked for
    if (current === "sources") {
      var want = null;
      try { want = sessionStorage.getItem("saa-src"); } catch (e) {}
      if (want) {
        try { sessionStorage.removeItem("saa-src"); } catch (e) {}
        var hit = document.getElementById(want);
        if (hit) {
          hit.classList.add("hit");
          setTimeout(function () { hit.scrollIntoView({ behavior: "smooth", block: "center" }); }, 40);
          setTimeout(function () { hit.classList.remove("hit"); }, 2600);
        }
      }
    }

    var prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, y);
    document.documentElement.style.scrollBehavior = prev;

    document.title = (current === HOME ? "" : (sectionById(current) ? sectionById(current).title + " | " : "Sources | ")) +
      "India Qualifications Playbook | Swift AI Academy";
  }

  function route() {
    var id = parseHash();
    if (id === null) return;                       // in-page anchor, leave the page alone
    if (id !== HOME && id !== "sources" && !sectionById(id)) id = HOME;
    var same = id === current;
    current = id;
    paint(same);
  }

  function go(id) {
    location.hash = id === HOME ? "#/" : "#/" + id;
  }

  function boot() {
    try {
      var saved = localStorage.getItem(THEME_KEY);
      if (saved) document.documentElement.setAttribute("data-theme", saved);
    } catch (e) {}

    buildIndex();
    initSearch();

    // normalise legacy links such as #states into #/states without firing a route
    var legacy = parseHash();
    if (legacy && legacy !== HOME && location.hash.indexOf("#/") !== 0 &&
        (legacy === "sources" || sectionById(legacy))) {
      history.replaceState(null, "", "#/" + legacy);
    }

    current = (function () {
      var id = parseHash();
      if (id === null || id === HOME) return HOME;
      return (id === "sources" || sectionById(id)) ? id : HOME;
    })();
    paint(false);

    window.addEventListener("hashchange", route);

    document.addEventListener("input", function (e) {
      if (e.target.dataset && e.target.dataset.tsearch) applyTable(e.target.dataset.tsearch);
    });
    document.addEventListener("change", function (e) {
      if (e.target.dataset && e.target.dataset.tfilter) applyTable(e.target.dataset.tfilter);
      if (e.target.id === "navSelect") updateNavigator();
    });

    document.addEventListener("click", function (e) {
      var more = e.target.closest("[data-tmore]");
      if (more) {
        var mid = more.dataset.tmore;
        expanded[mid] = !expanded[mid];
        applyTable(mid);
        if (!expanded[mid]) more.closest("[data-table]").scrollIntoView({ block: "nearest" });
        return;
      }
      var clear = e.target.closest("[data-tclear]");
      if (clear) {
        var id = clear.dataset.tclear;
        var inp = $('[data-tsearch="' + id + '"]');
        if (inp) inp.value = "";
        $$('[data-tfilter="' + id + '"]').forEach(function (s) { s.value = ""; });
        expanded[id] = false;
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
          var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
        });
        return;
      }
      var ref = e.target.closest("sup.ref");
      if (ref) {
        var want = String(ref.dataset.ref);
        var hit = PB.sources.filter(function (s) { return String(s.n).split(",").indexOf(want) !== -1; })[0];
        try { sessionStorage.setItem("saa-src", "src-" + slug(hit ? hit.n : want)); } catch (err) {}
        go("sources");
        return;
      }
      var mb = e.target.closest(".mode-btn");
      if (mb) {
        if (mb.dataset.mode !== MODE) {
          MODE = mb.dataset.mode;
          try { localStorage.setItem(MODE_KEY, MODE); } catch (err) {}
          paint(true);
        }
        return;
      }
      if (e.target.closest("#heroSearch")) { $("#searchBtn").click(); return; }
      if (e.target.closest("#menuBtn")) { toggleNav(); return; }
      if (e.target.closest(".navlink") && window.innerWidth <= 1080) { toggleNav(false); return; }
      if (e.target.id === "scrim") { toggleNav(false); return; }
      if (e.target.closest("#themeBtn")) { setTheme(currentTheme() === "dark" ? "light" : "dark"); return; }
      if (e.target.closest("#printBtn")) { window.print(); return; }
    });

    function toggleNav(force) {
      var nav = $("#sidenav"), scrim = $("#scrim");
      var open = force === undefined ? !nav.classList.contains("open") : force;
      nav.classList.toggle("open", open);
      scrim.classList.toggle("open", open);
      document.body.style.overflow = open ? "hidden" : "";
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
