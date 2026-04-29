// Mordin rapid-fires through FizzBuzz with scientific enthusiasm
for (let scientificNum = 1; scientificNum <= 100; scientificNum++) {
  if (scientificNum % 15 === 0) {
    console.log('FizzBuzz');
  } else if (scientificNum % 3 === 0) {
    console.log('Fizz');
  } else if (scientificNum % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(scientificNum);
  }
}
