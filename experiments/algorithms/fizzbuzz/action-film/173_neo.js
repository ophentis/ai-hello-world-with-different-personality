// Neo - "I know kung fu" - The One in the Matrix
// Choice and reality bending
for (let perception = 1; perception <= 100; perception++) {
  let illusion = '';

  if (perception % 3 === 0) {
    illusion += 'Fizz';
  }
  if (perception % 5 === 0) {
    illusion += 'Buzz';
  }

  if (!illusion) {
    illusion = perception;
  }

  console.log(illusion);
}
