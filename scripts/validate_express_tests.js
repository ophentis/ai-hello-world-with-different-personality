const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { walkPersonalities } = require('./lib/walk');

const baseDir = path.resolve(__dirname, '..', 'experiments', 'express-tests');
const testsDir = path.join(baseDir, 'tests');
const personalitiesDir = path.resolve(__dirname, '..', 'personalities');

const entries = walkPersonalities(personalitiesDir).filter(e => e.num !== '000');

const results = [];
let totalPassed = 0;
let totalFailed = 0;
let totalErrors = 0;
let missing = 0;

for (const entry of entries) {
  const testFile = path.join(testsDir, entry.category, entry.file.replace('.js', '.test.js'));
  if (!fs.existsSync(testFile)) {
    missing++;
    results.push({ num: entry.num, name: entry.name, category: entry.category, status: 'missing' });
    continue;
  }

  try {
    const output = execSync(
      `npx jest "${testFile}" --json --no-coverage 2>/dev/null`,
      { cwd: baseDir, timeout: 30000 }
    ).toString();

    const json = JSON.parse(output);
    const suite = json.testResults[0];
    const assertions = suite.assertionResults || [];
    const numPassed = assertions.filter(a => a.status === 'passed').length;
    const numFailed = assertions.filter(a => a.status === 'failed').length;
    const numTotal = assertions.length;

    totalPassed++;
    results.push({
      num: entry.num, name: entry.name, category: entry.category,
      status: 'ran',
      testsPassed: numPassed,
      testsFailed: numFailed,
      testsTotal: numTotal,
      duration: suite.perfStats ? suite.perfStats.end - suite.perfStats.start : 0,
    });
  } catch (e) {
    const stdout = e.stdout ? e.stdout.toString() : '';
    try {
      const json = JSON.parse(stdout);
      const suite = json.testResults[0];
      const assertions = suite.assertionResults || [];
      const numPassed = assertions.filter(a => a.status === 'passed').length;
      const numFailed = assertions.filter(a => a.status === 'failed').length;
      const numTotal = assertions.length;

      if (numTotal > 0) {
        totalFailed++;
        results.push({
          num: entry.num, name: entry.name, category: entry.category,
          status: 'partial',
          testsPassed: numPassed,
          testsFailed: numFailed,
          testsTotal: numTotal,
        });
      } else {
        totalErrors++;
        results.push({
          num: entry.num, name: entry.name, category: entry.category,
          status: 'error',
          error: suite.message ? suite.message.split('\n')[0] : 'Unknown error',
        });
      }
    } catch {
      totalErrors++;
      const stderr = e.stderr ? e.stderr.toString().split('\n')[0] : e.message.split('\n')[0];
      results.push({
        num: entry.num, name: entry.name, category: entry.category,
        status: 'error',
        error: stderr,
      });
    }
  }
}

const total = results.length;
const ran = results.filter(r => r.status === 'ran' || r.status === 'partial');
const avgTests = ran.length > 0 ? (ran.reduce((s, r) => s + r.testsTotal, 0) / ran.length).toFixed(1) : 0;
const avgPassed = ran.length > 0 ? (ran.reduce((s, r) => s + r.testsPassed, 0) / ran.length).toFixed(1) : 0;

console.log(`\n=== Express Test Validation Results ===`);
console.log(`Total: ${total} | Ran: ${ran.length} | Errors: ${totalErrors} | Missing: ${missing}`);
console.log(`Avg tests per file: ${avgTests} | Avg passed: ${avgPassed}`);

// Per-category
console.log(`\n--- Per Category ---`);
const categories = [...new Set(results.map(r => r.category))].sort();
for (const cat of categories) {
  const catResults = results.filter(r => r.category === cat && (r.status === 'ran' || r.status === 'partial'));
  if (catResults.length > 0) {
    const catAvg = (catResults.reduce((s, r) => s + r.testsTotal, 0) / catResults.length).toFixed(1);
    const catPassRate = (catResults.reduce((s, r) => s + r.testsPassed, 0) / catResults.reduce((s, r) => s + r.testsTotal, 0) * 100).toFixed(1);
    console.log(`  ${cat}: ${catResults.length} ran, avg ${catAvg} tests, ${catPassRate}% pass rate`);
  }
}

const outPath = path.join(baseDir, 'validation_results.json');
fs.writeFileSync(outPath, JSON.stringify({ summary: { total, ran: ran.length, errors: totalErrors, missing, avgTests, avgPassed }, results }, null, 2));
console.log(`\nFull results written to: ${outPath}`);
