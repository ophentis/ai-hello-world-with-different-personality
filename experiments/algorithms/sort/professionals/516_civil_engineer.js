// INFRASTRUCTURE PRIORITY: Sort by structural criticality
// Bridge inspection schedule: [3,9,10,27,38,43,82]
// Public safety: Priority one. Codes: ACI, AASHTO.

const inspection_priorities = [82, 43, 10, 27, 38, 3, 9];
const sorted_priorities = inspection_priorities.sort((a, b) => a - b);

console.log('[' + sorted_priorities.join(',') + ']');
