window.WILD_DATA = {
  "generated_at": "2026-07-07",
  "symbol": "BINANCE:BTCUSDT",
  "timeframe_min": 30,
  "verification_threshold": 0.99,
  "tolerances": {
    "abs_tol": 1e-08,
    "rel_tol": 1e-05,
    "profit_pct_tol": 0.1
  },
  "totals": {
    "total": 92,
    "indicators": 49,
    "strategies": 43,
    "compiled": 92,
    "compile_fail": 0,
    "tv_ok": 91,
    "pyne_ok": 92,
    "trade_divergence": 0,
    "compile_rate": 1.0,
    "run_rate": 1.0,
    "run_success_rate": 1.0,
    "measurable_scripts": 84,
    "tv_comparable": 113,
    "tv_fidelity_verified": 113,
    "tv_fidelity_rate": 1.0,
    "plot_outputs": 72,
    "trade_outputs": 41,
    "average_match_rate": 0.9999096548672566,
    "average_match_count": 113,
    "trades_compared": 36004,
    "bars_run": 2420777,
    "verified": 81,
    "divergent": 0,
    "repaint": 2,
    "data_limited": 1,
    "runs": 8,
    "failed": 0
  },
  "indicators": {
    "total": 49,
    "compared": 40,
    "plot_verified": 40,
    "plot_exact": 37,
    "plot_match_median": 1.0,
    "plot_match_mean": 0.9999099749999999,
    "plot_match_min": 0.996453,
    "pearson_min": 0.996732
  },
  "strategies": {
    "n": 43,
    "compared": 41,
    "trade_timing_verified": 41,
    "verified": 41,
    "entry_match_median": 1.0,
    "entry_match_mean": 0.9999829756097561,
    "exit_match_median": 1.0,
    "exit_match_mean": 0.9999858292682927,
    "trade_count_exact_match": 40,
    "net_profit_match_rate": 1.0
  },
  "scripts": [
    {
      "id": "PUB;3d8b91f226af41dfa36df2db1c21ae80",
      "kind": "indicator",
      "name": "Volume Profile, Pivot Anchored by DGT",
      "author": "dgtrd",
      "license": "none",
      "version": "4",
      "likes": 18479,
      "tv_url": "https://www.tradingview.com/script/utCRHZeP/",
      "sha256": "6b9daaa8885acd66c31180a7db317fd54b4622a69627794a0aa8628a6a799083",
      "status": "ok",
      "level": "runs",
      "bars": 26283,
      "run_sec": 1.682,
      "ms_per_bar": 0.064,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T13:00:00+00:00",
        "bars": 26283
      }
    },
    {
      "id": "PUB;1505",
      "kind": "indicator",
      "name": "[RS]Support and Resistance V0",
      "author": "RicardoSantos",
      "license": "MPL-2.0",
      "version": "4",
      "likes": 16213,
      "tv_url": "https://www.tradingview.com/script/JWdq2Bni/",
      "sha256": "f3662cafb61168ebf0c172c7c22f6f21d37a9ff2ae6880543924e9f157667597",
      "status": "ok",
      "level": "verified",
      "bars": 26283,
      "run_sec": 1.171,
      "ms_per_bar": 0.0446,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T13:00:00+00:00",
        "bars": 26283
      },
      "plot": {
        "cols": 8,
        "match_pct": 1.0,
        "worst_col": "STR",
        "pearson_min": 1.0
      }
    },
    {
      "id": "PUB;ZytqOjqg7LTtinPoslFgHUVp4BE0tgdZ",
      "kind": "indicator",
      "name": "SSL Hybrid",
      "author": "Mihkel00",
      "license": "none",
      "version": "6",
      "likes": 16037,
      "tv_url": "https://www.tradingview.com/script/C3MlAWCw/",
      "sha256": "471dff1bd64611661228ff6d475ac08b354299a663d5e215517b095b70292856",
      "status": "ok",
      "level": "verified",
      "bars": 26283,
      "run_sec": 1.988,
      "ms_per_bar": 0.0756,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T13:00:00+00:00",
        "bars": 26283
      },
      "plot": {
        "cols": 7,
        "match_pct": 1.0,
        "worst_col": "Baseline",
        "pearson_min": 1.0
      },
      "crossover": true
    },
    {
      "id": "PUB;smOGfR6p3nRIFHGkaKqbV9wWl8bFcUmA",
      "kind": "indicator",
      "name": "Fibonacci Extension / Retracement / Pivot Points by DGT",
      "author": "dgtrd",
      "license": "none",
      "version": "9",
      "likes": 15743,
      "tv_url": "https://www.tradingview.com/script/FWYQ4vTk/",
      "sha256": "d603ff0015d6a8df279aeabc8aa3d520a2ac0d59039c13aba63cbcad511f865e",
      "status": "ok",
      "level": "verified",
      "bars": 26283,
      "run_sec": 9.584,
      "ms_per_bar": 0.3646,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T13:00:00+00:00",
        "bars": 26283
      },
      "plot": {
        "cols": 31,
        "match_pct": 1.0,
        "worst_col": "Exhaustion Bar",
        "pearson_min": 1.0
      },
      "crossover": true
    },
    {
      "id": "PUB;3KZoMPYziyb4zHtK43htj9OetbgOzDRP",
      "kind": "indicator",
      "name": "FX Market Sessions",
      "author": "boitoki",
      "license": "MPL-2.0",
      "version": "54",
      "likes": 15266,
      "tv_url": "https://www.tradingview.com/script/IijBXaGM/",
      "sha256": "00375130e502fc77f5b16621299858731de42513c8d598245146673466ac3792",
      "status": "ok",
      "level": "runs",
      "bars": 26283,
      "run_sec": 5.714,
      "ms_per_bar": 0.2174,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T13:00:00+00:00",
        "bars": 26283
      },
      "crossover": true
    },
    {
      "id": "PUB;0f80bcf05d544d4c98fde06faab1c976",
      "kind": "indicator",
      "name": "Self-Aware Trend System [WillyAlgoTrader]",
      "author": "WillyAlgoTrader",
      "license": "none",
      "version": "3",
      "likes": 14702,
      "tv_url": "https://www.tradingview.com/script/sXFWVpmg/",
      "sha256": "a5960a191657eeeaab94cc56cd6d041e65d19dc5845614ff6e9529944cb3a634",
      "status": "ok",
      "level": "verified",
      "bars": 26283,
      "run_sec": 4.262,
      "ms_per_bar": 0.1622,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T13:00:00+00:00",
        "bars": 26283
      },
      "plot": {
        "cols": 1,
        "match_pct": 1.0,
        "worst_col": "SuperTrend",
        "pearson_min": 1.0
      }
    },
    {
      "id": "PUB;04a9de6fcdeb4a34b6c82bf53358fdae",
      "kind": "indicator",
      "name": "Volumatic Variable Index Dynamic Average [BigBeluga]",
      "author": "BigBeluga",
      "license": "CC",
      "version": "4",
      "likes": 13543,
      "tv_url": "https://www.tradingview.com/script/llhVjhA5/",
      "sha256": "44220518231ffaec6c7f44b414e6d375cbd453c9733c49f65de4dff736d2c34b",
      "status": "ok",
      "level": "verified",
      "bars": 26283,
      "run_sec": 12.915,
      "ms_per_bar": 0.4914,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T13:00:00+00:00",
        "bars": 26283
      },
      "plot": {
        "cols": 2,
        "match_pct": 1.0,
        "worst_col": "Plot",
        "pearson_min": 1.0
      },
      "crossover": true
    },
    {
      "id": "PUB;92ff5628d7c643419a350022e0e3866c",
      "kind": "indicator",
      "name": "Trend Targets [AlgoAlpha]",
      "author": "AlgoAlpha",
      "license": "MPL-2.0",
      "version": "1",
      "likes": 13386,
      "tv_url": "https://www.tradingview.com/script/OXsSm5NV/",
      "sha256": "71dde6c88d02556055c96f4296de41d8fbccce195dfeab2a05da230d51ccd492",
      "status": "ok",
      "level": "verified",
      "bars": 26283,
      "run_sec": 1.091,
      "ms_per_bar": 0.0415,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T13:00:00+00:00",
        "bars": 26283
      },
      "plot": {
        "cols": 3,
        "match_pct": 1.0,
        "worst_col": "Bullish Rejection",
        "pearson_min": 1.0
      },
      "crossover": true
    },
    {
      "id": "PUB;1fc29950178c42a1a88f52a18161dd53",
      "kind": "indicator",
      "name": "Precision Sniper [WillyAlgoTrader]",
      "author": "WillyAlgoTrader",
      "license": "none",
      "version": "4",
      "likes": 12956,
      "tv_url": "https://www.tradingview.com/script/IZj18oYZ/",
      "sha256": "d6de1eafc4309bd64ad8214e28f29e141c3f41d9e8afe56c98ac5926b3b1bbb0",
      "status": "ok",
      "level": "verified",
      "bars": 26283,
      "run_sec": 3.348,
      "ms_per_bar": 0.1274,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T13:00:00+00:00",
        "bars": 26283
      },
      "plot": {
        "cols": 3,
        "match_pct": 1.0,
        "worst_col": "EMA Fast",
        "pearson_min": 1.0
      },
      "crossover": true
    },
    {
      "id": "PUB;ZGFHCMyX9M60JbFJrfsgxUjGrUYtSlLg",
      "kind": "indicator",
      "name": "QQE MOD",
      "author": "Mihkel00",
      "license": "none",
      "version": "2",
      "likes": 12880,
      "tv_url": "https://www.tradingview.com/script/TpUW4muw/",
      "sha256": "3618fcc7662d0e31acbf703321c1b920eab0f7b31d62c32b9521b291af9946bf",
      "status": "ok",
      "level": "verified",
      "bars": 26283,
      "run_sec": 1.13,
      "ms_per_bar": 0.043,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T13:00:00+00:00",
        "bars": 26283
      },
      "plot": {
        "cols": 4,
        "match_pct": 0.996453,
        "worst_col": "Secondary QQE Trend Line",
        "pearson_min": 0.996732
      },
      "crossover": true
    },
    {
      "id": "PUB;nlyrgnVJ8Zrisan2g01Sfv5x9RBKvpPL",
      "kind": "indicator",
      "name": "SuperTrend",
      "author": "everget",
      "license": "GPL",
      "version": "10",
      "likes": 12792,
      "tv_url": "https://www.tradingview.com/script/VLWVV7tH/",
      "sha256": "50865e653525728caf717f962855eae10f1bf4d3651c1157e316646a3376ebe4",
      "status": "ok",
      "level": "verified",
      "bars": 26283,
      "run_sec": 0.785,
      "ms_per_bar": 0.0299,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T13:00:00+00:00",
        "bars": 26283
      },
      "plot": {
        "cols": 3,
        "match_pct": 1.0,
        "worst_col": "Long Stop",
        "pearson_min": 1.0
      }
    },
    {
      "id": "PUB;xhevX7JPlDxkaET3spCluX1AocxhFBc0",
      "kind": "indicator",
      "name": "HalfTrend",
      "author": "everget",
      "license": "GPL",
      "version": "3",
      "likes": 12530,
      "tv_url": "https://www.tradingview.com/script/U1SJ8ubc/",
      "sha256": "6587a9be145fb58e6a6cd1971aefd7744595fa07aa30d29ea0a158e0ed371562",
      "status": "ok",
      "level": "verified",
      "bars": 26283,
      "run_sec": 0.945,
      "ms_per_bar": 0.0359,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T13:00:00+00:00",
        "bars": 26283
      },
      "plot": {
        "cols": 3,
        "match_pct": 1.0,
        "worst_col": "HalfTrend",
        "pearson_min": 1.0
      }
    },
    {
      "id": "PUB;dd048626775f4320945bb6cef5bad0cf",
      "kind": "indicator",
      "name": "Support and Resistance (MTF) | Flux Charts",
      "author": "fluxchart",
      "license": "MPL-2.0",
      "version": "19",
      "likes": 12186,
      "tv_url": "https://www.tradingview.com/script/3WgfGErN/",
      "sha256": "9eb2a31a18f7448bbea4a499b8c8282b5a92ee78c3f25949e59468d13ce85f69",
      "status": "ok",
      "level": "runs",
      "bars": 26283,
      "run_sec": 1.058,
      "ms_per_bar": 0.0402,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T13:00:00+00:00",
        "bars": 26283
      }
    },
    {
      "id": "PUB;8143a07641de4d43be04c81f85649473",
      "kind": "indicator",
      "name": "Fibonacci Trend [ChartPrime]",
      "author": "ChartPrime",
      "license": "MPL-2.0",
      "version": "1",
      "likes": 11663,
      "tv_url": "https://www.tradingview.com/script/Lrpet5VK/",
      "sha256": "84f43428648eaadd23eea264e279b48fa7447234dd8ae1d5429a58227e1fb202",
      "status": "ok",
      "level": "verified",
      "bars": 26283,
      "run_sec": 1.799,
      "ms_per_bar": 0.0685,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T13:00:00+00:00",
        "bars": 26283
      },
      "plot": {
        "cols": 2,
        "match_pct": 1.0,
        "worst_col": "Trend",
        "pearson_min": 1.0
      }
    },
    {
      "id": "PUB;1b7ae64e245e4b56aa0dbfe4ed5ec48a",
      "kind": "indicator",
      "name": "Global Liquidity Index",
      "author": "QuantitativeAlpha",
      "license": "none",
      "version": "6",
      "likes": 11639,
      "tv_url": "https://www.tradingview.com/script/lG8KoR4f/",
      "sha256": "2c10623719e52be97890b4264e316ceb858022d4fee47bae73d9768c1a31dab5",
      "status": "ok",
      "level": "repaint",
      "bars": 26283,
      "run_sec": 91.326,
      "ms_per_bar": 3.4747,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T13:00:00+00:00",
        "bars": 26283,
        "security": [
          {
            "symbol": "ECONOMICS:USCBBS",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T00:00:00+00:00",
            "bars": 134
          },
          {
            "symbol": "FRED:RRPONTSYD",
            "timeframe": "D",
            "from": "2025-01-02T00:00:00+00:00",
            "to": "2026-07-01T00:00:00+00:00",
            "bars": 546
          },
          {
            "symbol": "FRED:WTREGEN",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-06-24T00:00:00+00:00",
            "bars": 78
          },
          {
            "symbol": "ECONOMICS:EUCBBS * FX_IDC:EURUSD",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T00:00:00+00:00",
            "bars": 548
          },
          {
            "symbol": "ECONOMICS:CNCBBS * FX_IDC:CNYUSD",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T00:00:00+00:00",
            "bars": 548
          },
          {
            "symbol": "ECONOMICS:JPCBBS * FX_IDC:JPYUSD",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T00:00:00+00:00",
            "bars": 548
          },
          {
            "symbol": "ECONOMICS:GBCBBS * FX_IDC:GBPUSD",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T00:00:00+00:00",
            "bars": 548
          },
          {
            "symbol": "ECONOMICS:CACBBS * FX_IDC:CADUSD",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T00:00:00+00:00",
            "bars": 548
          },
          {
            "symbol": "ECONOMICS:AUCBBS * FX_IDC:AUDUSD",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T00:00:00+00:00",
            "bars": 548
          },
          {
            "symbol": "ECONOMICS:INCBBS * FX_IDC:INRUSD",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T00:00:00+00:00",
            "bars": 548
          },
          {
            "symbol": "ECONOMICS:CHCBBS * FX_IDC:CHFUSD",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T00:00:00+00:00",
            "bars": 548
          },
          {
            "symbol": "ECONOMICS:RUCBBS * FX_IDC:RUBUSD",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T00:00:00+00:00",
            "bars": 548
          },
          {
            "symbol": "ECONOMICS:BRCBBS * FX_IDC:BRLUSD",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T00:00:00+00:00",
            "bars": 548
          },
          {
            "symbol": "ECONOMICS:KRCBBS * FX_IDC:KRWUSD",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T00:00:00+00:00",
            "bars": 548
          },
          {
            "symbol": "ECONOMICS:NZCBBS * FX_IDC:NZDUSD",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T00:00:00+00:00",
            "bars": 548
          },
          {
            "symbol": "ECONOMICS:SECBBS * FX_IDC:SEKUSD",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T00:00:00+00:00",
            "bars": 548
          },
          {
            "symbol": "ECONOMICS:MYCBBS * FX_IDC:MYRUSD",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T00:00:00+00:00",
            "bars": 548
          },
          {
            "symbol": "ECONOMICS:USM2",
            "timeframe": "D",
            "from": "2025-01-31T00:00:00+00:00",
            "to": "2026-04-30T00:00:00+00:00",
            "bars": 29
          },
          {
            "symbol": "ECONOMICS:EUM2 * FX_IDC:EURUSD",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T00:00:00+00:00",
            "bars": 548
          },
          {
            "symbol": "ECONOMICS:CNM2 * FX_IDC:CNYUSD",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T00:00:00+00:00",
            "bars": 548
          },
          {
            "symbol": "ECONOMICS:JPM2 * FX_IDC:JPYUSD",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T00:00:00+00:00",
            "bars": 548
          },
          {
            "symbol": "ECONOMICS:GBM2 * FX_IDC:GBPUSD",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T00:00:00+00:00",
            "bars": 548
          },
          {
            "symbol": "ECONOMICS:CAM2 * FX_IDC:CADUSD",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T00:00:00+00:00",
            "bars": 548
          },
          {
            "symbol": "ECONOMICS:AUM3 * FX_IDC:AUDUSD",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T00:00:00+00:00",
            "bars": 548
          },
          {
            "symbol": "ECONOMICS:INM2 * FX_IDC:INRUSD",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T00:00:00+00:00",
            "bars": 548
          },
          {
            "symbol": "ECONOMICS:CHM2 * FX_IDC:CHFUSD",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T00:00:00+00:00",
            "bars": 548
          },
          {
            "symbol": "ECONOMICS:RUM2 * FX_IDC:RUBUSD",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T00:00:00+00:00",
            "bars": 548
          },
          {
            "symbol": "ECONOMICS:BRM2 * FX_IDC:BRLUSD",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T00:00:00+00:00",
            "bars": 548
          },
          {
            "symbol": "ECONOMICS:KRM2 * FX_IDC:KRWUSD",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T00:00:00+00:00",
            "bars": 548
          },
          {
            "symbol": "ECONOMICS:MXM2 * FX_IDC:MXNUSD",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T00:00:00+00:00",
            "bars": 548
          },
          {
            "symbol": "ECONOMICS:IDM2 * FX_IDC:IDRUSD",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T00:00:00+00:00",
            "bars": 548
          },
          {
            "symbol": "ECONOMICS:ZAM2 * FX_IDC:ZARUSD",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T00:00:00+00:00",
            "bars": 548
          },
          {
            "symbol": "ECONOMICS:MYM2 * FX_IDC:MYRUSD",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T00:00:00+00:00",
            "bars": 548
          },
          {
            "symbol": "ECONOMICS:SEM2 * FX_IDC:SEKUSD",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T00:00:00+00:00",
            "bars": 548
          }
        ]
      },
      "plot": {
        "cols": 1,
        "match_pct": 0.289885,
        "worst_col": "GLI Line",
        "pearson_min": 0.998251
      },
      "repaint": {
        "shift": 47,
        "match_pct": 0.994999
      }
    },
    {
      "id": "PUB;1d610cc4055240a1a01743b225c58ccf",
      "kind": "indicator",
      "name": "Deviation Trend Profile [BigBeluga]",
      "author": "BigBeluga",
      "license": "CC",
      "version": "3",
      "likes": 11581,
      "tv_url": "https://www.tradingview.com/script/6Wr1CEuo/",
      "sha256": "9287427cff310e7ebbd62b2d3feabfed036e3ae13dfa0159332fc5a33ded66a1",
      "status": "ok",
      "level": "verified",
      "bars": 26283,
      "run_sec": 3.255,
      "ms_per_bar": 0.1238,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T13:00:00+00:00",
        "bars": 26283
      },
      "plot": {
        "cols": 1,
        "match_pct": 1.0,
        "worst_col": "Plot",
        "pearson_min": 1.0
      },
      "crossover": true
    },
    {
      "id": "PUB;f3d01f07c7b04d449fc0d72dd2854b15",
      "kind": "indicator",
      "name": "Day Trading Booster by DGT",
      "author": "dgtrd",
      "license": "none",
      "version": "2",
      "likes": 11460,
      "tv_url": "https://www.tradingview.com/script/bmkCcCIL/",
      "sha256": "48bd77eccefa0d3873d77b840bf969f33afc98cc9f844638a2bf9451b20fcf02",
      "status": "ok",
      "level": "verified",
      "bars": 26285,
      "run_sec": 33.511,
      "ms_per_bar": 1.2749,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T14:00:00+00:00",
        "bars": 26285,
        "security": [
          {
            "symbol": "BINANCE:BTCUSDT",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T00:00:00+00:00",
            "bars": 548
          },
          {
            "symbol": "BINANCE:BTCUSDT",
            "timeframe": "1",
            "from": "2026-04-24T03:20:00+00:00",
            "to": "2026-07-02T14:00:00+00:00",
            "bars": 100001
          }
        ]
      },
      "plot": {
        "cols": 2,
        "match_pct": 0.999962,
        "worst_col": "Moving Average #2",
        "pearson_min": 1.0
      }
    },
    {
      "id": "PUB;47728a39dfea457aa07a603d40fbfa37",
      "kind": "indicator",
      "name": "SuperTrend + Relative Volume (Kernel Optimized)",
      "author": "fluxchart",
      "license": "MPL-2.0",
      "version": "10",
      "likes": 10470,
      "tv_url": "https://www.tradingview.com/script/31up9Ozt/",
      "sha256": "127a082464864496b4e82dcab0f0bef7bdfc668cea8f0d8ca26296d0b5209d2c",
      "status": "ok",
      "level": "verified",
      "bars": 26283,
      "run_sec": 7.905,
      "ms_per_bar": 0.3008,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T13:00:00+00:00",
        "bars": 26283
      },
      "plot": {
        "cols": 3,
        "match_pct": 1.0,
        "worst_col": "Up direction",
        "pearson_min": 1.0
      },
      "crossover": true
    },
    {
      "id": "PUB;f8ca6c42838a4cc5b2123e0fdab76f0b",
      "kind": "indicator",
      "name": "Swing Profile [BigBeluga]",
      "author": "BigBeluga",
      "license": "CC",
      "version": "2",
      "likes": 10270,
      "tv_url": "https://www.tradingview.com/script/gFlv7t7R/",
      "sha256": "9cfba1062312223a0d52b7cb52996dfbb4298d37ed08cb5f8a03ee13635bdc65",
      "status": "ok",
      "level": "runs",
      "bars": 26104,
      "run_sec": 0.515,
      "ms_per_bar": 0.2573,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-06-28T19:30:00+00:00",
        "bars": 26104
      }
    },
    {
      "id": "PUB;92a018ea21ef4b9886e810a7fea6968d",
      "kind": "indicator",
      "name": "Buy Sell Signal",
      "author": "kelfry98",
      "license": "none",
      "version": "4",
      "likes": 10174,
      "tv_url": "https://www.tradingview.com/script/I6ZhnRNd/",
      "sha256": "fa0109bdbab422253cc908c4c17cb09ed1751808cefb88addbc931b0233a9a34",
      "status": "ok",
      "level": "verified",
      "bars": 26222,
      "run_sec": 1.019,
      "ms_per_bar": 0.0389,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-01T06:30:00+00:00",
        "bars": 26222
      },
      "plot": {
        "cols": 2,
        "match_pct": 1.0,
        "worst_col": "Fast EMA",
        "pearson_min": 1.0
      }
    },
    {
      "id": "PUB;97xDaOdATRk86n6GcHQWebnIoVIzjD8e",
      "kind": "indicator",
      "name": "Nick Rypock Trailing Reverse (NRTR)",
      "author": "everget",
      "license": "GPL",
      "version": "2",
      "likes": 9991,
      "tv_url": "https://www.tradingview.com/script/XAscppNW/",
      "sha256": "2663e8d20df8e24f197107d465cc57b918d76733889d781d585b17470888dd6d",
      "status": "ok",
      "level": "verified",
      "bars": 26283,
      "run_sec": 0.733,
      "ms_per_bar": 0.0279,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T13:00:00+00:00",
        "bars": 26283
      },
      "plot": {
        "cols": 3,
        "match_pct": 1.0,
        "worst_col": "Long Stop",
        "pearson_min": 1.0
      }
    },
    {
      "id": "PUB;ZkkLVEb1akK56dmIifnUtR2SMDgJ4dqM",
      "kind": "indicator",
      "name": "RSI Support & Resistance by DGT",
      "author": "dgtrd",
      "license": "none",
      "version": "6",
      "likes": 9445,
      "tv_url": "https://www.tradingview.com/script/pnc5rcY3/",
      "sha256": "87653c5d764803950b377c86dbac6b7e68a62dca95f7190d601283d1f6b5de31",
      "status": "ok",
      "level": "verified",
      "bars": 26222,
      "run_sec": 1.621,
      "ms_per_bar": 0.0618,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-01T06:30:00+00:00",
        "bars": 26222
      },
      "plot": {
        "cols": 11,
        "match_pct": 1.0,
        "worst_col": "RSI Overbought Crossover Level",
        "pearson_min": 1.0
      },
      "crossover": true
    },
    {
      "id": "PUB;WokerspHYCae8NdAwae4mYE2rTOAOsWD",
      "kind": "indicator",
      "name": "Elliott Wave Oscillator Signals by DGT",
      "author": "dgtrd",
      "license": "none",
      "version": "17",
      "likes": 9337,
      "tv_url": "https://www.tradingview.com/script/3twfvd3k/",
      "sha256": "278c080ec378a5af5221c4d1f81fe2cb9447759effabad95f97970414e757f61",
      "status": "ok",
      "level": "runs",
      "bars": 26222,
      "run_sec": 1.588,
      "ms_per_bar": 0.0605,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-01T06:30:00+00:00",
        "bars": 26222
      },
      "crossover": true
    },
    {
      "id": "PUB;dad326b624514b14aa513fce0b1dd803",
      "kind": "indicator",
      "name": "Moving Average Shift [ChartPrime]",
      "author": "ChartPrime",
      "license": "MPL-2.0",
      "version": "1",
      "likes": 9301,
      "tv_url": "https://www.tradingview.com/script/aApUyBnk/",
      "sha256": "e1c4dfdbae56c9e653ce172b88bcfddfe7f78135f83c3a30600916251972adc0",
      "status": "ok",
      "level": "verified",
      "bars": 26222,
      "run_sec": 5.629,
      "ms_per_bar": 0.2147,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-01T06:30:00+00:00",
        "bars": 26222
      },
      "plot": {
        "cols": 6,
        "match_pct": 1.0,
        "worst_col": "SMA-based MA",
        "pearson_min": 1.0
      },
      "crossover": true
    },
    {
      "id": "PUB;31190855aaa049d58746900abf6f0cea",
      "kind": "indicator",
      "name": "Change in State of Delivery CISD [AlgoAlpha]",
      "author": "AlgoAlpha",
      "license": "MPL-2.0",
      "version": "3",
      "likes": 9282,
      "tv_url": "https://www.tradingview.com/script/DNxCFCO1/",
      "sha256": "400fe21f90951d04f3ed7f9731b73e3e0bbf984a3c0f6a9e92ed9213e046c418",
      "status": "ok",
      "level": "verified",
      "bars": 26222,
      "run_sec": 1.111,
      "ms_per_bar": 0.0424,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-01T06:30:00+00:00",
        "bars": 26222
      },
      "plot": {
        "cols": 2,
        "match_pct": 1.0,
        "worst_col": "Swing High",
        "pearson_min": 1.0
      }
    },
    {
      "id": "PUB;qGtQuqP4dCZKbFCqXUhpP5QDTaghhTpZ",
      "kind": "indicator",
      "name": "HTF Candles & Mini Charts by DGT",
      "author": "dgtrd",
      "license": "none",
      "version": "26",
      "likes": 9095,
      "tv_url": "https://www.tradingview.com/script/kcqc3J2y/",
      "sha256": "cef0879736c8ac94b09a81d58e94b5d7214e11ac0b6718bd2cfda6c8a377cf3c",
      "status": "ok",
      "level": "runs",
      "bars": 26222,
      "run_sec": 5.624,
      "ms_per_bar": 0.2145,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-01T06:30:00+00:00",
        "bars": 26222
      }
    },
    {
      "id": "PUB;cfca07f0a2f3477fb331e22737f72562",
      "kind": "indicator",
      "name": "Volume Order Blocks [BigBeluga]",
      "author": "BigBeluga",
      "license": "CC",
      "version": "1",
      "likes": 8946,
      "tv_url": "https://www.tradingview.com/script/5CpArShF/",
      "sha256": "6b77bee25441f10db5a16214af297945028a2a9875fef6f5a35d20d20038ce54",
      "status": "ok",
      "level": "verified",
      "bars": 26222,
      "run_sec": 1.465,
      "ms_per_bar": 0.0559,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-01T06:30:00+00:00",
        "bars": 26222
      },
      "plot": {
        "cols": 2,
        "match_pct": 1.0,
        "worst_col": "",
        "pearson_min": 1.0
      },
      "crossover": true
    },
    {
      "id": "PUB;2c5c233f31444ce19b94f975d981fb2a",
      "kind": "indicator",
      "name": "Trend Duration Forecast [ChartPrime]",
      "author": "ChartPrime",
      "license": "MPL-2.0",
      "version": "1",
      "likes": 8789,
      "tv_url": "https://www.tradingview.com/script/L3SJFfAQ/",
      "sha256": "e2e50c664a557dd03fd0de93ed627e6d69a73d0f758730c52ebe357d736098fb",
      "status": "ok",
      "level": "verified",
      "bars": 26222,
      "run_sec": 0.891,
      "ms_per_bar": 0.034,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-01T06:30:00+00:00",
        "bars": 26222
      },
      "plot": {
        "cols": 1,
        "match_pct": 1.0,
        "worst_col": "HMA",
        "pearson_min": 1.0
      }
    },
    {
      "id": "PUB;bab4ed662c7348e78341110edaffaacb",
      "kind": "indicator",
      "name": "Market Shift Levels [ChartPrime]",
      "author": "ChartPrime",
      "license": "MPL-2.0",
      "version": "1",
      "likes": 8744,
      "tv_url": "https://www.tradingview.com/script/urTBALXa/",
      "sha256": "2d1571387dca11a1c44d911c2b94ab751feeddf22921b23ced1a2adf434f2d6f",
      "status": "ok",
      "level": "verified",
      "bars": 26222,
      "run_sec": 0.692,
      "ms_per_bar": 0.0264,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-01T06:30:00+00:00",
        "bars": 26222
      },
      "plot": {
        "cols": 1,
        "match_pct": 1.0,
        "worst_col": "Market Shift Levels",
        "pearson_min": 1.0
      },
      "crossover": true
    },
    {
      "id": "PUB;20572cf632f4435b9eb2a5551b4f5768",
      "kind": "indicator",
      "name": "Market Structure Dashboard | Flux Charts",
      "author": "fluxchart",
      "license": "MPL-2.0",
      "version": "2",
      "likes": 8649,
      "tv_url": "https://www.tradingview.com/script/vXui7vrm/",
      "sha256": "776a7a72d0b785de22f8b049488d9e2ef099401c7d7aae7a37d51809950db899",
      "status": "ok",
      "level": "runs",
      "bars": 26387,
      "run_sec": 15.883,
      "ms_per_bar": 0.6019,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-04T17:00:00+00:00",
        "bars": 26387,
        "security": [
          {
            "symbol": "BINANCE:BTCUSDT",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-04T00:00:00+00:00",
            "bars": 550
          },
          {
            "symbol": "BINANCE:BTCUSDT",
            "timeframe": "W",
            "from": "2025-01-06T00:00:00+00:00",
            "to": "2026-06-29T00:00:00+00:00",
            "bars": 78
          },
          {
            "symbol": "BINANCE:BTCUSDT",
            "timeframe": "M",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-01T00:00:00+00:00",
            "bars": 34
          },
          {
            "symbol": "BINANCE:BTCUSDT",
            "timeframe": "60",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-04T17:00:00+00:00",
            "bars": 13194
          },
          {
            "symbol": "BINANCE:BTCUSDT",
            "timeframe": "240",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-04T16:00:00+00:00",
            "bars": 3299
          }
        ]
      },
      "crossover": true
    },
    {
      "id": "PUB;b96fdd470dac47d1a227d8aae88bdbb4",
      "kind": "indicator",
      "name": "Volume SuperTrend AI (Expo)",
      "author": "Zeiierman",
      "license": "CC",
      "version": "2",
      "likes": 8496,
      "tv_url": "https://www.tradingview.com/script/eTgP2ymK/",
      "sha256": "539c15a9ef3c5161e71e8996f768f7570e0f4506b4c77ceba720b7f09124d347",
      "status": "ok",
      "level": "verified",
      "bars": 26388,
      "run_sec": 2.214,
      "ms_per_bar": 0.0839,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-04T17:30:00+00:00",
        "bars": 26388
      },
      "plot": {
        "cols": 8,
        "match_pct": 1.0,
        "worst_col": "Volume Super Trend AI",
        "pearson_min": 1.0
      }
    },
    {
      "id": "PUB;e253a5781ec44fa1bc2a0976504bb9b5",
      "kind": "indicator",
      "name": "Liquidity Grabs | Flux Charts",
      "author": "fluxchart",
      "license": "MPL-2.0",
      "version": "2",
      "likes": 8411,
      "tv_url": "https://www.tradingview.com/script/ZxHyWlMd/",
      "sha256": "090507d8884cf3ba6b7c0d05d0a26ff313e5e175cd0ed0c1b17cf99f21bf4acf",
      "status": "ok",
      "level": "verified",
      "bars": 26388,
      "run_sec": 1.421,
      "ms_per_bar": 0.0539,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-04T17:30:00+00:00",
        "bars": 26388
      },
      "plot": {
        "cols": 6,
        "match_pct": 1.0,
        "worst_col": "Buyside Liq Grab Small",
        "pearson_min": 1.0
      }
    },
    {
      "id": "PUB;IyhtPoGIPyhxhxX2J48GfYxxKX1WKE5B",
      "kind": "indicator",
      "name": "Parabolic SAR",
      "author": "everget",
      "license": "GPL",
      "version": "6",
      "likes": 8167,
      "tv_url": "https://www.tradingview.com/script/MddD4giy/",
      "sha256": "eccc009203a6388a5efa1f63467a5b8a64dab9351655b45e521a4f697d6da4ef",
      "status": "ok",
      "level": "verified",
      "bars": 26388,
      "run_sec": 0.807,
      "ms_per_bar": 0.0306,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-04T17:30:00+00:00",
        "bars": 26388
      },
      "plot": {
        "cols": 2,
        "match_pct": 1.0,
        "worst_col": "PSAR",
        "pearson_min": 1.0
      }
    },
    {
      "id": "PUB;ccc1c01351094ad0b42e46e285b501d5",
      "kind": "indicator",
      "name": "Ultimate Opening Range Breakout [LuxAlgo]",
      "author": "LuxAlgo",
      "license": "CC",
      "version": "1",
      "likes": 7995,
      "tv_url": "https://www.tradingview.com/script/G4aoqFUF/",
      "sha256": "65caa0037c6a67dfc8c6ac22cefae2e63010c4257957d40f644eab85c445d1fc",
      "status": "ok",
      "level": "verified",
      "bars": 26388,
      "run_sec": 3.084,
      "ms_per_bar": 0.1169,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-04T17:30:00+00:00",
        "bars": 26388
      },
      "plot": {
        "cols": 10,
        "match_pct": 1.0,
        "worst_col": "OR High",
        "pearson_min": 1.0
      },
      "crossover": true
    },
    {
      "id": "PUB;f2a1a82b1a4741e0a217433d9cc9398f",
      "kind": "indicator",
      "name": "Smart Money Breakout Signals [AlgoAlpha]",
      "author": "AlgoAlpha",
      "license": "MPL-2.0",
      "version": "2",
      "likes": 7958,
      "tv_url": "https://www.tradingview.com/script/IV6eZF3w/",
      "sha256": "4b741287458c4a449e575522ac227a46459b92dc58f9dc89d2a1b0775d9f218e",
      "status": "ok",
      "level": "runs",
      "bars": 26388,
      "run_sec": 0.742,
      "ms_per_bar": 0.0281,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-04T17:30:00+00:00",
        "bars": 26388
      }
    },
    {
      "id": "PUB;84da7a14bfe64823a1246e4d5b0f7c80",
      "kind": "indicator",
      "name": "CVD - Cumulative Volume Delta (Chart)",
      "author": "TradingView",
      "license": "MPL-2.0",
      "version": "3",
      "likes": 7840,
      "tv_url": "https://www.tradingview.com/script/hFcy7CIq/",
      "sha256": "98bdc5ef9c21c2bc71325a1f88ebb8a463f271c4656f814aebb94ca63d285192",
      "status": "ok",
      "level": "verified",
      "bars": 26429,
      "run_sec": 25.89,
      "ms_per_bar": 0.9796,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-05T14:00:00+00:00",
        "bars": 26429,
        "security": [
          {
            "symbol": "BINANCE:BTCUSDT",
            "timeframe": "30",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-05T14:00:00+00:00",
            "bars": 26429
          },
          {
            "symbol": "BINANCE:BTCUSDT",
            "timeframe": "1",
            "from": "2026-04-27T04:17:00+00:00",
            "to": "2026-07-05T14:29:00+00:00",
            "bars": 99973
          }
        ]
      },
      "plot": {
        "cols": 20,
        "match_pct": 0.999984,
        "worst_col": "CVD before this bar",
        "pearson_min": 1.0
      },
      "crossover": true
    },
    {
      "id": "PUB;091bb46c2b8b45718c46b487a8fa46ac",
      "kind": "indicator",
      "name": "HEMA Trend Levels [AlgoAlpha]",
      "author": "AlgoAlpha",
      "license": "MPL-2.0",
      "version": "3",
      "likes": 7698,
      "tv_url": "https://www.tradingview.com/script/WClHCU5Q/",
      "sha256": "a57fe9e16b6f1e310ac82ae24e19901288e2b2c69767fc225df3bd4e07fb861c",
      "status": "ok",
      "level": "verified",
      "bars": 26387,
      "run_sec": 1.07,
      "ms_per_bar": 0.0406,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-04T17:00:00+00:00",
        "bars": 26387
      },
      "plot": {
        "cols": 6,
        "match_pct": 1.0,
        "worst_col": "Top HEMA",
        "pearson_min": 1.0
      },
      "crossover": true
    },
    {
      "id": "PUB;d7963fa132134e1faf23f3856e963b99",
      "kind": "indicator",
      "name": "Momentum Shift [Bigbeluga]",
      "author": "BigBeluga",
      "license": "CC",
      "version": "1",
      "likes": 7523,
      "tv_url": "https://www.tradingview.com/script/frV6xCiE/",
      "sha256": "462f46b3c58faf7b696c841f2b823d52655638f3e5fd38a4080f9d162f587b16",
      "status": "ok",
      "level": "verified",
      "bars": 26388,
      "run_sec": 1.94,
      "ms_per_bar": 0.0735,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-04T17:30:00+00:00",
        "bars": 26388
      },
      "plot": {
        "cols": 2,
        "match_pct": 1.0,
        "worst_col": "Plot",
        "pearson_min": 1.0
      },
      "crossover": true
    },
    {
      "id": "PUB;WvWdhArzmm2x97mJFkWyG9SMvGxDHMRR",
      "kind": "indicator",
      "name": "Linear Regression Channel / Curve / Slope by DGT",
      "author": "dgtrd",
      "license": "none",
      "version": "8",
      "likes": 7371,
      "tv_url": "https://www.tradingview.com/script/ropVPOmR/",
      "sha256": "5a106d463882a40c3e3247b74180638b4025e60e9dc24570e84de5c4794fb60f",
      "status": "ok",
      "level": "verified",
      "bars": 26465,
      "run_sec": 8.292,
      "ms_per_bar": 0.3133,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-06T08:00:00+00:00",
        "bars": 26465
      },
      "plot": {
        "cols": 9,
        "match_pct": 1.0,
        "worst_col": "LRC",
        "pearson_min": 1.0
      },
      "crossover": true
    },
    {
      "id": "PUB;c1afbad74e454904b0943f1bb287362d",
      "kind": "indicator",
      "name": "Multitimeframe Fair Value Gap – FVG (Zeiierman)",
      "author": "Zeiierman",
      "license": "CC",
      "version": "1",
      "likes": 7366,
      "tv_url": "https://www.tradingview.com/script/5jS51RsP/",
      "sha256": "773f381e5266d9059f9753941825554da8f8e5b973f1dd6a151b6286b60913ba",
      "status": "ok",
      "level": "verified",
      "bars": 26388,
      "run_sec": 11.079,
      "ms_per_bar": 0.4198,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-04T17:30:00+00:00",
        "bars": 26388
      },
      "plot": {
        "cols": 2,
        "match_pct": 1.0,
        "worst_col": "FVG Trend Filter",
        "pearson_min": 1.0
      }
    },
    {
      "id": "PUB;cf6dc608d8cd496caa1d4e2d90b26243",
      "kind": "indicator",
      "name": "RSI Momentum Divergence Zones [ChartPrime]",
      "author": "ChartPrime",
      "license": "MPL-2.0",
      "version": "1",
      "likes": 7299,
      "tv_url": "https://www.tradingview.com/script/x3KNfmR3/",
      "sha256": "05d977f3567a03b76ba8171fa55b4d69b38de1a488e916f8705393859422c9de",
      "status": "ok",
      "level": "verified",
      "bars": 26466,
      "run_sec": 1.532,
      "ms_per_bar": 0.0579,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-06T08:30:00+00:00",
        "bars": 26466
      },
      "plot": {
        "cols": 8,
        "match_pct": 1.0,
        "worst_col": "RSI",
        "pearson_min": 1.0
      }
    },
    {
      "id": "PUB;bf93981b780443dfaa54f41b6e654aeb",
      "kind": "indicator",
      "name": "Liquidation Reversal Signals [AlgoAlpha]",
      "author": "AlgoAlpha",
      "license": "MPL-2.0",
      "version": "2",
      "likes": 7275,
      "tv_url": "https://www.tradingview.com/script/vOwc3W80/",
      "sha256": "eec8a2262990f1a9fdd35f174f8d0454046aae858ec21de898e80932fabbee8e",
      "status": "ok",
      "level": "verified",
      "bars": 26465,
      "run_sec": 9.17,
      "ms_per_bar": 0.3465,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-06T08:00:00+00:00",
        "bars": 26465,
        "security": [
          {
            "symbol": "BINANCE:BTCUSDT",
            "timeframe": "15",
            "from": "2025-05-01T00:00:00+00:00",
            "to": "2026-07-06T08:15:00+00:00",
            "bars": 41410
          }
        ]
      },
      "plot": {
        "cols": 5,
        "match_pct": 1.0,
        "worst_col": "Mid Body",
        "pearson_min": 1.0
      },
      "crossover": true
    },
    {
      "id": "PUB;87158567b731451c8a1347f953921ab7",
      "kind": "indicator",
      "name": "Adaptive Trend Flow [QuantAlgo]",
      "author": "QuantAlgo",
      "license": "MPL-2.0",
      "version": "1",
      "likes": 7232,
      "tv_url": "https://www.tradingview.com/script/1ttpw8M3/",
      "sha256": "1ea54098575274f28045d2d70e8169513a1d15b6bad7bcf8771093c8fe2b9b44",
      "status": "ok",
      "level": "verified",
      "bars": 26465,
      "run_sec": 0.881,
      "ms_per_bar": 0.0333,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-06T08:00:00+00:00",
        "bars": 26465
      },
      "plot": {
        "cols": 3,
        "match_pct": 1.0,
        "worst_col": "Plot",
        "pearson_min": 1.0
      },
      "crossover": true
    },
    {
      "id": "PUB;acf8d4d6d2c94af0a06278acfdb750c4",
      "kind": "indicator",
      "name": "Signal Forge [LuxAlgo]",
      "author": "LuxAlgo",
      "license": "CC",
      "version": "1",
      "likes": 7136,
      "tv_url": "https://www.tradingview.com/script/HtOSLjaj/",
      "sha256": "f414423bf277ba5fb3f2858bc45dca9f3dfb73ce6ac8b34af1337e583ee0ffbf",
      "status": "ok",
      "level": "verified",
      "bars": 26466,
      "run_sec": 2.86,
      "ms_per_bar": 0.1081,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-06T08:30:00+00:00",
        "bars": 26466
      },
      "plot": {
        "cols": 10,
        "match_pct": 1.0,
        "worst_col": "Long Glow 1",
        "pearson_min": 1.0
      }
    },
    {
      "id": "PUB;fd4b548a723d48118abc341a0a20c579",
      "kind": "indicator",
      "name": "Volume Sentiment Breakout Channels [AlgoAlpha]",
      "author": "AlgoAlpha",
      "license": "MPL-2.0",
      "version": "1",
      "likes": 7132,
      "tv_url": "https://www.tradingview.com/script/t2D9irXp/",
      "sha256": "da9f35b529df5cfc49bdf01daaf5db06b94ec5285931c667cb3347d5c48eb6f5",
      "status": "ok",
      "level": "verified",
      "bars": 26466,
      "run_sec": 5.022,
      "ms_per_bar": 0.1898,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-06T08:30:00+00:00",
        "bars": 26466
      },
      "plot": {
        "cols": 5,
        "match_pct": 1.0,
        "worst_col": "Plot",
        "pearson_min": 1.0
      },
      "crossover": true
    },
    {
      "id": "PUB;542384a637de43638188885945527de4",
      "kind": "indicator",
      "name": "Liquidity Sweep Filter [AlgoAlpha]",
      "author": "AlgoAlpha",
      "license": "MPL-2.0",
      "version": "3",
      "likes": 7099,
      "tv_url": "https://www.tradingview.com/script/rDS0kick/",
      "sha256": "1067111437eed3de990ee51c13fd47bf6552e05b90e0a3cda028407699b5fe84",
      "status": "ok",
      "level": "verified",
      "bars": 26466,
      "run_sec": 21.342,
      "ms_per_bar": 0.8064,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-06T08:30:00+00:00",
        "bars": 26466
      },
      "plot": {
        "cols": 6,
        "match_pct": 1.0,
        "worst_col": "Downtrend Line",
        "pearson_min": 1.0
      },
      "crossover": true
    },
    {
      "id": "PUB;b686d2ef0ab0401cb51185d433669d2c",
      "kind": "indicator",
      "name": "Liquidity Thermal Map [BigBeluga]",
      "author": "BigBeluga",
      "license": "CC",
      "version": "1",
      "likes": 7013,
      "tv_url": "https://www.tradingview.com/script/G30eUYdH/",
      "sha256": "908fc236454b309b0c2ea396efdb950a89e1b4b9e246df99623367b26533a20a",
      "status": "ok",
      "level": "verified",
      "bars": 26467,
      "run_sec": 4.095,
      "ms_per_bar": 2.7303,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-06T09:00:00+00:00",
        "bars": 26467
      },
      "plot": {
        "cols": 32,
        "match_pct": 1.0,
        "worst_col": "Plot",
        "pearson_min": 1.0
      }
    },
    {
      "id": "PUB;2852",
      "kind": "indicator",
      "name": "RCI3lines",
      "author": "gero",
      "license": "none",
      "version": "2",
      "likes": 6979,
      "tv_url": "https://www.tradingview.com/script/ODobP95E/",
      "sha256": "39cff9a308d71823c5b625ed311acf7a19add6cd87d7bdfc73694840fefa5c5c",
      "status": "ok",
      "level": "verified",
      "bars": 26466,
      "run_sec": 9.275,
      "ms_per_bar": 0.3504,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-06T08:30:00+00:00",
        "bars": 26466
      },
      "plot": {
        "cols": 3,
        "match_pct": 1.0,
        "worst_col": "RCI short",
        "pearson_min": 1.0
      }
    },
    {
      "id": "PUB;b479566fb5794c7ca3b8158bacb6f5b7",
      "kind": "indicator",
      "name": "Fibonacci Time-Price Zones",
      "author": "xxattaxx",
      "license": "none",
      "version": "1",
      "likes": 6959,
      "tv_url": "https://www.tradingview.com/script/1NHVL40I/",
      "sha256": "81eb37eedcce7b5b546c1ff8ef727cfc714bb81f60ac93295c4a7c624be5e750",
      "status": "ok",
      "level": "verified",
      "bars": 26465,
      "run_sec": 2.495,
      "ms_per_bar": 0.0943,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-06T08:00:00+00:00",
        "bars": 26465
      },
      "plot": {
        "cols": 17,
        "match_pct": 1.0,
        "worst_col": "B Price",
        "pearson_min": null
      }
    },
    {
      "id": "PUB;c5150782cf534904996d58386f951456",
      "kind": "strategy",
      "name": "TrendMaster Pro 2.3 with Alerts",
      "author": "everget",
      "license": "none",
      "version": "2",
      "likes": 4108,
      "tv_url": "https://www.tradingview.com/script/mVkDf8qh/",
      "sha256": "249012791e71dc95b36315fd9f9dc75cb95b9ffc70692d715aa23e17232b90d1",
      "status": "ok",
      "level": "verified",
      "bars": 26282,
      "run_sec": 4.995,
      "ms_per_bar": 0.1901,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T12:30:00+00:00",
        "bars": 26282,
        "security": [
          {
            "symbol": "BINANCE:BTCUSDT",
            "timeframe": "1W",
            "from": "2025-01-06T00:00:00+00:00",
            "to": "2026-06-29T00:00:00+00:00",
            "bars": 78
          }
        ]
      },
      "plot": {
        "cols": 8,
        "match_pct": 1.0,
        "worst_col": "High Band",
        "pearson_min": 1.0
      },
      "trades": {
        "tv": 109,
        "pc": 109,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": 43055.05,
        "pc_net_profit": 43055.05,
        "net_profit_match": true
      },
      "crossover": true
    },
    {
      "id": "PUB;4eba554427d74fa9b2a6f1e1353a6230",
      "kind": "strategy",
      "name": "Template Trailing Strategy (Backtester)",
      "author": "jason5480",
      "license": "CC",
      "version": "53",
      "likes": 3320,
      "tv_url": "https://www.tradingview.com/script/n8bgynWl/",
      "sha256": "03955a2d4857c5c43f2ccd9ed4e1b088215c9b80c365e1df76e2ccfbb220c85f",
      "status": "ok",
      "level": "verified",
      "bars": 26282,
      "run_sec": 33.398,
      "ms_per_bar": 1.2708,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T12:30:00+00:00",
        "bars": 26282
      },
      "plot": {
        "cols": 30,
        "match_pct": 1.0,
        "worst_col": "🔌Signal",
        "pearson_min": 1.0
      },
      "trades": {
        "tv": 200,
        "pc": 200,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": -26871.244,
        "pc_net_profit": -26871.244,
        "net_profit_match": true
      },
      "crossover": true
    },
    {
      "id": "PUB;3f3d9ba4bd5644f9a3f3d0d68326e736",
      "kind": "strategy",
      "name": "Solution Zigma - Fibonacci Impulse",
      "author": "SATI_by_OpesSemper",
      "license": "MPL-2.0",
      "version": "9",
      "likes": 3306,
      "tv_url": "https://www.tradingview.com/script/k1GLeZco/",
      "sha256": "1ed0bfd3a82ee06f649fc54429ab1d51429ff5735c736309d5016b90b2521089",
      "status": "ok",
      "level": "verified",
      "bars": 26283,
      "run_sec": 20.538,
      "ms_per_bar": 0.7814,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T13:00:00+00:00",
        "bars": 26283,
        "security": [
          {
            "symbol": "BINANCE:BTCUSDT",
            "timeframe": "240",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T12:00:00+00:00",
            "bars": 3286
          },
          {
            "symbol": "BINANCE:BTCUSDT",
            "timeframe": "60",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-02T13:00:00+00:00",
            "bars": 13142
          },
          {
            "symbol": "BINANCE:BTCUSDT",
            "timeframe": "15",
            "from": "2025-05-01T00:00:00+00:00",
            "to": "2026-07-02T13:00:00+00:00",
            "bars": 41045
          }
        ]
      },
      "plot": {
        "cols": 7,
        "match_pct": 0.999543,
        "worst_col": "Zigma Bull impulse",
        "pearson_min": 1.0
      },
      "trades": {
        "tv": 349,
        "pc": 349,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": 258.9952,
        "pc_net_profit": 258.9952,
        "net_profit_match": true
      },
      "crossover": true
    },
    {
      "id": "PUB;8a84190f650940ad89a34c5f547d9e6a",
      "kind": "strategy",
      "name": "ICT Entry V2 [TS_Indie]",
      "author": "Truth_Strategy_Indie",
      "license": "none",
      "version": "2",
      "likes": 3109,
      "tv_url": "https://www.tradingview.com/script/wm9e7Wca/",
      "sha256": "6a3949604d04b4ad4e3c04f0cb99caeca342013d7647f6593782c4b8439f63ca",
      "status": "ok",
      "level": "verified",
      "bars": 26282,
      "run_sec": 6.979,
      "ms_per_bar": 0.2655,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T12:30:00+00:00",
        "bars": 26282
      },
      "plot": {
        "cols": 5,
        "match_pct": 1.0,
        "worst_col": "Trend",
        "pearson_min": 1.0
      },
      "trades": {
        "tv": 14,
        "pc": 14,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": 3991.09,
        "pc_net_profit": 3991.09,
        "net_profit_match": true
      }
    },
    {
      "id": "PUB;89cd79617968408bba9fad999e30d7f4",
      "kind": "strategy",
      "name": "Trendline Breaks with Multi Fibonacci Supertrend Strategy",
      "author": "FibonacciFlux",
      "license": "CC",
      "version": "2",
      "likes": 2753,
      "tv_url": "https://www.tradingview.com/script/aVzNdTMg/",
      "sha256": "58238058af9217e1fcfc6b78cde1ade15c2dba579afcbd9cd1fb4faec03055ee",
      "status": "ok",
      "level": "verified",
      "bars": 26283,
      "run_sec": 2.536,
      "ms_per_bar": 0.0965,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T13:00:00+00:00",
        "bars": 26283
      },
      "plot": {
        "cols": 4,
        "match_pct": 1.0,
        "worst_col": "Average Supertrend",
        "pearson_min": 1.0
      },
      "trades": {
        "tv": 1180,
        "pc": 1180,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": 62.324604,
        "pc_net_profit": 62.324604,
        "net_profit_match": true
      },
      "crossover": true
    },
    {
      "id": "PUB;ee0c3c9ccd634b8ba98ed98804081581",
      "kind": "strategy",
      "name": "Dynamic Swing Anchored VWAP STRAT (Zeiierman/PineIndicators)",
      "author": "PineIndicators",
      "license": "CC",
      "version": "1",
      "likes": 2365,
      "tv_url": "https://www.tradingview.com/script/gjFSGRCo/",
      "sha256": "b96f89db0e102366cb1bed10f60e1e2dad04d62516ffd985c3ac4019b25ad1f5",
      "status": "ok",
      "level": "verified",
      "bars": 26237,
      "run_sec": 1.224,
      "ms_per_bar": null,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-01T14:00:00+00:00",
        "bars": 26237
      },
      "trades": {
        "tv": 168,
        "pc": 168,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": -8030.292,
        "pc_net_profit": -8030.2918,
        "net_profit_match": true
      }
    },
    {
      "id": "PUB;96d3cf8e482f4527803157f068726505",
      "kind": "strategy",
      "name": "RSI-Adaptive T3 & SAR Strategy [PrimeAutomation]",
      "author": "ChartPrime",
      "license": "MPL-2.0",
      "version": "1",
      "likes": 2250,
      "tv_url": "https://www.tradingview.com/script/bldXp6gY/",
      "sha256": "6827180ea116b0d1e88a98a6826b205f68b781e98f9c1ab13a6e3476795b3ceb",
      "status": "ok",
      "level": "verified",
      "bars": 26282,
      "run_sec": 30.267,
      "ms_per_bar": 1.1516,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T12:30:00+00:00",
        "bars": 26282,
        "security": [
          {
            "symbol": "BINANCE:BTCUSDT",
            "timeframe": "5",
            "from": "2025-07-20T07:10:00+00:00",
            "to": "2026-07-02T12:30:00+00:00",
            "bars": 100001
          }
        ]
      },
      "plot": {
        "cols": 5,
        "match_pct": 1.0,
        "worst_col": "SAR Filter",
        "pearson_min": 1.0
      },
      "trades": {
        "tv": 454,
        "pc": 454,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": -555.0037,
        "pc_net_profit": -555.00371,
        "net_profit_match": true
      },
      "crossover": true
    },
    {
      "id": "PUB;41jwaH1ikzASSsZWoTeUs7JpItoC6jIz",
      "kind": "strategy",
      "name": "Trailing Take Profit Trailing Stop Loss",
      "author": "jason5480",
      "license": "MIT",
      "version": "37",
      "likes": 2202,
      "tv_url": "https://www.tradingview.com/script/V7IfK3mr/",
      "sha256": "ee07dd6c24991c4b9f9539455eafa57e217e66775030ddec7cf7b15495124e13",
      "status": "ok",
      "level": "verified",
      "bars": 26282,
      "run_sec": 8.23,
      "ms_per_bar": 0.3131,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T12:30:00+00:00",
        "bars": 26282
      },
      "plot": {
        "cols": 7,
        "match_pct": 1.0,
        "worst_col": "Fast SMA",
        "pearson_min": 1.0
      },
      "trades": {
        "tv": 1256,
        "pc": 1256,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": -21120.564,
        "pc_net_profit": -21120.565,
        "net_profit_match": true
      },
      "crossover": true
    },
    {
      "id": "PUB;5a7853c5c47749ef929c2cf96672a45e",
      "kind": "strategy",
      "name": "ICT Entry V1 [TS_Indie]",
      "author": "Truth_Strategy_Indie",
      "license": "none",
      "version": "2",
      "likes": 1967,
      "tv_url": "https://www.tradingview.com/script/mVdZBLJ7/",
      "sha256": "8545f8f6ba4c63ab2dfbb8326ae947a89fc1ec69fc1633a5d79792da86d41148",
      "status": "ok",
      "level": "verified",
      "bars": 26282,
      "run_sec": 6.262,
      "ms_per_bar": 0.2382,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T12:30:00+00:00",
        "bars": 26282
      },
      "plot": {
        "cols": 5,
        "match_pct": 1.0,
        "worst_col": "Plot",
        "pearson_min": 1.0
      },
      "trades": {
        "tv": 5,
        "pc": 5,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": -1332.09,
        "pc_net_profit": -1332.09,
        "net_profit_match": true
      }
    },
    {
      "id": "PUB;4d376cfa9a1e4ecd959eeabca8e4b528",
      "kind": "strategy",
      "name": "Double&Triple Pattern[TS_Indie]",
      "author": "Truth_Strategy_Indie",
      "license": "MPL-2.0",
      "version": "1",
      "likes": 1830,
      "tv_url": "https://www.tradingview.com/script/ykzrcWQf/",
      "sha256": "07c71944d7a981081d7984602074b643360cdf4e9611b952b30b9c718595b5ec",
      "status": "ok",
      "level": "verified",
      "bars": 26282,
      "run_sec": 2.62,
      "ms_per_bar": 0.0997,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T12:30:00+00:00",
        "bars": 26282
      },
      "trades": {
        "tv": 22,
        "pc": 22,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": 18903.57,
        "pc_net_profit": 18903.57,
        "net_profit_match": true
      }
    },
    {
      "id": "PUB;dd87adfe2b0a43b798d140c8a9d358b8",
      "kind": "strategy",
      "name": "Liquidity Sweep Filter Strategy [AlgoAlpha X PineIndicators]",
      "author": "PineIndicators",
      "license": "MPL-2.0",
      "version": "1",
      "likes": 1809,
      "tv_url": "https://www.tradingview.com/script/gx7267BR/",
      "sha256": "6af7602e293d1fd5aeb162aacc48a23365085a8612cfc2d8eab22a5d70d624fc",
      "status": "ok",
      "level": "verified",
      "bars": 26282,
      "run_sec": 23.016,
      "ms_per_bar": 0.8758,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T12:30:00+00:00",
        "bars": 26282
      },
      "plot": {
        "cols": 6,
        "match_pct": 1.0,
        "worst_col": "Downtrend Line",
        "pearson_min": 1.0
      },
      "trades": {
        "tv": 176,
        "pc": 176,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": -46014.57,
        "pc_net_profit": -46014.554,
        "net_profit_match": true
      },
      "crossover": true
    },
    {
      "id": "PUB;19e48adf5cf9498a9589c5839b0106c1",
      "kind": "strategy",
      "name": "Moving Average Band Strategy",
      "author": "ravi_matrix",
      "license": "MPL-2.0",
      "version": "1",
      "likes": 1803,
      "tv_url": "https://www.tradingview.com/script/wwi02rpz/",
      "sha256": "2816464d0459c06b8a95a7a09c2cc728a61d167107d5a75451636fb2569ffa48",
      "status": "ok",
      "level": "verified",
      "bars": 26283,
      "run_sec": 1.477,
      "ms_per_bar": 0.0562,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T13:00:00+00:00",
        "bars": 26283
      },
      "plot": {
        "cols": 7,
        "match_pct": 1.0,
        "worst_col": "Upper Band",
        "pearson_min": 1.0
      },
      "trades": {
        "tv": 2046,
        "pc": 2046,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": 440561.6,
        "pc_net_profit": 440561.61,
        "net_profit_match": true
      },
      "crossover": true
    },
    {
      "id": "PUB;30b1a0e07387481eabd34c886416780a",
      "kind": "strategy",
      "name": "Rally Base Drop SND Pivots Strategy [LuxAlgo X PineIndicators]",
      "author": "PineIndicators",
      "license": "none",
      "version": "1",
      "likes": 1580,
      "tv_url": "https://www.tradingview.com/script/dagKHrx4/",
      "sha256": "3f383b0339998c7de4e23b8dd05d3333a214aeaf6d791c7e8d16d7a45731e7f6",
      "status": "ok",
      "level": "verified",
      "bars": 26260,
      "run_sec": 1.225,
      "ms_per_bar": null,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T01:30:00+00:00",
        "bars": 26260
      },
      "trades": {
        "tv": 240,
        "pc": 240,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": -20335.516,
        "pc_net_profit": -20335.524,
        "net_profit_match": true
      },
      "crossover": true
    },
    {
      "id": "PUB;0338cbd8417445d2a46bfdebfd1db51d",
      "kind": "strategy",
      "name": "DEMA ATR Strategy [PrimeAutomation]",
      "author": "ChartPrime",
      "license": "MPL-2.0",
      "version": "2",
      "likes": 1527,
      "tv_url": "https://www.tradingview.com/script/rqRd3f62/",
      "sha256": "4c4599f46aaef42b2116fbbf48037ceb7d7a9c4b7ceee7c39478dd9bc7c4d53e",
      "status": "ok",
      "level": "verified",
      "bars": 26283,
      "run_sec": 16.119,
      "ms_per_bar": 0.6133,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T13:00:00+00:00",
        "bars": 26283,
        "security": [
          {
            "symbol": "BINANCE:BTCUSDT",
            "timeframe": "5",
            "from": "2025-07-20T07:40:00+00:00",
            "to": "2026-07-02T13:00:00+00:00",
            "bars": 100001
          }
        ]
      },
      "plot": {
        "cols": 8,
        "match_pct": 1.0,
        "worst_col": "TP1 Long",
        "pearson_min": 1.0
      },
      "trades": {
        "tv": 499,
        "pc": 499,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": -39.564724,
        "pc_net_profit": -39.272152,
        "net_profit_match": true
      },
      "crossover": true
    },
    {
      "id": "PUB;9f89cd8bc5114f679286c5884e5ae938",
      "kind": "strategy",
      "name": "Order Block Volumatic FVG Strategy",
      "author": "TagsTrading",
      "license": "CC",
      "version": "1",
      "likes": 1525,
      "tv_url": "https://www.tradingview.com/script/PjH7wg3n/",
      "sha256": "22542aad5a3bbdf4bce243a440a989058f8ca52d8b75f4efa5e9be7ce315224b",
      "status": "ok",
      "level": "verified",
      "bars": 26138,
      "run_sec": 57.819,
      "ms_per_bar": 2.2121,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-06-29T12:30:00+00:00",
        "bars": 26138,
        "security": [
          {
            "symbol": "BINANCE:BTCUSDT",
            "timeframe": "3",
            "from": "2025-12-03T04:30:00+00:00",
            "to": "2026-06-29T12:30:00+00:00",
            "bars": 100001
          }
        ]
      },
      "plot": {
        "cols": 2,
        "match_pct": 0.995708,
        "worst_col": "Candidate Bear mitigation (%)",
        "pearson_min": 1.0
      },
      "trades": {
        "tv": 65,
        "pc": 65,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": -10.428261,
        "pc_net_profit": -10.428261,
        "net_profit_match": true
      }
    },
    {
      "id": "PUB;3b01ba9f8cac4c92b8995eab91448e66",
      "kind": "strategy",
      "name": "Turtle Strategy - Triple EMA Trend with ADX and ATR",
      "author": "cyatophilum",
      "license": "MPL-2.0",
      "version": "2",
      "likes": 1462,
      "tv_url": "https://www.tradingview.com/script/vzXlqRCT/",
      "sha256": "655c5d5d91e2a44dfa58bd55d20987239b4e5f5b6794742b2b1ae726eff7a8a1",
      "status": "ok",
      "level": "verified",
      "bars": 25455,
      "run_sec": 1.098,
      "ms_per_bar": 0.0431,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-06-15T07:00:00+00:00",
        "bars": 25455
      },
      "plot": {
        "cols": 6,
        "match_pct": 1.0,
        "worst_col": "ADX",
        "pearson_min": 1.0
      },
      "trades": {
        "tv": 84,
        "pc": 84,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": -4731.6685,
        "pc_net_profit": -4731.6684,
        "net_profit_match": true
      },
      "crossover": true
    },
    {
      "id": "PUB;4d22c0ddd0024ac1809a100e92802165",
      "kind": "strategy",
      "name": "RSI Strategy [PrimeAutomation]",
      "author": "ChartPrime",
      "license": "MPL-2.0",
      "version": "1",
      "likes": 1442,
      "tv_url": "https://www.tradingview.com/script/RiQzLLoh/",
      "sha256": "f6c445c832bef4cc64a65575dac25c7b8008c7912db5b2d5bd24bd9f6cd2c64e",
      "status": "ok",
      "level": "verified",
      "bars": 26278,
      "run_sec": 29.831,
      "ms_per_bar": 1.1352,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T10:30:00+00:00",
        "bars": 26278,
        "security": [
          {
            "symbol": "BINANCE:BTCUSDT",
            "timeframe": "5",
            "from": "2025-07-20T05:10:00+00:00",
            "to": "2026-07-02T10:30:00+00:00",
            "bars": 100001
          }
        ]
      },
      "plot": {
        "cols": 7,
        "match_pct": 1.0,
        "worst_col": "Trail Stop",
        "pearson_min": 1.0
      },
      "trades": {
        "tv": 206,
        "pc": 206,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": -172.89429,
        "pc_net_profit": -172.89429,
        "net_profit_match": true
      },
      "crossover": true
    },
    {
      "id": "PUB;87bbbf8970004e8eaa3e40ca35aa5042",
      "kind": "strategy",
      "name": "Divergence IQ [TradingIQ]",
      "author": "Trading-IQ",
      "license": "MPL-2.0",
      "version": "1",
      "likes": 1404,
      "tv_url": "https://www.tradingview.com/script/hgcTVYeX/",
      "sha256": "29d0716623776e807da0cbe152e01549767e119ee662d1c87fc1c4d899ba69b5",
      "status": "ok",
      "level": "verified",
      "bars": 25456,
      "run_sec": 4.462,
      "ms_per_bar": 0.1753,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-06-15T07:30:00+00:00",
        "bars": 25456,
        "security": [
          {
            "symbol": "BINANCE:BTCUSDT",
            "timeframe": "1",
            "from": "2026-04-06T21:20:00+00:00",
            "to": "2026-06-13T17:32:00+00:00",
            "bars": 97693
          }
        ]
      },
      "plot": {
        "cols": 28,
        "match_pct": 1.0,
        "worst_col": "Plot",
        "pearson_min": 1.0
      },
      "trades": {
        "tv": 148,
        "pc": 148,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": -5.902296,
        "pc_net_profit": -5.902296,
        "net_profit_match": true
      }
    },
    {
      "id": "PUB;0xIMSgNhPUlPkr5LmMmsOIjCVGq6M95q",
      "kind": "strategy",
      "name": "Trailing Take Profit",
      "author": "jason5480",
      "license": "MIT",
      "version": "22",
      "likes": 1376,
      "tv_url": "https://www.tradingview.com/script/W8nc1c3V/",
      "sha256": "3d60c9d9e8b542137f5b91baffddf3c90c30c4adbd66b73bb62caad7cfe4e018",
      "status": "ok",
      "level": "verified",
      "bars": 26102,
      "run_sec": 7.008,
      "ms_per_bar": 0.2685,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-06-28T18:30:00+00:00",
        "bars": 26102
      },
      "plot": {
        "cols": 4,
        "match_pct": 1.0,
        "worst_col": "Fast SMA",
        "pearson_min": 1.0
      },
      "trades": {
        "tv": 3,
        "pc": 3,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": 20615.635,
        "pc_net_profit": 20615.634,
        "net_profit_match": true
      },
      "crossover": true
    },
    {
      "id": "PUB;d828d3c5cea540869b9be0070e0ac8af",
      "kind": "strategy",
      "name": "Smart Grid Scalping (Pullback) Strategy[BullByte]",
      "author": "BullByte",
      "license": "MPL-2.0",
      "version": "4",
      "likes": 1224,
      "tv_url": "https://www.tradingview.com/script/B3Ey5I4g/",
      "sha256": "d23c8c1f9c1a286040b444fa40f5989f4ef261d80b531f1bb0c733a82a77f6c4",
      "status": "ok",
      "level": "verified",
      "bars": 26282,
      "run_sec": 1.758,
      "ms_per_bar": 0.0669,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T12:30:00+00:00",
        "bars": 26282
      },
      "trades": {
        "tv": 308,
        "pc": 308,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": 57217.453,
        "pc_net_profit": 57217.419,
        "net_profit_match": true
      }
    },
    {
      "id": "PUB;82c506a954054e1185ed5f0486cb07fa",
      "kind": "strategy",
      "name": "Divergence Strategy [Trendoscope®]",
      "author": "Trendoscope",
      "license": "CC",
      "version": "2",
      "likes": 1219,
      "tv_url": "https://www.tradingview.com/script/haCPJOF2/",
      "sha256": "23eecca9f86579f09fdd57ed6a934c227701046a765a23531f61f1db9b3121d4",
      "status": "ok",
      "level": "verified",
      "bars": 26434,
      "run_sec": 2.321,
      "ms_per_bar": 0.4643,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-05T16:30:00+00:00",
        "bars": 26434
      },
      "plot": {
        "cols": 1,
        "match_pct": 1.0,
        "worst_col": "Oscillator",
        "pearson_min": 1.0
      },
      "trades": {
        "tv": 22,
        "pc": 22,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": -17716.764,
        "pc_net_profit": -17527.475,
        "net_profit_match": true
      }
    },
    {
      "id": "PUB;f15d62d0386f4e1e91223a254fbe0a32",
      "kind": "strategy",
      "name": "Fibonacci 5 Candles Retracement",
      "author": "Burdiga84",
      "license": "none",
      "version": "2",
      "likes": 1195,
      "tv_url": "https://www.tradingview.com/script/EbAcK7HY/",
      "sha256": "888612708dc6ccdc0a59ded2588f1c002a192a1ea158d9bed230f3513b1a25d4",
      "status": "ok",
      "level": "verified",
      "bars": 26277,
      "run_sec": 1.126,
      "ms_per_bar": null,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-02T10:00:00+00:00",
        "bars": 26277
      },
      "trades": {
        "tv": 651,
        "pc": 651,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": 1652.0488,
        "pc_net_profit": 1652.0488,
        "net_profit_match": true
      }
    },
    {
      "id": "PUB;c3aff79ca231439db7bdfad70196c1a2",
      "kind": "strategy",
      "name": "Triangular Hull Moving Average [BigBeluga X PineIndicators]",
      "author": "PineIndicators",
      "license": "none",
      "version": "1",
      "likes": 1195,
      "tv_url": "https://www.tradingview.com/script/gMeYb8Dp/",
      "sha256": "dead5f40f2c9cf38ee041eb3aab867f91031f58a30238dfb1fa26ed208dbd592",
      "status": "ok",
      "level": "verified",
      "bars": 26242,
      "run_sec": 4.156,
      "ms_per_bar": 0.1584,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-01T16:30:00+00:00",
        "bars": 26242
      },
      "trades": {
        "tv": 1001,
        "pc": 1001,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": -31099.44,
        "pc_net_profit": -31099.44,
        "net_profit_match": true
      },
      "crossover": true
    },
    {
      "id": "PUB;84de2f0edc6f4bca9eb628f8093406b2",
      "kind": "strategy",
      "name": "Master Trend Strategy v1.0",
      "author": "jake_theboss",
      "license": "none",
      "version": "2",
      "likes": 1193,
      "tv_url": "https://www.tradingview.com/script/ewZ8T4K3/",
      "sha256": "8a30774d26582f80e5441f9deee96107a68d4163ed46f8702120fa6dffdb2108",
      "status": "ok",
      "level": "verified",
      "bars": 26435,
      "run_sec": 2.842,
      "ms_per_bar": 0.1075,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-05T17:00:00+00:00",
        "bars": 26435
      },
      "plot": {
        "cols": 1,
        "match_pct": 1.0,
        "worst_col": "EMA 750",
        "pearson_min": 1.0
      },
      "trades": {
        "tv": 2067,
        "pc": 2067,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": -122042.44,
        "pc_net_profit": -122042.44,
        "net_profit_match": true
      },
      "crossover": true
    },
    {
      "id": "PUB;e747372391a444b0a75935aed0e225c0",
      "kind": "strategy",
      "name": "Tick-Tock (UT Bot Alert + Linear Regression Candles)",
      "author": "MrPencilBox",
      "license": "MPL-2.0",
      "version": "1",
      "likes": 1185,
      "tv_url": "https://www.tradingview.com/script/hNPuoyrz/",
      "sha256": "dd4fbd22c250c00c8d2fc337b93eeff53a11bd0c1bc2b4ad22663682a44f05a3",
      "status": "ok",
      "level": "verified",
      "bars": 26242,
      "run_sec": 3.127,
      "ms_per_bar": 0.1192,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-01T16:30:00+00:00",
        "bars": 26242
      },
      "plot": {
        "cols": 1,
        "match_pct": 1.0,
        "worst_col": "Signal (Stop Reference)",
        "pearson_min": 1.0
      },
      "trades": {
        "tv": 895,
        "pc": 895,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": -15455.15,
        "pc_net_profit": -15455.16,
        "net_profit_match": true
      },
      "crossover": true
    },
    {
      "id": "PUB;93eb5db950a8477ba3ccb213f6140cac",
      "kind": "strategy",
      "name": "Hybrid: RSI + Breakout + Dashboard",
      "author": "RugSurvivor",
      "license": "MPL-2.0",
      "version": "1",
      "likes": 1184,
      "tv_url": "https://www.tradingview.com/script/aAszLZWi/",
      "sha256": "0e241d67665a0b5ca7e703bab0bd5cf7cd120170a5de62804264e6795e1a9ced",
      "status": "ok",
      "level": "verified",
      "bars": 26242,
      "run_sec": 1.556,
      "ms_per_bar": 0.0593,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-01T16:30:00+00:00",
        "bars": 26242
      },
      "plot": {
        "cols": 1,
        "match_pct": 1.0,
        "worst_col": "200 EMA",
        "pearson_min": 1.0
      },
      "trades": {
        "tv": 3095,
        "pc": 3095,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": 746370200.0,
        "pc_net_profit": 746370170.0,
        "net_profit_match": true
      }
    },
    {
      "id": "PUB;0b5f8a73449048daa1889680c7df20f4",
      "kind": "strategy",
      "name": "Universal Breakout Strategy [KedArc Quant]",
      "author": "kedarcquant",
      "license": "none",
      "version": "1",
      "likes": 1178,
      "tv_url": "https://www.tradingview.com/script/tSoUhlM9/",
      "sha256": "983f114a0bd75aa01b1f2d10666712ed5b47f5156545558a34e22e1fa2941b8b",
      "status": "ok",
      "level": "repaint",
      "bars": 26243,
      "run_sec": 3.166,
      "ms_per_bar": 0.1207,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-01T17:00:00+00:00",
        "bars": 26243,
        "security": [
          {
            "symbol": "BINANCE:BTCUSDT",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-01T00:00:00+00:00",
            "bars": 547
          }
        ]
      },
      "plot": {
        "cols": 7,
        "match_pct": 0.021742,
        "worst_col": "Prev Low",
        "pearson_min": 0.992639
      },
      "repaint": {
        "shift": 47,
        "match_pct": 1.0
      },
      "trades": {
        "tv": 455,
        "pc": 378,
        "trade_match_pct": 0.116484,
        "entry_match_pct": 0.173626,
        "exit_match_pct": 0.217582,
        "extra_entries": 299,
        "tv_net_profit": -164468.6,
        "pc_net_profit": -370716.38,
        "net_profit_match": false
      },
      "crossover": true
    },
    {
      "id": "PUB;YYoXIgjwHL4SJn6Sk9DAudZrqt1DTz23",
      "kind": "strategy",
      "name": "Trend Reversal Alerts Strategy [4H/3M]",
      "author": "sequentialvision",
      "license": "none",
      "version": "2",
      "likes": 1115,
      "tv_url": "https://www.tradingview.com/script/2DxTUzED/",
      "sha256": "e12472bb81b6f8dd838fba623796f8593ea6bf7e4196b5369316f9bdb6960f6b",
      "status": "ok",
      "level": "verified",
      "bars": 26242,
      "run_sec": 0.925,
      "ms_per_bar": 0.0352,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-01T16:30:00+00:00",
        "bars": 26242
      },
      "plot": {
        "cols": 1,
        "match_pct": 1.0,
        "worst_col": "Plot",
        "pearson_min": 1.0
      },
      "trades": {
        "tv": 2235,
        "pc": 2235,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": -64993.78,
        "pc_net_profit": -64993.78,
        "net_profit_match": true
      }
    },
    {
      "id": "PUB;84714f0c902d48b2a2bad5a147eca230",
      "kind": "strategy",
      "name": "ATR Trend Strategy with Moving Average | Fixed TP/SL version",
      "author": "lahonglam",
      "license": "MPL-2.0",
      "version": "3",
      "likes": 1111,
      "tv_url": "https://www.tradingview.com/script/fM3YQz8i/",
      "sha256": "e648053886d85db61c396532ac6d8286a4d4ce2561e9382832d6fef96dce3690",
      "status": "ok",
      "level": "verified",
      "bars": 26435,
      "run_sec": 4.73,
      "ms_per_bar": 0.1789,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-05T17:00:00+00:00",
        "bars": 26435,
        "security": [
          {
            "symbol": "BINANCE:BTCUSDT",
            "timeframe": "30",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-05T17:00:00+00:00",
            "bars": 26435
          }
        ]
      },
      "plot": {
        "cols": 13,
        "match_pct": 1.0,
        "worst_col": "MA Line",
        "pearson_min": 1.0
      },
      "trades": {
        "tv": 103,
        "pc": 103,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": 281.2135,
        "pc_net_profit": 281.12556,
        "net_profit_match": true
      },
      "crossover": true
    },
    {
      "id": "PUB;d919c1533a4241de963f630de1f1c8df",
      "kind": "strategy",
      "name": "VWAP Breakout Strategy + EMAs + Clean Cycle/TP/SL Plots",
      "author": "CatalystNQ",
      "license": "none",
      "version": "1",
      "likes": 1074,
      "tv_url": "https://www.tradingview.com/script/39HGmmqK/",
      "sha256": "845641099fcc25e4a11d88e9e29bcb0f4910b5da1ff6d986f49669f97eae6691",
      "status": "ok",
      "level": "verified",
      "bars": 26435,
      "run_sec": 1.632,
      "ms_per_bar": 0.0617,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-05T17:00:00+00:00",
        "bars": 26435
      },
      "plot": {
        "cols": 4,
        "match_pct": 1.0,
        "worst_col": "VWAP",
        "pearson_min": 1.0
      },
      "trades": {
        "tv": 3884,
        "pc": 3884,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": -24804.85,
        "pc_net_profit": -24804.84,
        "net_profit_match": true
      },
      "crossover": true
    },
    {
      "id": "PUB;46d5b26375f24999b868cd9627b1d8de",
      "kind": "strategy",
      "name": "NQ/MNQ Super Scalper [BACKTEST]",
      "author": "Crispigino",
      "license": "none",
      "version": "1",
      "likes": 1021,
      "tv_url": "https://www.tradingview.com/script/6ve1ax1D/",
      "sha256": "5b8a1304c7aacbe10030cee4495965d7cbb3fe131d540995a3f0c887673beb2e",
      "status": "ok",
      "level": "data_limited",
      "bars": 26420,
      "run_sec": 171.727,
      "ms_per_bar": null,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-05T09:30:00+00:00",
        "bars": 26420,
        "security": [
          {
            "symbol": "SPY",
            "timeframe": "30",
            "from": "2025-01-02T14:30:00+00:00",
            "to": "2026-07-02T19:30:00+00:00",
            "bars": 26219
          },
          {
            "symbol": "ES1!",
            "timeframe": "30",
            "from": "2025-01-01T23:00:00+00:00",
            "to": "2026-07-03T16:30:00+00:00",
            "bars": 26292
          },
          {
            "symbol": "QQQ",
            "timeframe": "30",
            "from": "2025-01-02T14:30:00+00:00",
            "to": "2026-07-02T19:30:00+00:00",
            "bars": 26219
          },
          {
            "symbol": "BINANCE:BTCUSDT",
            "timeframe": "D",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-05T00:00:00+00:00",
            "bars": 551
          },
          {
            "symbol": "BINANCE:BTCUSDT",
            "timeframe": "5",
            "from": "2025-07-23T12:55:00+00:00",
            "to": "2026-07-05T09:55:00+00:00",
            "bars": 99901
          },
          {
            "symbol": "BINANCE:BTCUSDT",
            "timeframe": "15",
            "from": "2025-05-01T00:00:00+00:00",
            "to": "2026-07-05T09:45:00+00:00",
            "bars": 41320
          },
          {
            "symbol": "BINANCE:BTCUSDT",
            "timeframe": "60",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-05T09:00:00+00:00",
            "bars": 13210
          },
          {
            "symbol": "BINANCE:BTCUSDT",
            "timeframe": "240",
            "from": "2025-01-01T00:00:00+00:00",
            "to": "2026-07-05T08:00:00+00:00",
            "bars": 3303
          },
          {
            "symbol": "USI:TICK",
            "timeframe": "30",
            "from": "2025-01-02T14:30:00+00:00",
            "to": "2026-07-02T19:30:00+00:00",
            "bars": 26219
          },
          {
            "symbol": "CBOE:VIX",
            "timeframe": "30",
            "from": "2025-01-02T08:15:00+00:00",
            "to": "2026-07-02T20:00:00+00:00",
            "bars": 52452
          }
        ]
      },
      "data_limited": "request.footprint() — tick-level order-flow data (buy/sell aggressor split) unavailable in PyneCore",
      "trades": {
        "tv": 349,
        "pc": 336,
        "trade_match_pct": 0.891117,
        "entry_match_pct": 0.936963,
        "exit_match_pct": 0.911175,
        "extra_entries": 9,
        "tv_net_profit": 3391.885,
        "pc_net_profit": 15740.4,
        "net_profit_match": false
      }
    },
    {
      "id": "PUB;465b6bc4cc7943079e4d3fa8c1e11090",
      "kind": "strategy",
      "name": "Reversal Trading Bot Strategy[BullByte]",
      "author": "BullByte",
      "license": "MPL-2.0",
      "version": "8",
      "likes": 1004,
      "tv_url": "https://www.tradingview.com/script/cXVnf1WH/",
      "sha256": "4423e86153af80f3468e22fd31b9306ff56af7282a92a4da6d67a22fe22caea6",
      "status": "ok",
      "level": "verified",
      "bars": 26435,
      "run_sec": 1.975,
      "ms_per_bar": 0.0747,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-05T17:00:00+00:00",
        "bars": 26435
      },
      "trades": {
        "tv": 770,
        "pc": 770,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": -29.781965,
        "pc_net_profit": -29.781966,
        "net_profit_match": true
      },
      "crossover": true
    },
    {
      "id": "PUB;6d324799a424491c9a27a89726326ab4",
      "kind": "strategy",
      "name": "Smart Money Pivot Strategy [Jason Kasei]",
      "author": "Jasonkasei",
      "license": "MPL-2.0",
      "version": "1",
      "likes": 991,
      "tv_url": "https://www.tradingview.com/script/IMTwV7U8/",
      "sha256": "c2ead0d0a5ae7208680943b588d0b1425c219738c95a6d0fe79ca7a8fd7d5c6f",
      "status": "ok",
      "level": "verified",
      "bars": 26383,
      "run_sec": 1.049,
      "ms_per_bar": null,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-04T15:00:00+00:00",
        "bars": 26383
      },
      "trades": {
        "tv": 384,
        "pc": 384,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": -1188.8184,
        "pc_net_profit": -1188.8183,
        "net_profit_match": true
      }
    },
    {
      "id": "PUB;8b8f6f97c59744839ef75ce314d84fd9",
      "kind": "strategy",
      "name": "Trendline Breakout Strategy [KedArc Quant] ",
      "author": "kedarcquant",
      "license": "none",
      "version": "1",
      "likes": 977,
      "tv_url": "https://www.tradingview.com/script/grMQIRAr/",
      "sha256": "faef059f267692276a2a43dc294bcb6c4619c914742dff5f8a90bea8207e1b7a",
      "status": "ok",
      "level": "verified",
      "bars": 26436,
      "run_sec": 1.369,
      "ms_per_bar": 0.0518,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-05T17:30:00+00:00",
        "bars": 26436
      },
      "plot": {
        "cols": 1,
        "match_pct": 1.0,
        "worst_col": "EMA",
        "pearson_min": 1.0
      },
      "trades": {
        "tv": 516,
        "pc": 516,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": -664.8921,
        "pc_net_profit": -664.89206,
        "net_profit_match": true
      },
      "crossover": true
    },
    {
      "id": "PUB;e62df26c095b435588bd2e51fd132f6b",
      "kind": "strategy",
      "name": "MTF Screener MA Cross System",
      "author": "yigdeli",
      "license": "MPL-2.0",
      "version": "3",
      "likes": 973,
      "tv_url": "https://www.tradingview.com/script/SUKIoh1K/",
      "sha256": "dd637b9960ab54bab77f995cf9d0278b6e0185dd32dc2606f5a2ac16ed5ec15a",
      "status": "ok",
      "level": "verified",
      "bars": 26435,
      "run_sec": 58.761,
      "ms_per_bar": 2.2228,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-05T17:00:00+00:00",
        "bars": 26435,
        "security": [
          {
            "symbol": "BINANCE:BTCUSDT",
            "timeframe": "240",
            "from": "2024-02-02T16:00:00+00:00",
            "to": "2026-07-05T16:00:00+00:00",
            "bars": 5305
          },
          {
            "symbol": "BIST:ASELS",
            "timeframe": "60",
            "from": "2024-10-10T06:00:00+00:00",
            "to": "2026-07-05T17:00:00+00:00",
            "bars": 15208
          },
          {
            "symbol": "BIST:THYAO",
            "timeframe": "60",
            "from": "2024-10-10T06:00:00+00:00",
            "to": "2026-07-05T17:00:00+00:00",
            "bars": 15208
          },
          {
            "symbol": "BINANCE:BTCUSDT.P",
            "timeframe": "60",
            "from": "2024-10-09T16:00:00+00:00",
            "to": "2026-07-05T17:00:00+00:00",
            "bars": 15218
          },
          {
            "symbol": "BINANCE:ETHUSDT.P",
            "timeframe": "60",
            "from": "2024-10-09T16:00:00+00:00",
            "to": "2026-07-05T17:00:00+00:00",
            "bars": 15218
          },
          {
            "symbol": "BINANCE:XRPUSDT.P",
            "timeframe": "60",
            "from": "2024-10-09T16:00:00+00:00",
            "to": "2026-07-05T17:00:00+00:00",
            "bars": 15218
          },
          {
            "symbol": "BINANCE:DOGEUSDT.P",
            "timeframe": "60",
            "from": "2024-10-09T16:00:00+00:00",
            "to": "2026-07-05T17:00:00+00:00",
            "bars": 15218
          },
          {
            "symbol": "BINANCE:AVAXUSDT.P",
            "timeframe": "60",
            "from": "2024-10-09T16:00:00+00:00",
            "to": "2026-07-05T17:00:00+00:00",
            "bars": 15218
          },
          {
            "symbol": "NASDAQ:TSLA",
            "timeframe": "60",
            "from": "2024-10-09T16:30:00+00:00",
            "to": "2026-07-02T19:30:00+00:00",
            "bars": 15148
          },
          {
            "symbol": "BIST:PGSUS",
            "timeframe": "60",
            "from": "2024-10-10T06:00:00+00:00",
            "to": "2026-07-05T17:00:00+00:00",
            "bars": 15208
          },
          {
            "symbol": "BINANCE:USDTTRY",
            "timeframe": "60",
            "from": "2024-10-09T16:00:00+00:00",
            "to": "2026-07-05T17:00:00+00:00",
            "bars": 15218
          }
        ]
      },
      "plot": {
        "cols": 25,
        "match_pct": 1.0,
        "worst_col": "Plot",
        "pearson_min": 1.0
      },
      "trades": {
        "tv": 230,
        "pc": 230,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": 113.12976,
        "pc_net_profit": 113.12976,
        "net_profit_match": true
      },
      "crossover": true
    },
    {
      "id": "PUB;d6fba11d365a42f89f44000bc678d087",
      "kind": "strategy",
      "name": "SuperTrend STRATEGY",
      "author": "holdon_to_profits",
      "license": "none",
      "version": "4",
      "likes": 956,
      "tv_url": "https://www.tradingview.com/script/VLRj2sG9/",
      "sha256": "5fba258f2795bc61a2fce57ab3157c9bccf19816b5adfdb968ef2f456d84a058",
      "status": "ok",
      "level": "verified",
      "bars": 26474,
      "run_sec": 1.22,
      "ms_per_bar": 0.0461,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-06T12:30:00+00:00",
        "bars": 26474
      },
      "plot": {
        "cols": 2,
        "match_pct": 1.0,
        "worst_col": "Up Trend",
        "pearson_min": 1.0
      },
      "trades": {
        "tv": 84,
        "pc": 84,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": -2944236.0,
        "pc_net_profit": -2944236.0,
        "net_profit_match": true
      }
    },
    {
      "id": "PUB;77839ca577044cf398b8af0ff29e9ab9",
      "kind": "strategy",
      "name": "Adaptive Trend Flow Strategy with Filters for SPX",
      "author": "PineIndicators",
      "license": "none",
      "version": "1",
      "likes": 904,
      "tv_url": "https://www.tradingview.com/script/CNJ1hXQw/",
      "sha256": "ddad0597b6eb97e737bcabd85c9f3e3b4b0fdb69c4990d748c63dad25edf3786",
      "status": "ok",
      "level": "verified",
      "bars": 26474,
      "run_sec": 1.401,
      "ms_per_bar": 0.0529,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-06T12:30:00+00:00",
        "bars": 26474
      },
      "plot": {
        "cols": 5,
        "match_pct": 1.0,
        "worst_col": "Plot",
        "pearson_min": 1.0
      },
      "trades": {
        "tv": 1717,
        "pc": 1717,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": -987.6249,
        "pc_net_profit": -987.62489,
        "net_profit_match": true
      },
      "crossover": true
    },
    {
      "id": "PUB;63920ca76ebc4ed885d492c623c23ada",
      "kind": "strategy",
      "name": "v2.0—Tristan's Multi-Indicator Reversal Strategy",
      "author": "OhRayOhRay",
      "license": "MPL-2.0",
      "version": "5",
      "likes": 895,
      "tv_url": "https://www.tradingview.com/script/MmfqVjSS/",
      "sha256": "10f0bf22531332c5cc4a66c83ce3257bf71746865242b51013a33c19f883a23d",
      "status": "ok",
      "level": "verified",
      "bars": 26474,
      "run_sec": 2.078,
      "ms_per_bar": 0.0785,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-06T12:30:00+00:00",
        "bars": 26474
      },
      "trades": {
        "tv": 456,
        "pc": 456,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": -37470.223,
        "pc_net_profit": -37470.224,
        "net_profit_match": true
      },
      "crossover": true
    },
    {
      "id": "PUB;aa6bd019422d4cea80adc2f2929cc433",
      "kind": "strategy",
      "name": "LuxAlgo SMC Pro Ultimate",
      "author": "HAC19",
      "license": "MPL-2.0",
      "version": "1",
      "likes": 850,
      "tv_url": "https://www.tradingview.com/script/mEHJ2lCm/",
      "sha256": "4db0c1ab605841b5771267b2e38aef016b77be469bbde853d2425099e3370da8",
      "status": "ok",
      "level": "verified",
      "bars": 26474,
      "run_sec": 1.305,
      "ms_per_bar": 0.0493,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-06T12:30:00+00:00",
        "bars": 26474
      },
      "plot": {
        "cols": 2,
        "match_pct": 1.0,
        "worst_col": "Stop Loss",
        "pearson_min": 1.0
      },
      "trades": {
        "tv": 75,
        "pc": 75,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": -35.125145,
        "pc_net_profit": -35.125146,
        "net_profit_match": true
      },
      "crossover": true
    },
    {
      "id": "PUB;88ecbc7308e04042b5c0883126b157b5",
      "kind": "strategy",
      "name": "ORB SESSIONS",
      "author": "VONKAR",
      "license": "none",
      "version": "8",
      "likes": 792,
      "tv_url": "https://www.tradingview.com/script/ErwhAFlr/",
      "sha256": "46f7cbaec210aca4c4874c83d5749f63b2d43d7f94c429a51bcf572aa7ce4811",
      "status": "ok",
      "level": "verified",
      "bars": 26474,
      "run_sec": 44.693,
      "ms_per_bar": 1.6882,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-06T12:30:00+00:00",
        "bars": 26474
      },
      "plot": {
        "cols": 6,
        "match_pct": 1.0,
        "worst_col": "NY TP",
        "pearson_min": 1.0
      },
      "trades": {
        "tv": 640,
        "pc": 640,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": -2194.165,
        "pc_net_profit": -2194.43,
        "net_profit_match": true
      }
    },
    {
      "id": "PUB;02044cbd22bc4b9389f4e2443a6e7674",
      "kind": "strategy",
      "name": "TASC 2026.03 One Percent A Week",
      "author": "PineCodersTASC",
      "license": "none",
      "version": "1",
      "likes": 791,
      "tv_url": "https://www.tradingview.com/script/nVECqIQx/",
      "sha256": "497d16fdb7ed4702595a017eead212ec9c206a7c74e7eba80cc2f66450d7c9ba",
      "status": "ok",
      "level": "verified",
      "bars": 26470,
      "run_sec": 0.965,
      "ms_per_bar": 0.0365,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-06T10:30:00+00:00",
        "bars": 26470
      },
      "plot": {
        "cols": 4,
        "match_pct": 1.0,
        "worst_col": "Weekly Open",
        "pearson_min": 1.0
      },
      "trades": {
        "tv": 65,
        "pc": 65,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": -20.848583,
        "pc_net_profit": -20.848584,
        "net_profit_match": true
      }
    },
    {
      "id": "PUB;6d7de3ca626841d5a661600e71a7e236",
      "kind": "strategy",
      "name": "Moving Average Crossover Swing Strategy",
      "author": "D_Rockefeller",
      "license": "none",
      "version": "7",
      "likes": 767,
      "tv_url": "https://www.tradingview.com/script/uNIA4siU/",
      "sha256": "a682e2a4f92d10e1337b7cf756eeb6b639ae289076838fee89a6785934f87804",
      "status": "ok",
      "level": "verified",
      "bars": 26474,
      "run_sec": 2.621,
      "ms_per_bar": 0.099,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-06T12:30:00+00:00",
        "bars": 26474
      },
      "plot": {
        "cols": 11,
        "match_pct": 1.0,
        "worst_col": "VWAP",
        "pearson_min": 1.0
      },
      "trades": {
        "tv": 177,
        "pc": 177,
        "trade_match_pct": 1.0,
        "entry_match_pct": 1.0,
        "exit_match_pct": 1.0,
        "extra_entries": 0,
        "tv_net_profit": 515.54047,
        "pc_net_profit": 515.74116,
        "net_profit_match": true
      },
      "crossover": true
    },
    {
      "id": "PUB;9c6e4ca8f74d407c8cfae57b37c60f08",
      "kind": "strategy",
      "name": "RCI Strategy [PineIndicators]",
      "author": "PineIndicators",
      "license": "none",
      "version": "1",
      "likes": 763,
      "tv_url": "https://www.tradingview.com/script/BsqKKqyq/",
      "sha256": "1d63a9b64f9a4cfc6522b82e86328965511d3229e5d5650b5003b00b47b5bab9",
      "status": "ok",
      "level": "verified",
      "bars": 26474,
      "run_sec": 2.028,
      "ms_per_bar": 0.0766,
      "data": {
        "symbol": "BINANCE:BTCUSDT",
        "timeframe": "30",
        "from": "2025-01-01T00:00:00+00:00",
        "to": "2026-07-06T12:30:00+00:00",
        "bars": 26474
      },
      "plot": {
        "cols": 5,
        "match_pct": 1.0,
        "worst_col": "RCI",
        "pearson_min": 1.0
      },
      "trades": {
        "tv": 8601,
        "pc": 8609,
        "trade_match_pct": 0.998141,
        "entry_match_pct": 0.999302,
        "exit_match_pct": 0.999419,
        "extra_entries": 14,
        "tv_net_profit": -675127.1,
        "pc_net_profit": -676391.42,
        "net_profit_match": true
      },
      "crossover": true
    }
  ]
};
