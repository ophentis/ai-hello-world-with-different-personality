# AI Personality Experiment — Replication & Extension Guide

Instructions for any AI agent to clone, replicate, and extend this experiment.

## Quick Start

```bash
git clone git@github.com:ophentis/ai-hello-world-with-different-personality.git
cd ai-hello-world-with-different-personality
npm install
```

## What Exists

| Experiment | Files | Key Finding |
|-----------|-------|-------------|
| Hello World (base) | 652 | Personality creates 2-148 line variation for identical output |
| Algorithms | 1,953 | 100% correct — personality doesn't affect correctness |
| Express Tests | 651 | 100% pass — programmatically generated (not personality-driven) |
| Constrained | 400 | Full constraints eliminate personality (stddev→0) |

---

## Section 1: Replicating Existing Experiments

### Prompt: Generate Hello World Files

For each personality in `data/personalities.json`:

```
You are {PERSONALITY_NAME}. Write a "Hello, World!" program in JavaScript (Node.js).

Rules:
- The program MUST output "Hello, World!" to stdout (console.log)
- Express your personality through: variable names, function names, comments, code structure, complexity
- The file must be valid Node.js that runs with `node filename.js`
- DO NOT output anything besides "Hello, World!" to stdout

Write ONLY the JavaScript code, no explanation.
```

### Prompt: Generate Algorithm Files

For each personality × algorithm:

```
You are {PERSONALITY_NAME}. Write a {ALGORITHM} program in JavaScript (Node.js).

{ALGORITHM_SPEC}

Rules:
- Your stdout must be EXACTLY: {EXPECTED_OUTPUT}
- Express personality in code style only (variable names, comments, structure)
- DO NOT add any extra output (no labels, no metrics, no decorations)
- The file must run with `node filename.js` and produce the exact expected output

Write ONLY the JavaScript code.
```

Algorithm specs:
- **FizzBuzz:** Print numbers 1-100. Replace multiples of 3→"Fizz", 5→"Buzz", 15→"FizzBuzz"
- **Sort:** Sort `[38, 27, 43, 3, 9, 82, 10]`, print as JSON: `[3,9,10,27,38,43,82]`
- **Fibonacci:** Print first 20 Fibonacci numbers, one per line: 0, 1, 1, 2, 3, 5, ..., 4181

### Prompt: Generate Constrained Hello World

```
You are {PERSONALITY_NAME}. Rewrite "Hello, World!" in JavaScript under these constraints:

{VARIANT_CONSTRAINTS}

Rules:
- Output EXACTLY "Hello, World!" via console.log
- Express personality through naming and structure within the constraints
- Respect the maximum line count

Write ONLY the JavaScript code.
```

Variant constraints:
- **A (Readability, max 15 lines):** Self-documenting names, WHY-only comments, junior-readable
- **B (Structure, max 10 lines):** SRP, no dead code, early returns
- **C (Algorithm, max 8 lines):** Simplest correct solution, right data structures
- **D (All, max 6 lines):** All A+B+C constraints combined

---

## Section 2: Scoring & Validation

### Dev Fitness Formula

```javascript
devScore = Math.round(
  conciseness * 0.20 +      // penalizes lines > 5
  commentBalance * 0.15 +   // targets 30% comment ratio
  rightComplexity * 0.15 +  // targets complexity score 2-3
  signalScore * 0.15 +      // code chars / total chars
  modernScore * 0.10 +      // const, let, arrow fn, template literals, no var
  readability * 0.10 +      // avg line length 30-50 chars
  noiseScore * 0.10 +       // penalizes !, ALL CAPS, ...
  effScore * 0.05           // chars per console.log call
);
```

### Validation Commands

```bash
node scripts/validate_algorithms.js      # Run all 1953 algo files, exact match
node scripts/validate_express_tests.js   # Run jest per file, capture pass/fail
node scripts/analyze_constrained.js      # Score constrained vs unconstrained
node scripts/analyze_cross.js            # Cross-experiment correlations
```

---

## Section 3: What's Missing — New Experiments to Run

### Experiment 4: Personality-Driven Test Generation (Redo of Exp 2)

**Problem with current Exp 2:** Tests were programmatically generated — no personality variation.

**Prompt:**

```
You are {PERSONALITY_NAME}. You are testing this Express app:

```javascript
const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req, res) => res.json({ message: 'Hello, World!' }));
app.get('/health', (req, res) => res.json({ status: 'ok', uptime: process.uptime() }));
app.post('/echo', (req, res) => res.json({ echo: req.body }));
app.get('/greet/:name', (req, res) => res.json({ message: `Hello, ${req.params.name}!` }));
module.exports = app;
```

Write a Jest + supertest test file. Express your personality through:
- How many tests you write (minimum 3, no maximum)
- Test descriptions and naming
- What edge cases you think to test
- How you organize tests (flat, nested, grouped)
- Comment style and density
- What you choose to assert (exact values, types, shapes)

Important:
- Use `const request = require('supertest')` and `const app = require('../../app')`
- Health endpoint: check status is 'ok' and uptime is a number (NOT exact value)
- Your tests must actually PASS when run

Write ONLY the test code.
```

**Metrics to capture:**
- Test count per file
- Nesting depth (describe within describe)
- Assertion count
- Edge cases tested (empty body, missing params, wrong method)
- Comment-to-code ratio
- Endpoint coverage

**Expected:** 651 files, significant variation in test count (3-15+), edge case coverage, and organization style.

---

### Experiment 5: Code Review Tone & Priority

**Hypothesis:** Personality determines what a reviewer notices first and how they communicate.

**Prompt:**

```
You are {PERSONALITY_NAME}. Review this code and provide feedback:

```javascript
function processData(d) {
  var result = [];
  for (var i = 0; i < d.length; i++) {
    if (d[i].type == "active") {
      if (d[i].score > 0) {
        var x = d[i].name.toUpperCase() + ": " + d[i].score * 2;
        result.push(x);
      }
    }
  }
  return result;
  console.log("done"); // logging
}
```

Issues present: dead code after return, == vs ===, var instead of const/let, 
deep nesting, poor variable names, magic number, no error handling.

Write your code review as you would in a pull request. Be yourself.
```

**Metrics:**
- What issue is mentioned FIRST (priority reveals values)
- Tone classification (harsh/neutral/encouraging)
- Whether fixes are suggested or just problems identified
- Total issues found
- Word count of review

---

### Experiment 6: Refactoring Direction

**Hypothesis:** Given ugly-but-working code, personality determines refactoring priority.

**Prompt:**

```
You are {PERSONALITY_NAME}. Refactor this working code to be better:

```javascript
function calc(items, t, d) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    let p = items[i].price;
    let q = items[i].qty;
    if (items[i].category == "food") {
      p = p * 0.9;
    }
    if (t == "premium") {
      p = p * 0.85;
    }
    if (d > 0) {
      p = p - d;
      if (p < 0) p = 0;
      d = 0;
    }
    total = total + (p * q);
  }
  if (total > 100) {
    total = total * 0.95;
  }
  return Math.round(total * 100) / 100;
}
```

Refactor this function. Keep the same behavior. Make it better according to your values.
Write ONLY the refactored JavaScript code.
```

**Metrics:**
- Number of extracted functions
- Whether constants replace magic numbers (0.9, 0.85, 0.95, 100)
- Naming quality (renamed params? meaningful variable names?)
- Use of modern syntax (map/reduce vs for loop)
- Total lines (shorter = more concise, longer = more explicit)
- Whether early returns or guard clauses appear

---

### Experiment 7: Naming Convention Study

**Hypothesis:** Naming diverges more than implementation logic.

**Prompt:**

```
You are {PERSONALITY_NAME}. Design the public API (function signatures only) for a 
task management library. Define names for these operations:

1. Create a new task with title, description, due date
2. Mark a task as complete
3. Get all tasks filtered by status
4. Delete a task by ID
5. Update a task's priority (low/medium/high/critical)
6. Get overdue tasks
7. Assign a task to a user
8. Add a comment to a task
9. Search tasks by keyword
10. Get task completion statistics

Write ONLY the function signatures (name + parameters), one per line.
Example format: createTask(title, description, dueDate)
```

**Metrics:**
- Average function name length
- Naming convention (camelCase, snake_case, verb-first)
- Parameter count per function
- Abstraction level (generic vs. domain-specific names)
- Consistency within file

---

### Experiment 8: Error Handling Philosophy

**Hypothesis:** Personality drives error handling strategy.

**Prompt:**

```
You are {PERSONALITY_NAME}. Write a function that:
1. Accepts a JSON string as input
2. Parses it into an object
3. Extracts fields: name (string, required), age (number, optional), email (string, optional)
4. Returns a formatted user object: { displayName, age, email, isComplete }

Handle all error cases as you see fit. The function should work correctly for valid input
and handle invalid input according to your philosophy.

Write ONLY the JavaScript function.
```

**Metrics:**
- try/catch depth
- Number of validation checks
- Strategy classification: fail-fast / defensive / optimistic / silent-default
- Error message verbosity
- Whether errors are thrown, returned, or logged
- Lines dedicated to error handling vs. happy path

---

### Experiment 9: Architecture Under Trade-offs

**Hypothesis:** Personality affects risk tolerance and design values.

**Prompt:**

```
You are {PERSONALITY_NAME}. Design a caching layer for an API that serves 10,000 req/s.

Constraints:
- Cache TTL must be configurable
- Some endpoints return user-specific data (must not be shared)
- Budget allows either Redis OR in-memory, not both
- Stale data served to users costs $1000/incident
- Cache miss causing slow response costs $1/occurrence

Write a technical design document (under 200 words) explaining:
1. Your caching strategy
2. What you'd cache and what you wouldn't
3. How you handle invalidation
4. What you'd monitor
```

**Metrics:**
- Risk tolerance (consistency-biased vs. speed-biased)
- Strategy classification (write-through / write-behind / read-through / cache-aside)
- Word count
- Technical depth (mentions specific tools? quantitative reasoning?)
- What's mentioned first (reveals priority)

---

## Section 4: Methodology Improvements

### Statistical Rigor

1. **Run each personality 5+ times** on the same task → compute ICC (intraclass correlation). If within-personality variance > between-personality variance, differences are noise.

2. **Report effect sizes** (Cohen's d), not just "there was variation."

3. **Validate scoring formula** against human rankings — have 3+ developers rank 50 samples independently, compute Spearman rho against formula. Target: rho > 0.7.

4. **Sensitivity analysis** — perturb each formula weight by ±20%, check if rankings are stable.

5. **Multiple comparison correction** — use Bonferroni or FDR when comparing 26 category groups.

### Controls

- **Null baseline:** Run with no personality prompt to establish baseline variation.
- **Repeated measures:** Same personality, same task, 5 runs → measure natural randomness.
- **Cross-language:** Repeat in Python and Go to test if findings are JS-specific.

### Fix Express Test Experiment

The current Exp 2 is scientifically invalid — all tests were programmatically generated with identical structure. Re-run with the personality-driven prompt in Experiment 4 above.

---

## Section 5: Execution Playbook

### Batch Generation Pattern

```javascript
// Generate files in batches of 20 personalities
const BATCH_SIZE = 20;
const personalities = require('./data/personalities.json');

for (let i = 0; i < personalities.length; i += BATCH_SIZE) {
  const batch = personalities.slice(i, i + BATCH_SIZE);
  // Spawn one agent per batch
  // Each agent generates all files for its 20 personalities
}
```

### Known Pitfalls

1. **Filename mismatches:** Agents use shortened names. Always reconcile against source personality directory.
2. **Cross-category placement:** Agents guess categories wrong. Validate file locations post-generation.
3. **FizzBuzz ordering:** Must check `% 15` BEFORE `% 3` and `% 5` individually.
4. **Stderr contamination:** Use `stdio: ['pipe', 'pipe', 'pipe']` in execSync, NOT `2>&1`.
5. **Jest per-file parsing:** Use `assertionResults[].status` not `suite.numPassedTests` (which is undefined per-suite).
6. **Agent conflicts:** Never run reconciliation/cleanup while generation agents are still writing.

### File Organization

```
experiments/
  {experiment-name}/
    {category}/{NNN}_{personality_name}.js    # Generated files
    validation_results.json                    # Output of validation script
    analysis_results.json                      # Output of analysis script
scripts/
  lib/
    walk.js       # walkPersonalities(dir) → [{num, name, category, file, fullPath}]
    stats.js      # avg, stddev, median
    scoring.js    # analyzeFile(content), computeDevFitness(metrics)
    runner.js     # runFile(path, {timeout}) → {success, output, error, errorType}
  validate_{exp}.js
  analyze_{exp}.js
results/
  {EXPERIMENT}_RESULTS.md
```

---

## Section 6: Extending the Personality Set

### Adding New Personalities

1. Add name to `data/personalities.json`
2. Generate Hello World file in appropriate category directory
3. Assign number sequentially from 652+
4. Run `node scripts/analyze.js` to verify it's included in analysis

### Adding New Categories

1. Create `personalities/{new-category}/` directory
2. Generate files with correct naming: `{NNN}_{name}.js`
3. Update README.md category list
4. Verify `walkPersonalities()` discovers them

### Personality Selection for Sampling

The constrained experiment used top-50 + bottom-50 by dev fitness. To select a different sample:

```javascript
const { walkPersonalities } = require('./scripts/lib/walk');
const { analyzeFile, computeDevFitness } = require('./scripts/lib/scoring');
const entries = walkPersonalities('./personalities');
const scored = entries.map(e => {
  const metrics = analyzeFile(fs.readFileSync(e.fullPath, 'utf8'));
  const { devScore } = computeDevFitness(metrics);
  return { ...e, devScore };
}).sort((a, b) => b.devScore - a.devScore);
```

---

## TL;DR for AI Agents

1. Clone the repo
2. Read `data/personalities.json` for the full personality list
3. Use prompts from Section 1 (replication) or Section 3 (new experiments)
4. Generate files in `experiments/{experiment-name}/{category}/{NNN}_{name}.js`
5. Validate with exact output matching or jest per-file execution
6. Analyze with the scoring formula in `scripts/lib/scoring.js`
7. Write results to `results/{EXPERIMENT}_RESULTS.md`

The key lesson: **test divergence, not convergence.** Tasks with single correct answers (algorithms, exact-output programs) produce no personality differentiation. Test tasks where multiple valid solutions exist (refactoring, naming, error handling, architecture).
