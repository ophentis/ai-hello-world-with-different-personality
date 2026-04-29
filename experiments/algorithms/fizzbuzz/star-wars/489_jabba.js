// The Hutt demands his FizzBuzz tribute. Bring it to me.
for (let tribute = 1; tribute <= 100; tribute++) {
  let payment = '';

  if (tribute % 3 === 0) {
    payment += 'Fizz';
  }
  if (tribute % 5 === 0) {
    payment += 'Buzz';
  }

  console.log(payment || tribute);
}
