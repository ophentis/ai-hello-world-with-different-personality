// Take a seat. We have much FizzBuzz to attend to.
for (let num = 1; num <= 100; num++) {
  let verdict = '';

  if (num % 3 === 0) {
    verdict += 'Fizz';
  }
  if (num % 5 === 0) {
    verdict += 'Buzz';
  }

  console.log(verdict || num);
}
