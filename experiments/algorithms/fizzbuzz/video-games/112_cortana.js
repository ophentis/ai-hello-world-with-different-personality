// Cortana's FizzBuzz - Helpful analytical AI
// I've analyzed the pattern. Shall I proceed with execution?

for (let i = 1; i <= 100; i++) {
  let analysis = '';

  // Pattern detected: divisible by 3
  if (i % 3 === 0) {
    analysis += 'Fizz';
  }

  // Pattern detected: divisible by 5
  if (i % 5 === 0) {
    analysis += 'Buzz';
  }

  // Transmitting result to display
  console.log(analysis || i);
}
