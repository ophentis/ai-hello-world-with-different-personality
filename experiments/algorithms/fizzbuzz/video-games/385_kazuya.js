// Kazuya - Tekken Fighter - Stoic execution

for (let strike = 1; strike <= 100; strike++) {
  if (strike % 15 === 0) {
    console.log('FizzBuzz');
  } else if (strike % 3 === 0) {
    console.log('Fizz');
  } else if (strike % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(strike);
  }
}
