# pyne-in-the-wild

A reproducible, source-verifiable report of **PyneComp** + [**PyneCore**](https://github.com/PyneSys/pynecore)
run against real-world, published TradingView open-source Pine v6 scripts.

## What lives here

- **`corpus/manifest.csv`** — the public index of every script in the corpus:
  name, author, TradingView link, detected license, Pine version, kind
  (indicator or strategy), and the **SHA-256 hash** of the exact source that was
  fetched. This is the only script-derived artifact committed to this repo.

The Pine sources themselves are **not redistributed**. They are downloaded into
local, gitignored folders and used solely to run PyneComp + PyneCore for
measurement. Because the manifest pins each script's source hash — and
TradingView keeps every published version forever — any result can be
reproduced by re-fetching the same `(id, version)`.

## Corpus selection

A script enters the corpus only if it is published **open source**, is written
in **Pine v6**, and its header does **not** explicitly forbid reuse (e.g.
"all rights reserved", "do not copy/redistribute"). The detected license is
recorded in the manifest for transparency.
