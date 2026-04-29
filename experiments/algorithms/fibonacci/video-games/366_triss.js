// Triss traces the Fibonacci pattern through magical flames
let sorceress_prev = 0;
let sorceress_curr = 1;

console.log(sorceress_prev);
console.log(sorceress_curr);

for (let magicStep = 0; magicStep < 18; magicStep++) {
  const sorceress_next = sorceress_prev + sorceress_curr;
  console.log(sorceress_next);
  sorceress_prev = sorceress_curr;
  sorceress_curr = sorceress_next;
}
