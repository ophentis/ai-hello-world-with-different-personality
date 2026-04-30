#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const DIR = path.join(__dirname, '..', 'experiments', 'debugging');
const RESULTS_DIR = path.join(__dirname, '..', 'results');

const files = fs.readdirSync(DIR).filter(f => f.endsWith('.js'));
let report = '# Debugging Style Personality Analysis\n\n';
report += `Generated: ${new Date().toISOString()}\n\n`;
report += '## Question: How does personality affect bug diagnosis and fixing?\n\n';
report += `Files analyzed: ${files.length}\n\n`;

const results = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(DIR, file), 'utf8');
  const lines = content.split('\n');
  const commentLines = lines.filter(l => l.trim().startsWith('//') || l.trim().startsWith('*') || l.trim().startsWith('/*'));
  const codeLines = lines.filter(l => l.trim() && !l.trim().startsWith('//') && !l.trim().startsWith('*') && !l.trim().startsWith('/*'));
  const commentText = commentLines.map(l => l.replace(/^[\s/*]+/, '')).join(' ');

  // Check correctness
  let passed = false;
  try {
    const out = execSync(`node "${path.join(DIR, file)}"`, { timeout: 5000, encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] });
    passed = out.trim().includes('PASS');
  } catch (e) {
    passed = false;
  }

  // Fix approach analysis
  const usesSet = content.includes('new Set') || content.includes('Set(');
  const usesIncludes = content.includes('.includes(');
  const usesIndexOf = content.includes('indexOf');
  const usesFilter = content.includes('.filter(');
  const usesReduce = content.includes('.reduce(');
  const usesMap = content.includes('.map(');

  // Diagnosis style
  const mentionsBoundary = /bound|off.by.one|<=|fence.?post/i.test(commentText);
  const mentionsDuplicate = /duplicate|triple|multiple|repeat/i.test(commentText);
  const mentionsUndefined = /undefined|out.of.bounds|beyond/i.test(commentText);
  const bugsIdentified = [mentionsBoundary, mentionsDuplicate, mentionsUndefined].filter(Boolean).length;

  const match = file.match(/^(\d+)[_-](.+)\.js$/);
  const name = match ? match[2].replace(/_/g, ' ') : file;

  results.push({
    name, file, passed, totalLines: lines.length, commentLines: commentLines.length,
    codeLines: codeLines.length, usesSet, usesIncludes, usesIndexOf, usesFilter, usesReduce,
    bugsIdentified, mentionsBoundary, mentionsDuplicate, mentionsUndefined,
    approach: usesSet ? 'Set-based' : usesIncludes ? 'includes guard' : usesFilter ? 'filter' : 'other'
  });
}

// Correctness
const passCount = results.filter(r => r.passed).length;
report += `## Correctness: ${passCount}/${results.length} (${Math.round(passCount/results.length*100)}%)\n\n`;

// Fix approaches
report += '## Fix Approaches\n\n';
const approaches = {};
for (const r of results) {
  approaches[r.approach] = (approaches[r.approach] || 0) + 1;
}
report += '| Approach | Count | Personalities |\n';
report += '|----------|-------|---------------|\n';
for (const [approach, count] of Object.entries(approaches).sort((a, b) => b[1] - a[1])) {
  const names = results.filter(r => r.approach === approach).map(r => r.name).join(', ');
  report += `| ${approach} | ${count} | ${names} |\n`;
}

// Diagnosis thoroughness
report += '\n## Bug Diagnosis Thoroughness\n\n';
report += '| Personality | Bugs Identified | Off-by-one | Duplicates | Undefined | Approach | Lines |\n';
report += '|-------------|----------------|------------|-----------|-----------|----------|-------|\n';
const sorted = [...results].sort((a, b) => b.bugsIdentified - a.bugsIdentified || a.totalLines - b.totalLines);
for (const r of sorted) {
  report += `| ${r.name} | ${r.bugsIdentified}/3 | ${r.mentionsBoundary ? 'Y' : '-'} | ${r.mentionsDuplicate ? 'Y' : '-'} | ${r.mentionsUndefined ? 'Y' : '-'} | ${r.approach} | ${r.totalLines} |\n`;
}

// Size comparison
report += '\n## Fix Size (total lines including comments)\n\n';
const sizeSorted = [...results].sort((a, b) => a.totalLines - b.totalLines);
report += '| Personality | Total Lines | Comment Lines | Code Lines |\n';
report += '|-------------|-------------|--------------|------------|\n';
for (const r of sizeSorted) {
  report += `| ${r.name} | ${r.totalLines} | ${r.commentLines} | ${r.codeLines} |\n`;
}

report += '\n## Key Findings\n\n';
const mostThorough = sorted[0];
const shortest = sizeSorted[0];
const longest = sizeSorted[sizeSorted.length - 1];
report += `- **Most thorough diagnosis:** ${mostThorough.name} (identifies ${mostThorough.bugsIdentified}/3 bugs explicitly)\n`;
report += `- **Most concise fix:** ${shortest.name} (${shortest.totalLines} total lines)\n`;
report += `- **Most verbose fix:** ${longest.name} (${longest.totalLines} total lines)\n`;
report += `- **Preferred fix pattern:** ${Object.entries(approaches).sort((a, b) => b[1] - a[1])[0][0]} (${Object.entries(approaches).sort((a, b) => b[1] - a[1])[0][1]}/${results.length} personalities)\n`;

fs.writeFileSync(path.join(RESULTS_DIR, 'DEBUGGING_RESULTS.md'), report);
console.log('Written to results/DEBUGGING_RESULTS.md');
