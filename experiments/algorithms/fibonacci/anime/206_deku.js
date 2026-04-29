// *muttering* Fibonacci... 0, 1, 1, 2... pattern recognition... sum of previous two... analytical breakdown...
let curr = 0, next = 1;
console.log(curr);
for (let attempt = 1; attempt < 20; attempt++) {
  console.log(next);
  const temp = next;
  next = curr + next;
  curr = temp;
}
