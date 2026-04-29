// FizzBuzz - cross-team reference implementation
// Demonstrates patterns suitable for standardization across platform

const fizzbuzz = function* (limit = 100) {
  for (let i = 1; i <= limit; i++) {
    let result = '';
    if (i % 3 === 0) result += 'Fizz';
    if (i % 5 === 0) result += 'Buzz';
    yield result || i;
  }
};

for (const value of fizzbuzz()) {
  console.log(value);
}
