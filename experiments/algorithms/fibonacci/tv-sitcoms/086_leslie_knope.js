// LESLIE KNOPE - Enthusiastic, binders, Parks, optimistic
// The Fibonacci sequence! It's BEAUTIFUL!

let previous = 0;
let current = 1;

console.log(previous);
console.log(current);

for (let i = 0; i < 18; i++) {
  const next = previous + current;
  console.log(next);
  previous = current;
  current = next;
}
