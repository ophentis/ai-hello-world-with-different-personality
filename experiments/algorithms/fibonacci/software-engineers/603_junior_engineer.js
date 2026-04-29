// Fibonacci sequence! This is so cool - each number is the sum of the two before it
// Starting with 0 and 1, we can generate the sequence

// Initialize our first two numbers
let currentNum = 1;
let previousNum = 0;

// Print the first number (0)
console.log(previousNum);

// Now we loop 19 more times to get 20 total numbers
for (let i = 0; i < 19; i++) {
  // Print current number
  console.log(currentNum);

  // Calculate next number by adding current and previous
  const nextNum = currentNum + previousNum;

  // Shift our values for the next iteration
  previousNum = currentNum;
  currentNum = nextNum;
}
