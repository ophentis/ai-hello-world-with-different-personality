// MORTICIA: Cara mia! How these numbers dance to their darkly elegant pattern.
for (let position = 1; position <= 100; position++) {
  let pattern = '';
  if (position % 3 === 0) pattern += 'Fizz';
  if (position % 5 === 0) pattern += 'Buzz';
  console.log(pattern || position);
}
