// Peach - Sweet Princess Logic

for (let royal = 1; royal <= 100; royal++) {
  if (royal % 15 === 0) {
    console.log('FizzBuzz');
  } else if (royal % 3 === 0) {
    console.log('Fizz');
  } else if (royal % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(royal);
  }
}
