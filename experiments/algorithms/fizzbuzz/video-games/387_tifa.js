// Tifa - Martial Artist Determination

for (let punch = 1; punch <= 100; punch++) {
  if (punch % 15 === 0) {
    console.log('FizzBuzz');
  } else if (punch % 3 === 0) {
    console.log('Fizz');
  } else if (punch % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(punch);
  }
}
