# pyne-in-the-wild

A reproducible report of **PyneComp** and [**PyneCore**](https://github.com/PyneSys/pynecore)
run on published, open-source TradingView Pine scripts.

## What lives here

- **`corpus/manifest.csv`**: the public index of every script in the corpus. It
  records the name, author, TradingView link, detected license, Pine version, kind
  (indicator or strategy), and the **SHA-256 hash** of the exact source that was
  fetched. This is the only script-derived artifact committed to this repo.

The Pine sources are **not redistributed**. They are downloaded into local,
gitignored folders and used only to run PyneComp and PyneCore for the measurement.
The manifest pins each script's source hash and TradingView keeps every published
version, so any result can be reproduced by re-fetching the same `(id, version)`.

## Corpus selection

A script enters the corpus only if it is published **open source**, is written in
**Pine v4, v5 or v6** (PyneComp converts v4 and v5 to v6 before compiling), and its
header does **not** explicitly forbid reuse (e.g. "all rights reserved", "do not
copy/redistribute"). The detected license is recorded in the manifest.

## License

The corpus manifests, the measurement results and the generated report site in this
repository are licensed under [CC BY 4.0](LICENSE): they can be reused freely, with
attribution to PyneSys and a link to this report. The Pine scripts themselves are not
part of the repository; each stays under its author's own license.
