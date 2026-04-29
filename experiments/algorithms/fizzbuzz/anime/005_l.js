// L: Obsessive analytical pattern
[...Array(100)].map((_, i) => i + 1).forEach(number => {
  const output = (number % 3 === 0 ? 'Fizz' : '') +
                 (number % 5 === 0 ? 'Buzz' : '') || number;
  console.log(output);
});
