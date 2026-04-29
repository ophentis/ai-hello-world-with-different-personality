// The fastest alive. Lightning pose. Unbeatable confidence.
for (let stride = 1; stride <= 100; stride++) {
  let speedOutput = '';

  if (stride % 3 === 0) {
    speedOutput += 'Fizz';
  }
  if (stride % 5 === 0) {
    speedOutput += 'Buzz';
  }

  console.log(speedOutput || stride);
}
