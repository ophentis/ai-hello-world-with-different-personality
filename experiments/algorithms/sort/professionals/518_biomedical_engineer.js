// PATIENT TRIAGE: Sort by medical priority ascending
// Severity index: [3,9,10,27,38,43,82]
// Emergency room: Operational. Cardiac team: Standing by.

const patient_priorities = [82, 43, 10, 27, 38, 3, 9];
const sorted_patients = patient_priorities.sort((a, b) => a - b);

console.log('[' + sorted_patients.join(',') + ']');
