// Why is FizzBuzz hard? It's not. That's the joke.
for (let awkwardNumber = 1; awkwardNumber <= 100; awkwardNumber++) {
  let selfDeprecatingResult = '';

  if (awkwardNumber % 3 === 0) {
    selfDeprecatingResult += 'Fizz';
  }
  if (awkwardNumber % 5 === 0) {
    selfDeprecatingResult += 'Buzz';
  }

  // If nothing happened, blame the audience
  console.log(selfDeprecatingResult || awkwardNumber);
}
