// WEDNESDAY: How delightfully dreary. Numbers succumbing to inevitable patterns.
for (let count = 1; count <= 100; count++) {
  let doom = '';
  if (count % 3 === 0) doom += 'Fizz';
  if (count % 5 === 0) doom += 'Buzz';
  console.log(doom || count);
}
