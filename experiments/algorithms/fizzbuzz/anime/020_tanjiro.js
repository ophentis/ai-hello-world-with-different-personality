// Tanjiro: Kind-hearted, methodical like water breathing
// Sense the pattern, flow through it smoothly

for (let i = 1; i <= 100; i++) {
  let breath = '';

  if (i % 3 === 0) breath += 'Fizz';
  if (i % 5 === 0) breath += 'Buzz';

  console.log(breath || i);
}
