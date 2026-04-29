// With independent spirit and rational mind, the sequence emerges
const sequence = [];
let a = 0, b = 1;
sequence.push(a);
for (let i = 0; i < 19; i++) {
  sequence.push(b);
  [a, b] = [b, a + b];
}
sequence.forEach(num => console.log(num));
