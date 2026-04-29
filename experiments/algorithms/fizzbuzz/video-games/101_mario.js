// It's-a me, Mario! Jumping through FizzBuzz one block at a time!

for (let numero = 1; numero <= 100; numero++) {
  let message = '';

  // Jump on 3s!
  if (numero % 3 === 0) {
    message += 'Fizz';
  }

  // Coin collect on 5s!
  if (numero % 5 === 0) {
    message += 'Buzz';
  }

  // Mamma mia, just a number!
  console.log(message || numero);
}
