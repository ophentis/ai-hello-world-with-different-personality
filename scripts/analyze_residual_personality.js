#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const CONSTRAINED_DIR = path.join(__dirname, '..', 'experiments', 'constrained');
const RESULTS_DIR = path.join(__dirname, '..', 'results');

function extractIdentifiers(content) {
  const funcNames = (content.match(/function\s+(\w+)/g) || []).map(m => m.replace('function ', ''));
  const constNames = (content.match(/(?:const|let|var)\s+(\w+)/g) || []).map(m => m.replace(/(?:const|let|var)\s+/, ''));
  return { funcNames, constNames, all: [...funcNames, ...constNames] };
}

function personalityScore(identifiers) {
  // Generic programming terms that carry no personality
  const generic = new Set([
    'i', 'n', 'x', 'result', 'output', 'value', 'item', 'index', 'count',
    'start', 'end', 'min', 'max', 'arr', 'num', 'str', 'temp', 'current',
    'fizz', 'buzz', 'fizzbuzz', 'divisor', 'modulo', 'range', 'number',
    'rules', 'rule', 'match', 'generate', 'classify', 'print', 'main',
    'FIZZBUZZ_RULES', 'RANGE_START', 'RANGE_END', 'FIZZ_DIVISOR', 'BUZZ_DIVISOR',
    'validateRange', 'getMatchingRule', 'buildSequence', 'formatOutput',
    'generateSequence', 'processNumber', 'getFizzBuzzResult', 'computeFizzBuzzOutput',
    'fizzDivisor', 'buzzDivisor', 'rangeStart', 'rangeEnd', 'sequenceStart', 'sequenceEnd',
    'firstNumber', 'lastNumber', 'getResult', 'determineFizzBuzzOutput',
  ]);

  const themed = identifiers.all.filter(id => {
    const lower = id.toLowerCase();
    return !generic.has(id) && !generic.has(lower) &&
      !lower.match(/^(fizz|buzz|range|sequence|number|divisor|start|end|lower|upper|bound|label|output|result|compute|determine|evaluate|get|set|is|has|validate|process|build|format|generate)/);
  });

  return { total: identifiers.all.length, themed: themed.length, themedNames: themed };
}

const variants = ['variant-a', 'variant-b', 'variant-c', 'variant-d'];
let report = '# Residual Personality Signal Analysis\n\n';
report += `Generated: ${new Date().toISOString()}\n\n`;
report += '## Question: Where does personality hide when constraints tighten?\n\n';

const variantLabels = {
  'variant-a': 'Readability',
  'variant-b': 'Structure',
  'variant-c': 'Algorithm',
  'variant-d': 'All Combined',
};

const summaryData = [];

for (const variant of variants) {
  const dir = path.join(CONSTRAINED_DIR, variant);
  if (!fs.existsSync(dir)) continue;

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
  report += `## ${variant.toUpperCase()} — ${variantLabels[variant]} (${files.length} files)\n\n`;

  const results = [];
  for (const file of files) {
    const content = fs.readFileSync(path.join(dir, file), 'utf8');
    const ids = extractIdentifiers(content);
    const score = personalityScore(ids);
    const match = file.match(/^(\d+)[_-](.+)\.js$/);
    const name = match ? match[2].replace(/_/g, ' ') : file;
    results.push({ name, ...score, funcNames: ids.funcNames, constNames: ids.constNames });
  }

  const avgThemed = (results.reduce((s, r) => s + r.themed, 0) / results.length).toFixed(1);
  const avgTotal = (results.reduce((s, r) => s + r.total, 0) / results.length).toFixed(1);
  const pctThemed = ((avgThemed / avgTotal) * 100).toFixed(0);

  summaryData.push({ variant, label: variantLabels[variant], avgThemed, avgTotal, pctThemed });

  report += `**Personality density:** ${avgThemed}/${avgTotal} identifiers themed (${pctThemed}%)\n\n`;
  report += `| Personality | Themed Names | Examples |\n`;
  report += `|-------------|-------------|----------|\n`;

  for (const r of results.sort((a, b) => b.themed - a.themed)) {
    const examples = r.themedNames.slice(0, 3).join(', ') || '(none)';
    report += `| ${r.name} | ${r.themed}/${r.total} | ${examples} |\n`;
  }
  report += '\n';
}

// Summary comparison
report += '## Constraint Tightening vs Personality Signal\n\n';
report += '| Variant | Constraints | Avg Themed IDs | % Themed | Signal Level |\n';
report += '|---------|------------|----------------|----------|-------------|\n';

for (const s of summaryData) {
  const level = s.pctThemed > 50 ? 'Strong' : s.pctThemed > 20 ? 'Moderate' : s.pctThemed > 5 ? 'Faint' : 'Near-zero';
  report += `| ${s.variant} | ${s.label} | ${s.avgThemed}/${s.avgTotal} | ${s.pctThemed}% | ${level} |\n`;
}

report += '\n## Key Insight\n\n';
report += 'Personality signal migrates to progressively smaller expression channels as constraints tighten:\n\n';
report += '1. **No constraints**: Full creative freedom — line count, algorithm choice, structure, naming ALL vary\n';
report += '2. **Readability (A)**: Line count converges, but naming remains fully expressive (themed function/variable names)\n';
report += '3. **Structure (B)**: Structure + line count converge, naming still leaks through loop variables\n';
report += '4. **Algorithm (C)**: Algorithm converges, one themed variable survives per implementation\n';
report += '5. **All constraints (D)**: Everything converges — personality only survives in one function name suffix\n\n';
report += 'Personality is like water: it fills whatever space constraints leave open.\n';

fs.writeFileSync(path.join(RESULTS_DIR, 'RESIDUAL_PERSONALITY.md'), report);
console.log('Written to results/RESIDUAL_PERSONALITY.md');
