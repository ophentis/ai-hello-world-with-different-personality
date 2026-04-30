#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, '..', 'experiments', 'comment-style');
const RESULTS_DIR = path.join(__dirname, '..', 'results');

const files = fs.readdirSync(DIR).filter(f => f.endsWith('.js'));
let report = '# Comment Style Personality Analysis\n\n';
report += `Generated: ${new Date().toISOString()}\n\n`;
report += '## Question: How does personality manifest in code comments?\n\n';
report += `Files analyzed: ${files.length}\n\n`;

const results = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(DIR, file), 'utf8');
  const lines = content.split('\n');
  const totalLines = lines.length;
  const commentLines = lines.filter(l => l.trim().startsWith('//') || l.trim().startsWith('*') || l.trim().startsWith('/*'));
  const codeLines = lines.filter(l => l.trim() && !l.trim().startsWith('//') && !l.trim().startsWith('*') && !l.trim().startsWith('/*'));
  const blankLines = lines.filter(l => !l.trim());

  // Comment content analysis
  const commentText = commentLines.map(l => l.replace(/^[\s/*]+/, '')).join(' ');
  const wordCount = commentText.split(/\s+/).filter(w => w).length;
  const avgWordPerComment = commentLines.length > 0 ? (wordCount / commentLines.length).toFixed(1) : 0;
  
  // Sentiment indicators
  const exclamations = (commentText.match(/!/g) || []).length;
  const questions = (commentText.match(/\?/g) || []).length;
  const metaphors = (commentText.match(/like|as if|imagine|picture|think of/gi) || []).length;
  const selfRef = (commentText.match(/\bI\b|\bme\b|\bmy\b|\bwe\b/gi) || []).length;
  const readerRef = (commentText.match(/\byou\b|\byour\b|\byou'll\b/gi) || []).length;
  const allCaps = (commentText.match(/\b[A-Z]{3,}\b/g) || []).length;

  const match = file.match(/^(\d+)[_-](.+)\.js$/);
  const name = match ? match[2].replace(/_/g, ' ') : file;

  results.push({
    name, file, totalLines, commentLines: commentLines.length, codeLines: codeLines.length,
    ratio: (commentLines.length / codeLines.length).toFixed(2),
    wordCount, avgWordPerComment, exclamations, questions, metaphors, selfRef, readerRef, allCaps
  });
}

// Sort by comment ratio
results.sort((a, b) => b.ratio - a.ratio);

report += '## Comment Density\n\n';
report += '| Personality | Total Lines | Comment Lines | Code Lines | Comment:Code Ratio | Words in Comments |\n';
report += '|-------------|-------------|--------------|------------|-------------------|------------------|\n';
for (const r of results) {
  report += `| ${r.name} | ${r.totalLines} | ${r.commentLines} | ${r.codeLines} | ${r.ratio} | ${r.wordCount} |\n`;
}

// Tone analysis
report += '\n## Tone Analysis\n\n';
report += '| Personality | Exclamations | Questions | Metaphors | Self-references | Reader-references | ALL CAPS |\n';
report += '|-------------|-------------|-----------|-----------|----------------|------------------|----------|\n';
const toneSorted = [...results].sort((a, b) => b.exclamations - a.exclamations);
for (const r of toneSorted) {
  report += `| ${r.name} | ${r.exclamations} | ${r.questions} | ${r.metaphors} | ${r.selfRef} | ${r.readerRef} | ${r.allCaps} |\n`;
}

// Verbosity styles
report += '\n## Comment Verbosity (avg words per comment line)\n\n';
const verbSorted = [...results].sort((a, b) => b.avgWordPerComment - a.avgWordPerComment);
report += '| Personality | Avg Words/Comment | Style |\n';
report += '|-------------|------------------|-------|\n';
for (const r of verbSorted) {
  const style = r.avgWordPerComment > 12 ? 'Verbose/Narrative' : r.avgWordPerComment > 8 ? 'Explanatory' : r.avgWordPerComment > 5 ? 'Concise' : 'Terse';
  report += `| ${r.name} | ${r.avgWordPerComment} | ${style} |\n`;
}

// Key findings
report += '\n## Key Findings\n\n';
const mostComments = results[0];
const leastComments = results[results.length - 1];
const mostExcl = [...results].sort((a, b) => b.exclamations - a.exclamations)[0];
const mostQuest = [...results].sort((a, b) => b.questions - a.questions)[0];
const mostMeta = [...results].sort((a, b) => b.metaphors - a.metaphors)[0];
const mostSelf = [...results].sort((a, b) => b.selfRef - a.selfRef)[0];
const mostReader = [...results].sort((a, b) => b.readerRef - a.readerRef)[0];

report += `| Metric | Winner | Value |\n`;
report += `|--------|--------|-------|\n`;
report += `| Most comments | ${mostComments.name} | ${mostComments.commentLines} lines (ratio ${mostComments.ratio}) |\n`;
report += `| Fewest comments | ${leastComments.name} | ${leastComments.commentLines} lines (ratio ${leastComments.ratio}) |\n`;
report += `| Most exclamatory | ${mostExcl.name} | ${mostExcl.exclamations} exclamation marks |\n`;
report += `| Most questioning | ${mostQuest.name} | ${mostQuest.questions} question marks |\n`;
report += `| Most metaphorical | ${mostMeta.name} | ${mostMeta.metaphors} metaphor phrases |\n`;
report += `| Most self-referential | ${mostSelf.name} | ${mostSelf.selfRef} I/me/my/we |\n`;
report += `| Most reader-addressing | ${mostReader.name} | ${mostReader.readerRef} you/your |\n`;

report += '\n## Insight\n\n';
report += 'Comments are where personality has the MOST freedom to express — unlike code structure\n';
report += 'which must be correct, comments are pure voice. The variation here is even wider than\n';
report += 'in code structure, because comments have no functional constraints at all.\n';

fs.writeFileSync(path.join(RESULTS_DIR, 'COMMENT_STYLE_RESULTS.md'), report);
console.log('Written to results/COMMENT_STYLE_RESULTS.md');
