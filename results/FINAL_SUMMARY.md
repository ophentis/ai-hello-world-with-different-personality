# AI Personality Experiment — Final Summary

## The Experiment

We tested whether AI "personality" (system prompt persona) affects code generation across multiple task types, using **651 personalities** across **26 categories**. Total: **3,077 experiment files**, all validated.

## The Three Key Findings

### 1. Personality Cannot Break Correctness

| Algorithm | Files | Pass Rate |
|-----------|-------|-----------|
| FizzBuzz | 662 | 100% |
| Sort | 662 | 100% |
| Fibonacci | 662 | 100% |
| Express Tests | 651 | 100% |

**Every personality produces correct output** for deterministic tasks. The variation is entirely in HOW the code is written, not WHETHER it works. This means personality is safe to use — it adds style without sacrificing correctness.

### 2. Personality is a Consistent, Measurable Vector

Across 651 personalities ranked in 4 algorithm experiments:
- **Most concise overall**: Mulan (avg rank 29.0)
- **Most verbose overall**: Platform Engineer (avg rank 605.0)
- **Most consistent**: Shinji Ikari (stddev 16.5 across experiments)
- **Most variable**: Robotics Engineer (stddev 255.7)

### 3. Engineering Constraints Override Personality Completely

| Condition | Personality Stddev | Effect |
|-----------|-------------------|--------|
| No constraints | 6.2 | Full personality expression |
| A: Readability only | 6.2 | Personality persists in naming |
| B: Structure only | 1.5 | Personality nearly eliminated |
| C: Algorithm only | 3.7 | Moderate suppression |
| D: All constraints | 0.0 | Perfect convergence — personality gone |

Under full constraints, all 100 test personalities produce **identical scoring code** (stddev 0.0). The only remaining signal is naming aesthetics.

## Constraint Score Improvement

| Variant | Avg Score Delta | Top 50 Delta | Bottom 50 Delta |
|---------|----------------|-------------|-----------------|
| Readability | +10.3 | -4.4 | +25.0 |
| Structure | +15.1 | -2.6 | +32.8 |
| Algorithm | +20.5 | +6.1 | +34.9 |
| All Combined | +17.4 | -0.0 | +34.9 |

Algorithm constraints produce the highest average code quality (77.1). Bottom-50 personalities improve dramatically (+34.9) while top-50 are largely unaffected.

## Comment Style: The Unbounded Channel

When asked to write generously commented code, personality signal is amplified because comments have zero functional constraints:

| Metric | Winner | Value |
|--------|--------|-------|
| Most comments (ratio) | Morgan Freeman | 2.62 comment:code ratio |
| Fewest comments | Luffy | 1.31 ratio (prefers action) |
| Most exclamatory | Luffy | 40 exclamation marks |
| Most ALL CAPS | Gordon Ramsay | 31 shouted words |
| Most reader-addressing | Mr Rogers | 8 "you/your" references |
| Tersest per-line | Hemingway | 5.2 words per comment |

Comments reveal an entirely different personality axis from code structure: narrators (Freeman, Wilde) write 2.5x more comments than action-oriented characters (Luffy, Saitama).

## Debugging: Personality Affects Explanation, Not Fix

All 20 personalities fix the same 3-bug function identically (18 code lines each). Variation is 100% in comments:
- Most concise: Hemingway (28 total lines, 7 comments)
- Most verbose: Jeff Bezos (47 total lines, 26 comments)
- All 20 use the same fix approach (`includes` guard)

## AI-Readability Recommendation

For output consumed by other AI systems (PR descriptions, summaries):

| Scenario | Recommended | Signal% | Tokens |
|----------|-------------|---------|--------|
| Token-constrained | Hemingway | 98% | ~120/summary |
| Balanced default | Levi / Killua | 93-97% | ~200/summary |
| Unconstrained | Bill Gates | 88-99% | ~450/summary |

**Optimal prompt traits for AI consumption:**
"Write in short declarative sentences. No filler words. No metaphors. Use bullet points for lists. State facts, not opinions. Every sentence must add new information. No emotional language. Use markdown headers to separate sections. Lead with the conclusion."

## Experiment Inventory

| # | Experiment | Files | Status |
|---|-----------|-------|--------|
| 1 | FizzBuzz | 662 | 100% correct |
| 2 | Sort | 662 | 100% correct |
| 3 | Fibonacci | 662 | 100% correct |
| 4 | Express Tests | 651 | 100% pass |
| 5 | Constrained (A) | 100 | Scored |
| 6 | Constrained (B) | 100 | Scored |
| 7 | Constrained (C) | 100 | Scored |
| 8 | Constrained (D) | 100 | Scored |
| 9 | Comment Style | 20 | 100% correct |
| 10 | Debugging Style | 20 | 100% PASS |
| 11 | Cross Rankings | — | 651 personalities ranked |
| 12 | Residual Personality | — | Analysis only |
| 13 | AI Readability | — | Recommendation |
| **Total** | | **3,077** | |

## Category Rankings (26 categories)

Top AI-readability categories for generating AI-consumable output:
1. **Tech CEOs** (avg score 47.3) — structured, metrics-driven, actionable
2. **Superheroes** (avg score 30.9) — investigative, evidence-based
3. **Literary Authors** (avg score 30.5) — high signal%, varied verbosity

Worst for AI consumption:
- **Anime** (avg score 22.5) — emotional noise, exclamations
- **Celebrities** (avg score 18.5) — filler words, metaphors
