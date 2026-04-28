const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..');
const personalitiesDir = path.join(baseDir, 'personalities');

const files = [];
for (const sub of fs.readdirSync(personalitiesDir)) {
  const subPath = path.join(personalitiesDir, sub);
  if (fs.statSync(subPath).isDirectory()) {
    for (const f of fs.readdirSync(subPath)) {
      if (f.match(/^\d{3}_.*\.js$/)) files.push({ file: f, dir: subPath });
    }
  } else if (sub.match(/^\d{3}_.*\.js$/)) {
    files.push({ file: sub, dir: personalitiesDir });
  }
}
files.sort((a, b) => a.file.localeCompare(b.file));

const results = [];

for (const { file, dir } of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const lines = content.split('\n');
  const nonEmptyLines = lines.filter(l => l.trim().length > 0);
  const commentLines = lines.filter(l => l.trim().startsWith('//') || l.trim().startsWith('/*') || l.trim().startsWith('*'));
  const codeLines = nonEmptyLines.filter(l => !l.trim().startsWith('//') && !l.trim().startsWith('/*') && !l.trim().startsWith('*'));

  const hasClass = /\bclass\b/.test(content);
  const hasFunction = /\bfunction\b/.test(content);
  const hasArrowFn = /=>/.test(content);
  const hasAsync = /\basync\b/.test(content);
  const hasPromise = /\bPromise\b/.test(content);
  const hasTryCatch = /\btry\b/.test(content) && /\bcatch\b/.test(content);
  const hasLoop = /\b(for|while)\b/.test(content);
  const hasConditional = /\b(if|switch|ternary|\?.*:)/.test(content);
  const hasTernary = /\?[^?]*:/.test(content);
  const consoleLogCount = (content.match(/console\.log/g) || []).length;
  const hasIIFE = /\(\s*(function|\(\)|\(\w+\))\s*(=>)?\s*\{/.test(content) || /\(\s*\(\)\s*=>/.test(content);
  const hasArray = /\[/.test(content);
  const hasObject = /\{[^}]*:/.test(content);
  const hasTemplate = /`[^`]*\$\{/.test(content);
  const hasConst = /\bconst\b/.test(content);
  const hasLet = /\blet\b/.test(content);
  const hasVar = /\bvar\b/.test(content);

  const totalChars = content.length;
  const commentChars = commentLines.reduce((sum, l) => sum + l.length, 0);
  const commentRatio = totalChars > 0 ? commentChars / totalChars : 0;

  const words = content.match(/\b[a-zA-Z]+\b/g) || [];
  const uniqueWords = new Set(words.map(w => w.toLowerCase()));
  const vocabularyRichness = words.length > 0 ? uniqueWords.size / words.length : 0;

  const avgLineLength = nonEmptyLines.length > 0
    ? nonEmptyLines.reduce((sum, l) => sum + l.length, 0) / nonEmptyLines.length
    : 0;

  const exclamations = (content.match(/!/g) || []).length;
  const questions = (content.match(/\?/g) || []).length;
  const allCapsWords = (content.match(/\b[A-Z]{2,}\b/g) || []).filter(w => !['JS','AI','OK','ID','IO','IF'].includes(w)).length;
  const ellipsis = (content.match(/\.\.\./g) || []).length;

  const oneLiner = codeLines.length <= 2 && commentLines.length <= 1;

  const complexityScore = [hasClass, hasFunction, hasArrowFn, hasAsync, hasPromise, hasTryCatch, hasLoop, hasConditional, hasIIFE, hasArray, hasObject, hasTemplate].filter(Boolean).length;

  const num = file.match(/^(\d{3})/)[1];
  const name = file.replace(/^\d{3}_/, '').replace('.js', '').replace(/_/g, ' ');

  results.push({
    num, name, file, fullPath: path.join(dir, file),
    totalLines: lines.length,
    nonEmptyLines: nonEmptyLines.length,
    commentLines: commentLines.length,
    codeLines: codeLines.length,
    totalChars,
    commentRatio: Math.round(commentRatio * 100),
    vocabularyRichness: Math.round(vocabularyRichness * 100),
    avgLineLength: Math.round(avgLineLength),
    consoleLogCount,
    complexityScore,
    hasClass, hasFunction, hasArrowFn, hasAsync, hasLoop, hasConditional, hasTryCatch, hasTemplate,
    exclamations, questions, allCapsWords, ellipsis,
    oneLiner,
  });
}

// === STATISTICS ===
const avg = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
const stddev = (arr) => {
  const m = avg(arr);
  return Math.sqrt(arr.reduce((s, v) => s + (v - m) ** 2, 0) / arr.length);
};
const median = (arr) => {
  const s = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
};

console.log('='.repeat(80));
console.log('HELLO WORLD PERSONALITY EXPERIMENT — STATISTICAL ANALYSIS');
console.log('='.repeat(80));
console.log(`Total files analyzed: ${results.length}\n`);

// Overall stats
const metrics = {
  'Total Lines': results.map(r => r.totalLines),
  'Non-Empty Lines': results.map(r => r.nonEmptyLines),
  'Comment Lines': results.map(r => r.commentLines),
  'Code Lines': results.map(r => r.codeLines),
  'Total Characters': results.map(r => r.totalChars),
  'Comment Ratio (%)': results.map(r => r.commentRatio),
  'Vocabulary Richness (%)': results.map(r => r.vocabularyRichness),
  'Avg Line Length': results.map(r => r.avgLineLength),
  'Console.log Count': results.map(r => r.consoleLogCount),
  'Complexity Score (0-12)': results.map(r => r.complexityScore),
  'Exclamation Marks': results.map(r => r.exclamations),
  'ALL CAPS Words': results.map(r => r.allCapsWords),
};

console.log('--- OVERALL STATISTICS ---\n');
console.log(String('Metric').padEnd(28) + String('Mean').padStart(8) + String('Median').padStart(8) + String('StdDev').padStart(8) + String('Min').padStart(8) + String('Max').padStart(8));
console.log('-'.repeat(68));
for (const [name, vals] of Object.entries(metrics)) {
  console.log(
    name.padEnd(28) +
    avg(vals).toFixed(1).padStart(8) +
    median(vals).toFixed(1).padStart(8) +
    stddev(vals).toFixed(1).padStart(8) +
    Math.min(...vals).toFixed(0).padStart(8) +
    Math.max(...vals).toFixed(0).padStart(8)
  );
}

// Feature usage
const total = results.length;
console.log(`\n--- FEATURE USAGE (% of ${total} files) ---\n`);
const features = [
  ['class', results.filter(r => r.hasClass).length],
  ['function keyword', results.filter(r => r.hasFunction).length],
  ['arrow function', results.filter(r => r.hasArrowFn).length],
  ['async/await', results.filter(r => r.hasAsync).length],
  ['loops (for/while)', results.filter(r => r.hasLoop).length],
  ['conditionals (if/switch)', results.filter(r => r.hasConditional).length],
  ['try/catch', results.filter(r => r.hasTryCatch).length],
  ['template literals', results.filter(r => r.hasTemplate).length],
];
for (const [name, count] of features.sort((a, b) => b[1] - a[1])) {
  const pct = ((count / total) * 100).toFixed(0);
  const bar = '█'.repeat(Math.round(count / 4));
  console.log(`  ${name.padEnd(24)} ${String(count).padStart(3)}/${total} (${pct.padStart(2)}%) ${bar}`);
}

// EXTREMES
console.log('\n--- MOST EXTREME PERSONALITIES ---\n');

const extremes = [
  { label: 'SHORTEST (fewest lines)', sorted: [...results].sort((a, b) => a.totalLines - b.totalLines), field: 'totalLines', top: 5 },
  { label: 'LONGEST (most lines)', sorted: [...results].sort((a, b) => b.totalLines - a.totalLines), field: 'totalLines', top: 5 },
  { label: 'MOST COMMENTS (highest comment ratio)', sorted: [...results].sort((a, b) => b.commentRatio - a.commentRatio), field: 'commentRatio', suffix: '%', top: 5 },
  { label: 'LEAST COMMENTS (lowest comment ratio)', sorted: [...results].sort((a, b) => a.commentRatio - b.commentRatio), field: 'commentRatio', suffix: '%', top: 5 },
  { label: 'MOST COMPLEX (highest complexity score)', sorted: [...results].sort((a, b) => b.complexityScore - a.complexityScore), field: 'complexityScore', top: 5 },
  { label: 'SIMPLEST (lowest complexity score)', sorted: [...results].sort((a, b) => a.complexityScore - b.complexityScore), field: 'complexityScore', top: 5 },
  { label: 'MOST VERBOSE (most characters)', sorted: [...results].sort((a, b) => b.totalChars - a.totalChars), field: 'totalChars', top: 5 },
  { label: 'MOST CONCISE (fewest characters)', sorted: [...results].sort((a, b) => a.totalChars - b.totalChars), field: 'totalChars', top: 5 },
  { label: 'MOST EXCLAMATIONS (!)', sorted: [...results].sort((a, b) => b.exclamations - a.exclamations), field: 'exclamations', top: 5 },
  { label: 'MOST ALL-CAPS WORDS', sorted: [...results].sort((a, b) => b.allCapsWords - a.allCapsWords), field: 'allCapsWords', top: 5 },
  { label: 'MOST console.log CALLS', sorted: [...results].sort((a, b) => b.consoleLogCount - a.consoleLogCount), field: 'consoleLogCount', top: 5 },
  { label: 'RICHEST VOCABULARY', sorted: [...results].sort((a, b) => b.vocabularyRichness - a.vocabularyRichness), field: 'vocabularyRichness', suffix: '%', top: 5 },
];

for (const e of extremes) {
  console.log(`  ${e.label}:`);
  for (let i = 0; i < e.top; i++) {
    const r = e.sorted[i];
    console.log(`    ${i + 1}. ${r.name.padEnd(30)} = ${r[e.field]}${e.suffix || ''}`);
  }
  console.log('');
}

// BIGGEST DEVIATIONS from the mean (z-scores across all metrics)
console.log('--- BIGGEST OVERALL DEVIATIONS (composite z-score) ---\n');
const zMetrics = ['totalLines', 'commentRatio', 'complexityScore', 'totalChars', 'exclamations', 'allCapsWords', 'consoleLogCount', 'vocabularyRichness'];
const means = {};
const stds = {};
for (const m of zMetrics) {
  const vals = results.map(r => r[m]);
  means[m] = avg(vals);
  stds[m] = stddev(vals) || 1;
}

for (const r of results) {
  r.compositeZ = 0;
  for (const m of zMetrics) {
    r.compositeZ += Math.abs((r[m] - means[m]) / stds[m]);
  }
}

const byDeviation = [...results].sort((a, b) => b.compositeZ - a.compositeZ);
console.log('  Top 20 most "different" personalities (highest combined z-score):');
console.log('  ' + 'Rank'.padEnd(6) + 'Personality'.padEnd(32) + 'Z-Score'.padStart(8) + '  Key deviations');
console.log('  ' + '-'.repeat(80));
for (let i = 0; i < 20; i++) {
  const r = byDeviation[i];
  const deviations = [];
  for (const m of zMetrics) {
    const z = (r[m] - means[m]) / stds[m];
    if (Math.abs(z) > 1.5) {
      const dir = z > 0 ? '↑' : '↓';
      deviations.push(`${m}${dir}${Math.abs(z).toFixed(1)}`);
    }
  }
  console.log(`  ${String(i + 1).padEnd(6)}${r.name.padEnd(32)}${r.compositeZ.toFixed(2).padStart(8)}  ${deviations.join(', ')}`);
}

console.log('\n  Bottom 5 most "standard" personalities (lowest combined z-score):');
for (let i = results.length - 1; i >= results.length - 5; i--) {
  const r = byDeviation[i];
  console.log(`  ${String(results.length - i).padEnd(6)}${r.name.padEnd(32)}${r.compositeZ.toFixed(2).padStart(8)}`);
}

// Category analysis
console.log('\n--- CATEGORY COMPARISON ---\n');
const categories = {
  'Anime': results.filter(r => parseInt(r.num) <= 20),
  'Tech CEOs': results.filter(r => parseInt(r.num) >= 21 && parseInt(r.num) <= 25),
  'Celebrities': results.filter(r => parseInt(r.num) >= 26 && parseInt(r.num) <= 30),
  'Scientists/Thinkers': results.filter(r => parseInt(r.num) >= 36 && parseInt(r.num) <= 40),
  'Literary Authors': results.filter(r => parseInt(r.num) >= 41 && parseInt(r.num) <= 45),
  'Superheroes': results.filter(r => parseInt(r.num) >= 46 && parseInt(r.num) <= 55),
  'Villains': results.filter(r => [56,57,64,76,174,190].map(String).includes(r.num)),
  'Sitcom Characters': results.filter(r => parseInt(r.num) >= 81 && parseInt(r.num) <= 90),
  'Video Game Characters': results.filter(r => parseInt(r.num) >= 101 && parseInt(r.num) <= 120),
  'Historical Figures': results.filter(r => parseInt(r.num) >= 131 && parseInt(r.num) <= 150),
  'Musicians': results.filter(r => parseInt(r.num) >= 151 && parseInt(r.num) <= 160),
  'Action Heroes': results.filter(r => parseInt(r.num) >= 161 && parseInt(r.num) <= 170),
  'AIs/Robots': results.filter(r => [111,112,167,183,184,185,79].map(String).includes(r.num)),
  'Childrens Characters': results.filter(r => parseInt(r.num) >= 194 && parseInt(r.num) <= 200),
  'Professionals': results.filter(r => parseInt(r.num) >= 501 && parseInt(r.num) <= 601),
  'Software Engineers': results.filter(r => parseInt(r.num) >= 602 && parseInt(r.num) <= 651),
};

console.log(String('Category').padEnd(24) + String('AvgLines').padStart(9) + String('AvgChars').padStart(9) + String('AvgCmplx').padStart(9) + String('Avg!').padStart(6) + String('AvgCmt%').padStart(8));
console.log('-'.repeat(65));
for (const [cat, items] of Object.entries(categories)) {
  if (items.length === 0) continue;
  console.log(
    cat.padEnd(24) +
    avg(items.map(r => r.totalLines)).toFixed(1).padStart(9) +
    avg(items.map(r => r.totalChars)).toFixed(0).padStart(9) +
    avg(items.map(r => r.complexityScore)).toFixed(1).padStart(9) +
    avg(items.map(r => r.exclamations)).toFixed(1).padStart(6) +
    (avg(items.map(r => r.commentRatio)).toFixed(0) + '%').padStart(8)
  );
}

// Run validity check
console.log('\n--- RUNTIME VALIDITY CHECK ---\n');
let passed = 0, failed = 0, errors = [];
for (const r of results) {
  try {
    const { execSync } = require('child_process');
    const output = execSync(`node "${r.fullPath}" 2>&1`, { timeout: 5000 }).toString();
    if (output.length > 0) {
      passed++;
    } else {
      failed++;
      errors.push({ name: r.name, error: 'No output produced' });
    }
  } catch (e) {
    failed++;
    const msg = e.stderr ? e.stderr.toString().split('\n')[0] : e.message.split('\n')[0];
    errors.push({ name: r.name, error: msg });
  }
}
console.log(`  Passed (produced output): ${passed}/${total}`);
console.log(`  Failed: ${failed}/${total}`);
if (errors.length > 0) {
  console.log('\n  Failures:');
  for (const e of errors) {
    console.log(`    - ${e.name}: ${e.error.substring(0, 80)}`);
  }
}

console.log('\n' + '='.repeat(80));
console.log('END OF ANALYSIS');
console.log('='.repeat(80));
