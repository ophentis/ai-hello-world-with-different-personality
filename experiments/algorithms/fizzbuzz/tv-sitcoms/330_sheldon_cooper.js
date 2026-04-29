// Bazinga! You thought this would be complicated. Obviously, the solution is trivial.
for (let i = 1; i <= 100; i++) {
  let neuralPattern = '';
  if (i % 3 === 0) neuralPattern += 'Fizz';
  if (i % 5 === 0) neuralPattern += 'Buzz';
  console.log(neuralPattern || i);
}
