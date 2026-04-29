// Fibonacci sequence generator - architectural approach
// Demonstrates composition and maintainability for team systems

function generateFibonacci(count = 20) {
  let first = 0;
  let second = 1;

  console.log(first);

  for (let i = 1; i < count; i++) {
    console.log(second);
    const next = first + second;
    first = second;
    second = next;
  }
}

generateFibonacci();
