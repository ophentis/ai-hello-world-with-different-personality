const fs = require('fs');
const path = require('path');
const { walkPersonalities } = require('./lib/walk');
const { runFile, validateOutput } = require('./lib/runner');

const baseDir = path.resolve(__dirname, '..', 'experiments', 'algorithms');
const expectedDir = path.join(baseDir, 'expected');
const personalitiesDir = path.resolve(__dirname, '..', 'personalities');

const algorithms = ['fizzbuzz', 'sort', 'fibonacci'];
const expected = {};
for (const algo of algorithms) {
  expected[algo] = fs.readFileSync(path.join(expectedDir, `${algo}.txt`), 'utf8');
}

const entries = walkPersonalities(personalitiesDir).filter(e => e.num !== '000');

const results = [];
let passed = 0;
let failed = 0;
let missing = 0;
let errors = 0;

for (const entry of entries) {
  for (const algo of algorithms) {
    const filePath = path.join(baseDir, algo, entry.category, entry.file);
    if (!fs.existsSync(filePath)) {
      missing++;
      results.push({ num: entry.num, name: entry.name, algo, category: entry.category, status: 'missing' });
      continue;
    }

    const run = runFile(filePath);
    if (!run.success) {
      errors++;
      results.push({ num: entry.num, name: entry.name, algo, category: entry.category, status: 'error', errorType: run.errorType, error: run.error });
      continue;
    }

    const validation = validateOutput(run.output, expected[algo]);
    if (validation.passed) {
      passed++;
      results.push({ num: entry.num, name: entry.name, algo, category: entry.category, status: 'passed' });
    } else {
      failed++;
      results.push({ num: entry.num, name: entry.name, algo, category: entry.category, status: 'failed', match: validation.match });
    }
  }
}

const total = passed + failed + missing + errors;
console.log(`\n=== Algorithm Validation Results ===`);
console.log(`Total: ${total} | Passed: ${passed} | Failed: ${failed} | Errors: ${errors} | Missing: ${missing}`);
console.log(`Pass rate: ${((passed / (total - missing)) * 100).toFixed(1)}% (excluding missing)`);
console.log(`Coverage: ${((total - missing) / total * 100).toFixed(1)}% (${total - missing}/${total} files exist)`);

// Per-algorithm breakdown
console.log(`\n--- Per Algorithm ---`);
for (const algo of algorithms) {
  const algoResults = results.filter(r => r.algo === algo);
  const ap = algoResults.filter(r => r.status === 'passed').length;
  const af = algoResults.filter(r => r.status === 'failed').length;
  const ae = algoResults.filter(r => r.status === 'error').length;
  const am = algoResults.filter(r => r.status === 'missing').length;
  const existing = algoResults.length - am;
  console.log(`  ${algo}: ${ap}/${existing} passed (${((ap/existing)*100).toFixed(1)}%), ${af} failed, ${ae} errors, ${am} missing`);
}

// Per-category breakdown
console.log(`\n--- Per Category ---`);
const categories = [...new Set(results.map(r => r.category))].sort();
for (const cat of categories) {
  const catResults = results.filter(r => r.category === cat);
  const cp = catResults.filter(r => r.status === 'passed').length;
  const ct = catResults.length;
  const cm = catResults.filter(r => r.status === 'missing').length;
  const existing = ct - cm;
  if (existing > 0) {
    console.log(`  ${cat}: ${cp}/${existing} passed (${((cp/existing)*100).toFixed(1)}%)`);
  }
}

// Error classification
const failedResults = results.filter(r => r.status === 'failed');
if (failedResults.length > 0) {
  console.log(`\n--- Failure Types ---`);
  const matchTypes = {};
  for (const r of failedResults) {
    matchTypes[r.match] = (matchTypes[r.match] || 0) + 1;
  }
  for (const [type, count] of Object.entries(matchTypes).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${type}: ${count}`);
  }
}

const errorResults = results.filter(r => r.status === 'error');
if (errorResults.length > 0) {
  console.log(`\n--- Error Types ---`);
  const errorTypes = {};
  for (const r of errorResults) {
    errorTypes[r.errorType] = (errorTypes[r.errorType] || 0) + 1;
  }
  for (const [type, count] of Object.entries(errorTypes).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${type}: ${count}`);
  }
  console.log(`\n--- First 10 Errors ---`);
  for (const r of errorResults.slice(0, 10)) {
    console.log(`  ${r.num}_${r.name} (${r.algo}): ${r.error}`);
  }
}

// Show first 10 failures with details
if (failedResults.length > 0) {
  console.log(`\n--- First 10 Failures ---`);
  for (const r of failedResults.slice(0, 10)) {
    console.log(`  ${r.num}_${r.name} (${r.algo}): ${r.match}`);
  }
}

// Write full results to JSON
const outPath = path.resolve(__dirname, '..', 'experiments', 'algorithms', 'validation_results.json');
fs.writeFileSync(outPath, JSON.stringify({ summary: { total, passed, failed, errors, missing }, results }, null, 2));
console.log(`\nFull results written to: ${outPath}`);
