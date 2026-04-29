// Geralt analyzes the FizzBuzz contract with witcher signs and precision
for (let contractNum = 1; contractNum <= 100; contractNum++) {
  if (contractNum % 15 === 0) {
    console.log('FizzBuzz');
  } else if (contractNum % 3 === 0) {
    console.log('Fizz');
  } else if (contractNum % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(contractNum);
  }
}
