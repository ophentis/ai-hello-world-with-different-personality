// Ash Ketchum's Fibonacci - Never give up! Keep training!
let prev = 0, curr = 1;
console.log(prev);
for (let round = 1; round < 20; round++) {
  console.log(curr);
  const temp = curr;
  curr = prev + curr;
  prev = temp;
}
