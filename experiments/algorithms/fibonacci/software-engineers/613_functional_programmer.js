// Fibonacci - pure functional approach with composition

const fibonacci = (count) => {
  const generate = (acc, n) => n === 0 ? acc : generate([...acc, acc.length < 2 ? (acc.length === 0 ? 0 : 1) : acc[acc.length - 1] + acc[acc.length - 2]], n - 1);

  return generate([], count);
};

const sequence = fibonacci(20);

const print = (items) => items.forEach(item => console.log(item));

print(sequence);
