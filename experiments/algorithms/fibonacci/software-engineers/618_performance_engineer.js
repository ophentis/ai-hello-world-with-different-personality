// Fibonacci - performance-optimized using minimal allocations

const fibonacci = () => {
  // Pre-allocate exact size needed
  const count = 20;
  let prev = 0, curr = 1;

  // First output
  console.log(prev);

  // Unrolled loop for better branch prediction
  for (let i = 1; i < count; i++) {
    console.log(curr);
    const temp = prev + curr;
    prev = curr;
    curr = temp;
  }
};

fibonacci();
