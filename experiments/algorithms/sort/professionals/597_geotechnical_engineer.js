// Soil strata - sort by depth and bearing capacity
// Ascending order for foundation planning

const bearingCapacities = [82, 43, 10, 27, 38, 3, 9];

const strata = bearingCapacities.concat().sort((a, b) => a - b);

console.log('[' + strata.join(',') + ']');
