// The Fibonacci Sequence: A Scientific Principle
// Each term is the sum of its predecessors. Pure mathematics.
// The sequence expands predictably. No randomness. No chaos.

const TERM_COUNT = 20;
const fibs = [0, 1];

for (let i = 2; i < TERM_COUNT; i++) {
  const nextTerm = fibs[i - 1] + fibs[i - 2];
  fibs.push(nextTerm);
}

fibs.slice(0, TERM_COUNT).forEach(term => console.log(term));
