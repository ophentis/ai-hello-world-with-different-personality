// It's Fibonacci, Jim, but not as we know it
let old = 0;
let new_val = 1;

console.log(old);
console.log(new_val);

for (let step = 2; step < 20; step++) {
  const next = old + new_val;
  console.log(next);
  old = new_val;
  new_val = next;
}
