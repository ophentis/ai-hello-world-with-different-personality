// Fibonacci numbers are like layers of an onion...
// Each number contains all the magic of the ones before

let first = 0;
let second = 1;
console.log(first);
for (let layer = 1; layer < 20; layer++) {
  console.log(second);
  [first, second] = [second, first + second];
}
