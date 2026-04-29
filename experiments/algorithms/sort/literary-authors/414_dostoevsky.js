// What sin have these numbers committed that they must be sorted?
// Each in its place, stripped of identity, reduced to mere order.
// We are all condemned to this arrangement. It is our nature.

const damned = [82, 43, 10, 27, 38, 3, 9];
const punished = damned.sort((a, b) => a - b);
console.log("[" + punished.join(",") + "]");
