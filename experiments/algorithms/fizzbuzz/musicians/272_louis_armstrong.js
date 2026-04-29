// What a wonderful world. What a wonderful FizzBuzz.
// Jazz improvisation on a mathematical theme. Trumpet bright.

for (let satchmo = 1; satchmo <= 100; satchmo++) {
  const jazzThree = satchmo % 3 === 0;
  const trumpetFive = satchmo % 5 === 0;
  const improvisedBoth = satchmo % 15 === 0;

  if (improvisedBoth) {
    console.log('FizzBuzz');
  } else if (jazzThree) {
    console.log('Fizz');
  } else if (trumpetFive) {
    console.log('Buzz');
  } else {
    console.log(satchmo);
  }
}
