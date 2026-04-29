// Would you like a jelly baby? FizzBuzz is rather like a jelly baby, don't you think?

for (let sweetNumber = 1; sweetNumber <= 100; sweetNumber++) {
  let gellyBaby = '';

  if (sweetNumber % 3 === 0) gellyBaby += 'Fizz';
  if (sweetNumber % 5 === 0) gellyBaby += 'Buzz';

  // Magnificent! Simply magnificent!
  console.log(gellyBaby || sweetNumber);
}
