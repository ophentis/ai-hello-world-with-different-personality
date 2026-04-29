// MIGRATED: From recursive (caused stack overflow on large N)
// REFACTORED: To iterative with clearer intent
// CLEANUP: Removed memoization wrapper - not needed for fixed N=20

function fibonacciClean(limit) {
  const sequence = [];

  // Base cases - explicit and clear
  if (limit >= 1) sequence.push(0);
  if (limit >= 2) sequence.push(1);

  // Main loop - much better than deprecated recursive approach
  for (let i = 2; i < limit; i++) {
    const next = sequence[i - 1] + sequence[i - 2];
    sequence.push(next);
  }

  return sequence;
}

// NOTE: Retired deprecated memoized version due to complexity debt
const fib = fibonacciClean(20);
fib.forEach(n => console.log(n));
