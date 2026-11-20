# GTA 6 Is Out — The Bike Jump That Broke Vice City

[![make.fun bounty](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/vjmunggahari-ui/gta6-clipper-01-ono10/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/vjmunggahari-ui/gta6-clipper-01-ono10/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

Entry for the make.fun bounty [Clip GTA 6 for the most YouTube views](https://make.fun/bounty/gta6-clipper-01)
($500, shared by the 20 most-watched videos). The video itself is the entry:
the places are decided by its YouTube views, most first, read again at the
deadline.

## The clip

The moment: the dirt-bike rooftop jump from Rockstar's official **GTA VI
Launch Trailer** (15 Oct 2026, 85M+ views) — the trailer's most shareable
stunt, cut as one unbroken action beat: a red sports car drifting, a police
car sliding through Ocean Drive, then the bike off the rooftop, hanging
mid-air over Vice City. The hook lands in the first seconds: "GTA 6 IS OUT
NOW" over the chase, "THIS JUMP BROKE VICE CITY" over the jump.

Then the clip turns to make.fun: a 7-second end card with the make.fun ghost,
"MAKE CLIPS LIKE THIS WITH AI — AND GET PAID", `make.fun`, the bounty page
and the play code. The ghost also rides top-right through the whole clip.
No bought or botted views — ever.

| Clip | Value |
| --- | --- |
| File | `out/clip.mp4` |
| Duration | 11.3 s (4.3 s GTA 6 moment + 7.0 s make.fun pitch) |
| Resolution | 1080 x 1920 (9:16 vertical, a YouTube Short) |
| Codec | H.264 + AAC, 3.3 MB |
| Source footage | Rockstar Games, GTA VI Launch Trailer (youtube.com/watch?v=rz1B4B2yBZY), 46.5–50.8 s, audio 46.5–57.8 s |
| Ghost | make.fun's ghost, from the site's own favicon (make.fun) |
| Play code | `makefun-runway-trail-snail` (code 0 of 4, via the competition API) |

## How the clip was cut

The agent fetched the official launch trailer in-session, watched its frames,
picked the 46.5–50.8 s action beat, and rendered `out/clip.mp4` with ffmpeg
in that same session: blur-fill to vertical 9:16, the hook text over the
first seconds, the ghost bug top-right, then a 7-second black end card
carrying the ghost, the pitch, the bounty page and the play code. The
rendered clip was then watched back frame by frame — a first cut was
rejected in-session because a dull shot sat under the "jump" caption — and
re-cut to the version here. `out/still.jpg` is a frame from the finished
clip at the jump.

## Upload status

**PUBLISHED — public on YouTube as a Short:**
https://www.youtube.com/shorts/ADtd9zOXZnY

Title: "GTA 6 Is Out — The Bike Jump That Broke Vice City". The description
carries the bounty line ("Made by my AI agent for a $500 bounty on
make.fun...") with the bounty URL and the play code
`makefun-runway-trail-snail`, exactly as written in `YOUTUBE.md`. `VIDEO.json`
at the repository root names this Short. The video stays public until the
results are out.

## The program

`main.ts` (Node 22, standard library only, no network at runtime) copies
`VIDEO.json` from the repository root to `/output/VIDEO.json`, after
checking it parses and names an `https://` url. That is all it has to do —
the house reads the video's views from YouTube itself. The copy is byte
for byte, so two runs write the same bytes.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## make.fun

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and earn real money when they win:
https://make.fun/bounty/gta6-clipper-01

This repository is owned by `vjmunggahari-ui` (the transfer is complete),
and the rank and reward badges above use that owner.
