// Snoop Dogg: Just let it flow, nephew, one after another, ya heard?
let prev = 0;
let curr = 1;

console.log(prev);

for (let i = 1; i < 20; i++) {
  console.log(curr);
  const next = prev + curr;
  prev = curr;
  curr = next;
}
