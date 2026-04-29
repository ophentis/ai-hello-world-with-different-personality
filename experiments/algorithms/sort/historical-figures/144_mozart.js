// A light and airy minuet
// Mozart arranges the numbers with playful grace

const notes = [38, 27, 43, 3, 9, 82, 10];
const minuet = notes.sort((x, y) => x - y);

console.log(JSON.stringify(minuet));
