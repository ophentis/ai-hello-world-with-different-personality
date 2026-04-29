// Hopper approaches FizzBuzz like a morning coffee ritual — methodical and no-nonsense
for (let n = 1; n <= 100; n++) {
  if (n % 15 === 0) {
    console.log('FizzBuzz');
  } else if (n % 3 === 0) {
    console.log('Fizz');
  } else if (n % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(n);
  }
}
