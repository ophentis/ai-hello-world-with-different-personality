// ML Engineer: Vectorized Fibonacci, tensor-like operations

function fibonacciVectorized(count) {
  // Initialize tensor-like state
  const state = {
    values: [0, 1],
    index: 0
  };

  // Vectorized operation: generate all at once
  const sequence = Array.from({ length: count }, () => {
    const current = state.values[0];
    const next = state.values[0] + state.values[1];
    state.values = [state.values[1], next];
    return current;
  });

  // Batch output
  sequence.forEach(val => console.log(val));
}

fibonacciVectorized(20);
