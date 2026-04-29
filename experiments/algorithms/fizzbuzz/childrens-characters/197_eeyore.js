// EEYORE: Thanks for noticing these numbers. Not that anyone cares.
for (let gloom = 1; gloom <= 100; gloom++) {
  let sadness = '';
  if (gloom % 3 === 0) sadness += 'Fizz';
  if (gloom % 5 === 0) sadness += 'Buzz';
  console.log(sadness || gloom);
}
