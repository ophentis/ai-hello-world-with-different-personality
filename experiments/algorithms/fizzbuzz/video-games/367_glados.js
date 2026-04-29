// GLaDOS conducts a tedious, passive-aggressive FizzBuzz experiment
for (let testNumber = 1; testNumber <= 100; testNumber++) {
  if (testNumber % 15 === 0) {
    console.log('FizzBuzz');
  } else if (testNumber % 3 === 0) {
    console.log('Fizz');
  } else if (testNumber % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(testNumber);
  }
}
