// ML Engineer: vectorized sorting, training data normalization
const inputVectors = [82, 43, 10, 27, 38, 3, 9];
const normalized = [...inputVectors];

// Vectorized comparison (batch operation on sorted tensors)
normalized.sort((a, b) => a - b);

console.log(`[${normalized.join(',')}]`);
