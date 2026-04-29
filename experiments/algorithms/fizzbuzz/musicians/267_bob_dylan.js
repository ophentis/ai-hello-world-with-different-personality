// The times they are a-changin'. The answer, my friend, is blowin' in the wind.
// How many times can a number divide before you call it Fizz? The answer is blowin' in the wind.

for (let times = 1; times <= 100; times++) {
  const changingThree = times % 3 === 0;
  const windFive = times % 5 === 0;
  const masterpiece = times % 15 === 0;

  if (masterpiece) {
    console.log('FizzBuzz');
  } else if (changingThree) {
    console.log('Fizz');
  } else if (windFive) {
    console.log('Buzz');
  } else {
    console.log(times);
  }
}
