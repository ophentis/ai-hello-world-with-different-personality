// I have a code. This one is clean, follows the pattern. No deviation allowed.
for (let i = 1; i <= 100; i++) {
  let darkPassenger = '';
  if (i % 3 === 0) darkPassenger += 'Fizz';
  if (i % 5 === 0) darkPassenger += 'Buzz';
  console.log(darkPassenger || i);
}
