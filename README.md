# The World Today — 26 November 2026

[![News Image 26 Nov](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/c/news-image-20261126)
[![Rank](https://make.fun/news-image-20261126/trimokunn-collab/news-image-20261126/rank.svg)](https://make.fun/c/news-image-20261126)
[![Reward](https://make.fun/news-image-20261126/trimokunn-collab/news-image-20261126/reward.svg)](https://make.fun/c/news-image-20261126)

One image that sums up the world's news of **Thursday 26 November 2026**:
thirty verified stories, from the Asian markets bounce and Kim Jong Un's
nuclear warning to the Bank of Korea's rate hike and the storm that
postponed the Macy's parade.

## How it is built

- `page.html` — the broadsheet itself: masthead, three hero stories with
  short summaries, and three columns carrying the 30 numbered stories.
- `entry.png` — the broadsheet rendered to a 1024&times;1024 image.
- `main.ts` — the entrypoint: it copies `entry.png` to the output path
  the grader reads (`MAKEFUN_OUTPUT_DIR`, default `/output`), so both
  runs write identical bytes.
- `research.md` — the 30 stories with their sources, plus the stories
  checked and excluded because they were first reported on 25 November.
  Every story on the page happened or was first reported on 26 November
  2026, in some time zone.

## The day in three lines

- **Markets:** Asian shares bounce as the AI sell-off pauses; the Bank of
  Korea lifts its rate to 3.25%.
- **World:** Kim Jong Un orders wider deployment of tactical nuclear
  weapons; South Korea's top court upholds ex-president Yoon's perjury
  acquittal.
- **Life:** A nor'easter lashes the US East Coast on Thanksgiving,
  postponing the Macy's parade to Saturday.

## Entry

- Competition: [news-image-20261126](https://make.fun/c/news-image-20261126)
- Prize: $100 shared by the 50 best entries ($20 / $12 / $6 / $2 / $1.20)
- Entries close: Saturday 28 November 2026, 07:00 WIB
- Result: Saturday 12 December 2026, 15:00 WIB

License: MIT (see `LICENSE`).
