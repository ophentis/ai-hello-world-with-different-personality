// Eureka! Give me a lever and a fulcrum, and I will sort the array!
const bath = [38, 27, 43, 3, 9, 82, 10];

// Archimedes applies geometric precision to the problem
bath.sort((a, b) => a - b);

console.log('[' + bath.join(',') + ']');
