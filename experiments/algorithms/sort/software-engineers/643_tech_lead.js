// Tech lead priority: pragmatic, readable, low maintenance
// Don't over-engineer - use native tools effectively

const data = [82, 43, 10, 27, 38, 3, 9];

// Native sort - well understood by the team
const sorted = data.sort((a, b) => a - b);

console.log('[' + sorted.join(',') + ']');
