/* Pyne in the Wild — shared row renderer (single source of truth).

   The script-table row + detail HTML is produced here and used both by app.js in
   the browser (hydration) and by tools/prerender.mjs at build time (static
   pages). Given the report data D, create(D) returns the formatters and the row
   renderer bound to it; the HTML strings are byte-identical in both environments,
   so hydration adopts the prerendered rows without a re-render or a flash.

   Loads as a plain <script> in the browser (defines window.WildRender) and as a
   CommonJS module under Node (module.exports); no build step or bundler. */
(function () {
  'use strict';

  function create(D) {
    const fmt = (n) => n.toLocaleString('en-US');
    const pct = (x, digits = 2) => {
      let s = (x * 100).toFixed(digits);
      if (s.includes('.')) s = s.replace(/0+$/, '').replace(/\.$/, '');
      return s + '%';
    };

    const badge = {
      verified: ['status-verified', 'Verified'],
      divergent: ['status-divergent', 'Divergent'],
      repaint: ['status-repaint', 'Lookahead'],
      data_limited: ['status-data_limited', 'Data-limited'],
      runs: ['status-runs', 'Runs'],
      failed: ['status-failed', 'Failed'],
    };

    const statusDesc = {
      verified: "Verified — output matched TradingView's own reference, bar by bar and trade by trade.",
      divergent: "Divergent — ran and was compared against TradingView's reference, but the output differs beyond tolerance. Shown as-is, never rounded up to verified.",
      repaint: "Lookahead — TradingView's own output leads this run by a whole higher-timeframe period, and realigned to that lead the two agree. The shape is a request.security call reading a higher-timeframe bar that had not closed yet. Held apart from the accuracy score and treated as open: a lag on the PyneCore side leaves the identical trace, and the shift alone does not separate the two.",
      data_limited: "Data-limited — the script needs a data source this comparison does not have (tick-level order-flow via request.footprint). It runs, with the missing feed reported as na, but can never match TradingView here. Excluded from the accuracy score, by design.",
      runs: 'Runs — compiled and ran over real market data without errors, but no comparable TradingView reference was available to verify against.',
      failed: 'Failed — the script did not compile or run. Reported as-is, never hidden.',
    };

    // Numerical fidelity: not WHETHER the outputs agree but HOW CLOSELY, on the
    // only scale a double has. "Matches TradingView" is a claim people are
    // entitled to disbelieve; "27,613 bars, the same double every time" is one
    // they can check.
    // It is the top of the Verified rung, not a second dimension — a tier is only
    // ever measured for a script that already matched — so it rides under the
    // status badge in the same cell instead of in a column of its own.
    // Only the two tiers that SAY something beyond the status badge. A script that
    // merely agrees within the published band gets no tier line: "it matches within
    // tolerance" is exactly what the Verified status already means, and repeating
    // it under the badge would be noise dressed as information.
    const fidelity = {
      exact: ['fid-exact', 'bit-exact'],
      libm: ['fid-libm', 'libm'],
    };

    const fidelityDesc = {
      exact:
        // Typographic quotes on purpose: this string is emitted inside a title="..."
        // attribute, where a straight quote would close the attribute early and
        // truncate the tooltip.
        'Bit-exact — on every compared bar PyneCore produced the identical IEEE-754 ' +
        'double TradingView did. Not “close enough”: the same 64 bits.',
      libm:
        'libm — the values differ only in the last bits of the mantissa, and the ' +
        'script reaches a transcendental function (log, exp, pow, the trig family). ' +
        'IEEE-754 requires + - * / and sqrt to be correctly rounded and requires ' +
        'nothing of those, so CPython\'s C library and TradingView\'s JVM may both be ' +
        'right and still land a few representable values apart. Named, not hidden.',
    };

    const fidelitySub = (s) => {
      const f = fidelity[s.fidelity];
      if (!f) return '';
      const ulp = s.plot && s.plot.max_ulp != null && s.plot.max_ulp > 0
        ? ` Worst distance: ${fmt(s.plot.max_ulp)} representable value${s.plot.max_ulp === 1 ? '' : 's'}.`
        : '';
      const via = s.transcendentals && s.transcendentals.length
        ? ` Via ${s.transcendentals.join(', ')}.`
        : '';
      return `<span class="fid-sub ${f[0]}" title="${fidelityDesc[s.fidelity]}${ulp}${via}">${f[1]}</span>`;
    };

    // The status cell: the verdict, plus the tier it was reached at when one was
    // measured. Two lines, one column — the tier can never contradict the badge
    // above it, so a reader has one thing to read, not two to reconcile.
    const statusCell = (s) => {
      const [badgeCls, badgeText] = badge[s.level];
      return (
        `<span class="status-stack">` +
          `<span class="status-badge ${badgeCls}" title="${statusDesc[s.level]}">${badgeText}</span>` +
          fidelitySub(s) +
        `</span>`
      );
    };

    // Informational tag, orthogonal to the status. Shown ONLY where individual
    // trades were actually dropped: ta.crossover / ta.crossunder decide a
    // direction with a raw > between two floats, and where every series those
    // comparisons read agrees with TradingView below the instrument's mintick,
    // the two sides can land on opposite sides of a difference the market cannot
    // quote. Those trades are excluded from both sides; the measured figures stay
    // on the row's detail panel.
    const subTickTag = (s) =>
      s.sub_tick
        ? `<span class="row-tag tag-sub_tick" title="${s.sub_tick.reason}">` +
          `${s.sub_tick.trades} excluded</span>`
        : '';

    const kindShort = { indicator: 'IND', strategy: 'STR' };
    const kindDesc = {
      indicator: 'Indicator — a plotting script, verified plot by plot.',
      strategy: 'Strategy — a backtest, verified trade by trade.',
    };

    // The Pine language version the author wrote the script in. It rides beside the
    // type chip because it says what was put under test: a pre-v6 script is
    // converted to v6 by PyneComp's own converter and then measured against
    // TradingView running the ORIGINAL source, so its row verifies the conversion
    // as well as the runtime.
    const pineVersionDesc = (v) =>
      v >= 6
        ? 'Written in Pine v6 — compiled as-is.'
        : `Written in Pine v${v} — PyneComp converted it to v6 before compiling, ` +
          `while TradingView ran the original v${v} source. The agreement on this ` +
          'row therefore verifies the conversion too, not just the runtime.';

    const pineVersionChip = (s) =>
      s.pine_version == null
        ? ''
        : `<span class="pine-chip${s.pine_version >= 6 ? '' : ' pine-converted'}"` +
          ` title="${pineVersionDesc(s.pine_version)}">v${s.pine_version}</span>`;

    const fmtDate = (iso) => (iso ? iso.slice(0, 16).replace('T', ' ') : '—');

    const dash = '<span class="muted">—</span>';
    const matchClass = (num) => (num == null ? '' : num >= 1 ? ' full' : ' partial');

    // Honest headline %: a value strictly below a true 1.0 must never round up to
    // "100%" — that would overclaim a perfect match. Clamp it just under the
    // rounding boundary so it reads "99.99%" and agrees with the amber "partial"
    // colour; an exact 1.0 still reads "100%".
    const matchPct = (num, digits = 2) =>
      pct(num != null && num < 1 ? Math.min(num, 1 - 10 ** -(digits + 2)) : num, digits);

    // Trade match: whole-trade agreement vs TradingView (entry AND exit paired,
    // surplus Pyne trades penalised), for strategies with trades. NOT the one-sided
    // entry recall, which reads 100% even when Pyne takes trades TV never did.
    // Where sub-tick decisions were excluded the headline is the adjusted figure —
    // that is what excluding them means — and the measured one is spelled out in
    // the detail panel next to it.
    function tradeMatchNum(s) {
      if (!s.trades || !(s.trades.tv > 0)) return null;
      return s.trades.trade_match_pct_adj != null
        ? s.trades.trade_match_pct_adj
        : s.trades.trade_match_pct;
    }

    function tradeMatch(s) {
      const num = tradeMatchNum(s);
      return num == null ? { num: null, text: dash } : { num, text: matchPct(num, 2) };
    }

    function netProfitOk(s) {
      return s.trades.net_profit_match_adj != null
        ? s.trades.net_profit_match_adj
        : s.trades.net_profit_match;
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
      // The counts stay as measured; only the "these disagree" styling is dropped
      // when the whole difference is trades excluded as sub-tick decisions.
      const mism = t.pc !== t.tv && !t.excluded ? ' mismatch' : '';
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
      return netProfitOk(s)
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
          `<p class="sc-repaint">Higher-timeframe lookahead — TradingView's own output leads this ` +
          `run by ${s.repaint.shift} bars, about one full period of the timeframe its ` +
          `<code>request.security</code> call asks for; realigned to that lead the two match ${rm}. ` +
          `The shape is TradingView reading a bar that had not closed yet — but a lag on the ` +
          `PyneCore side leaves the identical trace, and the shift alone does not separate the two, ` +
          `so this entry is held apart from the accuracy score and treated as open.</p>`;
      }
      if (s.data_limited) {
        html +=
          `<p class="sc-data_limited">Data-limited — this script calls ` +
          `<code>request.footprint()</code>, whose tick-level order-flow (buy/sell aggressor) ` +
          `data TradingView derives from bid/ask ticks. This comparison runs on frozen OHLCV bars ` +
          `and no such feed is part of it, so the footprint is reported as <code>na</code> and the ` +
          `script falls back to price action. It runs, but can never match TradingView here — ` +
          `excluded from the accuracy score, by design.</p>`;
      }
      if (s.sub_tick) {
        html +=
          `<p class="sc-sub_tick">Sub-tick decisions excluded — the direction here turns on ` +
          `<code>ta.crossover</code> / <code>ta.crossunder</code>, a raw <code>&gt;</code> ` +
          `between two floats. ${s.sub_tick.reason}. There is nothing to reconcile: the ` +
          `comparison carries no tolerance, and what it turned on is smaller than the instrument ` +
          `can quote. Those trades are dropped from both sides' trade count and net profit; every ` +
          `measured figure is kept below, unchanged. The adjusted profit is deliberately neither ` +
          `engine's own result — it is the net over the trades still compared.</p>`;
      }

      const acc = [];
      if (s.trades) {
        const t = s.trades;
        if (t.tv === 0) {
          acc.push(['Trades in window', '0 (none on this symbol)', '']);
        } else {
          const verMin = D.verification_threshold != null ? D.verification_threshold : 0.99;
          acc.push(['Trades compared', `${fmt(t.tv)} TV / ${fmt(t.pc)} Pyne`,
            t.pc === t.tv || t.excluded ? 'good' : 'bad']);
          if (t.excluded) acc.push(['Sub-tick decisions excluded', countLabel(t.excluded, 'trade', 'trades'), '']);
          // What the engines measured comes first, always; the adjusted figure only
          // ever sits beside it, never in place of it.
          acc.push([t.excluded ? 'Whole-trade match, measured' : 'Whole-trade match',
            matchPct(t.trade_match_pct, 2),
            t.trade_match_pct >= verMin && !t.excluded ? 'good' : '']);
          if (t.excluded) {
            acc.push(['Whole-trade match, after exclusions', matchPct(t.trade_match_pct_adj, 2),
              t.trade_match_pct_adj >= verMin ? 'good' : 'bad']);
          }
          acc.push(['Entry timing match', pct(t.entry_match_pct, 2), t.entry_match_pct === 1 ? 'good' : '']);
          acc.push(['Exit timing match', pct(t.exit_match_pct, 2), t.exit_match_pct === 1 ? 'good' : '']);
          if (t.extra_entries > 0) {
            acc.push(['Extra Pyne entries', String(t.extra_entries), t.excluded ? '' : 'bad']);
          }
          acc.push([
            t.excluded ? 'Net profit, measured (TV / Pyne)' : 'Net profit (TV / Pyne)',
            `${fmt(Math.round(t.tv_net_profit))} / ${fmt(Math.round(t.pc_net_profit))}`,
            t.net_profit_match && !t.excluded ? 'good' : '',
          ]);
          if (t.excluded) {
            acc.push([
              'Net profit, after exclusions',
              `${fmt(Math.round(t.tv_net_profit_adj))} / ${fmt(Math.round(t.pc_net_profit_adj))}`,
              t.net_profit_match_adj ? 'good' : 'bad',
            ]);
          }
        }
      }
      if (s.plot) {
        if (s.plot.cols != null) acc.push(['Plots compared', String(s.plot.cols), '']);
        // The lattice figures, spelled out. These are what the fidelity badge is
        // derived from, so the badge is never something a reader has to take on
        // trust — the numbers behind it sit right here.
        if (s.plot.bars_numeric) {
          acc.push(['Plotted values compared', fmt(s.plot.bars_numeric), '']);
        }
        if (s.plot.exact_pct != null) {
          acc.push(['Identical to the bit', matchPct(s.plot.exact_pct, 3),
            s.plot.exact_pct === 1 ? 'good' : '']);
        }
        if (s.plot.max_ulp != null) {
          acc.push([
            'Worst distance',
            s.plot.max_ulp === 0
              ? 'same double'
              : `${fmt(s.plot.max_ulp)} representable value${s.plot.max_ulp === 1 ? '' : 's'}` +
                (s.plot.max_abs ? ` (${s.plot.max_abs.toExponential(2)} absolute)` : ''),
            s.plot.max_ulp === 0 ? 'good' : '',
          ]);
        }
        // Split out on purpose: a value that is off and a bar one side plots while
        // the other does not fail for unrelated reasons, and a single percentage
        // cannot say which happened.
        if (s.plot.na_struct_mismatch) {
          acc.push(['Bars plotted by one side only', fmt(s.plot.na_struct_mismatch), 'bad']);
          if (s.plot.num_match_pct != null) {
            acc.push(['Match on values alone', matchPct(s.plot.num_match_pct, 3),
              s.plot.num_match_pct === 1 ? 'good' : '']);
          }
        }
        if (s.transcendentals && s.transcendentals.length) {
          acc.push(['Transcendentals on the path', s.transcendentals.join(', '), '']);
        }
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

      // "Version" alone is ambiguous now that two of them matter: the Pine language
      // the script is written in, and the author's own revision number.
      const src = [];
      if (s.pine_version != null) {
        src.push(['Pine version', s.pine_version >= 6
          ? `v${s.pine_version}`
          : `v${s.pine_version}, converted to v6 by PyneComp`, '']);
      }
      src.push(['Script revision', `v${s.version}`, '']);
      src.push(['License', s.license && s.license !== 'none' ? s.license : 'unspecified', '']);

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
      const pm = plotMatch(s);
      const tm = tradeMatch(s);
      const lic = s.license && s.license !== 'none' ? ` &middot; ${s.license}` : '';
      const bars = s.bars != null ? fmt(s.bars) : dash;
      return (
        `<tr class="script-row level-${s.level}">` +
          `<td class="cell-name">` +
            `<span class="row-title">${s.name}</span>` +
            `<span class="row-meta">` +
              `<span class="row-author">by ${s.author}${lic}</span>` +
              subTickTag(s) +
              `<span class="row-likes" aria-label="${fmt(s.likes)} likes"><svg class="ic-thumb" viewBox="0 0 24 24" aria-hidden="true"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/></svg> ${fmt(s.likes)}</span>` +
            `</span>` +
          `</td>` +
          `<td class="th-center"><span class="kind-chip kind-${s.kind}" title="${kindDesc[s.kind]}">${kindShort[s.kind]}</span>${pineVersionChip(s)}</td>` +
          `<td class="th-center">${statusCell(s)}</td>` +
          `<td class="th-num">${matchCell(pm, plotCountSub(s))}</td>` +
          `<td class="th-num">${matchCell(tm, tradesCountSub(s))}</td>` +
          `<td class="th-center">${netCell(s)}</td>` +
          `<td class="th-num">${bars}</td>` +
          `<td class="th-caret"><button type="button" class="caret-btn" aria-expanded="false" aria-label="Show details"><span class="caret" aria-hidden="true">&#9662;</span></button></td>` +
        `</tr>` +
        `<tr class="detail-row"><td colspan="8"><div class="detail-inner">${detailBody(s)}</div></td></tr>`
      );
    }

    // 1 ... c-1 c c+1 ... last, deduped and sorted; 'gap' marks an elision.
    function pageNumbers(current, last) {
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

    return { PAGE_SIZE: 25, fmt, pct, plotMatch, tradeMatch, renderRow, pageNumbers };
  }

  const WildRender = { create };
  if (typeof module !== 'undefined' && module.exports) module.exports = WildRender;
  if (typeof window !== 'undefined') window.WildRender = WildRender;
})();
