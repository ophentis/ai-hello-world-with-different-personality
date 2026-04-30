#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const BASE = path.join(__dirname, '..');
const RESULTS_DIR = path.join(BASE, 'results');

function walkDir(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const category of fs.readdirSync(dir)) {
    const catPath = path.join(dir, category);
    if (!fs.statSync(catPath).isDirectory()) continue;
    for (const file of fs.readdirSync(catPath)) {
      if (!file.match(/\.(js|txt|md|test\.js)$/)) continue;
      const match = file.match(/^(\d+)[_-](.+)\.(js|txt|md|test\.js)$/);
      if (!match) continue;
      const content = fs.readFileSync(path.join(catPath, file), 'utf8');
      results.push({
        id: match[1],
        name: match[2].replace(/_/g, ' ').replace('.test', ''),
        category,
        lines: content.split('\n').length,
        codeLines: content.split('\n').filter(l => l.trim() && !l.trim().startsWith('//') && !l.trim().startsWith('*')).length,
        chars: content.length,
      });
    }
  }
  return results;
}

// Gather data from all experiments
const experiments = {
  fizzbuzz: walkDir(path.join(BASE, 'experiments', 'algorithms', 'fizzbuzz')),
  sort: walkDir(path.join(BASE, 'experiments', 'algorithms', 'sort')),
  fibonacci: walkDir(path.join(BASE, 'experiments', 'algorithms', 'fibonacci')),
  naming: walkDir(path.join(BASE, 'experiments', 'naming')),
  refactoring: walkDir(path.join(BASE, 'experiments', 'refactoring')),
  'code-review': walkDir(path.join(BASE, 'experiments', 'code-review')),
  'error-handling': walkDir(path.join(BASE, 'experiments', 'error-handling')),
};

// Express tests
const expressDir = path.join(BASE, 'experiments', 'express-tests', 'tests');
if (fs.existsSync(expressDir)) {
  experiments['express-tests'] = walkDir(expressDir);
}

// Build per-personality scores
const personalities = {};
for (const [expName, entries] of Object.entries(experiments)) {
  if (entries.length === 0) continue;
  // Rank by code lines (less = more concise)
  const sorted = [...entries].sort((a, b) => a.codeLines - b.codeLines);
  for (let i = 0; i < sorted.length; i++) {
    const key = sorted[i].id;
    if (!personalities[key]) {
      personalities[key] = { id: key, name: sorted[i].name, category: sorted[i].category, ranks: {}, lines: {} };
    }
    personalities[key].ranks[expName] = i + 1;
    personalities[key].lines[expName] = sorted[i].codeLines;
  }
}

// Calculate average rank
for (const p of Object.values(personalities)) {
  const rankValues = Object.values(p.ranks);
  p.avgRank = rankValues.reduce((a, b) => a + b, 0) / rankValues.length;
  p.experimentCount = rankValues.length;
}

// Sort by average rank
const ranked = Object.values(personalities).filter(p => p.experimentCount >= 4).sort((a, b) => a.avgRank - b.avgRank);

let report = '# Cross-Experiment Personality Rankings\n\n';
report += `Generated: ${new Date().toISOString()}\n\n`;
report += `Personalities ranked by average conciseness rank across ${Object.keys(experiments).length} experiments.\n`;
report += `Only personalities appearing in 4+ experiments are included.\n\n`;

report += '## Universal Conciseness Ranking\n\n';
report += '| Rank | Personality | Category | Avg Rank | FizzBuzz | Sort | Fib | Tests | Naming | Refactor | Review | EH |\n';
report += '|------|-------------|----------|----------|----------|------|-----|-------|--------|----------|--------|----|\n';

for (let i = 0; i < ranked.length; i++) {
  const p = ranked[i];
  const fb = p.ranks.fizzbuzz || '-';
  const sort = p.ranks.sort || '-';
  const fib = p.ranks.fibonacci || '-';
  const tests = p.ranks['express-tests'] || '-';
  const naming = p.ranks.naming || '-';
  const refactor = p.ranks.refactoring || '-';
  const review = p.ranks['code-review'] || '-';
  const eh = p.ranks['error-handling'] || '-';
  report += `| ${i+1} | ${p.name} | ${p.category} | ${p.avgRank.toFixed(1)} | ${fb} | ${sort} | ${fib} | ${tests} | ${naming} | ${refactor} | ${review} | ${eh} |\n`;
}

// Category averages
report += '\n## Category Average Rankings\n\n';
report += '| Category | Avg Rank | Interpretation |\n';
report += '|----------|----------|----------------|\n';

const byCategory = {};
for (const p of ranked) {
  if (!byCategory[p.category]) byCategory[p.category] = [];
  byCategory[p.category].push(p.avgRank);
}
const catSorted = Object.entries(byCategory).map(([cat, ranks]) => ({
  cat,
  avg: ranks.reduce((a, b) => a + b, 0) / ranks.length,
})).sort((a, b) => a.avg - b.avg);

for (const { cat, avg } of catSorted) {
  const interp = avg < 20 ? 'Most concise' : avg < 30 ? 'Moderate' : 'Most verbose';
  report += `| ${cat} | ${avg.toFixed(1)} | ${interp} |\n`;
}

// Consistency score (low std dev = consistent across experiments)
report += '\n## Consistency Score (Low = same relative position everywhere)\n\n';
report += '| Personality | Avg Rank | Std Dev | Interpretation |\n';
report += '|-------------|----------|---------|----------------|\n';

const withConsistency = ranked.map(p => {
  const ranks = Object.values(p.ranks);
  const avg = ranks.reduce((a, b) => a + b, 0) / ranks.length;
  const stddev = Math.sqrt(ranks.reduce((s, x) => s + (x - avg) * (x - avg), 0) / ranks.length);
  return { ...p, stddev };
}).sort((a, b) => a.stddev - b.stddev);

for (const p of withConsistency.slice(0, 15)) {
  const interp = p.stddev < 5 ? 'Very consistent' : p.stddev < 10 ? 'Consistent' : 'Variable';
  report += `| ${p.name} | ${p.avgRank.toFixed(1)} | ${p.stddev.toFixed(1)} | ${interp} |\n`;
}

report += '\n...\n\n';
for (const p of withConsistency.slice(-5)) {
  report += `| ${p.name} | ${p.avgRank.toFixed(1)} | ${p.stddev.toFixed(1)} | Most variable |\n`;
}

// Summary stats
report += '\n## Summary Statistics\n\n';
report += `| Metric | Value |\n|--------|-------|\n`;
report += `| Total experiments | ${Object.keys(experiments).length} |\n`;
report += `| Total experiment files | ${Object.values(experiments).reduce((s, e) => s + e.length, 0)} |\n`;
report += `| Personalities tracked | ${ranked.length} |\n`;
report += `| Most concise overall | ${ranked[0]?.name} (avg rank ${ranked[0]?.avgRank.toFixed(1)}) |\n`;
report += `| Most verbose overall | ${ranked[ranked.length-1]?.name} (avg rank ${ranked[ranked.length-1]?.avgRank.toFixed(1)}) |\n`;
report += `| Most consistent | ${withConsistency[0]?.name} (stddev ${withConsistency[0]?.stddev.toFixed(1)}) |\n`;
report += `| Most variable | ${withConsistency[withConsistency.length-1]?.name} (stddev ${withConsistency[withConsistency.length-1]?.stddev.toFixed(1)}) |\n`;

fs.writeFileSync(path.join(RESULTS_DIR, 'CROSS_RANKINGS.md'), report);
console.log('Written to results/CROSS_RANKINGS.md');
console.log(`${ranked.length} personalities ranked across ${Object.keys(experiments).length} experiments`);
