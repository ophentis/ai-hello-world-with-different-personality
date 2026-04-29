// Commander Shepard leads FizzBuzz with decisive authority
for (let commandNum = 1; commandNum <= 100; commandNum++) {
  if (commandNum % 15 === 0) {
    console.log('FizzBuzz');
  } else if (commandNum % 3 === 0) {
    console.log('Fizz');
  } else if (commandNum % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(commandNum);
  }
}
