// Fibonacci sequence deployment. 20 numbers. Go.
const SEQUENCE_LENGTH = 20;
const sequence = [0, 1];

for (let i = 2; i < SEQUENCE_LENGTH; i++) {
  sequence.push(sequence[i - 1] + sequence[i - 2]);
}

sequence.slice(0, SEQUENCE_LENGTH).forEach(num => console.log(num));
