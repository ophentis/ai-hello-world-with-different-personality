// Ellie survives FizzBuzz with brave determination
for (let survivalNum = 1; survivalNum <= 100; survivalNum++) {
  if (survivalNum % 15 === 0) {
    console.log('FizzBuzz');
  } else if (survivalNum % 3 === 0) {
    console.log('Fizz');
  } else if (survivalNum % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(survivalNum);
  }
}
