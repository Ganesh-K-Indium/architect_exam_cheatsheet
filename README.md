# Claude Certified Architect — Exam Cheat Sheet

A free, open cheat sheet web app for anyone preparing for the **Claude Certified Architect (Foundations)** exam by Anthropic.

---

## A note from me

I built this because I was studying for the exam myself and couldn't find everything in one place. The official docs are great, but when you're in revision mode you just want the key points, the anti-patterns, and the exam tips — fast.

So I put it all together. All 5 domains, all 6 exam scenarios, prompt caching, the Agent SDK parameters, model reference, the quick-ref pairs — everything I wished I had in one scroll.

If it helps even one person pass, that's enough for me. Good luck.

---

## What's inside

- **6 Exam Scenarios** — every question on the exam anchors to one of these, so they come first
- **5 Domain deep-dives** — key concepts, anti-patterns, wrong vs. right code comparisons, and exam tips for every subsection
- **Prompt Caching** — cache_control, TTL, invalidation rules, cost multipliers
- **Agent SDK reference** — effort levels, ResultMessage subtypes, permission modes
- **Models reference** — Opus / Sonnet / Haiku with context windows and pricing
- **Quick Ref** — 20 do/don't pairs to read the night before the exam

## Exam at a glance

| | |
|---|---|
| Questions | 60 |
| Duration | 120 minutes |
| Format | Multiple choice |
| Pass score | 720 / 1000 |
| Cost | Free |
| Scenarios | 4 of 6 randomly selected |

## Run it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Stack

Next.js · Tailwind CSS · TypeScript

---

*Not affiliated with Anthropic. Built as a personal study tool and shared freely.*
