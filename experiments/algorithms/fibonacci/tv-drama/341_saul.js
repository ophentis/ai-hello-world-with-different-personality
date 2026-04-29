// The scheme: show them the Fibonacci sequence and make a fortune off it!
let prev = 0, curr = 1;
console.log(prev);
console.log(curr);
for (let count = 2; count < 20; count++) {
  const next_in_sequence = prev + curr;
  console.log(next_in_sequence);
  prev = curr;
  curr = next_in_sequence;
}
