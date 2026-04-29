const fs = require('fs');
const path = require('path');
const { avg, stddev, median } = require('./lib/stats');

const expDir = path.resolve(__dirname, '..', 'experiments');
const resultsDir = path.resolve(__dirname, '..', 'results');

const algoPath = path.join(expDir, 'algorithms', 'validation_results.json');
const expressPath = path.join(expDir, 'express-tests', 'validation_results.json');
const constrainedPath = path.join(expDir, 'constrained', 'analysis_results.json');

console.log('=== CROSS-EXPERIMENT ANALYSIS ===\n');

let algoData, expressData, constrainedData;

if (fs.existsSync(algoPath)) {
  algoData = JSON.parse(fs.readFileSync(algoPath, 'utf8'));
} else {
  console.log('Algorithm results not found — run validate_algorithms.js first');
}

if (fs.existsSync(expressPath)) {
  expressData = JSON.parse(fs.readFileSync(expressPath, 'utf8'));
} else {
  console.log('Express test results not found — run validate_express_tests.js first');
}

if (fs.existsSync(constrainedPath)) {
  constrainedData = JSON.parse(fs.readFileSync(constrainedPath, 'utf8'));
} else {
  console.log('Constrained results not found — run analyze_constrained.js first');
}

// Correlation: Algorithm correctness vs Express test quality
if (algoData && expressData) {
  console.log('--- Algorithm Correctness vs Test Quality ---');

  const algoScores = {};
  for (const r of algoData.results.filter(r => r.status !== 'missing')) {
    const key = r.num;
    if (!algoScores[key]) algoScores[key] = { passed: 0, total: 0, name: r.name, category: r.category };
    algoScores[key].total++;
    if (r.status === 'passed') algoScores[key].passed++;
  }

  const expressScores = {};
  for (const r of expressData.results.filter(r => r.status === 'ran' || r.status === 'partial')) {
    expressScores[r.num] = { testsPassed: r.testsPassed, testsTotal: r.testsTotal, name: r.name };
  }

  const both = Object.keys(algoScores).filter(k => expressScores[k]);
  if (both.length > 0) {
    const perfect3 = both.filter(k => algoScores[k].passed === 3);
    const imperfect = both.filter(k => algoScores[k].passed < 3);

    const perfectTestAvg = avg(perfect3.map(k => expressScores[k].testsPassed));
    const imperfectTestAvg = imperfect.length > 0 ? avg(imperfect.map(k => expressScores[k].testsPassed)) : 0;

    console.log(`  Personalities with both algo + express data: ${both.length}`);
    console.log(`  3/3 algo correct (${perfect3.length}): avg ${perfectTestAvg.toFixed(1)} tests passed`);
    console.log(`  <3/3 algo correct (${imperfect.length}): avg ${imperfectTestAvg.toFixed(1)} tests passed`);
    console.log(`  Correlation: ${perfectTestAvg > imperfectTestAvg ? 'POSITIVE' : 'WEAK/NEGATIVE'} — correct algorithms → better tests`);
  }
}

// Category-level performance across experiments
if (algoData) {
  console.log('\n--- Universal Category Ranking (Algorithm Correctness) ---');
  const catScores = {};
  for (const r of algoData.results.filter(r => r.status !== 'missing')) {
    if (!catScores[r.category]) catScores[r.category] = { passed: 0, total: 0 };
    catScores[r.category].total++;
    if (r.status === 'passed') catScores[r.category].passed++;
  }

  const ranked = Object.entries(catScores)
    .map(([cat, s]) => ({ cat, rate: s.passed / s.total }))
    .sort((a, b) => b.rate - a.rate);

  for (let i = 0; i < ranked.length; i++) {
    console.log(`  ${(i+1).toString().padStart(2)}. ${ranked[i].cat}: ${(ranked[i].rate*100).toFixed(1)}%`);
  }
}

// Universal personality ranking
if (algoData && expressData) {
  console.log('\n--- Top 20 Most Versatile Personalities ---');
  const scores = {};

  for (const r of algoData.results.filter(r => r.status !== 'missing')) {
    if (!scores[r.num]) scores[r.num] = { name: r.name, category: r.category, algoScore: 0, algoTotal: 0 };
    scores[r.num].algoTotal++;
    if (r.status === 'passed') scores[r.num].algoScore++;
  }

  for (const r of expressData.results.filter(r => r.status === 'ran' || r.status === 'partial')) {
    if (!scores[r.num]) scores[r.num] = { name: r.name, category: r.category, algoScore: 0, algoTotal: 0 };
    scores[r.num].expressTests = r.testsPassed;
    scores[r.num].expressTotal = r.testsTotal;
  }

  const versatile = Object.entries(scores)
    .filter(([, v]) => v.algoTotal > 0 && v.expressTests !== undefined)
    .map(([num, v]) => ({
      num, ...v,
      algoRate: v.algoScore / v.algoTotal,
      expressRate: v.expressTotal > 0 ? v.expressTests / v.expressTotal : 0,
      composite: (v.algoScore / v.algoTotal) * 0.5 + (v.expressTotal > 0 ? v.expressTests / v.expressTotal : 0) * 0.5,
    }))
    .sort((a, b) => b.composite - a.composite);

  for (const p of versatile.slice(0, 20)) {
    console.log(`  ${p.num} ${p.name} (${p.category}): algo=${(p.algoRate*100).toFixed(0)}% tests=${p.expressTests}/${p.expressTotal} composite=${(p.composite*100).toFixed(0)}%`);
  }
}

console.log('\n=== End Cross-Experiment Analysis ===');
