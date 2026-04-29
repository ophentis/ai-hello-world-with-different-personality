// Yes sir, I'll generate this sequence with disturbing precision and a pleasant smile.
let prev = 0;
let curr = 1;
console.log(prev);
console.log(curr);
for (let i = 2; i < 20; i++) {
  const next = prev + curr;
  console.log(next);
  prev = curr;
  curr = next;
}
