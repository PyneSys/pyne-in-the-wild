/* Pyne in the Wild — renders WILD_DATA into the page */
(function () {
  'use strict';

  const D = window.WILD_DATA;
  if (!D) return;

  const $ = (sel) => document.querySelector(sel);
  const fmt = (n) => n.toLocaleString('en-US');
  const pct = (x, digits = 2) => {
    let s = (x * 100).toFixed(digits);
    if (s.includes('.')) s = s.replace(/0+$/, '').replace(/\.$/, '');
    return s + '%';
  };

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

  $('#results-lead').innerHTML =
    `Indicators compared plot by plot, strategies trade by trade, against ` +
    `TradingView's own output. The headline counts are over the scripts that ` +
    `produce a comparable numeric reference; a plot PyneCore fails to reproduce ` +
    `counts as a divergence, never as "no reference". Corpus coverage and each ` +
    `script's full detail are in <a href="#scripts">The Corpus</a> below.`;

  // Donut
  const segs = [
    { id: 'seg-verified', n: D.totals.verified, label: 'Matches TradingView', color: 'var(--primary)' },
    { id: 'seg-divergent', n: D.totals.divergent || 0, label: 'Diverges from TradingView', color: 'var(--amber)' },
    { id: 'seg-repaint', n: D.totals.repaint || 0, label: 'Repaints on TradingView', color: 'var(--violet)' },
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

  /* ---------- table rows + detail ---------- */

  const badge = {
    verified: ['status-verified', 'Verified'],
    divergent: ['status-divergent', 'Divergent'],
    repaint: ['status-repaint', 'Repaint'],
    runs: ['status-runs', 'Runs'],
    failed: ['status-failed', 'Failed'],
  };

  const statusDesc = {
    verified: "Verified — output matched TradingView's own reference, bar by bar and trade by trade.",
    divergent: "Divergent — ran and was compared against TradingView's reference, but the output differs beyond tolerance. Shown as-is, never rounded up to verified.",
    repaint: "Repaint — the script repaints on TradingView: request.security leaks a not-yet-closed higher-timeframe bar, so TradingView's own plot uses future data. PyneCore stays causal and refuses to leak, so it can never match this bar-for-bar. Never supported, by design.",
    runs: 'Runs — compiled and ran over real market data without errors, but no comparable TradingView reference was available to verify against.',
    failed: 'Failed — the script did not compile or run. Reported as-is, never hidden.',
  };

  const kindShort = { indicator: 'IND', strategy: 'STR' };
  const kindDesc = {
    indicator: 'Indicator — a plotting script, verified plot by plot.',
    strategy: 'Strategy — a backtest, verified trade by trade.',
  };

  const fmtDate = (iso) => (iso ? iso.slice(0, 16).replace('T', ' ') : '—');

  const dash = '<span class="muted">—</span>';
  const matchClass = (num) => (num == null ? '' : num >= 1 ? ' full' : ' partial');

  // Honest headline %: a value strictly below a true 1.0 must never round up to
  // "100%" — that would overclaim a perfect match. Clamp it just under the
  // rounding boundary so it reads "99.99%" and agrees with the amber "partial"
  // colour; an exact 1.0 still reads "100%".
  const matchPct = (num, digits = 2) =>
    pct(num != null && num < 1 ? Math.min(num, 1 - 10 ** -(digits + 2)) : num, digits);

  // Trade match: entry-timing agreement vs TradingView, for strategies with trades.
  function tradeMatch(s) {
    if (s.trades && s.trades.tv > 0) {
      return { num: s.trades.entry_match_pct, text: matchPct(s.trades.entry_match_pct, 2) };
    }
    return { num: null, text: dash };
  }

  // Plot match: per-bar plot agreement vs TradingView, for any script that plots.
  function plotMatch(s) {
    if (s.plot && s.plot.match_pct != null) {
      return { num: s.plot.match_pct, text: matchPct(s.plot.match_pct, 2) };
    }
    return { num: null, text: dash };
  }

  function countLabel(n, singular, plural) {
    return `${fmt(n)} ${n === 1 ? singular : plural}`;
  }

  function plotCountSub(s) {
    if (!s.plot || s.plot.cols == null) return '';
    return `<span class="match-sub">${countLabel(s.plot.cols, 'plot', 'plots')}</span>`;
  }

  function tradesCountSub(s) {
    if (!s.trades) return '';
    const t = s.trades;
    const mism = t.pc !== t.tv ? ' mismatch' : '';
    const label = `${fmt(t.tv)} TradingView trades, ${fmt(t.pc)} Pyne trades`;
    return (
      `<span class="match-sub" aria-label="${label}">` +
        `${fmt(t.tv)} / <span class="pc${mism}">${fmt(t.pc)}</span>` +
      `</span>`
    );
  }

  function matchCell(match, sub = '') {
    return (
      `<div class="match-stack">` +
        `<span class="match-value${matchClass(match.num)}">${match.text}</span>` +
        sub +
      `</div>`
    );
  }

  function netCell(s) {
    if (!s.trades || s.trades.tv === 0) return '<span class="muted">—</span>';
    return s.trades.net_profit_match
      ? '<span class="net-ok" role="img" aria-label="Net profit matches">&#10003;</span>'
      : '<span class="net-bad" role="img" aria-label="Net profit differs">&#10007;</span>';
  }

  function facts(rows) {
    return (
      '<ul class="sc-facts">' +
      rows.map(([k, v, cls]) => `<li><span>${k}</span><span class="v${cls ? ' ' + cls : ''}">${v}</span></li>`).join('') +
      '</ul>'
    );
  }

  function detailBody(s) {
    let html = '';
    if (s.level === 'failed') {
      html += `<p class="sc-fail">${s.fail_reason}</p>`;
    }
    if (s.plot && s.plot.match_pct != null) {
      html +=
        `<div class="match-bar-row"><div class="match-bar-head">` +
        `<span>Plot match vs TradingView</span><span class="pct">${matchPct(s.plot.match_pct, 1)}</span></div>` +
        `<div class="match-bar"><div class="match-bar-fill" data-width="${s.plot.match_pct * 100}"></div></div></div>`;
    }
    if (s.repaint) {
      const rm = s.repaint.match_pct != null ? pct(s.repaint.match_pct, 2) : dash;
      html +=
        `<p class="sc-repaint">Repaints on TradingView — its <code>request.security</code> call ` +
        `surfaces a not-yet-closed higher-timeframe bar, so TradingView's own plot uses future ` +
        `data. PyneCore stays causal and will not leak, so it can never match this bar-for-bar. ` +
        `Realigned to TradingView's ${s.repaint.shift}-bar lookahead it matches ${rm}. ` +
        `Never supported, by design.</p>`;
    }

    const acc = [];
    if (s.trades) {
      const t = s.trades;
      if (t.tv === 0) {
        acc.push(['Trades in window', '0 (none on this symbol)', '']);
      } else {
        acc.push(['Trades compared', `${fmt(t.tv)} TV / ${fmt(t.pc)} Pyne`, t.pc === t.tv ? 'good' : 'bad']);
        acc.push(['Entry timing match', pct(t.entry_match_pct, 2), t.entry_match_pct === 1 ? 'good' : '']);
        acc.push(['Exit timing match', pct(t.exit_match_pct, 2), t.exit_match_pct === 1 ? 'good' : '']);
        if (t.extra_entries > 0) acc.push(['Extra Pyne entries', String(t.extra_entries), 'bad']);
        acc.push([
          'Net profit (TV / Pyne)',
          `${fmt(Math.round(t.tv_net_profit))} / ${fmt(Math.round(t.pc_net_profit))} USDT`,
          t.net_profit_match ? 'good' : 'bad',
        ]);
      }
    }
    if (s.plot) {
      if (s.plot.cols != null) acc.push(['Plots compared', String(s.plot.cols), '']);
      if (s.plot.pearson_min != null) acc.push(['Pearson correlation (min)', s.plot.pearson_min.toFixed(6), 'good']);
      if (s.plot.worst_col) acc.push(['Worst-matching plot', s.plot.worst_col, '']);
    }
    if (!acc.length && !s.trades && s.level === 'runs') {
      acc.push(['Reference output', 'no comparable plots exported', '']);
    }

    const run = [];
    if (s.bars != null) run.push(['Bars executed', fmt(s.bars), '']);
    // request.security feeds are extra bars PyneCore loads and resamples on top of
    // the chart series; surfaced here so a high run time / ms-per-bar (which is
    // measured per chart bar) reads in context rather than looking unexplained.
    const secBars = ((s.data && s.data.security) || []).reduce((sum, c) => sum + (c.bars || 0), 0);
    if (secBars > 0) {
      run.push(['Secondary-feed bars', fmt(secBars), '']);
      if (s.bars != null) run.push(['Total bars processed', fmt(s.bars + secBars), '']);
    }
    if (s.run_sec != null) run.push(['Run time', `${s.run_sec.toFixed(2)} s`, '']);
    if (s.ms_per_bar != null) run.push(['Per-bar time', `${s.ms_per_bar.toFixed(2)} ms/bar (per chart bar)`, '']);

    const win = [];
    if (s.data) {
      win.push(['Symbol', s.data.symbol, '']);
      win.push(['Timeframe', `${s.data.timeframe} min`, '']);
      win.push(['From', fmtDate(s.data.from), '']);
      win.push(['To', fmtDate(s.data.to), '']);
      if (s.data.bars != null) win.push(['Bars', s.data.bars.toLocaleString(), '']);
      // Secondary request.security feeds, each over the same window (depth-matched
      // to the TV reference) — shown by timeframe and bar count.
      (s.data.security || []).forEach(c => {
        const cross = c.symbol && c.symbol !== s.data.symbol;
        const label = cross ? `Security ${c.symbol} @ ${c.timeframe} min`
                            : `Security @ ${c.timeframe} min`;
        win.push([label, c.bars != null ? `${c.bars.toLocaleString()} bars` : '', '']);
      });
    }

    const src = [
      ['Version', `v${s.version}`, ''],
      ['License', s.license && s.license !== 'none' ? s.license : 'unspecified', ''],
    ];

    const cols = [];
    if (acc.length) cols.push(`<div class="detail-block"><h4>Accuracy</h4>${facts(acc)}</div>`);
    if (run.length) cols.push(`<div class="detail-block"><h4>Run</h4>${facts(run)}</div>`);
    if (win.length) cols.push(`<div class="detail-block"><h4>Data window</h4>${facts(win)}</div>`);
    cols.push(
      `<div class="detail-block"><h4>Source</h4>${facts(src)}` +
      `<p class="detail-sha"><span class="sha-label">SHA-256</span><code>${s.sha256}</code></p>` +
      `<a class="detail-link" href="${s.tv_url}" target="_blank" rel="noopener">View on TradingView <span aria-hidden="true">&#8599;</span></a></div>`
    );

    return html + `<div class="detail-cols">${cols.join('')}</div>`;
  }

  function renderRow(s) {
    const [badgeCls, badgeText] = badge[s.level];
    const pm = plotMatch(s);
    const tm = tradeMatch(s);
    const lic = s.license && s.license !== 'none' ? ` &middot; ${s.license}` : '';
    const bars = s.bars != null ? fmt(s.bars) : dash;
    return (
      `<tr class="script-row level-${s.level}">` +
        `<td class="cell-name">` +
          `<a class="row-link" href="${s.tv_url}" target="_blank" rel="noopener">${s.name}<span class="ext" aria-hidden="true">&#8599;</span></a>` +
          `<span class="row-meta">` +
            `<span class="row-author">by ${s.author}${lic}</span>` +
            `<span class="row-likes" aria-label="${fmt(s.likes)} likes"><svg class="ic-thumb" viewBox="0 0 24 24" aria-hidden="true"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/></svg> ${fmt(s.likes)}</span>` +
          `</span>` +
        `</td>` +
        `<td class="th-center"><span class="kind-chip kind-${s.kind}" title="${kindDesc[s.kind]}">${kindShort[s.kind]}</span></td>` +
        `<td class="th-center"><span class="status-badge ${badgeCls}" title="${statusDesc[s.level]}">${badgeText}</span></td>` +
        `<td class="th-num">${matchCell(pm, plotCountSub(s))}</td>` +
        `<td class="th-num">${matchCell(tm, tradesCountSub(s))}</td>` +
        `<td class="th-center">${netCell(s)}</td>` +
        `<td class="th-num">${bars}</td>` +
        `<td class="th-caret"><button type="button" class="caret-btn" aria-expanded="false" aria-label="Show details"><span class="caret" aria-hidden="true">&#9662;</span></button></td>` +
      `</tr>` +
      `<tr class="detail-row"><td colspan="8"><div class="detail-inner">${detailBody(s)}</div></td></tr>`
    );
  }

  /* ---------- table: filters + search + sort + pagination ---------- */

  const PAGE_SIZE = 25;
  const table = $('#script-table');
  const tableWrap = table.closest('.table-wrap');
  const thead = table.querySelector('thead');
  const tbody = $('#script-tbody');
  const pagination = $('#pagination');
  const gridCount = $('#grid-count');
  const gridEmpty = $('#grid-empty');

  let activeKind = 'all';
  const activeLevels = new Set(['verified', 'divergent', 'repaint', 'runs', 'failed']);
  let query = '';
  let page = 1;
  let sortKey = null; // null => natural (popularity) order from the manifest
  let sortDir = 1;

  // First click on a header sorts in this direction; the next click flips it,
  // the third returns to the natural order.
  const SORT_DEFAULT_DIR = {
    name: 1, kind: 1, level: 1, plotmatch: -1, tvmatch: -1, net: -1, bars: -1,
  };
  const LEVEL_RANK = { verified: 0, divergent: 1, repaint: 2, runs: 3, failed: 4 };

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

  function pageNumbers(current, last) {
    // 1 ... c-1 c c+1 ... last, deduped and sorted
    const wanted = new Set([1, 2, current - 1, current, current + 1, last - 1, last]);
    const nums = [...wanted].filter((n) => n >= 1 && n <= last).sort((a, b) => a - b);
    const out = [];
    let prev = 0;
    nums.forEach((n) => {
      if (n - prev > 1) out.push('gap');
      out.push(n);
      prev = n;
    });
    return out;
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

  function renderTable() {
    const list = filteredScripts();
    const last = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
    if (page > last) page = last;

    const slice = list.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
    tbody.innerHTML = slice.map(renderRow).join('');
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
      renderTable();
    });
  });

  $('#search-box').addEventListener('input', (ev) => {
    query = ev.target.value;
    page = 1;
    renderTable();
  });

  renderTable();
})();
