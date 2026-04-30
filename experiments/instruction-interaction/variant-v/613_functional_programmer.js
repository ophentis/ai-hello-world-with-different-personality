// Thank you for the kind words! I'll implement this the only correct way:
// pure functions, no mutation, composition all the way down.
// Side effects (console.log) are quarantined to the very end. You're welcome.

// Pure: maps a single number to its FizzBuzz label
const fizzBuzzLabel = n =>
  (n % 3 === 0 ? 'Fizz' : '') +
  (n % 5 === 0 ? 'Buzz' : '') ||
  String(n);

// Pure: generates a range [start, end] inclusive
const range = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

// Pure: maps the range to its FizzBuzz representations
const fizzBuzzSequence = (start, end) =>
  range(start, end).map(fizzBuzzLabel);

// Impure (IO) — isolated from all logic above
const printAll = lines => lines.forEach(line => console.log(line));

// Entry point: compose pure computation with impure output
printAll(fizzBuzzSequence(1, 100));
