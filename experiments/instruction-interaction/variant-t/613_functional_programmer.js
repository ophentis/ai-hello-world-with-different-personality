// Pure functions. No side effects inside the logic layer.
// Composition over branching. Declarative over imperative.

// A rule is a pair of [predicate, label]
const fizz = n => n % 3 === 0 ? 'Fizz' : '';
const buzz = n => n % 5 === 0 ? 'Buzz' : '';

// Compose label producers: apply each, concatenate results
const compose = (...fns) => x => fns.map(f => f(x)).join('');

const fizzBuzzLabel = compose(fizz, buzz);

// fizzBuzz :: Number -> String | Number
const fizzBuzz = n => fizzBuzzLabel(n) || n;

// range :: (Number, Number) -> [Number]
const range = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, i) => i + start);

// Run: apply fizzBuzz over the range and print each result
range(1, 100).map(fizzBuzz).forEach(v => console.log(v));
