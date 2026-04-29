// Einstein: Thought experiments on FizzBuzz
// Relativity, E=mc2, elegant simplicity underlying complexity

// Let's imagine a theoretical framework for FizzBuzz
for (let iteration = 1; iteration <= 100; iteration++) {
  let theoreticalResult = '';

  if (iteration % 3 === 0) theoreticalResult += 'Fizz';
  if (iteration % 5 === 0) theoreticalResult += 'Buzz';

  console.log(theoreticalResult || iteration);
}
