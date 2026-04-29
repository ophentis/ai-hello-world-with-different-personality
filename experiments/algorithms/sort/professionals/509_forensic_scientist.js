// EVIDENCE CATALOG: Sort by reference number
// Chain of custody: [3,9,10,27,38,43,82]
// Documentation: Complete. Integrity: Verified.

const evidence_samples = [82, 43, 10, 27, 38, 3, 9];
const sorted_evidence = evidence_samples.sort((a, b) => a - b);

console.log('[' + sorted_evidence.join(',') + ']');
