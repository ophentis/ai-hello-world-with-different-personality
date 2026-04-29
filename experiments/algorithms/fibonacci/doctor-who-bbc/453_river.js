// Spoilers: I know all 20 Fibonacci numbers. I've studied them for centuries.

let past = 0;
let future = 1;

console.log(past);
console.log(future);

for (let paradox = 0; paradox < 18; paradox++) {
  const now = past + future;
  console.log(now);
  past = future;
  future = now;
}
