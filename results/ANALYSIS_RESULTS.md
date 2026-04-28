# Hello World Personality Experiment — Statistical Analysis

**Total files analyzed:** 601 (500 fictional personalities + 100 professionals + 1 baseline)

## Overall Statistics

| Metric | Mean | Median | StdDev | Min | Max |
|--------|------|--------|--------|-----|-----|
| Total Lines | 32.3 | 28.0 | 18.3 | 2 | 115 |
| Non-Empty Lines | 25.2 | 20.0 | 15.8 | 1 | 93 |
| Comment Lines | 7.3 | 7.0 | 4.1 | 0 | 23 |
| Code Lines | 17.9 | 12.0 | 16.8 | 1 | 83 |
| Total Characters | 931.2 | 685.0 | 742.4 | 30 | 5,649 |
| Comment Ratio (%) | 46.4 | 48.0 | 28.1 | 0 | 93 |
| Vocabulary Richness (%) | 65.1 | 67.0 | 12.9 | 30 | 100 |
| Avg Line Length | 34.5 | 33.0 | 7.9 | 14 | 60 |
| Console.log Count | 4.2 | 1.0 | 6.5 | 0 | 46 |
| Complexity Score (0-12) | 2.7 | 2.0 | 1.6 | 0 | 8 |
| Exclamation Marks | 2.7 | 1.0 | 3.6 | 0 | 27 |
| ALL CAPS Words | 5.4 | 1.0 | 10.0 | 0 | 87 |

## Feature Usage (out of 601 files)

| Feature | Count | % |
|---------|-------|---|
| `function` keyword | 288 | 48% |
| Loops (`for`/`while`) | 195 | 32% |
| Arrow functions (`=>`) | 159 | 26% |
| `class` | 142 | 24% |
| Template literals | 140 | 23% |
| Conditionals (`if`/`switch`) | 132 | 22% |
| `try`/`catch` | 8 | 1% |
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
| 1 | Forensic Accountant | 115 |
| 2 | Plasma Physicist | 103 |
| 3 | Anesthesiologist | 100 |
| 4 | Tax Accountant | 97 |
| 5 | Optical Engineer | 96 |

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
| 2 | Blockchain Developer | 4% |
| 3 | Firmware Engineer | 4% |
| 4 | Industrial Engineer | 4% |
| 5 | Agricultural Engineer | 4% |

### Most Complex (highest complexity score)

| Rank | Personality | Score |
|------|------------|-------|
| 1 | Machine Learning Engineer | 8 |
| 2 | Ethan Hunt | 7 |
| 3 | Aloy | 7 |
| 4 | NASA Engineer | 7 |
| 5 | Quantum Computing Researcher | 7 |

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
| 1 | Forensic Accountant | 5,649 |
| 2 | Anesthesiologist | 4,427 |
| 3 | Air Crash Investigator | 4,239 |
| 4 | Emergency Room Doctor | 3,891 |
| 5 | Bomb Disposal Technician | 3,863 |

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
| 3 | Bomb Disposal Technician | 63 |
| 4 | Emergency Room Doctor | 58 |
| 5 | Forensic Accountant | 45 |

### Most `console.log` Calls

| Rank | Personality | Count |
|------|------------|-------|
| 1 | Air Crash Investigator | 46 |
| 2 | Forensic Accountant | 45 |
| 3 | Anesthesiologist | 42 |
| 4 | Bomb Disposal Technician | 38 |
| 5 | Emergency Room Doctor | 38 |

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
| 1 | Forensic Accountant | 26.52 | totalLines +4.5, totalChars +6.4, allCapsWords +4.0, consoleLogCount +6.3 |
| 2 | Emergency Room Doctor | 22.81 | totalLines +3.0, complexityScore +2.0, totalChars +4.0, allCapsWords +5.3 |
| 3 | Anesthesiologist | 22.54 | totalLines +3.7, totalChars +4.7, consoleLogCount +5.8 |
| 4 | Bomb Disposal Technician | 22.48 | totalChars +3.9, allCapsWords +5.8, consoleLogCount +5.2 |
| 5 | Air Crash Investigator | 21.47 | totalChars +4.5, consoleLogCount +6.4 |
| 6 | Machine Learning Engineer | 19.71 | totalLines +3.4, complexityScore +3.2, consoleLogCount +3.8 |
| 7 | Tax Accountant | 18.47 | totalLines +3.5, totalChars +3.5, consoleLogCount +5.1 |
| 8 | Plasma Physicist | 17.78 | totalLines +3.9, complexityScore +2.6, totalChars +3.9 |
| 9 | Dalek | 17.33 | exclamations +6.1, allCapsWords +7.9 |
| 10 | Signal Processing Engineer | 16.47 | totalChars +2.8, consoleLogCount +3.5 |
| 11 | Biomedical Engineer | 16.40 | complexityScore +2.0, totalChars +3.0, allCapsWords +2.6 |
| 12 | Data Scientist | 16.37 | totalLines +3.2, totalChars +3.4, consoleLogCount +3.5 |
| 13 | Kevin Hart | 15.96 | exclamations +5.8, allCapsWords +8.2 |
| 14 | FPGA Engineer | 15.90 | complexityScore +2.0, consoleLogCount +3.5 |
| 15 | Bioinformatics Scientist | 15.81 | complexityScore +2.6, allCapsWords +3.3 |
| 16 | Patent Attorney | 15.47 | totalChars +2.5, consoleLogCount +3.7 |
| 17 | Chief Technology Officer | 14.87 | totalChars +3.1, consoleLogCount +2.7 |
| 18 | Particle Physicist | 14.86 | totalLines +3.3, totalChars +3.0 |
| 19 | Astrophysicist | 14.85 | totalLines +3.0, totalChars +3.3 |
| 20 | Optical Engineer | 14.64 | totalLines +3.5, totalChars +3.2 |

### Bottom 5 Most "Standard" Personalities

| Rank | Personality | Z-Score |
|------|------------|---------|
| 1 | Toph | 1.66 |
| 2 | Muhammad Ali | 1.83 |
| 3 | Serena Williams | 1.91 |
| 4 | R2-D2 | 1.98 |
| 5 | Dwight Schrute | 2.00 |

## Category Comparison

| Category | Avg Lines | Avg Chars | Avg Complexity | Avg ! | Avg Comment % |
|----------|-----------|-----------|----------------|-------|---------------|
| **Professionals** | **65.6** | **2,364** | **5.2** | **0.5** | **9%** |
| Scientists/Thinkers | 35.8 | 1,086 | 3.2 | 1.6 | 64% |
| Villains | 42.0 | 836 | 3.0 | 12.5 | 52% |
| Video Game Characters | 33.1 | 692 | 2.9 | 3.0 | 39% |
| Historical Figures | 32.8 | 798 | 2.8 | 4.2 | 50% |
| Tech CEOs | 30.6 | 878 | 2.6 | 1.4 | 69% |
| AIs/Robots | 31.0 | 723 | 2.2 | 1.7 | 57% |
| Sitcom Characters | 27.1 | 724 | 2.3 | 4.6 | 61% |
| Action Heroes | 29.1 | 683 | 2.3 | 2.7 | 55% |
| Celebrities | 27.8 | 769 | 2.2 | 4.2 | 84% |
| Musicians | 29.3 | 638 | 2.2 | 2.0 | 34% |
| Anime | 22.9 | 565 | 2.0 | 6.4 | 59% |
| Superheroes | 19.4 | 540 | 1.3 | 3.2 | 74% |
| Children's Characters | 19.1 | 562 | 0.7 | 5.1 | 85% |
| Literary Authors | 17.4 | 543 | 1.0 | 2.0 | 77% |

## Professionals vs Fictional — Head-to-Head

| Metric | Professionals (100) | Fictional (500) | Delta |
|--------|---------------------|-----------------|-------|
| Avg Lines | 65.6 | 25.7 | +39.9 |
| Avg Characters | 2,364 | 646 | +1,718 |
| Avg Code Lines | 49.7 | 11.6 | +38.1 |
| Avg Comment Lines | 4.9 | 7.8 | -2.9 |
| Comment % | 7% | 30% | -23% |
| Code-to-Total % | 76% | 45% | +31% |
| Avg Complexity | 3.4 | 1.5 | +1.9 |
| Avg Exclamations | 0.5 | 3.2 | -2.7 |

**Key insight:** Professionals write **2.5x more code lines**, use **2.3x higher complexity**, but produce **76% useful code** vs 45% for fictional personalities. They also use **almost no comments** (7% vs 30%) and **zero emotional noise** (0.5 exclamations vs 3.2). Professional personalities treat Hello World as a domain simulation, not a character performance.

## Runtime Validity Check

**Passed (produced output): 601/601**
**Failed: 0/601**
