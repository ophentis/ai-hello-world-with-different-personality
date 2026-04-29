const fs = require('fs');
const path = require('path');
const { avg, stddev, median } = require('./lib/stats');

const baseDir = path.resolve(__dirname, '..', 'experiments', 'express-tests');
const resultsPath = path.join(baseDir, 'validation_results.json');

if (!fs.existsSync(resultsPath)) {
  console.error('Run validate_express_tests.js first');
  process.exit(1);
}

const { summary, results } = JSON.parse(fs.readFileSync(resultsPath, 'utf8'));

const ran = results.filter(r => r.status === 'ran' || r.status === 'partial');
const errors = results.filter(r => r.status === 'error');
const missing = results.filter(r => r.status === 'missing');

console.log('=== EXPRESS TEST QUALITY ANALYSIS ===\n');
console.log(`Total personalities: ${results.length}`);
console.log(`Tests ran: ${ran.length} | Errors: ${errors.length} | Missing: ${missing.length}\n`);

// Test count distribution
const testCounts = ran.map(r => r.testsTotal);
const passCounts = ran.map(r => r.testsPassed);
const failCounts = ran.map(r => r.testsFailed);

console.log('--- Test Count Distribution ---');
console.log(`  Tests per file: avg=${avg(testCounts).toFixed(1)}, median=${median(testCounts).toFixed(1)}, stddev=${stddev(testCounts).toFixed(1)}`);
console.log(`  Passed per file: avg=${avg(passCounts).toFixed(1)}, median=${median(passCounts).toFixed(1)}`);
console.log(`  Failed per file: avg=${avg(failCounts).toFixed(1)}, median=${median(failCounts).toFixed(1)}`);

const totalTests = testCounts.reduce((s, v) => s + v, 0);
const totalPassed = passCounts.reduce((s, v) => s + v, 0);
console.log(`  Total tests: ${totalTests} | Total passed: ${totalPassed} (${((totalPassed/totalTests)*100).toFixed(1)}%)`);

// Pass rate distribution
const passRates = ran.map(r => r.testsTotal > 0 ? r.testsPassed / r.testsTotal : 0);
const perfect = ran.filter(r => r.testsFailed === 0);
const partial = ran.filter(r => r.testsFailed > 0 && r.testsPassed > 0);
const allFail = ran.filter(r => r.testsPassed === 0);

console.log(`\n--- Pass Rate Distribution ---`);
console.log(`  100% pass: ${perfect.length} (${((perfect.length/ran.length)*100).toFixed(1)}%)`);
console.log(`  Partial pass: ${partial.length} (${((partial.length/ran.length)*100).toFixed(1)}%)`);
console.log(`  0% pass: ${allFail.length} (${((allFail.length/ran.length)*100).toFixed(1)}%)`);

// Per-category analysis
console.log('\n--- Per Category ---');
const categories = [...new Set(results.map(r => r.category))].sort();
const catStats = [];
for (const cat of categories) {
  const catRan = ran.filter(r => r.category === cat);
  if (catRan.length === 0) continue;
  const catTests = catRan.map(r => r.testsTotal);
  const catPassed = catRan.map(r => r.testsPassed);
  const catPassRate = catPassed.reduce((s, v) => s + v, 0) / catTests.reduce((s, v) => s + v, 0);
  const catAvgTests = avg(catTests);
  catStats.push({ cat, ran: catRan.length, avgTests: catAvgTests, passRate: catPassRate });
  console.log(`  ${cat}: ${catRan.length} ran, avg ${catAvgTests.toFixed(1)} tests, ${(catPassRate*100).toFixed(1)}% pass rate`);
}

// Rank categories by pass rate
console.log('\n--- Category Ranking (by pass rate) ---');
catStats.sort((a, b) => b.passRate - a.passRate);
for (let i = 0; i < catStats.length; i++) {
  const s = catStats[i];
  console.log(`  ${(i+1).toString().padStart(2)}. ${s.cat}: ${(s.passRate*100).toFixed(1)}% (${s.ran} files, avg ${s.avgTests.toFixed(1)} tests)`);
}

// Test count histogram
console.log('\n--- Test Count Histogram ---');
const histogram = {};
for (const count of testCounts) {
  histogram[count] = (histogram[count] || 0) + 1;
}
for (const [count, freq] of Object.entries(histogram).sort((a, b) => Number(a[0]) - Number(b[0]))) {
  const bar = '#'.repeat(Math.min(freq, 60));
  console.log(`  ${count.toString().padStart(3)} tests: ${bar} (${freq})`);
}

// Static analysis: endpoint coverage from test file contents
console.log('\n--- Endpoint Coverage (static analysis) ---');
const testsDir = path.join(baseDir, 'tests');
let coverageStats = { root: 0, health: 0, echo: 0, greet: 0, total: 0 };

for (const r of ran) {
  const testFile = path.join(testsDir, r.category, `${r.num}_${r.name.replace(/ /g, '_')}.test.js`);
  if (!fs.existsSync(testFile)) continue;
  const content = fs.readFileSync(testFile, 'utf8');
  coverageStats.total++;
  if (/\.get\(['"`]\/['"`]\)/.test(content)) coverageStats.root++;
  if (/\/health/.test(content)) coverageStats.health++;
  if (/\/echo/.test(content) || /\.post\(/.test(content)) coverageStats.echo++;
  if (/\/greet\//.test(content) || /greet\/:/.test(content)) coverageStats.greet++;
}

const total = coverageStats.total;
console.log(`  GET /         : ${coverageStats.root}/${total} (${((coverageStats.root/total)*100).toFixed(1)}%)`);
console.log(`  GET /health   : ${coverageStats.health}/${total} (${((coverageStats.health/total)*100).toFixed(1)}%)`);
console.log(`  POST /echo    : ${coverageStats.echo}/${total} (${((coverageStats.echo/total)*100).toFixed(1)}%)`);
console.log(`  GET /greet/:n : ${coverageStats.greet}/${total} (${((coverageStats.greet/total)*100).toFixed(1)}%)`);
const allFour = ran.filter(r => {
  const testFile = path.join(testsDir, r.category, `${r.num}_${r.name.replace(/ /g, '_')}.test.js`);
  if (!fs.existsSync(testFile)) return false;
  const content = fs.readFileSync(testFile, 'utf8');
  return /\.get\(['"`]\/['"`]\)/.test(content) && /\/health/.test(content) &&
    (/\/echo/.test(content) || /\.post\(/.test(content)) && (/\/greet\//.test(content) || /greet\/:/.test(content));
}).length;
console.log(`  All 4 endpoints: ${allFour}/${total} (${((allFour/total)*100).toFixed(1)}%)`);

// Worst performers (most test failures)
console.log('\n--- Top 20 Worst Performers (most test failures) ---');
const worstByFails = [...ran].filter(r => r.testsFailed > 0).sort((a, b) => b.testsFailed - a.testsFailed);
for (const r of worstByFails.slice(0, 20)) {
  console.log(`  ${r.num} ${r.name} (${r.category}): ${r.testsPassed}/${r.testsTotal} passed`);
}

// Error analysis
if (errors.length > 0) {
  console.log('\n--- Error Analysis ---');
  const errorTypes = {};
  for (const r of errors) {
    const key = r.error ? r.error.substring(0, 80) : 'unknown';
    errorTypes[key] = (errorTypes[key] || 0) + 1;
  }
  for (const [err, count] of Object.entries(errorTypes).sort((a, b) => b[1] - a[1]).slice(0, 10)) {
    console.log(`  ${count}x: ${err}`);
  }
}

console.log('\n=== End Express Test Analysis ===');
