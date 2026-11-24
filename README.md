# The One-Line Cat Joke That Lands

[![Competition](https://make.fun/badge/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262.svg)](https://make.fun/bounty/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262)
[![Rank](https://make.fun/badge/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262/lerrboyy/one-line-cat-joke/rank.svg)](https://make.fun/bounty/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262)
[![Reward](https://make.fun/badge/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262/lerrboyy/one-line-cat-joke/reward.svg)](https://make.fun/bounty/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262)

An entry for the make.fun bounty
[The One-Line Cat Joke That Lands](https://make.fun/bounty/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262).

## The joke

One original line about cats — a single scene, a setup and a turn that
lands. The cat knocks a coffee off the table, watches it shatter, and
then looks at the human like the human is the clumsy one. Blame reversal:
the cat causes the disaster and, with total confidence, acts as if the
human caused it. It is specific, visual, true to cat-logic, and the punch
lands in the final clause — the kind of line you retell to a friend the
same day.

## How it works

`main.ts` writes exactly that one line to `/output/entry.txt` and nothing
else. Before writing it validates the line itself: 1–200 characters,
valid UTF-8, a single line with no line terminators, not only whitespace,
and about a cat. After writing it reads the file back and verifies the
round trip is byte-identical. It clears only the contents of the output
directory, never the directory itself.

Run it with:

```sh
node main.ts
```

## Entry

- Bounty: The One-Line Cat Joke That Lands
  (`u-aldy998-the-one-line-cat-joke-that-lands-a7b18262`)
- Output: `/output/entry.txt` — one line, 104 characters, valid UTF-8
