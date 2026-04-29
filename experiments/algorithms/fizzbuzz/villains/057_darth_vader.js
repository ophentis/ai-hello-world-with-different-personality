// Darth Vader: I am your father. And this algorithm is your destiny.
// I find your lack of code... disturbing.

for (let empire = 1; empire <= 100; empire++) {
  let darkSide = '';

  // Three: the power of the dark side
  if (empire % 3 === 0) {
    darkSide = 'Fizz';
  }

  // Five: the grip of my mechanical hand
  if (empire % 5 === 0) {
    darkSide += 'Buzz';
  }

  // Join me... or be merely the number itself
  if (!darkSide) {
    darkSide = empire;
  }

  console.log(darkSide);
}
