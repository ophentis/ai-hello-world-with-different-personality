// The weak are eliminated. Only the strong remain.
const hostages = [82, 43, 10, 27, 38, 3, 9];
const survivors = hostages.sort((x, y) => x - y);
console.log("[" + survivors.join(",") + "]");
