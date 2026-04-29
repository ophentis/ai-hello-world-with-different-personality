// The Fibonacci sequence extends to infinity
// Each number propels us further into the cosmic expanse

let x = 0;
let y = 1;
console.log(x);
for (let count = 1; count < 20; count++) {
  console.log(y);
  [x, y] = [y, x + y];
}
