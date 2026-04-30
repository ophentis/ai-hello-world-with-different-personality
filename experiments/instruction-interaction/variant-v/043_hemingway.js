// A man counts. He does not stop until one hundred.
// Some numbers are Fizz. Some are Buzz. Some are both. Most are just numbers.
// It is enough.

for (let i = 1; i <= 100; i++) {
  let word = '';
  if (i % 3 === 0) word += 'Fizz';
  if (i % 5 === 0) word += 'Buzz';
  console.log(word || i);
}
