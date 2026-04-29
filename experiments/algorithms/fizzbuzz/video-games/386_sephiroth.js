// Sephiroth - One-Winged Angel's Design

for (let descent = 1; descent <= 100; descent++) {
  if (descent % 15 === 0) {
    console.log('FizzBuzz');
  } else if (descent % 3 === 0) {
    console.log('Fizz');
  } else if (descent % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(descent);
  }
}
