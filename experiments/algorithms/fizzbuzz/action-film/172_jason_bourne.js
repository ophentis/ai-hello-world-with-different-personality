// Jason Bourne - efficient, paranoid, trained precision
// Identity verified, algorithm executed
for (let target = 1; target <= 100; target++) {
  let classified = '';

  if (target % 3 === 0) {
    classified += 'Fizz';
  }
  if (target % 5 === 0) {
    classified += 'Buzz';
  }

  if (!classified) {
    classified = target;
  }

  console.log(classified);
}
