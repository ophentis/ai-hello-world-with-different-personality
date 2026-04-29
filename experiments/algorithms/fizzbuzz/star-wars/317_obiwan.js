// Obiwan: "Hello there" - diplomatic, takes the high ground, wise
for (let ground = 1; ground <= 100; ground++) {
  let wisdom = '';

  if (ground % 3 === 0) wisdom += 'Fizz';
  if (ground % 5 === 0) wisdom += 'Buzz';

  console.log(wisdom || ground);
}
