// Sasuke's calculated progression
const sequence = [];
let first = 0, second = 1;
sequence.push(first);
for (let i = 1; i < 20; i++) {
  sequence.push(second);
  const next = first + second;
  first = second;
  second = next;
}
sequence.forEach(num => console.log(num));
