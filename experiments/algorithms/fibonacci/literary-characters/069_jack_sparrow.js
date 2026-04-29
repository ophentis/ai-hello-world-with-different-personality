// Fibonacci? Never 'eard of it. But let's find it anyway...
// Stumble through 20 numbers and call it a map

let previous = 0;
let current = 1;
console.log(previous);
for (let index = 1; index < 20; index++) {
  console.log(current);
  [previous, current] = [current, previous + current];
}
