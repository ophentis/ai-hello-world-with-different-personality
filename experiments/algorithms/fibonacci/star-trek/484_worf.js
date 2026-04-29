// The warrior's path is eternal - like the Fibonacci sequence
let prev = 0;
let curr = 1;

console.log(prev);
console.log(curr);

for (let generation = 2; generation < 20; generation++) {
  const next = prev + curr;
  console.log(next);
  prev = curr;
  curr = next;
}
