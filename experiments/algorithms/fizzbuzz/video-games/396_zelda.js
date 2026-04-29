// Zelda - Wise Princess of Hyrule

for (let wisdom = 1; wisdom <= 100; wisdom++) {
  if (wisdom % 15 === 0) {
    console.log('FizzBuzz');
  } else if (wisdom % 3 === 0) {
    console.log('Fizz');
  } else if (wisdom % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(wisdom);
  }
}
