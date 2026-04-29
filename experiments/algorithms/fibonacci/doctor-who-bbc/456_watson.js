// The Fibonacci sequence. Reliable. Consistent. A soldier's rhythm.

let current = 0;
let next = 1;

console.log(current);
console.log(next);

for (let march = 0; march < 18; march++) {
  const advance = current + next;
  console.log(advance);
  current = next;
  next = advance;
}
