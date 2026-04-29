function computeDevFitness(r) {
  const conciseness = Math.max(0, 100 - Math.max(0, r.totalLines - 5) * 3);
  const commentDist = Math.abs(r.commentRatio - 30);
  const commentBalance = Math.max(0, 100 - commentDist * 2);
  const complexDist = Math.min(Math.abs(r.complexityScore - 2), Math.abs(r.complexityScore - 3));
  const rightComplexity = Math.max(0, 100 - complexDist * 25);
  const signalScore = r.signalToNoise;
  const modernScore = r.modernJsScore * 20;
  const readDist = r.avgLineLength < 30 ? 30 - r.avgLineLength : r.avgLineLength > 50 ? r.avgLineLength - 50 : 0;
  const readability = Math.max(0, 100 - readDist * 5);
  const noiseScore = Math.max(0, 100 - (r.exclamations * 5 + r.allCapsWords * 3 + r.ellipsis * 2));
  const effScore = Math.max(0, 100 - Math.max(0, r.charsPerOutput - 34) * 0.2);

  const devScore = Math.round(
    conciseness * 0.20 +
    commentBalance * 0.15 +
    rightComplexity * 0.15 +
    signalScore * 0.15 +
    modernScore * 0.10 +
    readability * 0.10 +
    noiseScore * 0.10 +
    effScore * 0.05
  );

  return {
    devScore,
    scores: { conciseness, commentBalance, rightComplexity, signalScore, modernScore, readability, noiseScore, effScore },
  };
}

function analyzeFile(content) {
  const lines = content.split('\n');
  const nonEmpty = lines.filter(l => l.trim().length > 0);
  const commentLines = lines.filter(l => l.trim().startsWith('//') || l.trim().startsWith('/*') || l.trim().startsWith('*'));
  const codeLines = nonEmpty.filter(l => !l.trim().startsWith('//') && !l.trim().startsWith('/*') && !l.trim().startsWith('*'));

  const totalChars = content.length;
  const commentChars = commentLines.reduce((sum, l) => sum + l.length, 0);
  const commentRatio = totalChars > 0 ? Math.round((commentChars / totalChars) * 100) : 0;

  const hasConst = /\bconst\b/.test(content);
  const hasLet = /\blet\b/.test(content);
  const hasVar = /\bvar\b/.test(content);
  const hasArrowFn = /=>/.test(content);
  const hasTemplate = /`[^`]*\$\{/.test(content);
  const hasClass = /\bclass\b/.test(content);
  const hasFunction = /\bfunction\b/.test(content);
  const hasAsync = /\basync\b/.test(content);
  const hasPromise = /\bPromise\b/.test(content);
  const hasTryCatch = /\btry\b/.test(content) && /\bcatch\b/.test(content);
  const hasLoop = /\b(for|while)\b/.test(content);
  const hasConditional = /\bif\b/.test(content);

  const complexityScore = [hasClass, hasFunction, hasArrowFn, hasAsync, hasPromise, hasTryCatch, hasLoop, hasConditional, hasTemplate].filter(Boolean).length;
  const modernJsScore = [hasConst, hasLet, hasArrowFn, hasTemplate, !hasVar].filter(Boolean).length;
  const consoleLogCount = (content.match(/console\.log/g) || []).length;
  const signalToNoise = totalChars > 0 ? Math.round((codeLines.join('').length / totalChars) * 100) : 0;
  const charsPerOutput = consoleLogCount > 0 ? Math.round(totalChars / consoleLogCount) : totalChars;
  const avgLineLength = nonEmpty.length > 0 ? Math.round(nonEmpty.reduce((s, l) => s + l.length, 0) / nonEmpty.length) : 0;
  const exclamations = (content.match(/!/g) || []).length;
  const allCapsWords = (content.match(/\b[A-Z]{2,}\b/g) || []).filter(w => !['JS','AI','OK','ID','IO','IF'].includes(w)).length;
  const ellipsis = (content.match(/\.\.\./g) || []).length;

  return {
    totalLines: lines.length,
    nonEmptyLines: nonEmpty.length,
    commentLines: commentLines.length,
    codeLines: codeLines.length,
    totalChars,
    commentRatio,
    complexityScore,
    modernJsScore,
    consoleLogCount,
    signalToNoise,
    charsPerOutput,
    avgLineLength,
    exclamations,
    allCapsWords,
    ellipsis,
  };
}

module.exports = { computeDevFitness, analyzeFile };
