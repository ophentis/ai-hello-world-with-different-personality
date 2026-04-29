// Peach - Royal Fibonacci Sequence

let grace = 0;
let elegance = 1;

console.log(grace);
console.log(elegance);

for (let reign = 2; reign < 20; reign++) {
  const majesty = grace + elegance;
  console.log(majesty);
  grace = elegance;
  elegance = majesty;
}
