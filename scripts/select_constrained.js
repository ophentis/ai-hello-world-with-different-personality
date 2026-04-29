const fs = require('fs');
const path = require('path');
const { walkPersonalities } = require('./lib/walk');
const { analyzeFile, computeDevFitness } = require('./lib/scoring');

const baseDir = path.resolve(__dirname, '..', 'personalities');
const entries = walkPersonalities(baseDir);

const results = entries
  .filter(e => e.num !== '000')
  .map(e => {
    const content = fs.readFileSync(e.fullPath, 'utf8');
    const metrics = analyzeFile(content);
    const { devScore } = computeDevFitness(metrics);
    return { num: e.num, name: e.name, file: e.file, category: e.category, devScore };
  })
  .sort((a, b) => b.devScore - a.devScore);

const top50 = results.slice(0, 50);
const bottom50 = results.slice(-50);
const selection = [...top50, ...bottom50];

const output = {
  description: 'Top 50 + bottom 50 personalities by dev fitness score for constrained experiment',
  count: selection.length,
  top50: top50.map(s => ({ num: s.num, name: s.name, score: s.devScore, category: s.category })),
  bottom50: bottom50.map(s => ({ num: s.num, name: s.name, score: s.devScore, category: s.category })),
};

const outPath = path.resolve(__dirname, '..', 'experiments', 'constrained', 'selection.json');
fs.writeFileSync(outPath, JSON.stringify(output, null, 2));
console.log(`Selected ${selection.length} personalities (top 50 + bottom 50)`);
console.log(`Top range: ${top50[0].devScore} - ${top50[49].devScore}`);
console.log(`Bottom range: ${bottom50[0].devScore} - ${bottom50[49].devScore}`);
console.log(`Written to: ${outPath}`);
