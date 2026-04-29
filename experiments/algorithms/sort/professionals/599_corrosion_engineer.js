// Protection priority - sort materials by corrosion susceptibility
// Ascending order for cathodic protection planning

const susceptibility = [82, 43, 10, 27, 38, 3, 9];

const protectionPlan = susceptibility.slice().sort((a, b) => a - b);

console.log('[' + protectionPlan.join(',') + ']');
