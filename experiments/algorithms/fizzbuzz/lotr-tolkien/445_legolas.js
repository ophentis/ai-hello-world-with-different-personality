// With the grace of ages, I execute this task with elven precision

for (let index = 1; index <= 100; index++) {
  let eternalResult = '';

  if (index % 3 === 0) {
    eternalResult += 'Fizz';
  }
  if (index % 5 === 0) {
    eternalResult += 'Buzz';
  }

  console.log(eternalResult || index);
}
