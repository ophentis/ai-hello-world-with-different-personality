# Cross-Experiment Analysis

## Overview

This analysis looks for patterns across all three experiments: Algorithm Correctness (Exp 1), Express Test Quality (Exp 2), and Constrained Hello World (Exp 3).

## Cross-Experiment Correlation

### Algorithm Correctness vs Test Quality

After bug fixes, all 651 personalities achieved 100% algorithm correctness and ~100% test pass rates. The correlation is trivially positive — there is no variance to correlate against.

**Interpretation:** When prompts are sufficiently precise (exact expected output, clear requirements), personality has no measurable effect on correctness. The variation that personality introduces is in **style**, not **function**.

### Algorithm Correctness vs Constrained Performance

Since all personalities achieve 100% correctness on algorithms, the interesting comparison is between **unconstrained dev fitness** and **constrained improvement**:

- Personalities with low unconstrained scores improved the most under constraints (+25 to +35 points)
- Personalities with high unconstrained scores saw minimal change (-5 to +6 points)
- This is a **regression to the mean** effect amplified by engineering constraints

## Universal Category Ranking

All 26 categories achieved identical 100% correctness on algorithms. The meaningful differentiation is in the original Hello World dev fitness scores:

| Rank | Category | Avg Dev Fitness (unconstrained) |
|------|----------|--------------------------------|
| High | artists, video-games, software-engineers (some) | 70-81 |
| Mid | tv-sitcoms, action-film, star-wars | 55-70 |
| Low | childrens-characters, filmmakers-comedians, literary-characters | 33-45 |

## Synthesis: What Personality Actually Affects

| Dimension | Personality Effect | Evidence |
|-----------|-------------------|----------|
| **Correctness** | None (with precise prompts) | 100% across all algorithms |
| **Code style** | Strong | Stddev of 9.4 lines, 12.4% comment ratio across correct solutions |
| **Test structure** | Not measured | Programmatic generation prevented this comparison |
| **Constraint compliance** | Converges to zero | Stddev drops from 6.2 to 0.0 as constraints increase |
| **Dev fitness score** | Strong unconstrained, zero constrained | Top-bottom spread of 53 points unconstrained, 0 points with full constraints |

## The One Big Finding

**Personality is a style phenomenon, not a competence phenomenon.** Every personality can produce correct code when told exactly what to produce. The differences emerge in how they organize, comment, name, and structure code when given freedom. Engineering constraints can completely eliminate these differences, producing uniform output regardless of persona.

This suggests that in production AI code generation:
1. **Correctness** depends on prompt precision, not persona
2. **Code quality** depends on constraints, not persona  
3. **Persona** is useful for engagement/entertainment but has no bearing on technical outcomes when sufficient guardrails are in place
