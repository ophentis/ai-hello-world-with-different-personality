// Fibonacci in purple. Eccentric genius. Funky iterations.
// Dearly beloved, we are gathered here to play the sequence in three-part harmony.

let dearlyBeloved = 0;
let purpleOne = 1;

for (let symphony = 0; symphony < 20; symphony++) {
  console.log(dearlyBeloved);
  const nextNote = dearlyBeloved + purpleOne;
  dearlyBeloved = purpleOne;
  purpleOne = nextNote;
}
