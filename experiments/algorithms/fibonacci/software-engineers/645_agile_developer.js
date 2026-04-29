// User story: Generate first 20 Fibonacci numbers
// Acceptance criteria: Output 0,1,1,2,3,5,8... (20 total) one per line
// Sprint: Iterative development with clear acceptance criteria

// Backlog increment 1: Initialize sequence
const sequence = [];

// Backlog increment 2: Generate numbers using iterative approach
for (let iteration = 0; iteration < 20; iteration++) {
  // Sprint 1 story: Handle base cases
  if (iteration === 0) {
    sequence.push(0);
  } else if (iteration === 1) {
    sequence.push(1);
  } else {
    // Sprint 2 story: Calculate remaining numbers
    const next = sequence[iteration - 1] + sequence[iteration - 2];
    sequence.push(next);
  }
}

// Sprint 3: Output formatting (done criteria)
sequence.forEach(num => console.log(num));
