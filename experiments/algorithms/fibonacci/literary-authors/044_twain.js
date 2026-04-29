// Mark Twain: The Fibonacci sequence, nature's own tall tale
// Each number the child of two parents—inheritance runs deep

let precedent = 0;
let ancestor = 1;

console.log(precedent);
console.log(ancestor);

// Twenty generations of folk wisdom
for (let generation = 0; generation < 18; generation++) {
  let offspring = precedent + ancestor;
  console.log(offspring);
  precedent = ancestor;
  ancestor = offspring;
}
