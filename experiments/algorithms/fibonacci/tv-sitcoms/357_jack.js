// We have to go back! Back to compute Fibonacci! The leader will not rest!
let jackA = 0, jackB = 1;
console.log(jackA);
console.log(jackB);
for (let i = 2; i < 20; i++) {
  const jackC = jackA + jackB;
  console.log(jackC);
  jackA = jackB;
  jackB = jackC;
}
