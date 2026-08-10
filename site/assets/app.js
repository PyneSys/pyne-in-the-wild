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

  // Fidelity percentages are floored, never rounded up to a cleaner claim than
  // the measured data supports.
  const floorPct = (rate, digits = 2) => {
    const f = 10 ** digits;
    return Math.floor(rate * 100 * f) / f;
  };

  const snapshotValues = {
    total: D.totals.total,
    tv_comparable: D.totals.tv_comparable,
    tv_fidelity_pct: floorPct(D.totals.tv_fidelity_rate, 0),
    bit_exact_pct: floorPct(D.fidelity.bars_exact_rate, 3),
  };

  // Counters that carry decimals; everything else animates as a whole number.
  const SNAPSHOT_DECIMALS = { bit_exact_pct: 3 };

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

  $('#snapshot-output-note').textContent =
    `${D.totals.plot_outputs} plot + ${D.totals.trade_outputs} trade outputs`;
  $('#snapshot-fidelity-note').textContent =
    `${D.totals.tv_fidelity_verified}/${D.totals.tv_comparable} comparable outputs verified`;
  $('#snapshot-exact-note').textContent =
    D.totals.tv_fidelity_verified === D.totals.tv_comparable
      ? 'All remaining values matched within published tolerance'
      : `${fmt(D.fidelity.bars_exact)} / ${fmt(D.fidelity.bars_compared)} plotted values`;

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

  // Tiers that only ever account for scripts held out of the accuracy score, so
  // they are shown only while the corpus actually has one (see the legend below).
  const EXCLUSION_TIERS = ['repaint', 'data_limited'];

  // Donut
  const segs = [
    { tier: 'verified', id: 'seg-verified', n: D.totals.verified, label: 'Matches TradingView', color: 'var(--primary)' },
    { tier: 'divergent', id: 'seg-divergent', n: D.totals.divergent || 0, label: 'Diverges from TradingView', color: 'var(--amber)' },
    { tier: 'repaint', id: 'seg-repaint', n: D.totals.repaint || 0, label: 'Higher-timeframe lookahead', color: 'var(--violet)' },
    { tier: 'data_limited', id: 'seg-data_limited', n: D.totals.data_limited || 0, label: 'Data-limited (unavailable feed)', color: 'var(--slate)' },
    { tier: 'runs', id: 'seg-runs', n: D.totals.runs, label: 'Runs (no reference output)', color: 'var(--secondary)' },
    { tier: 'failed', id: 'seg-failed', n: D.totals.failed, label: 'Run failed', color: 'var(--red)' },
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
  // The two exclusion buckets exist only to account for scripts held out of the
  // accuracy score; with none in the corpus there is nothing for them to explain,
  // so they leave the legend (and the filter bar, which build_site_data.py emits
  // the same way). The ladder tiers always show, zero included — a zero on
  // Divergent or Failed is itself a published result. The arcs stay in the loop
  // above: a zero-count segment draws nothing and shifts no offset.
  $('#donut-legend').innerHTML = segs
    .filter((s) => !EXCLUSION_TIERS.includes(s.tier) || s.n)
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
    ...(D.totals.sub_tick_excluded_trades
      ? [['Trades excluded as sub-tick decisions', `${D.totals.sub_tick_excluded_trades} of ${fmt(D.totals.trades_compared)}`]]
      : []),
    ['Net profit within tolerance', `${Math.round(D.strategies.net_profit_match_rate * D.strategies.compared)} / ${D.strategies.compared}`],
    ['Mean entry/exit timing match', `${pct(D.strategies.entry_match_mean, 1)} / ${pct(D.strategies.exit_match_mean, 1)}`],
  ]
    .map(([k, v]) => `<li><span>${k}</span><span class="v">${v}</span></li>`)
    .join('');

  /* ---------- methodology params ---------- */

  // These lines are also prerendered into the page by build_site_data.py, and the
  // hydrated block has to come out character for character the same or the reader
  // watches the published tolerances change under them. Both numbers below are
  // Python reprs there — Python keeps a trailing ".0" where JS drops it — and the
  // line delay is trimmed the way Python's "%g" trims it.
  const numRepr = (x) => {
    const s = String(x);
    return /[.e]/.test(s) ? s : `${s}.0`;
  };
  const lineDelay = (index) =>
    (0.46 + index * 0.055).toFixed(3).replace(/0+$/, '').replace(/\.$/, '');

  $('#method-params').innerHTML = [
    `<span class="k">symbol</span>      = ${D.symbol}`,
    `<span class="k">timeframe</span>   = ${D.timeframe_min} min`,
    ...(D.own_market_scripts ? [`<span class="k">exceptions</span>  = ${D.own_market_scripts} scripts on their own market`] : []),
    `<span class="k">bars</span>        = 25,000+ per script`,
    `<span class="k">ulp_limit</span>   = ${D.tolerances.ulp_limit} (libm tier)`,
    `<span class="k">rel_tol</span>     = ${numRepr(D.tolerances.rel_tol)}`,
    `<span class="k">scale_floor</span> = ${numRepr(D.tolerances.scale_floor)} x series median`,
    `<span class="k">net_tol</span>     = ${numRepr(D.tolerances.net_profit_rel_tol * 100)}% of the larger net`,
    `<span class="k">reference</span>   = TradingView export`,
    `<span class="k">sources</span>     = SHA-256 pinned manifest`,
  ]
    .map((line, index) => `<span class="method-param-line" style="--line-delay: ${lineDelay(index)}s">${line}</span>`)
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

  // Filter tiers, not raw levels: bit-exact is the one fidelity tier worth a chip
  // of its own (it is the headline claim). libm stays under Verified, where the
  // status cell already puts it.
  const ALL_TIERS = ['exact', 'verified', 'divergent', 'repaint', 'data_limited', 'runs', 'failed'];
  const ALL_KINDS = ['all', 'indicator', 'strategy'];
  const SORT_KEYS = ['name', 'kind', 'level', 'plotmatch', 'tvmatch', 'net', 'bars'];

  const chipTier = (s) => (s.level === 'verified' && s.fidelity === 'exact' ? 'exact' : s.level);

  // The static prerender emits one HTML file per page (/, /scripts/page-N.html);
  // when a search visitor lands on page N, start the client render on that same
  // page so the prerendered rows are the ones shown — no jump to page 1.
  // Cloudflare Pages serves clean URLs (/scripts/page-N, redirecting the .html
  // form to it), so the extension must be optional here.
  function initialPage() {
    const m = location.pathname.match(/\/scripts\/page-(\d+)(?:\.html)?\/?$/);
    return m ? Math.max(1, parseInt(m[1], 10)) : 1;
  }

  let activeKind = 'all';
  const activeTiers = new Set(ALL_TIERS);
  let query = '';
  let page = initialPage();
  let sortKey = null; // null => natural (popularity) order from the manifest
  let sortDir = 1;

  // Persist the table's filter/search/sort choices so a page refresh keeps them —
  // e.g. narrowing to just the failing scripts survives a reload. Guarded against a
  // missing/blocked localStorage and against stale values from an older data shape.
  // v2: the level set became a tier set (bit-exact split out of verified), so a v1
  // value would silently hide every bit-exact row on the next visit.
  const STORE_KEY = 'pyne-wild-filters-v2';

  function saveState() {
    try {
      localStorage.setItem(
        STORE_KEY,
        JSON.stringify({
          kind: activeKind,
          tiers: [...activeTiers],
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

    if (Array.isArray(saved.tiers)) {
      const tiers = saved.tiers.filter((t) => ALL_TIERS.includes(t));
      // An empty saved set would hide every row on load with no visible cause; fall
      // back to showing all rather than stranding the user on a blank table.
      if (tiers.length) {
        activeTiers.clear();
        tiers.forEach((t) => activeTiers.add(t));
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
      c.classList.toggle('active', activeTiers.has(c.dataset.level));
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
  // One ladder, tightest agreement first: the fidelity tiers are the top two rungs
  // of Verified, not a separate scale, so the status column sorts through them.
  const LEVEL_RANK = {
    exact: 0, libm: 1, verified: 2, divergent: 3, repaint: 4, data_limited: 5, runs: 6, failed: 7,
  };
  const rankTier = (s) =>
    (s.level === 'verified' && (s.fidelity === 'exact' || s.fidelity === 'libm')
      ? s.fidelity
      : s.level);

  function sortValue(s, key) {
    switch (key) {
      case 'name': return s.name.toLowerCase();
      case 'kind': return s.kind;
      case 'level': return LEVEL_RANK[rankTier(s)];
      case 'plotmatch': return plotMatch(s).num;
      case 'tvmatch': return tradeMatch(s).num;
      case 'net': return s.trades && s.trades.tv > 0
        ? ((s.trades.net_profit_match_adj != null ? s.trades.net_profit_match_adj
                                                  : s.trades.net_profit_match) ? 1 : 0)
        : null;
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
      if (!activeTiers.has(chipTier(s))) return false;
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
      !sortKey && !query && activeKind === 'all' && activeTiers.size === ALL_TIERS.length;
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
    if (ev.target.closest('a')) return; // let links inside the details work
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
      const tier = chip.dataset.level;
      if (activeTiers.has(tier)) {
        activeTiers.delete(tier);
        chip.classList.remove('active');
      } else {
        activeTiers.add(tier);
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
