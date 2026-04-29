// Tech lead approach: balanced performance and readability
// Simple imperative loop - easy for team to understand and maintain

function generateFibonacci(n) {
  const sequence = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      sequence.push(0);
    } else if (i === 1) {
      sequence.push(1);
    } else {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  }

  return sequence;
}

const fib = generateFibonacci(20);
fib.forEach(num => console.log(num));
