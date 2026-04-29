// Evolution through generations. 20 steps of adaptation and growth.
let ancestor = 0;
let offspring = 1;

console.log(ancestor);
console.log(offspring);

for (let era = 0; era < 18; era++) {
  let descendant = ancestor + offspring;
  console.log(descendant);
  ancestor = offspring;
  offspring = descendant;
}
