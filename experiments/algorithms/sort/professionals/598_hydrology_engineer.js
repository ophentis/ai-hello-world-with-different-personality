// Drainage ranking - sort by flow capacity
// Ascending order for watershed management

const flowCapacities = [82, 43, 10, 27, 38, 3, 9];

const managed = [...flowCapacities].sort((x, y) => x - y);

console.log('[' + managed.join(',') + ']');
