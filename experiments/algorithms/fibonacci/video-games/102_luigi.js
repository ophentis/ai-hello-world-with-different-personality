// Luigi's Fibonacci - Steady but uncertain, just like him
// "L-let me try to do this... no, wait, I think I've got it..."

let f_prev = 0;
let f_curr = 1;

console.log(f_prev);

for (let iteration = 0; iteration < 19; iteration++) {
  console.log(f_curr);
  let f_next = f_prev + f_curr;
  f_prev = f_curr;
  f_curr = f_next;
}
