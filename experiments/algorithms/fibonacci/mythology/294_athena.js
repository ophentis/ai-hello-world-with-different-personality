// Athena's offspring - the wise lineage grows through Fibonacci
// Strategy begets strategy, wisdom multiplies

let formerGeneration = 0;
let currentGeneration = 1;

for (let age = 0; age < 20; age++) {
  console.log(formerGeneration);
  const nextGeneration = formerGeneration + currentGeneration;
  formerGeneration = currentGeneration;
  currentGeneration = nextGeneration;
}
