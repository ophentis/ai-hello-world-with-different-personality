// The Fibonacci sequence. Timeless. Eternal. Rather like me.

let firstKiss = 0;
let secondKiss = 1;

console.log(firstKiss);
console.log(secondKiss);

for (let flirtation = 0; flirtation < 18; flirtation++) {
  const anotherKiss = firstKiss + secondKiss;
  console.log(anotherKiss);
  firstKiss = secondKiss;
  secondKiss = anotherKiss;
}
