// Mewtwo's Sort - Psychic ordering through contemplation
const values = [38, 27, 43, 3, 9, 82, 10];
const sorted = values.slice().sort((x, y) => x < y ? -1 : x > y ? 1 : 0);
console.log("[" + sorted.join(",") + "]");
