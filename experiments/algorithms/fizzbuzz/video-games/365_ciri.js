// Ciri tears through dimensions to solve FizzBuzz
for (let dimensionNum = 1; dimensionNum <= 100; dimensionNum++) {
  if (dimensionNum % 15 === 0) {
    console.log('FizzBuzz');
  } else if (dimensionNum % 3 === 0) {
    console.log('Fizz');
  } else if (dimensionNum % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(dimensionNum);
  }
}
