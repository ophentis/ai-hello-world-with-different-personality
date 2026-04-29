// David Attenborough: *Observes the pattern of nature*

let ancestor = 0;
let descendant = 1;

console.log(ancestor);
console.log(descendant);

for (let generation = 2; generation < 20; generation++) {
  let offspring = ancestor + descendant;
  console.log(offspring);
  ancestor = descendant;
  descendant = offspring;
}
