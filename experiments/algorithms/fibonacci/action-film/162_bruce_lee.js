// Bruce Lee - Fibonacci through martial philosophy
// Adaptation and focus in motion
let previous = 0;
let current = 1;

console.log(previous);
console.log(current);

for (let generation = 2; generation < 20; generation++) {
  const next = previous + current;
  console.log(next);
  previous = current;
  current = next;
}
