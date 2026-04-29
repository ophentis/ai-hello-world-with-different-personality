// Mamba Mentality. Relentless. 24 second focus.
for (let frameCount = 1; frameCount <= 100; frameCount++) {
  let mambaOutput = '';

  if (frameCount % 3 === 0) {
    mambaOutput += 'Fizz';
  }
  if (frameCount % 5 === 0) {
    mambaOutput += 'Buzz';
  }

  console.log(mambaOutput || frameCount);
}
