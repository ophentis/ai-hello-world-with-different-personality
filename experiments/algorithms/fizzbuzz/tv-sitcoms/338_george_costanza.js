// This is a disaster. Why do I always mess everything up? Here it is anyway.
for (let i = 1; i <= 100; i++) {
  let loser = '';
  if (i % 3 === 0) loser += 'Fizz';
  if (i % 5 === 0) loser += 'Buzz';
  console.log(loser || i);
}
