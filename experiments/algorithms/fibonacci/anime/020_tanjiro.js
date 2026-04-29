// Tanjiro: Build steadily, like breathing forms
let prev = 0;
let curr = 1;

console.log(prev);
console.log(curr);

for (let i = 2; i < 20; i++) {
  let next = prev + curr;
  console.log(next);
  prev = curr;
  curr = next;
}
