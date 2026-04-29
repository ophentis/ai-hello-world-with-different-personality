// Evolution. Natural selection. Beagle voyage. Adaptation.
for (let generation = 1; generation <= 100; generation++) {
  let species = '';

  if (generation % 3 === 0) {
    species += 'Fizz';
  }
  if (generation % 5 === 0) {
    species += 'Buzz';
  }

  console.log(species || generation);
}
