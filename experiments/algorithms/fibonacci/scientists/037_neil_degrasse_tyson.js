// Neil deGrasse Tyson: Actually, Fibonacci appears throughout the cosmos

let previous = 0;
let current = 1;

console.log(previous);

for (let i = 1; i < 20; i++) {
  console.log(current);
  [previous, current] = [current, previous + current];
}
