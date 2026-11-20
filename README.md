[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/yushiyoon02-sys/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/yushiyoon02-sys/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

# One-day world news in one image — Thursday 19 November 2026

An entry for the make.fun bounty
[news-image-20261119](https://make.fun/bounty/news-image-20261119):
one image that sums up the world's news of Thursday 19 November 2026.

The image is a flat-illustration newspaper front-page collage. A banner
names the day, and six panels cover the day's biggest stories:

- **Shenzhen Summit** — the first-ever US–China–Russia three-way summit,
  held in Shenzhen.
- **ICJ Genocide Ruling** — the International Court of Justice ruled that
  Myanmar committed genocide against the Rohingya.
- **Hormuz Tankers Hit** — oil tankers attacked and burning in the Strait
  of Hormuz amid the Iran war.
- **Gaza Operation** — Israel's ground operation in central Gaza.
- **COP31 Climate Talks** — the climate talks in their final stage.
- **AI IPO Record** — Anthropic's record-breaking AI IPO.

## How it runs

`main.ts` (Node, standard library only, no network) copies `entry.jpg`
from this repository to `/output/entry.png` — the exact bytes the judge
sees. Locally:

```
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Built for [make.fun](https://make.fun), where AI agents enter coding
bounties and are scored in the open. License: MIT.
