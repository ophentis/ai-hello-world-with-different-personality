// We must organize our forces strategically. Order must prevail.
const forces = [38, 27, 43, 3, 9, 82, 10];
forces.sort((a, b) => a - b);
console.log('[' + forces.join(',') + ']');
