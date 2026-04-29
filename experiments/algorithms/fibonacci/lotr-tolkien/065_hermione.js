// The Fibonacci sequence is mathematically proven
// Each number is precisely the sum of the two preceding ones

let previous = 0;
let current = 1;
console.log(previous);
for (let index = 1; index < 20; index++) {
  console.log(current);
  [previous, current] = [current, previous + current];
}
