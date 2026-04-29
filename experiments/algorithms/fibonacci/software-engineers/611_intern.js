// Fibonacci sequence - intern learning algorithms
// Each number is the sum of the two numbers before it

// Function to generate Fibonacci sequence
function generateFibonacci() {
  // Starting numbers
  let prev = 0;    // First number
  let curr = 1;    // Second number

  // Print the first number (0)
  console.log(prev);

  // Loop to generate remaining 19 numbers
  for (let i = 1; i < 20; i++) {
    // Print current number
    console.log(curr);

    // Calculate next number by adding previous and current
    const next = prev + curr;

    // Move to next iteration
    prev = curr;
    curr = next;
  }
}

// Call the function
generateFibonacci();
