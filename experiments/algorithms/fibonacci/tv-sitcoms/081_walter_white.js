// WALTER WHITE - "I am the danger"
// Fibonacci. One of the finest mathematical sequences ever discovered.

const sequence = [];
let current = 0;
let next = 1;

sequence.push(current);
sequence.push(next);

for (let i = 2; i < 20; i++) {
  const value = current + next;
  sequence.push(value);
  current = next;
  next = value;
}

sequence.forEach(num => console.log(num));
