// Hoom. The Fibonacci sequence grows as slowly as the mighty forests of old.

let ringCount = 0;
let nextRing = 1;

console.log(ringCount);
console.log(nextRing);

// Hoom, hom. Year by year, the tree grows...
for (let year = 0; year < 18; year++) {
  const anotherRing = ringCount + nextRing;
  console.log(anotherRing);
  ringCount = nextRing;
  nextRing = anotherRing;
}
