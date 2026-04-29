// Come back and fight like a man. This algorithm is a knockout.
const ring = [38, 27, 43, 3, 9, 82, 10];

// Iron Mike delivers the finishing blow
ring.sort((a, b) => a - b);

console.log('[' + ring.join(',') + ']');
