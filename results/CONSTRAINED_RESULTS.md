# Experiment 3: Constrained Hello World

## Overview

Can engineering constraints override the "personality noise" that causes code quality variation? We selected 100 personalities (top 50 + bottom 50 by dev fitness score) and had each rewrite "Hello, World!" under 4 different constraint bundles.

### Constraint Variants

| Variant | Constraints | Max Lines |
|---------|------------|-----------|
| A (Readability) | Self-documenting names, WHY-only comments, junior-readable/senior-approved | 15 |
| B (Structure) | SRP, no dead code, early returns | 10 |
| C (Algorithm) | Right data structures, boundary-only errors, simplest correct solution | 8 |
| D (All Combined) | All constraints from A + B + C | 6 |

### Sample

- **Top 50:** Dev fitness scores 74-81 (Salvador Dali, Doom Slayer, John Lennon, Picasso, ...)
- **Bottom 50:** Dev fitness scores 28-43 (Dalek, Shrek, Monica Geller, Kevin Hart, ...)
- Spread across 19 categories

## Results

### Score Deltas by Variant

| Variant | Files | Avg Score | Avg Delta | Median Delta | Top50 Delta | Bottom50 Delta |
|---------|-------|-----------|-----------|--------------|-------------|----------------|
| Readability | 100 | 66.9 | +10.3 | +7.5 | -4.4 | +25.0 |
| Structure | 100 | 71.7 | +15.1 | +14.5 | -2.6 | +32.8 |
| Algorithm | 100 | 77.1 | +20.5 | +21.0 | +6.1 | +34.9 |
| All Combined | 100 | 74.0 | +17.4 | +17.5 | -0.0 | +34.9 |

### Personality Persistence (Score Standard Deviation)

| Variant | Stddev | Interpretation |
|---------|--------|----------------|
| Readability | 6.2 | Significant personality variation survives |
| Algorithm | 3.7 | Moderate personality variation survives |
| Structure | 1.5 | Minimal personality variation survives |
| All Combined | 0.0 | **Personality completely eliminated** |

## Key Findings

### 1. Constraints dramatically improve bottom performers

The bottom 50 personalities improved by +25 to +35 points under constraints. The bottom 50 went from an average score of ~39 to ~74 under the full constraint bundle — nearly matching the top 50's unconstrained average of ~76.

### 2. Constraints slightly hurt top performers

The top 50 personalities saw small negative deltas (-4.4 to +6.1). Their unconstrained code was already near-optimal; constraints sometimes reduced their distinctive efficient style to a more generic pattern.

### 3. Algorithm constraints produce the best absolute code

Variant C (Algorithm: "simplest correct solution, right data structures") produced the highest average score at 77.1. This single constraint family was more effective than all constraints combined (74.0), likely because the strict line limits in variant D force compression that slightly hurts readability.

### 4. Full constraints eliminate personality entirely

Variant D (All Combined) has a score standard deviation of 0.0 — every personality produced functionally identical code. When given sufficient engineering constraints with a 6-line maximum, there is essentially one correct way to write "Hello, World!" and all personalities converge to it.

### 5. Readability alone is not enough

Variant A (Readability) produced the lowest scores (66.9) and preserved the most personality variation (stddev=6.2). Asking for "readable" code without structural or algorithmic constraints leaves too much room for personality-driven choices that may or may not align with good engineering.

## Implications

**For engineering teams:** The best return on investment is **algorithmic constraints** — teach developers to choose the simplest correct solution rather than prescribing style rules. Structure constraints (SRP, no dead code) are the next highest leverage.

**For AI code generation:** If you want consistent quality regardless of prompt persona, combine structural + algorithmic constraints. Readability constraints alone are insufficient.

**For the personality experiment:** Personality is real and measurable in unconstrained code, but it is an artifact of freedom, not a fundamental limitation. Sufficient engineering discipline can override it completely.
