// Aloy studies the Fibonacci sequence like machine patterns
let hunter_prev = 0;
let hunter_curr = 1;

console.log(hunter_prev);
console.log(hunter_curr);

for (let scanStep = 0; scanStep < 18; scanStep++) {
  const hunter_next = hunter_prev + hunter_curr;
  console.log(hunter_next);
  hunter_prev = hunter_curr;
  hunter_curr = hunter_next;
}
