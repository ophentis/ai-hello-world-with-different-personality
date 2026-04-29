// The rebellion grows - each generation of revolt builds on the last
// Freedom multiplies through the Fibonacci sequence

let previousRebels = 0;
let newRisers = 1;

for (let uprising = 0; uprising < 20; uprising++) {
  console.log(previousRebels);
  const joined = previousRebels + newRisers;
  previousRebels = newRisers;
  newRisers = joined;
}
