/* Pyne in the Wild — renders WILD_DATA into the page */
(function () {
  'use strict';

  const D = window.WILD_DATA;
  if (!D) return;

  const $ = (sel) => document.querySelector(sel);

  // Row rendering lives in the shared render.js module (single source of truth),
  // so the static prerender (tools/prerender.mjs) and this client renderer emit
  // byte-identical HTML — hydration adopts the prerendered rows without a reflow.
  const R = window.WildRender.create(D);
  const { PAGE_SIZE, fmt, pct, plotMatch, tradeMatch, renderRow, pageNumbers } = R;

  /* ---------- snapshot counters ---------- */

  // Average match is the genuine mean of the per-output match percentages, so it
  // must read as that real figure floored to 2 decimals — never rounded UP to a
  // clean 100% it has not actually reached (99.99% stays 99.99%). The other
  // snapshot figures are whole-number counts or exact count ratios (48/48, 38/38).
  const floorPct = (rate, digits = 2) => {
    const f = 10 ** digits;
    return Math.floor(rate * 100 * f) / f;
  };

  const snapshotValues = {
    total: D.totals.total,
    tv_fidelity_pct: Math.round(D.totals.tv_fidelity_rate * 100),
    run_success_pct: Math.round(D.totals.run_success_rate * 100),
    tv_comparable: D.totals.tv_comparable,
    average_match_pct: floorPct(D.totals.average_match_rate, 2),
  };

  // Counters that carry decimals; everything else animates as a whole number.
  const SNAPSHOT_DECIMALS = { average_match_pct: 2 };

  function animateCount(el, target, decimals = 0) {
    const duration = 1300;
    const start = performance.now();
    const f = 10 ** decimals;
    function tick(now) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const v = Math.floor(target * eased * f) / f;
      el.textContent = decimals ? v.toFixed(decimals) : fmt(Math.round(v));
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const snapshotSeen = new IntersectionObserver((entries, obs) => {
    if (!entries.some((e) => e.isIntersecting)) return;
    obs.disconnect();
    document.querySelectorAll('[data-count]').forEach((el) => {
      const key = el.dataset.count;
      animateCount(el, snapshotValues[key] || 0, SNAPSHOT_DECIMALS[key] || 0);
    });
  });
  snapshotSeen.observe($('#snapshot-stats'));

  $('#snapshot-fidelity-note').textContent =
    `${D.totals.tv_fidelity_verified}/${D.totals.tv_comparable} comparable outputs verified`;
  $('#snapshot-match-note').textContent =
    `${D.totals.plot_outputs} plot + ${D.totals.trade_outputs} trade match values`;

  $('#report-provenance').innerHTML =
    `Generated <strong>${D.generated_at}</strong> &middot; ` +
    `<a href="https://github.com/PyneSys/pyne-in-the-wild" target="_blank" rel="noopener">` +
    `Report data <span aria-hidden="true">&#8599;</span></a>`;

  /* ---------- proof ladder counts ---------- */

  const t0 = D.totals.compiled;
  const t1 = D.totals.pyne_ok;

  $('#count-t0').textContent = `${t0} / ${D.totals.total} scripts`;
  $('#count-t1').textContent = `${t1} / ${t0} compiled`;
  $('#count-t2').textContent = `${D.totals.measurable_scripts} / ${t1} with plot/trade output`;
  $('#count-t3').textContent = `${D.totals.tv_fidelity_verified} / ${D.totals.tv_comparable} outputs`;
  $('#count-t3-note').textContent = `${D.totals.plot_outputs} plot + ${D.totals.trade_outputs} trade outputs`;

  /* ---------- results section ---------- */

  // #results-lead is static prose, rendered straight into index.html.

  // Donut
  const segs = [
    { id: 'seg-verified', n: D.totals.verified, label: 'Matches TradingView', color: 'var(--primary)' },
    { id: 'seg-divergent', n: D.totals.divergent || 0, label: 'Diverges from TradingView', color: 'var(--amber)' },
    { id: 'seg-repaint', n: D.totals.repaint || 0, label: 'Repaints on TradingView', color: 'var(--violet)' },
    { id: 'seg-data_limited', n: D.totals.data_limited || 0, label: 'Data-limited (unavailable feed)', color: 'var(--slate)' },
    { id: 'seg-runs', n: D.totals.runs, label: 'Runs (no reference output)', color: 'var(--secondary)' },
    { id: 'seg-failed', n: D.totals.failed, label: 'Run failed', color: 'var(--red)' },
  ];
  const circumference = 2 * Math.PI * 50;
  let offset = 0;
  segs.forEach((s) => {
    const frac = s.n / D.totals.total;
    const el = document.getElementById(s.id);
    el.style.strokeDasharray = `${frac * circumference} ${circumference}`;
    el.style.strokeDashoffset = String(-offset);
    offset += frac * circumference;
  });
  $('#donut-num').textContent = String(D.totals.total);
  $('#donut-legend').innerHTML = segs
    .map(
      (s) =>
        `<li><span class="legend-swatch" style="background:${s.color}"></span>` +
        `<span class="n">${s.n}</span><span class="legend-label">${s.label}</span></li>`
    )
    .join('');

  const thresholdLabel = pct(D.verification_threshold || 0.99, 0);

  // Indicator metrics
  $('#metric-plot').textContent = `${D.indicators.plot_verified} / ${D.indicators.compared}`;
  $('#metric-plot-list').innerHTML = [
    ['Comparable plot references', `${D.indicators.compared} / ${D.indicators.total}`],
    [`Compared plots >=${thresholdLabel}`, `${D.indicators.plot_verified} / ${D.indicators.compared}`],
    ['Exact plot matches', `${D.indicators.plot_exact} / ${D.indicators.compared}`],
    [`Mean on compared plots`, pct(D.indicators.plot_match_mean, 1)],
    ['Worst per-script plot match', pct(D.indicators.plot_match_min, 1)],
  ]
    .map(([k, v]) => `<li><span>${k}</span><span class="v">${v}</span></li>`)
    .join('');

  // Strategy metrics
  $('#metric-trades').textContent = `${D.strategies.trade_timing_verified} / ${D.strategies.compared}`;
  $('#metric-trades-list').innerHTML = [
    ['Trade references available', `${D.strategies.compared} / ${D.strategies.n}`],
    [`Entry+exit timing >=${thresholdLabel}`, `${D.strategies.trade_timing_verified} / ${D.strategies.compared}`],
    ['Fully verified strategy outputs', `${D.strategies.verified} / ${D.strategies.n}`],
    ['Trades compared in total', fmt(D.totals.trades_compared)],
    ['Exact trade-count matches', `${D.strategies.trade_count_exact_match} / ${D.strategies.compared}`],
    ['Net profit within tolerance', `${Math.round(D.strategies.net_profit_match_rate * D.strategies.compared)} / ${D.strategies.compared}`],
    ['Mean entry/exit timing match', `${pct(D.strategies.entry_match_mean, 1)} / ${pct(D.strategies.exit_match_mean, 1)}`],
  ]
    .map(([k, v]) => `<li><span>${k}</span><span class="v">${v}</span></li>`)
    .join('');

  /* ---------- methodology params ---------- */

  $('#method-params').innerHTML = [
    `<span class="k">symbol</span>      = ${D.symbol}`,
    `<span class="k">timeframe</span>   = ${D.timeframe_min} min`,
    `<span class="k">bars</span>        = 25,000+ per script`,
    `<span class="k">abs_tol</span>     = ${D.tolerances.abs_tol}`,
    `<span class="k">rel_tol</span>     = ${D.tolerances.rel_tol}`,
    `<span class="k">profit_tol</span>  = ${D.tolerances.profit_pct_tol}%`,
    `<span class="k">reference</span>   = TradingView export`,
    `<span class="k">sources</span>     = SHA-256 pinned manifest`,
  ]
    .map((line, index) => `<span class="method-param-line" style="--line-delay: ${0.46 + index * 0.055}s">${line}</span>`)
    .join('');

  const methodology = $('#methodology');
  if (methodology) {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reducedMotion && 'IntersectionObserver' in window) {
      methodology.classList.add('methodology-animate');
      const methodologySeen = new IntersectionObserver((entries, obs) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        methodology.classList.add('methodology-visible');
        obs.disconnect();
      }, { rootMargin: '0px 0px -18% 0px', threshold: 0.22 });
      methodologySeen.observe(methodology);
    } else {
      methodology.classList.add('methodology-visible');
    }
  }

  /* ---------- table: filters + search + sort + pagination ---------- */

  const table = $('#script-table');
  const tableWrap = table.closest('.table-wrap');
  const thead = table.querySelector('thead');
  const tbody = $('#script-tbody');
  const pagination = $('#pagination');
  const gridCount = $('#grid-count');
  const gridEmpty = $('#grid-empty');

  const ALL_LEVELS = ['verified', 'divergent', 'repaint', 'data_limited', 'runs', 'failed'];
  const ALL_KINDS = ['all', 'indicator', 'strategy'];
  const SORT_KEYS = ['name', 'kind', 'level', 'plotmatch', 'tvmatch', 'net', 'bars'];

  // The static prerender emits one HTML file per page (/, /scripts/page-N.html);
  // when a search visitor lands on page N, start the client render on that same
  // page so the prerendered rows are the ones shown — no jump to page 1.
  function initialPage() {
    const m = location.pathname.match(/\/scripts\/page-(\d+)\.html$/);
    return m ? Math.max(1, parseInt(m[1], 10)) : 1;
  }

  let activeKind = 'all';
  const activeLevels = new Set(ALL_LEVELS);
  let query = '';
  let page = initialPage();
  let sortKey = null; // null => natural (popularity) order from the manifest
  let sortDir = 1;

  // Persist the table's filter/search/sort choices so a page refresh keeps them —
  // e.g. narrowing to just the failing scripts survives a reload. Guarded against a
  // missing/blocked localStorage and against stale values from an older data shape.
  const STORE_KEY = 'pyne-wild-filters-v1';

  function saveState() {
    try {
      localStorage.setItem(
        STORE_KEY,
        JSON.stringify({
          kind: activeKind,
          levels: [...activeLevels],
          query,
          sortKey,
          sortDir,
        })
      );
    } catch (e) {
      /* storage unavailable (private mode, quota) — filters just won't persist */
    }
  }

  function restoreState() {
    let saved;
    try {
      saved = JSON.parse(localStorage.getItem(STORE_KEY) || 'null');
    } catch (e) {
      return;
    }
    if (!saved || typeof saved !== 'object') return;

    if (ALL_KINDS.includes(saved.kind)) activeKind = saved.kind;

    if (Array.isArray(saved.levels)) {
      const levels = saved.levels.filter((l) => ALL_LEVELS.includes(l));
      // An empty saved set would hide every row on load with no visible cause; fall
      // back to showing all rather than stranding the user on a blank table.
      if (levels.length) {
        activeLevels.clear();
        levels.forEach((l) => activeLevels.add(l));
      }
    }

    if (typeof saved.query === 'string') query = saved.query;

    if (saved.sortKey === null || SORT_KEYS.includes(saved.sortKey)) sortKey = saved.sortKey;
    if (saved.sortDir === 1 || saved.sortDir === -1) sortDir = saved.sortDir;
  }

  // Reflect the restored state onto the filter controls before the first render.
  function syncControls() {
    document.querySelectorAll('#filter-kind .filter-btn').forEach((b) => {
      b.classList.toggle('active', b.dataset.kind === activeKind);
    });
    document.querySelectorAll('#filter-level .chip').forEach((c) => {
      c.classList.toggle('active', activeLevels.has(c.dataset.level));
    });
    $('#search-box').value = query;
  }

  restoreState();
  syncControls();

  // First click on a header sorts in this direction; the next click flips it,
  // the third returns to the natural order.
  const SORT_DEFAULT_DIR = {
    name: 1, kind: 1, level: 1, plotmatch: -1, tvmatch: -1, net: -1, bars: -1,
  };
  const LEVEL_RANK = { verified: 0, divergent: 1, repaint: 2, data_limited: 3, runs: 4, failed: 5 };

  function sortValue(s, key) {
    switch (key) {
      case 'name': return s.name.toLowerCase();
      case 'kind': return s.kind;
      case 'level': return LEVEL_RANK[s.level];
      case 'plotmatch': return plotMatch(s).num;
      case 'tvmatch': return tradeMatch(s).num;
      case 'net': return s.trades && s.trades.tv > 0 ? (s.trades.net_profit_match ? 1 : 0) : null;
      case 'bars': return s.bars != null ? s.bars : null;
      default: return null;
    }
  }

  function compare(a, b) {
    const va = sortValue(a, sortKey);
    const vb = sortValue(b, sortKey);
    const na = va == null;
    const nb = vb == null;
    if (na && nb) return 0;
    if (na) return 1; // missing values always sink to the bottom
    if (nb) return -1;
    if (va < vb) return -sortDir;
    if (va > vb) return sortDir;
    return 0;
  }

  function filteredScripts() {
    const q = query.trim().toLowerCase();
    const list = D.scripts.filter((s) => {
      if (activeKind !== 'all' && s.kind !== activeKind) return false;
      if (!activeLevels.has(s.level)) return false;
      if (q && !(s.name.toLowerCase().includes(q) || s.author.toLowerCase().includes(q))) return false;
      return true;
    });
    return sortKey ? list.slice().sort(compare) : list;
  }

  function renderPagination(total) {
    const last = Math.max(1, Math.ceil(total / PAGE_SIZE));
    if (last === 1) {
      pagination.innerHTML = '';
      return;
    }
    let html = `<button class="page-btn page-arrow" data-page="${page - 1}" ${page === 1 ? 'disabled' : ''} aria-label="Previous page">&larr;</button>`;
    pageNumbers(page, last).forEach((n) => {
      if (n === 'gap') {
        html += '<span class="page-gap">&hellip;</span>';
      } else {
        html += `<button class="page-btn${n === page ? ' active' : ''}" data-page="${n}">${n}</button>`;
      }
    });
    html += `<button class="page-btn page-arrow" data-page="${page + 1}" ${page === last ? 'disabled' : ''} aria-label="Next page">&rarr;</button>`;
    pagination.innerHTML = html;
  }

  function updateSortIndicators() {
    thead.querySelectorAll('.th-sort').forEach((th) => {
      const ind = th.querySelector('.sort-ind');
      if (th.dataset.sort === sortKey) {
        th.classList.add('sorted');
        th.setAttribute('aria-sort', sortDir === 1 ? 'ascending' : 'descending');
        ind.innerHTML = sortDir === 1 ? '&#9650;' : '&#9660;';
      } else {
        th.classList.remove('sorted');
        th.removeAttribute('aria-sort');
        ind.innerHTML = '';
      }
    });
  }

  // The first render adopts the prerendered rows in place (no innerHTML write) when
  // the client would render exactly what the static page already shows — the
  // default, unfiltered view on the prerendered page. This keeps a search-engine
  // landing flash-free. Any restored filter/sort/search, or a different page,
  // falls through to a normal render.
  let firstRender = true;

  function renderTable() {
    const list = filteredScripts();
    const last = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
    if (page > last) page = last;

    const slice = list.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
    const prerendered = tbody.getAttribute('data-prerendered-page');
    const canAdopt =
      firstRender && prerendered != null && Number(prerendered) === page &&
      !sortKey && !query && activeKind === 'all' && activeLevels.size === ALL_LEVELS.length;
    if (!canAdopt) {
      tbody.innerHTML = slice.map(renderRow).join('');
    }
    tbody.removeAttribute('data-prerendered-page');
    firstRender = false;
    tableWrap.hidden = slice.length === 0;
    gridEmpty.hidden = slice.length !== 0;

    if (list.length === D.scripts.length) {
      gridCount.textContent = `${list.length} scripts`;
    } else {
      gridCount.textContent = `${list.length} of ${D.scripts.length} scripts`;
    }
    if (list.length > PAGE_SIZE) {
      const from = (page - 1) * PAGE_SIZE + 1;
      const to = Math.min(page * PAGE_SIZE, list.length);
      gridCount.textContent += ` — showing ${from}–${to}`;
    }

    renderPagination(list.length);
    updateSortIndicators();
  }

  function toggleRow(row) {
    const detail = row.nextElementSibling;
    if (!detail || !detail.classList.contains('detail-row')) return;
    const open = detail.classList.toggle('open');
    row.classList.toggle('open', open);
    const btn = row.querySelector('.caret-btn');
    if (btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) {
      detail.querySelectorAll('.match-bar-fill').forEach((el) => {
        el.style.width = el.dataset.width + '%';
      });
    }
  }

  thead.addEventListener('click', (ev) => {
    const th = ev.target.closest('.th-sort');
    if (!th) return;
    const key = th.dataset.sort;
    if (sortKey !== key) {
      sortKey = key;
      sortDir = SORT_DEFAULT_DIR[key];
    } else if (sortDir === SORT_DEFAULT_DIR[key]) {
      sortDir = -SORT_DEFAULT_DIR[key];
    } else {
      sortKey = null; // third click clears the sort
    }
    page = 1;
    saveState();
    renderTable();
  });

  // The caret <button> handles keyboard activation natively; its click bubbles here.
  tbody.addEventListener('click', (ev) => {
    if (ev.target.closest('a')) return; // let the TradingView link work
    const row = ev.target.closest('.script-row');
    if (row) toggleRow(row);
  });

  pagination.addEventListener('click', (ev) => {
    const btn = ev.target.closest('.page-btn');
    if (!btn || btn.disabled) return;
    page = Number(btn.dataset.page);
    renderTable();
    $('#scripts').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.querySelectorAll('#filter-kind .filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#filter-kind .filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeKind = btn.dataset.kind;
      page = 1;
      saveState();
      renderTable();
    });
  });

  document.querySelectorAll('#filter-level .chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      const level = chip.dataset.level;
      if (activeLevels.has(level)) {
        activeLevels.delete(level);
        chip.classList.remove('active');
      } else {
        activeLevels.add(level);
        chip.classList.add('active');
      }
      page = 1;
      saveState();
      renderTable();
    });
  });

  $('#search-box').addEventListener('input', (ev) => {
    query = ev.target.value;
    page = 1;
    saveState();
    renderTable();
  });

  renderTable();
})();
