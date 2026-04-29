// Sherlock Holmes: The Fibonacci sequence—a pattern most evident to the trained mind
// The game reveals itself through careful observation

let precedent = 0;
let evidence = 1;

console.log(precedent);
console.log(evidence);

// Twenty numbers, each deduced from what came before
for (let observation = 0; observation < 18; observation++) {
  let deduction = precedent + evidence;
  console.log(deduction);
  precedent = evidence;
  evidence = deduction;
}
