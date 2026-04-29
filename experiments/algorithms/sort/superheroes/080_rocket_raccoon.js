// ROCKET RACCOON - Snarky explosives genius
// Blowing up this array into sorted order!

const heapOfScrap = [38, 27, 43, 3, 9, 82, 10];
const sortedBounty = heapOfScrap.sort((a, b) => a - b);
console.log("[" + sortedBounty.join(",") + "]");
