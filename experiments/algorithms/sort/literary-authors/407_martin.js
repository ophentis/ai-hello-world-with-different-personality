// Seven Houses vying for the throne. Only one throne exists.
// Stronger numbers rise. Weaker ones fall to the bottom.
// No honor in the sorting. Only survival.

const houseNumbers = [82, 43, 10, 27, 38, 3, 9];
const survivors = houseNumbers.sort((a, b) => a - b);
console.log("[" + survivors.join(",") + "]");
