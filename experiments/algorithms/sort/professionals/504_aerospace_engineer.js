// FLIGHT PATH OPTIMIZATION: Ascending thrust vector
// Load factor: Sustainable. Target sequence: [3,9,10,27,38,43,82]
// Aerodynamic stability: Verified.

const thrust_vectors = [82, 43, 10, 27, 38, 3, 9];
const optimized_vectors = thrust_vectors.sort((a, b) => a - b);

console.log('[' + optimized_vectors.join(',') + ']');
