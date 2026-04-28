const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const dir = '/tmp/hello-world-experiment';
const files = fs.readdirSync(dir)
  .filter(f => f.match(/^\d{3}_.*\.js$/) && !['analyze.js', 'compare_baseline.js'].includes(f))
  .sort();

// === ANALYZE EACH FILE ===
function analyze(file) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const lines = content.split('\n');
  const nonEmpty = lines.filter(l => l.trim().length > 0);
  const commentLines = lines.filter(l => l.trim().startsWith('//') || l.trim().startsWith('/*') || l.trim().startsWith('*'));
  const codeLines = nonEmpty.filter(l => !l.trim().startsWith('//') && !l.trim().startsWith('/*') && !l.trim().startsWith('*'));

  const hasClass = /\bclass\b/.test(content);
  const hasFunction = /\bfunction\b/.test(content);
  const hasArrowFn = /=>/.test(content);
  const hasAsync = /\basync\b/.test(content);
  const hasPromise = /\bPromise\b/.test(content);
  const hasTryCatch = /\btry\b/.test(content) && /\bcatch\b/.test(content);
  const hasLoop = /\b(for|while)\b/.test(content);
  const hasConditional = /\bif\b/.test(content);
  const hasTemplate = /`[^`]*\$\{/.test(content);
  const hasConst = /\bconst\b/.test(content);
  const hasLet = /\blet\b/.test(content);
  const hasVar = /\bvar\b/.test(content);
  const consoleLogCount = (content.match(/console\.log/g) || []).length;

  const totalChars = content.length;
  const commentChars = commentLines.reduce((sum, l) => sum + l.length, 0);
  const commentRatio = totalChars > 0 ? commentChars / totalChars : 0;

  const words = content.match(/\b[a-zA-Z]+\b/g) || [];
  const uniqueWords = new Set(words.map(w => w.toLowerCase()));
  const vocabularyRichness = words.length > 0 ? uniqueWords.size / words.length : 0;

  const avgLineLength = nonEmpty.length > 0
    ? nonEmpty.reduce((sum, l) => sum + l.length, 0) / nonEmpty.length : 0;

  const exclamations = (content.match(/!/g) || []).length;
  const allCapsWords = (content.match(/\b[A-Z]{2,}\b/g) || []).filter(w => !['JS','AI','OK','ID','IO','IF'].includes(w)).length;
  const ellipsis = (content.match(/\.\.\./g) || []).length;

  const complexityScore = [hasClass, hasFunction, hasArrowFn, hasAsync, hasPromise, hasTryCatch, hasLoop, hasConditional, hasTemplate].filter(Boolean).length;

  // Signal-to-noise: ratio of actual executable code to total content
  const signalToNoise = totalChars > 0 ? codeLines.join('').length / totalChars : 0;

  // Verbosity: chars per console.log (how much overhead per unit of output)
  const charsPerOutput = consoleLogCount > 0 ? totalChars / consoleLogCount : totalChars;

  // Modern JS score
  const modernJsScore = [hasConst, hasLet, hasArrowFn, hasTemplate, !hasVar].filter(Boolean).length;

  const num = file.match(/^(\d{3})/)[1];
  const name = file.replace(/^\d{3}_/, '').replace('.js', '').replace(/_/g, ' ');

  return {
    num, name, file,
    totalLines: lines.length,
    nonEmptyLines: nonEmpty.length,
    commentLines: commentLines.length,
    codeLines: codeLines.length,
    totalChars,
    commentRatio: Math.round(commentRatio * 100),
    vocabularyRichness: Math.round(vocabularyRichness * 100),
    avgLineLength: Math.round(avgLineLength),
    consoleLogCount,
    complexityScore,
    exclamations, allCapsWords, ellipsis,
    hasClass, hasFunction, hasArrowFn, hasAsync, hasLoop, hasConditional, hasTryCatch, hasTemplate,
    hasConst, hasLet, hasVar,
    signalToNoise: Math.round(signalToNoise * 100),
    charsPerOutput: Math.round(charsPerOutput),
    modernJsScore,
  };
}

const results = files.map(f => analyze(f));
const baseline = results.find(r => r.num === '000');
const personalities = results.filter(r => r.num !== '000');

// === BASELINE REPORT ===
console.log('='.repeat(90));
console.log('BASELINE COMPARISON: "No Personality" vs 500 Personalities');
console.log('='.repeat(90));

console.log('\n--- BASELINE (000_baseline.js) ---\n');
console.log(`  Lines: ${baseline.totalLines}  |  Characters: ${baseline.totalChars}  |  Comments: ${baseline.commentLines}`);
console.log(`  Code lines: ${baseline.codeLines}  |  Complexity: ${baseline.complexityScore}  |  Signal-to-noise: ${baseline.signalToNoise}%`);
console.log(`  console.log calls: ${baseline.consoleLogCount}  |  Chars per output: ${baseline.charsPerOutput}`);
console.log(`  Exclamations: ${baseline.exclamations}  |  ALL CAPS: ${baseline.allCapsWords}  |  Comment ratio: ${baseline.commentRatio}%`);

// === HOW PERSONALITIES DEVIATE FROM BASELINE ===
console.log('\n--- HOW PERSONALITIES DEVIATE FROM BASELINE ---\n');

const avg = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
const pct = (v, b) => b === 0 ? 'N/A' : ((v / b - 1) * 100).toFixed(0) + '%';

const metrics = [
  { label: 'Total Lines', key: 'totalLines' },
  { label: 'Total Characters', key: 'totalChars' },
  { label: 'Code Lines', key: 'codeLines' },
  { label: 'Comment Lines', key: 'commentLines' },
  { label: 'Comment Ratio (%)', key: 'commentRatio' },
  { label: 'Complexity Score', key: 'complexityScore' },
  { label: 'Signal-to-Noise (%)', key: 'signalToNoise' },
  { label: 'Chars per Output', key: 'charsPerOutput' },
  { label: 'Exclamation Marks', key: 'exclamations' },
  { label: 'ALL CAPS Words', key: 'allCapsWords' },
  { label: 'console.log Count', key: 'consoleLogCount' },
  { label: 'Vocabulary Richness (%)', key: 'vocabularyRichness' },
];

console.log('  ' + 'Metric'.padEnd(28) + 'Baseline'.padStart(10) + 'Avg(500)'.padStart(10) + 'Overhead'.padStart(10) + '  Interpretation');
console.log('  ' + '-'.repeat(85));
for (const m of metrics) {
  const bv = baseline[m.key];
  const av = avg(personalities.map(r => r[m.key]));
  const overhead = bv === 0 ? (av > 0 ? '+' + av.toFixed(1) : '0') : pct(av, bv);
  let interp = '';
  if (m.key === 'totalLines') interp = `Personality adds ~${(av - bv).toFixed(0)} lines of overhead`;
  if (m.key === 'totalChars') interp = `${(av/bv).toFixed(0)}x more code to do the same thing`;
  if (m.key === 'commentRatio') interp = `${av.toFixed(0)}% of personality code is comments`;
  if (m.key === 'signalToNoise') interp = bv > av ? 'Personality reduces useful code density' : '';
  if (m.key === 'charsPerOutput') interp = `${(av/bv).toFixed(1)}x overhead per unit of output`;
  if (m.key === 'complexityScore') interp = `Unnecessary complexity added for flavor`;

  console.log('  ' + m.label.padEnd(28) + String(bv).padStart(10) + av.toFixed(1).padStart(10) + String(overhead).padStart(10) + '  ' + interp);
}

// === DEVELOPMENT FITNESS SCORING ===
// Score each personality on how suitable it is for real day-to-day development
// Criteria (all weighted):
//  1. Conciseness: fewer lines/chars = better (don't want bloat)
//  2. Low comment noise: some comments good, but not 90% comments
//  3. Appropriate complexity: not zero (too simple), not too high (over-engineered)
//  4. Signal-to-noise: high ratio of useful code
//  5. Modern JS: uses const/let/arrow, not var
//  6. Readability: moderate line length (not too short, not too long)
//  7. Low emotional noise: minimal exclamations, ALL CAPS, ellipsis
//  8. Efficient output: low chars-per-output ratio

console.log('\n--- DEVELOPMENT FITNESS SCORING ---\n');
console.log('  Scoring criteria (each 0-100, weighted):');
console.log('    Conciseness (20%): Penalize bloat, reward brevity');
console.log('    Comment Balance (15%): ~20-40% comments is ideal, too much or too little penalized');
console.log('    Right Complexity (15%): Score 2-3 is ideal for a Hello World');
console.log('    Signal-to-Noise (15%): Higher = more useful code per byte');
console.log('    Modern JS (10%): Uses const, let, arrow functions, template literals');
console.log('    Readability (10%): Avg line length 30-50 chars is ideal');
console.log('    Low Noise (10%): Penalize excessive !, ALL CAPS, ...');
console.log('    Efficiency (5%): Low chars-per-output ratio');
console.log('');

for (const r of personalities) {
  // Conciseness: ideal ~5-15 lines. Penalize heavily past 30.
  const conciseness = Math.max(0, 100 - Math.max(0, r.totalLines - 5) * 3);

  // Comment balance: ideal 20-40%. Gaussian-ish around 30%.
  const commentDist = Math.abs(r.commentRatio - 30);
  const commentBalance = Math.max(0, 100 - commentDist * 2);

  // Right complexity: ideal 2-3 for Hello World
  const complexDist = Math.min(Math.abs(r.complexityScore - 2), Math.abs(r.complexityScore - 3));
  const rightComplexity = Math.max(0, 100 - complexDist * 25);

  // Signal-to-noise: higher is better, baseline is 100%
  const signalScore = r.signalToNoise;

  // Modern JS: 0-5 scale -> 0-100
  const modernScore = r.modernJsScore * 20;

  // Readability: ideal avg line length 30-50
  const readDist = r.avgLineLength < 30 ? 30 - r.avgLineLength : r.avgLineLength > 50 ? r.avgLineLength - 50 : 0;
  const readability = Math.max(0, 100 - readDist * 5);

  // Low noise: penalize exclamations, caps, ellipsis
  const noiseScore = Math.max(0, 100 - (r.exclamations * 5 + r.allCapsWords * 3 + r.ellipsis * 2));

  // Efficiency: baseline is 34 chars/output. Lower is better.
  const effScore = Math.max(0, 100 - Math.max(0, r.charsPerOutput - 34) * 0.2);

  r.devScore = Math.round(
    conciseness * 0.20 +
    commentBalance * 0.15 +
    rightComplexity * 0.15 +
    signalScore * 0.15 +
    modernScore * 0.10 +
    readability * 0.10 +
    noiseScore * 0.10 +
    effScore * 0.05
  );

  r.scores = { conciseness, commentBalance, rightComplexity, signalScore, modernScore, readability, noiseScore, effScore };
}

// Sort by dev fitness score
const ranked = [...personalities].sort((a, b) => b.devScore - a.devScore);

console.log('  TOP 30 — BEST PERSONALITIES FOR DAY-TO-DAY DEVELOPMENT:\n');
console.log('  ' + 'Rank'.padEnd(6) + 'Personality'.padEnd(28) + 'Score'.padStart(6) + '  ' +
  'Conc'.padStart(5) + 'Cmnt'.padStart(5) + 'Cplx'.padStart(5) + 'S/N'.padStart(5) +
  'Mod'.padStart(5) + 'Read'.padStart(5) + 'Noise'.padStart(6) + 'Eff'.padStart(5));
console.log('  ' + '-'.repeat(95));
for (let i = 0; i < 30; i++) {
  const r = ranked[i];
  const s = r.scores;
  console.log('  ' +
    String(i + 1).padEnd(6) +
    r.name.padEnd(28) +
    String(r.devScore).padStart(6) + '  ' +
    String(Math.round(s.conciseness)).padStart(5) +
    String(Math.round(s.commentBalance)).padStart(5) +
    String(Math.round(s.rightComplexity)).padStart(5) +
    String(Math.round(s.signalScore)).padStart(5) +
    String(Math.round(s.modernScore)).padStart(5) +
    String(Math.round(s.readability)).padStart(5) +
    String(Math.round(s.noiseScore)).padStart(6) +
    String(Math.round(s.effScore)).padStart(5)
  );
}

console.log('\n  BOTTOM 10 — WORST FOR DAY-TO-DAY DEVELOPMENT:\n');
for (let i = ranked.length - 1; i >= ranked.length - 10; i--) {
  const r = ranked[i];
  const s = r.scores;
  console.log('  ' +
    String(ranked.length - i).padEnd(6) +
    r.name.padEnd(28) +
    String(r.devScore).padStart(6) + '  Why: ' +
    (s.conciseness < 30 ? 'bloated, ' : '') +
    (s.commentBalance < 30 ? 'bad comment ratio, ' : '') +
    (s.noiseScore < 30 ? 'noisy (!!/CAPS), ' : '') +
    (s.signalScore < 30 ? 'low signal, ' : '') +
    (s.rightComplexity < 50 ? 'wrong complexity, ' : '')
  );
}

// === CATEGORY AVERAGES ===
console.log('\n--- CATEGORY DEVELOPMENT FITNESS ---\n');
const categories = {
  'Anime (001-020,201-240)': personalities.filter(r => (parseInt(r.num) >= 1 && parseInt(r.num) <= 20) || (parseInt(r.num) >= 201 && parseInt(r.num) <= 240)),
  'Tech CEOs (021-025)': personalities.filter(r => parseInt(r.num) >= 21 && parseInt(r.num) <= 25),
  'Scientists (036-040,251-260)': personalities.filter(r => (parseInt(r.num) >= 36 && parseInt(r.num) <= 40) || (parseInt(r.num) >= 251 && parseInt(r.num) <= 260)),
  'Literary Authors (041-045,403-420)': personalities.filter(r => (parseInt(r.num) >= 41 && parseInt(r.num) <= 45) || (parseInt(r.num) >= 403 && parseInt(r.num) <= 420)),
  'Superheroes (046-055)': personalities.filter(r => parseInt(r.num) >= 46 && parseInt(r.num) <= 55),
  'Villains': personalities.filter(r => ['056','057','064','076','174','190','319','442'].includes(r.num)),
  'Sitcom (081-100,327-360)': personalities.filter(r => (parseInt(r.num) >= 81 && parseInt(r.num) <= 100) || (parseInt(r.num) >= 327 && parseInt(r.num) <= 360)),
  'Video Games (101-120,361-400)': personalities.filter(r => (parseInt(r.num) >= 101 && parseInt(r.num) <= 120) || (parseInt(r.num) >= 361 && parseInt(r.num) <= 400)),
  'Historical (131-150,281-300)': personalities.filter(r => (parseInt(r.num) >= 131 && parseInt(r.num) <= 150) || (parseInt(r.num) >= 281 && parseInt(r.num) <= 300)),
  'Musicians (151-160,261-280)': personalities.filter(r => (parseInt(r.num) >= 151 && parseInt(r.num) <= 160) || (parseInt(r.num) >= 261 && parseInt(r.num) <= 280)),
  'Filmmakers (421-440)': personalities.filter(r => parseInt(r.num) >= 421 && parseInt(r.num) <= 440),
  'Sports (241-250)': personalities.filter(r => parseInt(r.num) >= 241 && parseInt(r.num) <= 250),
  'Children (191-200)': personalities.filter(r => parseInt(r.num) >= 191 && parseInt(r.num) <= 200),
  'Game of Thrones (301-310)': personalities.filter(r => parseInt(r.num) >= 301 && parseInt(r.num) <= 310),
  'LOTR Extended (441-450)': personalities.filter(r => parseInt(r.num) >= 441 && parseInt(r.num) <= 450),
  'Star Wars (311-326,489-500)': personalities.filter(r => (parseInt(r.num) >= 311 && parseInt(r.num) <= 326) || (parseInt(r.num) >= 489 && parseInt(r.num) <= 500)),
  'Mythology (291-300)': personalities.filter(r => parseInt(r.num) >= 291 && parseInt(r.num) <= 300),
};

const catScores = Object.entries(categories)
  .map(([cat, items]) => ({ cat, avg: avg(items.map(r => r.devScore)), count: items.length }))
  .sort((a, b) => b.avg - a.avg);

console.log('  ' + 'Category'.padEnd(35) + 'Avg Score'.padStart(10) + '  Count'.padStart(7));
console.log('  ' + '-'.repeat(55));
for (const c of catScores) {
  const bar = '█'.repeat(Math.round(c.avg / 2));
  console.log('  ' + c.cat.padEnd(35) + c.avg.toFixed(1).padStart(10) + String(c.count).padStart(7) + '  ' + bar);
}

// === PERSONALITY TRAITS ANALYSIS ===
console.log('\n--- WHAT MAKES A GOOD "DEV PERSONALITY"? ---\n');

const top20 = ranked.slice(0, 20);
const bot20 = ranked.slice(-20);

console.log('  Trait comparison — Top 20 vs Bottom 20 personalities:\n');
const traitMetrics = [
  { label: 'Avg Lines', fn: r => r.totalLines },
  { label: 'Avg Characters', fn: r => r.totalChars },
  { label: 'Avg Comment Ratio', fn: r => r.commentRatio, suffix: '%' },
  { label: 'Avg Complexity', fn: r => r.complexityScore },
  { label: 'Avg Signal-to-Noise', fn: r => r.signalToNoise, suffix: '%' },
  { label: 'Avg Exclamations', fn: r => r.exclamations },
  { label: 'Avg ALL CAPS words', fn: r => r.allCapsWords },
  { label: 'Avg console.logs', fn: r => r.consoleLogCount },
  { label: 'Uses class (%)', fn: r => r.hasClass ? 100 : 0, suffix: '%' },
  { label: 'Uses arrow fn (%)', fn: r => r.hasArrowFn ? 100 : 0, suffix: '%' },
  { label: 'Uses const (%)', fn: r => r.hasConst ? 100 : 0, suffix: '%' },
  { label: 'Modern JS score', fn: r => r.modernJsScore },
];

console.log('  ' + 'Trait'.padEnd(25) + 'Top 20'.padStart(10) + 'Bottom 20'.padStart(12) + '  Delta');
console.log('  ' + '-'.repeat(55));
for (const t of traitMetrics) {
  const topAvg = avg(top20.map(t.fn));
  const botAvg = avg(bot20.map(t.fn));
  const delta = topAvg - botAvg;
  const s = t.suffix || '';
  console.log('  ' + t.label.padEnd(25) + (topAvg.toFixed(1) + s).padStart(10) + (botAvg.toFixed(1) + s).padStart(12) + '  ' + (delta > 0 ? '+' : '') + delta.toFixed(1));
}

// === FINAL RECOMMENDATION ===
console.log('\n' + '='.repeat(90));
console.log('RECOMMENDATION: BEST PERSONALITY FOR DAY-TO-DAY DEVELOPMENT');
console.log('='.repeat(90));

const winner = ranked[0];
const runnerUp = ranked[1];
const thirdPlace = ranked[2];

console.log(`\n  🥇 #1: ${winner.name.toUpperCase()} (Score: ${winner.devScore}/100)`);
console.log(`  🥈 #2: ${runnerUp.name.toUpperCase()} (Score: ${runnerUp.devScore}/100)`);
console.log(`  🥉 #3: ${thirdPlace.name.toUpperCase()} (Score: ${thirdPlace.devScore}/100)`);

console.log('\n  Why the top personality works for development:');
console.log(`    - ${winner.totalLines} lines, ${winner.totalChars} chars (concise)`);
console.log(`    - ${winner.commentRatio}% comments (${winner.commentRatio < 20 ? 'minimal' : winner.commentRatio < 40 ? 'balanced' : 'heavy'})`);
console.log(`    - Complexity: ${winner.complexityScore}/9 (${winner.complexityScore <= 2 ? 'simple and clear' : 'appropriately structured'})`);
console.log(`    - Signal-to-noise: ${winner.signalToNoise}%`);
console.log(`    - Modern JS score: ${winner.modernJsScore}/5`);
console.log(`    - Emotional noise: ${winner.exclamations} exclamations, ${winner.allCapsWords} ALL CAPS`);

console.log('\n  The ideal "developer personality" profile:');
const topAvgLines = avg(top20.map(r => r.totalLines));
const topAvgComment = avg(top20.map(r => r.commentRatio));
const topAvgComplexity = avg(top20.map(r => r.complexityScore));
const topAvgSignal = avg(top20.map(r => r.signalToNoise));
console.log(`    - Writes ${topAvgLines.toFixed(0)} lines (vs ${avg(personalities.map(r => r.totalLines)).toFixed(0)} average)`);
console.log(`    - ${topAvgComment.toFixed(0)}% comments (vs ${avg(personalities.map(r => r.commentRatio)).toFixed(0)}% average)`);
console.log(`    - Complexity ${topAvgComplexity.toFixed(1)} (vs ${avg(personalities.map(r => r.complexityScore)).toFixed(1)} average)`);
console.log(`    - ${topAvgSignal.toFixed(0)}% signal-to-noise (vs ${avg(personalities.map(r => r.signalToNoise)).toFixed(0)}% average)`);
console.log(`    - Minimal emotional noise (no screaming, no ALL CAPS)`);
console.log(`    - Uses modern JS features appropriately`);

console.log('\n  Personalities to AVOID for development:');
for (let i = ranked.length - 1; i >= ranked.length - 5; i--) {
  const r = ranked[i];
  console.log(`    - ${r.name}: Score ${r.devScore} — ${r.totalLines} lines, ${r.commentRatio}% comments, ${r.exclamations}!, ${r.allCapsWords} CAPS`);
}

console.log('\n' + '='.repeat(90));
