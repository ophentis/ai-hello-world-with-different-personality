// Oh my! This ancient mathematical sequence! I am fluent in over six million calculations.
// The first twenty numbers in this most orderly progression are, statistically speaking, as follows:
let previous = 0, current = 1;
console.log(previous);
for (let iteration = 0; iteration < 19; iteration++) {
  console.log(current);
  [previous, current] = [current, previous + current];
}
