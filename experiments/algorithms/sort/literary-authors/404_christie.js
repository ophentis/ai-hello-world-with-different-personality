// The suspects, arranged in order of suspicion.
// Methodical arrangement reveals the truth.
const suspects = [82, 43, 10, 27, 38, 3, 9];
const arranged = suspects.sort((x, y) => x - y);
console.log("[" + arranged.join(",") + "]");
