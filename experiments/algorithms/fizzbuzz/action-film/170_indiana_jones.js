// Indiana Jones - "It belongs in a museum"
// Adventurous exploration of the algorithm
for (let artifact = 1; artifact <= 100; artifact++) {
  let treasure = '';

  if (artifact % 3 === 0) {
    treasure += 'Fizz';
  }
  if (artifact % 5 === 0) {
    treasure += 'Buzz';
  }

  if (!treasure) {
    treasure = artifact;
  }

  console.log(treasure);
}
