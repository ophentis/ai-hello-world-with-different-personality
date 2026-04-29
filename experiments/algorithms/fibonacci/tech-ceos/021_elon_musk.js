// Elon Musk: Scale it efficiently - iterative approach, no recursion overhead
const SEQUENCE_LENGTH = 20;
const sequence = [];

let a = 0, b = 1;
sequence.push(a);

for (let i = 1; i < SEQUENCE_LENGTH; i++) {
  sequence.push(b);
  [a, b] = [b, a + b];
}

sequence.forEach(num => console.log(num));
