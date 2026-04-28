# Hello World Personality Experiment — Statistical Analysis

**Total files analyzed:** 501 (500 personalities + 1 baseline)

## Overall Statistics

| Metric | Mean | Median | StdDev | Min | Max |
|--------|------|--------|--------|-----|-----|
| Total Lines | 25.7 | 25.0 | 9.0 | 2 | 57 |
| Non-Empty Lines | 19.4 | 18.0 | 7.3 | 1 | 44 |
| Comment Lines | 7.8 | 7.0 | 4.1 | 0 | 23 |
| Code Lines | 11.6 | 10.0 | 7.6 | 1 | 33 |
| Total Characters | 645.2 | 626.0 | 226.5 | 30 | 1521 |
| Comment Ratio (%) | 53.8 | 58.0 | 24.7 | 0 | 93 |
| Vocabulary Richness (%) | 69.3 | 69.0 | 9.0 | 32 | 100 |
| Avg Line Length | 33.0 | 32.0 | 7.3 | 14 | 60 |
| Console.log Count | 2.2 | 1.0 | 2.1 | 0 | 14 |
| Complexity Score (0-12) | 2.1 | 2.0 | 1.3 | 0 | 7 |
| Exclamation Marks | 3.2 | 1.0 | 3.8 | 0 | 27 |
| ALL CAPS Words | 3.1 | 0.0 | 7.5 | 0 | 87 |

## Feature Usage (out of 501 files)

| Feature | Count | % |
|---------|-------|---|
| `function` keyword | 251 | 50% |
| Loops (`for`/`while`) | 137 | 27% |
| Conditionals (`if`/`switch`) | 102 | 20% |
| Arrow functions (`=>`) | 100 | 20% |
| `class` | 84 | 17% |
| Template literals | 42 | 8% |
| `try`/`catch` | 8 | 2% |
| `async`/`await` | 4 | 1% |

## Most Extreme Personalities

### Shortest (fewest lines)

| Rank | Personality | Lines |
|------|------------|-------|
| 1 | Baseline | 2 |
| 2 | Saitama | 7 |
| 3 | Kurt Cobain | 7 |
| 4 | Gandalf the White | 7 |
| 5 | Hodor | 10 |

### Longest (most lines)

| Rank | Personality | Lines |
|------|------------|-------|
| 1 | Rocket Raccoon | 57 |
| 2 | Dr. Strange | 54 |
| 3 | Thanos | 52 |
| 4 | Black Panther | 52 |
| 5 | Elsa | 47 |

### Most Comments (highest comment ratio)

| Rank | Personality | Ratio |
|------|------------|-------|
| 1 | Ross Geller | 93% |
| 2 | Rachel Green | 93% |
| 3 | George Costanza | 93% |
| 4 | Jerry Seinfeld | 93% |
| 5 | Cat in the Hat | 92% |

### Least Comments (lowest comment ratio)

| Rank | Personality | Ratio |
|------|------------|-------|
| 1 | Baseline | 0% |
| 2 | Megumin (Konosuba) | 5% |
| 3 | Claptrap | 5% |
| 4 | Tom Nook | 5% |
| 5 | Kazuya | 5% |

### Most Complex (highest complexity score)

| Rank | Personality | Score |
|------|------------|-------|
| 1 | Ethan Hunt | 7 |
| 2 | Aloy | 7 |
| 3 | Nathan Drake | 6 |
| 4 | Walter White | 5 |
| 5 | Arthur Morgan | 5 |

### Simplest (lowest complexity score)

| Rank | Personality | Score |
|------|------------|-------|
| 1 | Baseline | 0 |
| 2 | Saitama | 0 |
| 3 | Hemingway | 0 |
| 4 | Sherlock Holmes | 0 |
| 5 | Iron Man | 0 |

### Most Verbose (most characters)

| Rank | Personality | Chars |
|------|------------|-------|
| 1 | Rocket Raccoon | 1,521 |
| 2 | Dr. Strange | 1,418 |
| 3 | Sigmund Freud | 1,262 |
| 4 | Hermione | 1,246 |
| 5 | Ada Lovelace | 1,240 |

### Most Concise (fewest characters)

| Rank | Personality | Chars |
|------|------------|-------|
| 1 | Baseline | 30 |
| 2 | Hodor | 106 |
| 3 | Kurt Cobain | 112 |
| 4 | Sasuke | 158 |
| 5 | Saitama | 179 |

### Most Exclamation Marks

| Rank | Personality | Count |
|------|------------|-------|
| 1 | Luffy | 27 |
| 2 | Dalek | 25 |
| 3 | Daffy Duck | 24 |
| 4 | Kevin Hart | 24 |
| 5 | Donkey (Shrek) | 22 |

### Most ALL-CAPS Words

| Rank | Personality | Count |
|------|------------|-------|
| 1 | Kevin Hart | 87 |
| 2 | Dalek | 84 |
| 3 | Eren Jaeger | 43 |
| 4 | Donkey (Shrek) | 32 |
| 5 | Achilles | 32 |

### Most `console.log` Calls

| Rank | Personality | Count |
|------|------------|-------|
| 1 | Megumin (Konosuba) | 14 |
| 2 | Aqua (Konosuba) | 11 |
| 3 | Garrus Vakarian | 11 |
| 4 | Tali'Zorah | 11 |
| 5 | Wrex | 11 |

### Richest Vocabulary

| Rank | Personality | Richness |
|------|------------|----------|
| 1 | Baseline | 100% |
| 2 | Geralt of Rivia | 95% |
| 3 | Kurt Cobain | 93% |
| 4 | Boba Fett | 92% |
| 5 | Lovecraft | 91% |

## Biggest Overall Deviations (composite z-score)

### Top 20 Most "Different" Personalities

| Rank | Personality | Z-Score | Key Deviations |
|------|------------|---------|----------------|
| 1 | Dalek | 22.56 | totalLines ↑2.0, exclamations ↑5.7, allCapsWords ↑10.7 |
| 2 | Kevin Hart | 20.17 | exclamations ↑5.4, allCapsWords ↑11.1 |
| 3 | Megumin (Konosuba) | 18.16 | totalLines ↑1.6, commentRatio ↓2.0, totalChars ↑2.4, consoleLogCount ↑5.7 |
| 4 | Donkey (Shrek) | 14.58 | complexityScore ↓1.7, exclamations ↑4.9, allCapsWords ↑3.8 |
| 5 | Baseline | 14.20 | totalLines ↓2.6, commentRatio ↓2.2, totalChars ↓2.7, vocabularyRichness ↑3.4 |
| 6 | Aqua (Konosuba) | 13.48 | commentRatio ↓1.8, complexityScore ↑2.3, consoleLogCount ↑4.2 |
| 7 | Senku Ishigami | 13.14 | totalLines ↑1.9, commentRatio ↓1.8, allCapsWords ↑1.9 |
| 8 | Rocket Raccoon | 12.91 | totalLines ↑3.5, totalChars ↑3.9 |
| 9 | SpongeBob | 12.41 | exclamations ↑4.1, allCapsWords ↑3.2, vocabularyRichness ↓2.8 |
| 10 | Handsome Jack | 12.36 | commentRatio ↓1.6, totalChars ↑1.9, consoleLogCount ↑4.2 |
| 11 | Mordin Solus | 12.21 | commentRatio ↓1.7, totalChars ↑2.1, consoleLogCount ↑4.2 |
| 12 | Aloy | 11.80 | complexityScore ↑3.9, consoleLogCount ↑2.8 |
| 13 | Marie Curie | 11.72 | totalLines ↑2.0, totalChars ↑2.3, exclamations ↑2.1 |
| 14 | Garrus Vakarian | 11.58 | consoleLogCount ↑4.2 |
| 15 | Nathan Drake | 11.55 | commentRatio ↓1.7, complexityScore ↑3.1, consoleLogCount ↑2.8 |
| 16 | Jar Jar Binks | 11.52 | exclamations ↑2.8, consoleLogCount ↑3.3 |
| 17 | Kurapika | 11.45 | totalLines ↑1.8, complexityScore ↑2.3, consoleLogCount ↑2.3 |
| 18 | Kazuma Satou | 11.39 | totalLines ↑1.8, complexityScore ↑2.3, consoleLogCount ↑2.3 |
| 19 | Wrex | 11.34 | commentRatio ↓1.6, consoleLogCount ↑4.2 |
| 20 | Genie (Aladdin) | 11.28 | totalChars ↑1.6, exclamations ↑3.1, allCapsWords ↑2.1 |

### Bottom 5 Most "Standard" Personalities

| Rank | Personality | Z-Score |
|------|------------|---------|
| 1 | Bruce Lee | 2.23 |
| 2 | Jackie Chan | 2.28 |
| 3 | Christopher Nolan | 2.33 |
| 4 | Bugs Bunny | 2.36 |
| 5 | Stanley Kubrick | 2.42 |

## Category Comparison

| Category | Avg Lines | Avg Chars | Avg Complexity | Avg ! | Avg Comment % |
|----------|-----------|-----------|----------------|-------|---------------|
| Scientists/Thinkers | 35.8 | 1,086 | 3.2 | 1.6 | 64% |
| Villains | 42.0 | 836 | 3.0 | 12.5 | 52% |
| Video Game Characters | 33.1 | 692 | 2.9 | 3.0 | 39% |
| Historical Figures | 32.8 | 798 | 2.8 | 4.2 | 50% |
| Tech CEOs | 30.6 | 878 | 2.6 | 1.4 | 69% |
| AIs/Robots | 31.0 | 723 | 2.2 | 1.7 | 57% |
| Musicians | 29.3 | 638 | 2.2 | 2.0 | 34% |
| Celebrities | 27.8 | 769 | 2.2 | 4.2 | 84% |
| Action Heroes | 29.1 | 683 | 2.3 | 2.7 | 55% |
| Sitcom Characters | 27.1 | 724 | 2.3 | 4.6 | 61% |
| Anime | 22.9 | 565 | 2.0 | 6.4 | 59% |
| Superheroes | 19.4 | 540 | 1.3 | 3.2 | 74% |
| Children's Characters | 19.1 | 562 | 0.7 | 5.1 | 85% |
| Literary Authors | 17.4 | 543 | 1.0 | 2.0 | 77% |

## Runtime Validity Check

**Passed (produced output): 501/501**
**Failed: 0/501**
