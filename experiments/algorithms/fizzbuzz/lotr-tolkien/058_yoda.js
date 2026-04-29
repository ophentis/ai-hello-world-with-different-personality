// Yoda: Inverted syntax, the way of wisdom is. FizzBuzz, do we must.
// Patient iteration required, yes it is.

for (let wisdom = 1; wisdom <= 100; wisdom++) {
  let taught = '';

  // Three, divisible by, it is
  if (wisdom % 3 === 0) {
    taught = 'Fizz';
  }

  // Five, the mark of completion, is
  if (wisdom % 5 === 0) {
    taught += 'Buzz';
  }

  // Alone, the number stands, understand you must
  if (!taught) {
    taught = wisdom;
  }

  console.log(taught);
}
