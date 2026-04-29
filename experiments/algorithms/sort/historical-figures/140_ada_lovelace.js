// Algorithmic approach to ordination of values
// Ada Lovelace designs the sequence analytically

const numbers = [38, 27, 43, 3, 9, 82, 10];
const orderedSequence = numbers.sort((a, b) => a - b);

console.log(JSON.stringify(orderedSequence));
