// INCIDENT SEVERITY RANKING: Sort by threat level ascending
// Priority queue: [3,9,10,27,38,43,82]
// SIEM dashboard: Updated. Alerts: Dispatched.

const threat_scores = [82, 43, 10, 27, 38, 3, 9];
const sorted_threats = threat_scores.sort((a, b) => a - b);

console.log('[' + sorted_threats.join(',') + ']');
