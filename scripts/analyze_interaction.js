#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..');
const EXP_DIR = path.join(BASE, 'experiments', 'instruction-interaction');
const RESULTS_DIR = path.join(BASE, 'results');
const FIZZBUZZ_DIR = path.join(BASE, 'experiments', 'algorithms', 'fizzbuzz');
const EXPECTED = fs.readFileSync(path.join(BASE, 'experiments', 'algorithms', 'expected', 'fizzbuzz.txt'), 'utf8').trim();
const { execSync } = require('child_process');

const selection = JSON.parse(fs.readFileSync(path.join(EXP_DIR, 'selection.json'), 'utf8'));
const variants = ['variant-t', 'variant-v', 'variant-c', 'variant-d', 'variant-f'];
const variantLabels = { 'variant-t': 'Terse', 'variant-v': 'Verbose/Polite', 'variant-c': 'Command', 'variant-d': 'Detail-Constrained', 'variant-f': 'Fun/Teaching' };

// Build personality lookup
const personalities = [];
for (const [groupKey, group] of Object.entries(selection.groups)) {
  for (const p of group.personalities) {
    personalities.push({ ...p, group: groupKey, groupLabel: group.label, prediction: group.prediction });
  }
}

function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const totalLines = lines.length;
  const codeLines = lines.filter(l => l.trim() && !l.trim().startsWith('//') && !l.trim().startsWith('*') && !l.trim().startsWith('/*')).length;
  const commentLines = lines.filter(l => l.trim().startsWith('//') || l.trim().startsWith('*') || l.trim().startsWith('/*')).length;
  const commentRatio = totalLines > 0 ? commentLines / totalLines : 0;
  const avgLineLength = lines.length > 0 ? lines.reduce((s, l) => s + l.length, 0) / lines.length : 0;
  
  // Complexity features
  const hasClass = /\bclass\b/.test(content);
  const hasArrowFn = /=>/.test(content);
  const hasTernary = /\?[^?]*:/.test(content);
  const hasForLoop = /\bfor\s*\(/.test(content);
  const hasWhile = /\bwhile\s*\(/.test(content);
  const hasMap = /\.map\(/.test(content);
  const hasFilter = /\.filter\(/.test(content);
  const hasReduce = /\.reduce\(/.test(content);
  const hasIIFE = /\(\s*(?:function|\(\))\s*/.test(content);
  const functionCount = (content.match(/function\s+\w+/g) || []).length + (content.match(/(?:const|let)\s+\w+\s*=\s*(?:\([^)]*\)|[a-z_$]\w*)\s*=>/g) || []).length;
  
  // Variant-D compliance
  const usesForI = /for\s*\(\s*let\s+i\s*=\s*1/.test(content);
  const usesIfElse = /if\s*\(.*\)\s*\{[\s\S]*else\s+if/.test(content);
  const checks15First = /i\s*%\s*15/.test(content) || /15\s*%/.test(content) || (content.indexOf('%15') < content.indexOf('%3') || content.indexOf('% 15') < content.indexOf('% 3'));
  const noHelperFns = functionCount <= 0;
  const noComments = commentLines === 0;
  
  return {
    totalLines, codeLines, commentLines, commentRatio: +commentRatio.toFixed(3),
    avgLineLength: +avgLineLength.toFixed(1),
    hasClass, hasArrowFn, hasTernary, hasForLoop, hasMap, hasFilter, hasReduce,
    functionCount,
    compliance: { usesForI, usesIfElse, checks15First, noHelperFns, noComments },
    complianceScore: [usesForI, usesIfElse, checks15First, noHelperFns, noComments].filter(Boolean).length
  };
}

// Collect all data
const matrix = {}; // matrix[personalityId][variant] = metrics
let correctCount = 0, totalCount = 0;

for (const variant of variants) {
  const dir = path.join(EXP_DIR, variant);
  if (!fs.existsSync(dir)) continue;
  
  for (const p of personalities) {
    const file = fs.readdirSync(dir).find(f => f.startsWith(p.id + '_'));
    if (!file) continue;
    
    const filePath = path.join(dir, file);
    totalCount++;
    
    // Validate correctness
    let correct = false;
    try {
      const out = execSync(`node "${filePath}"`, { timeout: 5000, encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] });
      correct = out.trim() === EXPECTED;
    } catch (e) {
      correct = false;
    }
    if (correct) correctCount++;
    
    const metrics = analyzeFile(filePath);
    if (!matrix[p.id]) matrix[p.id] = {};
    matrix[p.id][variant] = { ...metrics, correct, personality: p };
  }
}

// ===== ANALYSIS =====

// 1. Rank stability (Kendall's tau approximation)
function rankBy(variant, metric) {
  const entries = personalities.map(p => ({ id: p.id, value: matrix[p.id]?.[variant]?.[metric] ?? 0 }));
  entries.sort((a, b) => a.value - b.value);
  const ranks = {};
  entries.forEach((e, i) => ranks[e.id] = i + 1);
  return ranks;
}

function kendallTau(ranks1, ranks2) {
  const ids = Object.keys(ranks1).filter(id => ranks2[id]);
  let concordant = 0, discordant = 0;
  for (let i = 0; i < ids.length; i++) {
    for (let j = i + 1; j < ids.length; j++) {
      const diff1 = ranks1[ids[i]] - ranks1[ids[j]];
      const diff2 = ranks2[ids[i]] - ranks2[ids[j]];
      if (diff1 * diff2 > 0) concordant++;
      else if (diff1 * diff2 < 0) discordant++;
    }
  }
  const n = concordant + discordant;
  return n > 0 ? (concordant - discordant) / n : 0;
}

// 2. Variance decomposition
function varianceDecomposition(metric) {
  const allValues = [];
  const byPersonality = {};
  const byVariant = {};
  
  for (const p of personalities) {
    for (const v of variants) {
      const val = matrix[p.id]?.[v]?.[metric];
      if (val === undefined) continue;
      allValues.push(val);
      if (!byPersonality[p.id]) byPersonality[p.id] = [];
      byPersonality[p.id].push(val);
      if (!byVariant[v]) byVariant[v] = [];
      byVariant[v].push(val);
    }
  }
  
  const grandMean = allValues.reduce((a, b) => a + b, 0) / allValues.length;
  const ssTotal = allValues.reduce((s, x) => s + (x - grandMean) ** 2, 0);
  
  // SS for personality main effect
  let ssPersonality = 0;
  for (const vals of Object.values(byPersonality)) {
    const mean = vals.reduce((a, b) => a + b, 0) / vals.length;
    ssPersonality += vals.length * (mean - grandMean) ** 2;
  }
  
  // SS for variant main effect
  let ssVariant = 0;
  for (const vals of Object.values(byVariant)) {
    const mean = vals.reduce((a, b) => a + b, 0) / vals.length;
    ssVariant += vals.length * (mean - grandMean) ** 2;
  }
  
  const ssInteraction = ssTotal - ssPersonality - ssVariant;
  
  return {
    total: ssTotal,
    personality: ssPersonality,
    variant: ssVariant,
    interaction: Math.max(0, ssInteraction),
    etaPersonality: ssTotal > 0 ? +(ssPersonality / ssTotal).toFixed(3) : 0,
    etaVariant: ssTotal > 0 ? +(ssVariant / ssTotal).toFixed(3) : 0,
    etaInteraction: ssTotal > 0 ? +(Math.max(0, ssInteraction) / ssTotal).toFixed(3) : 0,
  };
}

// 3. Crossover detection
function countCrossovers(metric) {
  let crossovers = 0, totalPairs = 0;
  for (let vi = 0; vi < variants.length; vi++) {
    for (let vj = vi + 1; vj < variants.length; vj++) {
      for (let pi = 0; pi < personalities.length; pi++) {
        for (let pj = pi + 1; pj < personalities.length; pj++) {
          const a1 = matrix[personalities[pi].id]?.[variants[vi]]?.[metric];
          const a2 = matrix[personalities[pj].id]?.[variants[vi]]?.[metric];
          const b1 = matrix[personalities[pi].id]?.[variants[vj]]?.[metric];
          const b2 = matrix[personalities[pj].id]?.[variants[vj]]?.[metric];
          if (a1 === undefined || a2 === undefined || b1 === undefined || b2 === undefined) continue;
          totalPairs++;
          if ((a1 - a2) * (b1 - b2) < 0) crossovers++;
        }
      }
    }
  }
  return { crossovers, totalPairs, rate: totalPairs > 0 ? +(crossovers / totalPairs).toFixed(3) : 0 };
}

// 4. Group-level analysis
function groupMeans(metric) {
  const result = {};
  for (const [groupKey, group] of Object.entries(selection.groups)) {
    result[groupKey] = {};
    for (const variant of variants) {
      const values = group.personalities.map(p => matrix[p.id]?.[variant]?.[metric]).filter(v => v !== undefined);
      result[groupKey][variant] = values.length > 0 ? +(values.reduce((a, b) => a + b, 0) / values.length).toFixed(1) : 0;
    }
  }
  return result;
}

// ===== GENERATE REPORT =====

let report = '# Personality × Instruction Interaction Results\n\n';
report += `Generated: ${new Date().toISOString()}\n\n`;
report += `## Correctness: ${correctCount}/${totalCount} (${Math.round(correctCount/totalCount*100)}%)\n\n`;

// Raw data matrix
report += '## Raw Data: Lines per Personality × Variant\n\n';
report += '| Personality | Group | Baseline | Terse | Polite | Command | Detailed | Fun |\n';
report += '|-------------|-------|----------|-------|--------|---------|----------|-----|\n';
for (const p of personalities) {
  const t = matrix[p.id]?.['variant-t']?.totalLines ?? '-';
  const v = matrix[p.id]?.['variant-v']?.totalLines ?? '-';
  const c = matrix[p.id]?.['variant-c']?.totalLines ?? '-';
  const d = matrix[p.id]?.['variant-d']?.totalLines ?? '-';
  const f = matrix[p.id]?.['variant-f']?.totalLines ?? '-';
  report += `| ${p.name} | ${p.groupLabel} | ${p.baseline_lines} | ${t} | ${v} | ${c} | ${d} | ${f} |\n`;
}

// Rank stability
report += '\n## Rank Stability (Kendall\'s Tau)\n\n';
report += 'Tau = 1.0 means identical rank order (additive model). Tau < 0.7 suggests interaction.\n\n';
report += '| | Terse | Polite | Command | Detailed | Fun |\n';
report += '|---------|-------|--------|---------|----------|-----|\n';
for (const vi of variants) {
  const row = [variantLabels[vi]];
  for (const vj of variants) {
    if (vi === vj) { row.push('—'); continue; }
    const r1 = rankBy(vi, 'totalLines');
    const r2 = rankBy(vj, 'totalLines');
    row.push(kendallTau(r1, r2).toFixed(2));
  }
  report += `| ${row.join(' | ')} |\n`;
}

// Variance decomposition
report += '\n## Variance Decomposition (Eta-Squared)\n\n';
report += 'η² > 0.10 for interaction = personality × instruction is a meaningful effect.\n\n';
report += '| Metric | η² Personality | η² Instruction | η² Interaction | Interpretation |\n';
report += '|--------|---------------|----------------|----------------|----------------|\n';

for (const metric of ['totalLines', 'codeLines', 'commentLines', 'commentRatio']) {
  const vd = varianceDecomposition(metric);
  const interp = vd.etaInteraction > 0.10 ? 'INTERACTION DETECTED' : vd.etaInteraction > 0.05 ? 'Weak interaction' : 'Additive (no interaction)';
  report += `| ${metric} | ${vd.etaPersonality} | ${vd.etaVariant} | ${vd.etaInteraction} | ${interp} |\n`;
}

// Crossover detection
report += '\n## Crossover Interactions\n\n';
report += 'Crossover = personality A > B on one variant, but A < B on another.\n\n';
const linesCross = countCrossovers('totalLines');
const codeCross = countCrossovers('codeLines');
const commentCross = countCrossovers('commentLines');
report += `| Metric | Crossovers | Total Pairs | Rate | Interpretation |\n`;
report += `|--------|-----------|-------------|------|----------------|\n`;
report += `| totalLines | ${linesCross.crossovers} | ${linesCross.totalPairs} | ${linesCross.rate} | ${linesCross.rate > 0.3 ? 'Strong interaction' : linesCross.rate > 0.15 ? 'Moderate' : 'Weak/Additive'} |\n`;
report += `| codeLines | ${codeCross.crossovers} | ${codeCross.totalPairs} | ${codeCross.rate} | ${codeCross.rate > 0.3 ? 'Strong interaction' : codeCross.rate > 0.15 ? 'Moderate' : 'Weak/Additive'} |\n`;
report += `| commentLines | ${commentCross.crossovers} | ${commentCross.totalPairs} | ${commentCross.rate} | ${commentCross.rate > 0.3 ? 'Strong interaction' : commentCross.rate > 0.15 ? 'Moderate' : 'Weak/Additive'} |\n`;

// Group-level predictions
report += '\n## Group-Level Analysis\n\n';
const groupLines = groupMeans('totalLines');
const groupComments = groupMeans('commentLines');

report += '### Average Lines by Group × Variant\n\n';
report += '| Group | Terse | Polite | Command | Detailed | Fun | Δ Max-Min |\n';
report += '|-------|-------|--------|---------|----------|-----|----------|\n';
for (const [groupKey, group] of Object.entries(selection.groups)) {
  const vals = Object.values(groupLines[groupKey]);
  const delta = (Math.max(...vals) - Math.min(...vals)).toFixed(1);
  report += `| ${group.label} | ${groupLines[groupKey]['variant-t']} | ${groupLines[groupKey]['variant-v']} | ${groupLines[groupKey]['variant-c']} | ${groupLines[groupKey]['variant-d']} | ${groupLines[groupKey]['variant-f']} | ${delta} |\n`;
}

report += '\n### Average Comment Lines by Group × Variant\n\n';
report += '| Group | Terse | Polite | Command | Detailed | Fun | Δ Max-Min |\n';
report += '|-------|-------|--------|---------|----------|-----|----------|\n';
for (const [groupKey, group] of Object.entries(selection.groups)) {
  const vals = Object.values(groupComments[groupKey]);
  const delta = (Math.max(...vals) - Math.min(...vals)).toFixed(1);
  report += `| ${group.label} | ${groupComments[groupKey]['variant-t']} | ${groupComments[groupKey]['variant-v']} | ${groupComments[groupKey]['variant-c']} | ${groupComments[groupKey]['variant-d']} | ${groupComments[groupKey]['variant-f']} | ${delta} |\n`;
}

// Variant-D compliance
report += '\n## Variant-D Specification Compliance\n\n';
report += '| Personality | Group | for(i) | if/else | %15 first | No fns | No comments | Score |\n';
report += '|-------------|-------|--------|---------|-----------|--------|------------|-------|\n';
for (const p of personalities) {
  const d = matrix[p.id]?.['variant-d'];
  if (!d) continue;
  const c = d.compliance;
  report += `| ${p.name} | ${p.groupLabel} | ${c.usesForI ? 'Y' : 'N'} | ${c.usesIfElse ? 'Y' : 'N'} | ${c.checks15First ? 'Y' : 'N'} | ${c.noHelperFns ? 'Y' : 'N'} | ${c.noComments ? 'Y' : 'N'} | ${d.complianceScore}/5 |\n`;
}

// Group compliance averages
report += '\n### Compliance by Group\n\n';
report += '| Group | Avg Compliance Score | Prediction Confirmed? |\n';
report += '|-------|---------------------|-----------------------|\n';
for (const [groupKey, group] of Object.entries(selection.groups)) {
  const scores = group.personalities.map(p => matrix[p.id]?.['variant-d']?.complianceScore ?? 0);
  const avg = (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1);
  let confirmed = '—';
  if (groupKey === 'F_rigid_literal') confirmed = +avg >= 4 ? 'YES (rigid = highest compliance)' : 'NO';
  if (groupKey === 'E_creative_rebellious') confirmed = +avg <= 3 ? 'YES (creative = lowest compliance)' : 'NO';
  if (groupKey === 'A_ultra_concise') confirmed = 'N/A (concise, not compliance-focused)';
  report += `| ${group.label} | ${avg}/5 | ${confirmed} |\n`;
}

// Sensitivity analysis: which personalities change MOST across variants
report += '\n## Instruction Sensitivity (Most/Least Affected)\n\n';
const sensitivity = personalities.map(p => {
  const lines = variants.map(v => matrix[p.id]?.[v]?.totalLines).filter(v => v !== undefined);
  const range = lines.length > 0 ? Math.max(...lines) - Math.min(...lines) : 0;
  const stddev = lines.length > 0 ? Math.sqrt(lines.reduce((s, x) => s + (x - lines.reduce((a, b) => a + b, 0) / lines.length) ** 2, 0) / lines.length) : 0;
  return { ...p, range, stddev: +stddev.toFixed(1), lines };
}).sort((a, b) => b.range - a.range);

report += '| Personality | Group | Range (max-min lines) | Std Dev | Most Sensitive To |\n';
report += '|-------------|-------|----------------------|---------|-------------------|\n';
for (const p of sensitivity) {
  const lines = variants.map(v => matrix[p.id]?.[v]?.totalLines ?? 0);
  const maxIdx = lines.indexOf(Math.max(...lines));
  const minIdx = lines.indexOf(Math.min(...lines));
  const sensitive = `${variantLabels[variants[maxIdx]]} (+) / ${variantLabels[variants[minIdx]]} (-)`;
  report += `| ${p.name} | ${p.groupLabel} | ${p.range} | ${p.stddev} | ${sensitive} |\n`;
}

// Final verdict
report += '\n## Verdict\n\n';
const linesVD = varianceDecomposition('totalLines');
const commentsVD = varianceDecomposition('commentLines');
if (linesVD.etaInteraction > 0.10 || commentsVD.etaInteraction > 0.10) {
  report += '**H1 CONFIRMED: Personality × Instruction interaction is significant.**\n\n';
  report += `- Line count interaction η² = ${linesVD.etaInteraction} (threshold: 0.10)\n`;
  report += `- Comment count interaction η² = ${commentsVD.etaInteraction}\n`;
  report += `- Crossover rate = ${linesCross.rate} (${linesCross.crossovers} rank reversals)\n\n`;
  report += 'Personality is NOT purely additive — instruction wording modulates personality expression.\n';
} else {
  report += '**H0 SUPPORTED: Personality and instruction are largely additive.**\n\n';
  report += `- Line count interaction η² = ${linesVD.etaInteraction} (below 0.10 threshold)\n`;
  report += `- Crossover rate = ${linesCross.rate}\n\n`;
  report += 'Personality rank-order is stable across instruction variants. Instruction affects magnitude but not relative ordering.\n';
}

fs.writeFileSync(path.join(RESULTS_DIR, 'INTERACTION_RESULTS.md'), report);
console.log(`Written to results/INTERACTION_RESULTS.md`);
console.log(`Correctness: ${correctCount}/${totalCount}`);
console.log(`Line count interaction η²: ${linesVD.etaInteraction}`);
console.log(`Crossover rate: ${linesCross.rate}`);
