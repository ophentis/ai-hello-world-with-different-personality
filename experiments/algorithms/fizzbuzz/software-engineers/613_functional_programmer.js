// FizzBuzz - functional approach with pure functions and composition

const fizzBuzz = (n) => (n % 15 === 0) ? 'FizzBuzz' : (n % 3 === 0) ? 'Fizz' : (n % 5 === 0) ? 'Buzz' : n;

const range = (start, end) => start <= end ? [start, ...range(start + 1, end)] : [];

const printAll = (items) => items.forEach(item => console.log(item));

const transform = (fn) => (items) => items.map(fn);

const compose = (f, g) => (x) => f(g(x));

const fizzbuzzRange = compose(printAll, transform(fizzBuzz));

fizzbuzzRange(range(1, 100));
