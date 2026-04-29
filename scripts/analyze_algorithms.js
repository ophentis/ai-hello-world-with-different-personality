const fs = require('fs');
const path = require('path');
const { analyzeFile, computeDevFitness } = require('./lib/scoring');
const { avg, stddev, median } = require('./lib/stats');

const baseDir = path.resolve(__dirname, '..', 'experiments', 'algorithms');
const resultsPath = path.join(baseDir, 'validation_results.json');

if (!fs.existsSync(resultsPath)) {
  console.error('Run validate_algorithms.js first');
  process.exit(1);
}

const { results } = JSON.parse(fs.readFileSync(resultsPath, 'utf8'));
const algorithms = ['fizzbuzz', 'sort', 'fibonacci'];

// Correctness analysis
const existing = results.filter(r => r.status !== 'missing');
const passed = results.filter(r => r.status === 'passed');
const failed = results.filter(r => r.status === 'failed');
const errors = results.filter(r => r.status === 'error');

console.log('=== ALGORITHM CORRECTNESS ANALYSIS ===\n');
console.log(`Overall: ${passed.length}/${existing.length} correct (${((passed.length/existing.length)*100).toFixed(1)}%)\n`);

// Per algorithm
console.log('--- Per Algorithm ---');
for (const algo of algorithms) {
  const algoExisting = existing.filter(r => r.algo === algo);
  const algoPassed = passed.filter(r => r.algo === algo);
  console.log(`  ${algo}: ${algoPassed.length}/${algoExisting.length} (${((algoPassed.length/algoExisting.length)*100).toFixed(1)}%)`);
}

// Per category
console.log('\n--- Per Category ---');
const categories = [...new Set(existing.map(r => r.category))].sort();
for (const cat of categories) {
  const catExisting = existing.filter(r => r.category === cat);
  const catPassed = passed.filter(r => r.category === cat);
  const rate = ((catPassed.length/catExisting.length)*100).toFixed(1);
  console.log(`  ${cat}: ${catPassed.length}/${catExisting.length} (${rate}%)`);
}

// Failure pattern analysis
console.log('\n--- Failure Patterns ---');
const matchTypes = {};
for (const r of failed) {
  matchTypes[r.match] = (matchTypes[r.match] || 0) + 1;
}
for (const [type, count] of Object.entries(matchTypes).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${type}: ${count} (${((count/failed.length)*100).toFixed(1)}%)`);
}

// Code style analysis of correct solutions
console.log('\n--- Code Style Analysis (correct solutions only) ---');
const styleMetrics = { totalLines: [], commentRatio: [], complexityScore: [], modernJsScore: [], avgLineLength: [] };

for (const r of passed) {
  const filePath = path.join(baseDir, r.algo, r.category, `${r.num}_${r.name.replace(/ /g, '_')}.js`);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const metrics = analyzeFile(content);
    styleMetrics.totalLines.push(metrics.totalLines);
    styleMetrics.commentRatio.push(metrics.commentRatio);
    styleMetrics.complexityScore.push(metrics.complexityScore);
    styleMetrics.modernJsScore.push(metrics.modernJsScore);
    styleMetrics.avgLineLength.push(metrics.avgLineLength);
  }
}

for (const [metric, values] of Object.entries(styleMetrics)) {
  if (values.length > 0) {
    console.log(`  ${metric}: avg=${avg(values).toFixed(1)}, median=${median(values).toFixed(1)}, stddev=${stddev(values).toFixed(1)}`);
  }
}

// Per-personality correctness (across all 3 algorithms)
console.log('\n--- Personalities with < 3/3 Correct ---');
const personalityScores = {};
for (const r of existing) {
  const key = `${r.num}_${r.name}`;
  if (!personalityScores[key]) personalityScores[key] = { passed: 0, total: 0, category: r.category };
  personalityScores[key].total++;
  if (r.status === 'passed') personalityScores[key].passed++;
}

const imperfect = Object.entries(personalityScores)
  .filter(([, v]) => v.passed < v.total)
  .sort((a, b) => a[1].passed - b[1].passed);

for (const [name, scores] of imperfect.slice(0, 30)) {
  console.log(`  ${name} (${scores.category}): ${scores.passed}/${scores.total}`);
}
if (imperfect.length > 30) console.log(`  ... and ${imperfect.length - 30} more`);

console.log(`\nPerfect score (3/3): ${Object.values(personalityScores).filter(v => v.passed === v.total).length}/${Object.keys(personalityScores).length} personalities`);
