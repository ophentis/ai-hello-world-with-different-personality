// Through the great events of history, numbers seek their place.
// Nations rise and fall. Yet the sorting persists.
// An epic of order imposed upon chaos.

const histories = [82, 43, 10, 27, 38, 3, 9];
const warandpeace = histories.sort((a, b) => a - b);
console.log("[" + warandpeace.join(",") + "]");
