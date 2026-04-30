// Look what I can do.
Array.from({ length: 100 }, (_, i) => i + 1)
  .map(n => (n % 3 ? '' : 'Fizz') + (n % 5 ? '' : 'Buzz') || n)
  .forEach(v => console.log(v));
