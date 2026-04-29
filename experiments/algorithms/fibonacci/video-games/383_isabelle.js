// Isabelle's Fibonacci Sequence - That's what friends are for!

let previous = 0;
let current = 1;

console.log(previous);
console.log(current);

for (let i = 2; i < 20; i++) {
  const next = previous + current;
  console.log(next);
  previous = current;
  current = next;
}
