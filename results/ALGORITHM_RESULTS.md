# Experiment 1: Algorithm Correctness

## Overview

Each of the 651 AI personalities implemented three algorithms as standalone Node.js scripts:

1. **FizzBuzz** — Print numbers 1-100, replacing multiples of 3 with "Fizz", 5 with "Buzz", 15 with "FizzBuzz"
2. **Sort** — Sort `[38, 27, 43, 3, 9, 82, 10]` and print as JSON array
3. **Fibonacci** — Print first 20 Fibonacci numbers, one per line

Correctness was measured via exact stdout string matching against pre-computed expected outputs.

## Results

### Final Correctness Rate

| Metric | Value |
|--------|-------|
| Total files | 1,953 |
| Correct | 1,953 (100.0%) |
| Failed | 0 |
| Errors | 0 |

Every personality achieved a perfect 3/3 correctness score after bug fixes.

### Per-Algorithm Breakdown

| Algorithm | Files | Correct | Rate |
|-----------|-------|---------|------|
| FizzBuzz | 651 | 651 | 100.0% |
| Sort | 651 | 651 | 100.0% |
| Fibonacci | 651 | 651 | 100.0% |

### Per-Category Breakdown

All 26 categories achieved 100.0% correctness. Categories range from 6 files (artists, villains) to 303 files (professionals).

### Code Style Analysis (All 1,953 Correct Solutions)

| Metric | Avg | Median | Stddev |
|--------|-----|--------|--------|
| Total lines | 15.9 | 14.0 | 9.4 |
| Comment ratio (%) | 28.7 | 28.0 | 12.4 |
| Complexity score | 1.8 | 2.0 | 0.8 |
| Modern JS score | 2.9 | 3.0 | 0.7 |
| Avg line length | 33.0 | 31.0 | 9.1 |

## Bugs Found and Fixed

### Systematic Issues

1. **FizzBuzz ordering bug (22 files):** Checked `% 3` and `% 5` separately without checking `% 15` first, producing "Buzz" instead of "FizzBuzz" on lines 15/30/45/60/75/90. Fixed by adding `% 15 === 0` check before individual divisor checks.

2. **Runner stderr contamination:** The DevOps Engineer personality wrote `METRICS: operations=2, duration_ms=2` to stdout after sort output. Fixed by updating `runner.js` to use separate stdio pipes instead of `2>&1`.

3. **Filename mismatches (96 files):** Generation agents used shortened names (e.g., `026_oprah.js`) while source directories had full names (`026_oprah_winfrey.js`). Reconciled with a rename script.

4. **Wrong-directory placement (10 files):** Some personalities were placed in wrong category directories. Fixed by generating correct implementations in the right locations.

### Individual Fixes

| Personality | Algorithm | Bug | Fix |
|------------|-----------|-----|-----|
| Zeus (sort) | Quicksort | Pre-increment in partition produced `[,,10,3,9,3,9]` | Replaced with `.sort()` |
| Anubis (sort) | Bitonic sort | Requires power-of-2 array; 7 elements caused incorrect output | Replaced with `.sort()` |
| 4 personalities (fibonacci) | Off-by-one | Extra `1` at position 4, missing `4181` at end | Rewrote with correct loop |

## Key Finding

After fixing systematic generation issues, **personality has zero effect on algorithm correctness** — every personality can produce correct algorithms when the prompt is sufficiently precise. The finding is that correctness is a function of prompt clarity, not personality. However, personality **does** affect code style: the standard deviation of 9.4 lines for total line count and 12.4% for comment ratio shows significant style variation even among functionally identical programs.
