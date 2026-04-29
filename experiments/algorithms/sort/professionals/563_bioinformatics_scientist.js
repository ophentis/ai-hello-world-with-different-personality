// Bioinformatics Scientist - sequence genes in ascending order
const sequence = [82, 43, 10, 27, 38, 3, 9];
sequence.sort((a, b) => a - b);
console.log('[' + sequence.join(',') + ']');