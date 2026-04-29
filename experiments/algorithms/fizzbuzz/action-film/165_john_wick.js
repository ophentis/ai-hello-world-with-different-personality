// John Wick - focused, efficient, lethal precision
// "Yeah." - Just get it done.
for (let target = 1; target <= 100; target++) {
  let elimination = '';

  if (target % 3 === 0) {
    elimination += 'Fizz';
  }
  if (target % 5 === 0) {
    elimination += 'Buzz';
  }

  if (!elimination) {
    elimination = target;
  }

  console.log(elimination);
}
