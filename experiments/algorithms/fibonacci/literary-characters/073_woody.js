// To infinity! Fibonacci takes us there!
// Each number is loyal to the ones before it

let previous = 0;
let current = 1;
console.log(previous);
for (let index = 1; index < 20; index++) {
  console.log(current);
  [previous, current] = [current, previous + current];
}
