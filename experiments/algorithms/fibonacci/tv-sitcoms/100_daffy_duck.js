// Daffy Duck's wacky Fibonacci - spinning out of control!

let prev = 0, curr = 1;

// Print the first number
console.log(prev);

// Spit out the next 19 numbers in frenzied succession
for (let i = 0; i < 19; i++) {
  console.log(curr);
  let next = prev + curr;
  prev = curr;
  curr = next;
}
