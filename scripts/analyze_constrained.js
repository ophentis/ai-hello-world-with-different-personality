const fs = require('fs');
const path = require('path');
const { analyzeFile, computeDevFitness } = require('./lib/scoring');
const { avg, stddev, median } = require('./lib/stats');

const baseDir = path.resolve(__dirname, '..', 'experiments', 'constrained');
const selectionPath = path.join(baseDir, 'selection.json');
const personalitiesDir = path.resolve(__dirname, '..', 'personalities');

if (!fs.existsSync(selectionPath)) {
  console.error('Run select_constrained.js first');
  process.exit(1);
}

const selection = JSON.parse(fs.readFileSync(selectionPath, 'utf8'));
const variants = ['variant-a', 'variant-b', 'variant-c', 'variant-d'];
const variantNames = { 'variant-a': 'Readability', 'variant-b': 'Structure', 'variant-c': 'Algorithm', 'variant-d': 'All Combined' };

const allPersonalities = [...selection.top50, ...selection.bottom50];

console.log('=== CONSTRAINED EXPERIMENT ANALYSIS ===\n');
console.log(`Personalities sampled: ${allPersonalities.length} (top 50 + bottom 50 by dev fitness)`);
console.log(`Variants: ${variants.map(v => variantNames[v]).join(', ')}\n`);

const results = {};

for (const variant of variants) {
  const variantDir = path.join(baseDir, variant);
  if (!fs.existsSync(variantDir)) {
    console.log(`  ${variantNames[variant]}: directory missing, skipping`);
    continue;
  }

  results[variant] = { scores: [], deltas: [], top50Scores: [], bottom50Scores: [], top50Deltas: [], bottom50Deltas: [] };

  for (const p of allPersonalities) {
    const fileName = `${p.num}_${p.name.replace(/ /g, '_')}.js`;
    const constrainedPath = path.join(variantDir, fileName);
    if (!fs.existsSync(constrainedPath)) continue;

    const content = fs.readFileSync(constrainedPath, 'utf8');
    const metrics = analyzeFile(content);
    const { devScore } = computeDevFitness(metrics);
    const delta = devScore - p.score;

    results[variant].scores.push(devScore);
    results[variant].deltas.push(delta);

    const isTop = selection.top50.some(t => t.num === p.num);
    if (isTop) {
      results[variant].top50Scores.push(devScore);
      results[variant].top50Deltas.push(delta);
    } else {
      results[variant].bottom50Scores.push(devScore);
      results[variant].bottom50Deltas.push(delta);
    }
  }
}

// Summary table
console.log('--- Score Deltas by Variant ---');
console.log('Variant           | Files | Avg Score | Avg Delta | Median Delta | Top50 Δ | Bot50 Δ');
console.log('------------------|-------|-----------|-----------|--------------|---------|--------');
for (const variant of variants) {
  const r = results[variant];
  if (!r || r.scores.length === 0) continue;
  const row = [
    variantNames[variant].padEnd(17),
    String(r.scores.length).padStart(5),
    avg(r.scores).toFixed(1).padStart(9),
    (avg(r.deltas) >= 0 ? '+' : '') + avg(r.deltas).toFixed(1).padStart(8),
    (median(r.deltas) >= 0 ? '+' : '') + median(r.deltas).toFixed(1).padStart(11),
    (avg(r.top50Deltas) >= 0 ? '+' : '') + avg(r.top50Deltas).toFixed(1).padStart(6),
    (avg(r.bottom50Deltas) >= 0 ? '+' : '') + avg(r.bottom50Deltas).toFixed(1).padStart(6),
  ].join(' | ');
  console.log(row);
}

// Does personality survive constraints?
console.log('\n--- Personality Persistence ---');
for (const variant of variants) {
  const r = results[variant];
  if (!r || r.scores.length === 0) continue;
  const scoreStddev = stddev(r.scores);
  console.log(`  ${variantNames[variant]}: score stddev = ${scoreStddev.toFixed(1)} (higher = more personality variation survives)`);
}

// Best variant for day-to-day code
console.log('\n--- Best Variant for Day-to-Day Code ---');
const ranked = variants
  .filter(v => results[v] && results[v].scores.length > 0)
  .sort((a, b) => avg(results[b].scores) - avg(results[a].scores));
for (let i = 0; i < ranked.length; i++) {
  console.log(`  ${i + 1}. ${variantNames[ranked[i]]} (avg score: ${avg(results[ranked[i]].scores).toFixed(1)})`);
}

// Write results JSON
const outPath = path.join(baseDir, 'analysis_results.json');
const output = {};
for (const variant of variants) {
  const r = results[variant];
  if (!r) continue;
  output[variant] = {
    name: variantNames[variant],
    count: r.scores.length,
    avgScore: avg(r.scores),
    avgDelta: avg(r.deltas),
    medianDelta: median(r.deltas),
    stddev: stddev(r.scores),
    top50AvgDelta: avg(r.top50Deltas),
    bottom50AvgDelta: avg(r.bottom50Deltas),
  };
}
fs.writeFileSync(outPath, JSON.stringify(output, null, 2));
console.log(`\nFull results written to: ${outPath}`);
