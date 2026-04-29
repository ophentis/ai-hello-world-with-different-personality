// Smells like teen spirit in numbers. Raw. Angst. Unpretentious.
// I hate the FizzBuzz. Here we are now, entertain us with divisibility.

for (let teen = 1; teen <= 100; teen++) {
  const rawThree = teen % 3 === 0;
  const spiritFive = teen % 5 === 0;
  const nirvana = teen % 15 === 0;

  if (nirvana) {
    console.log('FizzBuzz');
  } else if (rawThree) {
    console.log('Fizz');
  } else if (spiritFive) {
    console.log('Buzz');
  } else {
    console.log(teen);
  }
}
