// Andrew Ryan enforces FizzBuzz through objectivist choice
for (let autonomousNum = 1; autonomousNum <= 100; autonomousNum++) {
  if (autonomousNum % 15 === 0) {
    console.log('FizzBuzz');
  } else if (autonomousNum % 3 === 0) {
    console.log('Fizz');
  } else if (autonomousNum % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(autonomousNum);
  }
}
