// This sequence, it's got me thinking. Twenty numbers, all related and phony in their way
let prev = 0, curr = 1;
console.log(prev);
console.log(curr);
for (let i = 2; i < 20; i++) {
  const temp = prev + curr;
  console.log(temp);
  prev = curr;
  curr = temp;
}
