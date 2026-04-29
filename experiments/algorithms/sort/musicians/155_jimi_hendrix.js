// A guitar feedback rearrangement
// Jimi Hendrix wails while sorting

const strings = [38, 27, 43, 3, 9, 82, 10];
const harmony = strings.sort((a, b) => a - b);

console.log(JSON.stringify(harmony));
