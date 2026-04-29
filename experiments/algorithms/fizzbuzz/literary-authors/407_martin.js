// The Great Game of Numbers. Some live, some die.
// Multiples of three fall to Fizz's blade.
// Multiples of five burn in Buzz's fire.
// The rest survive another iteration.

for (let cycle = 1; cycle <= 100; cycle++) {
  let fate = "";
  if (cycle % 3 === 0) fate += "Fizz";
  if (cycle % 5 === 0) fate += "Buzz";
  // Winter is coming for some numbers.
  console.log(fate || cycle);
}
