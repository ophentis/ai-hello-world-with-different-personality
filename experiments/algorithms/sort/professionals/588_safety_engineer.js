// Risk ranking - sort by severity for mitigation priority
// Highest risks first for safety protocols

const riskScores = [82, 43, 10, 27, 38, 3, 9];

const mitigationOrder = riskScores.reduce((sorted, risk) => {
  sorted.push(risk);
  return sorted.sort((a, b) => a - b);
}, []);

console.log('[' + mitigationOrder.join(',') + ']');
