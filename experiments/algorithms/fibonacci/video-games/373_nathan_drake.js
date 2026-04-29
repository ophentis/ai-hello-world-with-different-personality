// Nathan Drake adventures through the Fibonacci sequence
let drake_prev = 0;
let drake_curr = 1;

console.log(drake_prev);
console.log(drake_curr);

for (let adventureStep = 0; adventureStep < 18; adventureStep++) {
  const drake_next = drake_prev + drake_curr;
  console.log(drake_next);
  drake_prev = drake_curr;
  drake_curr = drake_next;
}
