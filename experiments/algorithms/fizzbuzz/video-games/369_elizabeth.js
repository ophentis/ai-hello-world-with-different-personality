// Elizabeth observes FizzBuzz across tears in reality
for (let tearNum = 1; tearNum <= 100; tearNum++) {
  if (tearNum % 15 === 0) {
    console.log('FizzBuzz');
  } else if (tearNum % 3 === 0) {
    console.log('Fizz');
  } else if (tearNum % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(tearNum);
  }
}
