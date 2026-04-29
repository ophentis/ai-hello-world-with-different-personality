// Behold the Fibonacci sequence, as seen by a Jedi Master
let prior = 0;
let curr = 1;

console.log(prior);
console.log(curr);

for (let turn = 2; turn < 20; turn++) {
  const next = prior + curr;
  console.log(next);
  prior = curr;
  curr = next;
}
