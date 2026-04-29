// Evacuation sequence - arrange occupants by zone priority
// Ascending floor order for safe egress

const zonePriorities = [82, 43, 10, 27, 38, 3, 9];

const sortedZones = zonePriorities
  .slice()
  .sort((a, b) => a - b);

console.log('[' + sortedZones.join(',') + ']');
