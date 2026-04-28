# Hello World Personality Experiment — Statistical Analysis

**Total files analyzed:** 652 (500 fictional personalities + 101 professionals + 50 software engineer archetypes + 1 baseline)

## Overall Statistics

| Metric | Mean | Median | StdDev | Min | Max |
|--------|------|--------|--------|-----|-----|
| Total Lines | 33.4 | 28.0 | 20.1 | 2 | 148 |
| Non-Empty Lines | 26.2 | 21.0 | 17.4 | 1 | 124 |
| Comment Lines | 7.5 | 7.0 | 4.8 | 0 | 38 |
| Code Lines | 18.7 | 13.0 | 17.9 | 1 | 113 |
| Total Characters | 950.4 | 696.5 | 755.8 | 28 | 5,649 |
| Comment Ratio (%) | 45.5 | 47.0 | 28.6 | 0 | 93 |
| Vocabulary Richness (%) | 64.5 | 66.0 | 13.4 | 27 | 100 |
| Avg Line Length | 34.3 | 33.0 | 8.0 | 14 | 60 |
| Console.log Count | 4.1 | 1.0 | 6.4 | 0 | 46 |
| Complexity Score (0-12) | 2.7 | 2.0 | 1.7 | 0 | 8 |
| Exclamation Marks | 2.6 | 1.0 | 3.6 | 0 | 27 |
| ALL CAPS Words | 5.6 | 1.0 | 10.3 | 0 | 87 |

## Feature Usage (out of 652 files)

| Feature | Count | % |
|---------|-------|---|
| `function` keyword | 314 | 48% |
| Loops (`for`/`while`) | 218 | 33% |
| Arrow functions (`=>`) | 182 | 28% |
| Template literals | 156 | 24% |
| `class` | 155 | 24% |
| Conditionals (`if`/`switch`) | 152 | 23% |
| `try`/`catch` | 15 | 2% |
| `async`/`await` | 5 | 1% |

## Most Extreme Personalities

### Shortest (fewest lines)

| Rank | Personality | Lines |
|------|------------|-------|
| 1 | Baseline | 2 |
| 2 | Code Golfer | 2 |
| 3 | Pragmatic Developer | 2 |
| 4 | 10x Developer | 3 |
| 5 | Saitama | 7 |

### Longest (most lines)

| Rank | Personality | Lines |
|------|------------|-------|
| 1 | Database Developer (SWE) | 148 |
| 2 | Game Developer (SWE) | 138 |
| 3 | Platform Engineer (SWE) | 130 |
| 4 | Forensic Accountant | 115 |
| 5 | Plasma Physicist | 103 |

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
| 2 | Software Engineer | 0% |
| 3 | Senior Engineer (SWE) | 0% |
| 4 | 10x Developer | 0% |
| 5 | Code Golfer | 0% |

### Most Complex (highest complexity score)

| Rank | Personality | Score |
|------|------------|-------|
| 1 | Machine Learning Engineer | 8 |
| 2 | Game Developer (SWE) | 8 |
| 3 | Ethan Hunt | 7 |
| 4 | Aloy | 7 |
| 5 | NASA Engineer | 7 |

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
| 1 | Pragmatic Developer | 28 |
| 2 | Baseline | 30 |
| 3 | 10x Developer | 58 |
| 4 | Code Golfer | 58 |
| 5 | Senior Engineer (SWE) | 88 |

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
| 2 | 10x Developer | 100% |
| 3 | Pragmatic Developer | 100% |
| 4 | Geralt of Rivia | 95% |
| 5 | Kurt Cobain | 93% |

## Biggest Overall Deviations (composite z-score)

### Top 20 Most "Different" Personalities

| Rank | Personality | Z-Score | Key Deviations |
|------|------------|---------|----------------|
| 1 | Database Developer (SWE) | 25.74 | totalLines +5.7, complexityScore +1.9, totalChars +4.2, allCapsWords +6.3, consoleLogCount +3.3 |
| 2 | Forensic Accountant | 25.66 | totalLines +4.1, totalChars +6.2, allCapsWords +3.8, consoleLogCount +6.4 |
| 3 | Emergency Room Doctor | 22.07 | totalLines +2.7, complexityScore +1.9, totalChars +3.9, allCapsWords +5.1, consoleLogCount +5.3 |
| 4 | Anesthesiologist | 21.80 | totalLines +3.3, totalChars +4.6, allCapsWords +2.8, consoleLogCount +6.0 |
| 5 | Bomb Disposal Technician | 21.77 | totalLines +2.2, totalChars +3.9, allCapsWords +5.6, consoleLogCount +5.3 |
| 6 | Air Crash Investigator | 20.84 | totalLines +2.6, totalChars +4.4, allCapsWords +3.2, consoleLogCount +6.6 |
| 7 | Platform Engineer (SWE) | 19.60 | totalLines +4.8, complexityScore +1.9, totalChars +3.4, allCapsWords +3.6 |
| 8 | Machine Learning Engineer | 18.98 | totalLines +3.1, complexityScore +3.1, totalChars +3.3, consoleLogCount +3.9 |
| 9 | Tax Accountant | 17.80 | totalLines +3.2, totalChars +3.4, consoleLogCount +5.2 |
| 10 | Game Developer (SWE) | 17.31 | totalLines +5.2, complexityScore +3.1, totalChars +3.0 |
| 11 | Dalek | 17.15 | exclamations +6.3, allCapsWords +7.6 |
| 12 | Plasma Physicist | 17.03 | totalLines +3.5, complexityScore +2.5, totalChars +3.8, consoleLogCount +2.8 |
| 13 | Kevin Hart | 15.95 | exclamations +6.0, allCapsWords +7.9 |
| 14 | Signal Processing Engineer | 15.86 | totalLines +2.2, totalChars +2.7, consoleLogCount +3.6 |
| 15 | Biomedical Engineer | 15.77 | totalLines +2.1, complexityScore +1.9, totalChars +3.0, allCapsWords +2.5 |
| 16 | Data Scientist | 15.72 | totalLines +2.9, totalChars +3.3, consoleLogCount +3.6 |
| 17 | FPGA Engineer | 15.32 | totalLines +2.0, complexityScore +1.9, totalChars +2.3, consoleLogCount +3.6 |
| 18 | Bioinformatics Scientist | 15.17 | totalLines +1.8, complexityScore +2.5, totalChars +2.4, allCapsWords +3.1 |
| 19 | Patent Attorney | 14.91 | totalLines +1.8, totalChars +2.4, allCapsWords +2.2, consoleLogCount +3.8 |
| 20 | ML Engineer (SWE) | 14.76 | totalLines +3.4, complexityScore +1.9, totalChars +2.9 |

### Bottom 5 Most "Standard" Personalities

| Rank | Personality | Z-Score |
|------|------------|---------|
| 1 | Toph | 1.55 |
| 2 | Dwight Schrute | 1.80 |
| 3 | Muhammad Ali | 1.88 |
| 4 | Neil deGrasse Tyson | 1.89 |
| 5 | Serena Williams | 1.89 |

## Category Comparison

| Category | Avg Lines | Avg Chars | Avg Complexity | Avg ! | Avg Comment % |
|----------|-----------|-----------|----------------|-------|---------------|
| **Professionals** | **65.0** | **2,342** | **5.1** | **0.5** | **9%** |
| **Software Engineers** | **46.4** | **1,198** | **3.7** | **1.2** | **36%** |
| Villains | 42.0 | 836 | 3.0 | 12.5 | 52% |
| Scientists/Thinkers | 35.8 | 1,086 | 3.2 | 1.6 | 64% |
| Video Game Characters | 33.1 | 692 | 2.9 | 3.0 | 39% |
| Historical Figures | 32.8 | 798 | 2.8 | 4.2 | 50% |
| AIs/Robots | 31.0 | 723 | 2.2 | 1.7 | 57% |
| Tech CEOs | 30.6 | 878 | 2.6 | 1.4 | 69% |
| Musicians | 29.3 | 638 | 2.2 | 2.0 | 34% |
| Action Heroes | 29.1 | 683 | 2.3 | 2.7 | 55% |
| Celebrities | 27.8 | 769 | 2.2 | 4.2 | 84% |
| Sitcom Characters | 27.1 | 724 | 2.3 | 4.6 | 61% |
| Anime | 22.9 | 565 | 2.0 | 6.4 | 59% |
| Superheroes | 19.4 | 540 | 1.3 | 3.2 | 74% |
| Children's Characters | 19.1 | 562 | 0.7 | 5.1 | 85% |
| Literary Authors | 17.4 | 543 | 1.0 | 2.0 | 77% |

## Three-Way Comparison: Professionals vs SWE Archetypes vs Fictional

| Metric | Professionals (101) | SWE Types (50) | Fictional (500) | Baseline |
|--------|---------------------|----------------|-----------------|----------|
| Avg Lines | 65.0 | 46.4 | 25.7 | 2 |
| Avg Characters | 2,342 | 1,198 | 646 | 30 |
| Avg Code Lines | 49.3 | 27.9 | 11.6 | 1 |
| Comment % | 9.1% | 35.5% | 53.9% | 0% |
| Complexity | 3.4 | 2.6 | 1.5 | 0 |
| Signal-to-Noise | 88.1% | 60.5% | 42.2% | 97% |
| Exclamations | 0.5 | 1.2 | 3.2 | 1 |
| Modern JS Score | 3.8 | 2.9 | 2.3 | 1 |
| Dev Fitness | 60.5 | 55.9 | 56.0 | N/A |

**Key insight:** Professionals write **2.5x more code lines**, use **2.3x higher complexity**, but produce **88% signal-to-noise** vs 60% for SWE types and 42% for fictional personalities. SWE archetypes sit in between — more code than fictional but more comments than professionals. The fitness scoring penalizes professional verbosity, making SWE archetypes and fictional characters score similarly despite producing very different code. Process-oriented SWE types (pair programmers, agile devs) score worst of all categories.

## Runtime Validity Check

**Passed (produced output): 652/652**
**Failed: 0/652**
