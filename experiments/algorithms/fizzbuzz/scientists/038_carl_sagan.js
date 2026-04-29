// Carl Sagan: "Billions and billions..." of FizzBuzz sequences
// Poetic, cosmic perspective, wonder

// Billions and billions of iterations across the cosmos
for (let i = 1; i <= 100; i++) {
  let cosmicResult = '';

  if (i % 3 === 0) cosmicResult += 'Fizz';
  if (i % 5 === 0) cosmicResult += 'Buzz';

  console.log(cosmicResult || i);
}
