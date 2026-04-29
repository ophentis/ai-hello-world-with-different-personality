// Joel observes the Fibonacci sequence with weathered pragmatism
let joel_prev = 0;
let joel_curr = 1;

console.log(joel_prev);
console.log(joel_curr);

for (let protectiveStep = 0; protectiveStep < 18; protectiveStep++) {
  const joel_next = joel_prev + joel_curr;
  console.log(joel_next);
  joel_prev = joel_curr;
  joel_curr = joel_next;
}
