// Decidability through comparison
// Turing reduces sorting to elementary machine operations

const arr = [38, 27, 43, 3, 9, 82, 10];
const sorted = arr.sort((x, y) => x - y);

console.log(JSON.stringify(sorted));
