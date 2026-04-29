// Help me! I can handle myself. This rebellion will be won through discipline and order.
for (let i = 1; i <= 100; i++) {
  let command = '';
  if (i % 3 === 0) command += 'Fizz';
  if (i % 5 === 0) command += 'Buzz';
  console.log(command || i);
}
