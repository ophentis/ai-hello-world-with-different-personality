// Aerith - Flower Girl's Ancient Magic

for (let blessing = 1; blessing <= 100; blessing++) {
  if (blessing % 15 === 0) {
    console.log('FizzBuzz');
  } else if (blessing % 3 === 0) {
    console.log('Fizz');
  } else if (blessing % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(blessing);
  }
}
