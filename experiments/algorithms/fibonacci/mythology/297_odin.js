// Odin's knowledge passes to each generation - Fibonacci wisdom spreads
// Ravens carry secrets through time

let previousAge = 0;
let currentAge = 1;

for (let eon = 0; eon < 20; eon++) {
  console.log(previousAge);
  const nextAge = previousAge + currentAge;
  previousAge = currentAge;
  currentAge = nextAge;
}
