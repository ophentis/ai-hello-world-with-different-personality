// Tali engineers FizzBuzz from inside her suit
for (let engineerNum = 1; engineerNum <= 100; engineerNum++) {
  if (engineerNum % 15 === 0) {
    console.log('FizzBuzz');
  } else if (engineerNum % 3 === 0) {
    console.log('Fizz');
  } else if (engineerNum % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(engineerNum);
  }
}
