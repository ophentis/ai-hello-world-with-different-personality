// Imagine all the numbers living in harmony
// No divisibility, no Fizz or Buzz. Just imagine.

for (let imagine = 1; imagine <= 100; imagine++) {
  const divByThree = imagine % 3 === 0;
  const divByFive = imagine % 5 === 0;

  if (divByThree && divByFive) {
    console.log('FizzBuzz');
  } else if (divByThree) {
    console.log('Fizz');
  } else if (divByFive) {
    console.log('Buzz');
  } else {
    console.log(imagine);
  }
}
