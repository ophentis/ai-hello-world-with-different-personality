// Evidence chain - sort by severity for root cause timeline
// Ascending criticality analysis

const evidenceSeverity = [82, 43, 10, 27, 38, 3, 9];

function analyzeChain(severities) {
  const chain = [];
  const remaining = [...severities];

  while (remaining.length) {
    const minIndex = remaining.reduce((min, val, idx) =>
      val < remaining[min] ? idx : min, 0);
    chain.push(remaining[minIndex]);
    remaining.splice(minIndex, 1);
  }

  return chain;
}

console.log('[' + analyzeChain(evidenceSeverity).join(',') + ']');
