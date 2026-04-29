// Cortana - AI Companion Analytical Protocol

for (let cycle = 1; cycle <= 100; cycle++) {
  if (cycle % 15 === 0) {
    console.log('FizzBuzz');
  } else if (cycle % 3 === 0) {
    console.log('Fizz');
  } else if (cycle % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(cycle);
  }
}
