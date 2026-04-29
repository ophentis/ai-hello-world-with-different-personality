// Fibonacci - security-aware implementation with bounds validation

function validateCount(count, maxAllowed = 1000) {
  if (typeof count !== 'number' || count < 1 || count > maxAllowed) {
    throw new Error(`Count must be between 1 and ${maxAllowed}`);
  }
  return count;
}

function fibonacciSecure(count = 20) {
  const validCount = validateCount(count);
  let prev = 0, curr = 1;

  // Check for overflow protection
  if (prev > Number.MAX_SAFE_INTEGER || curr > Number.MAX_SAFE_INTEGER) {
    throw new Error('Overflow protection triggered');
  }

  console.log(prev);

  for (let i = 1; i < validCount; i++) {
    if (curr > Number.MAX_SAFE_INTEGER) {
      throw new Error('Fibonacci sequence exceeded safe integer bounds');
    }
    console.log(curr);
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
}

try {
  fibonacciSecure(20);
} catch (error) {
  process.stderr.write(`Security Error: ${error.message}\n`);
  process.exit(1);
}
