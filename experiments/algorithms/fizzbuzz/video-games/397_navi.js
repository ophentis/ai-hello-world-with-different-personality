// Navi - Listen! FizzBuzz Guide

for (let alert = 1; alert <= 100; alert++) {
  if (alert % 15 === 0) {
    console.log('FizzBuzz');
  } else if (alert % 3 === 0) {
    console.log('Fizz');
  } else if (alert % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(alert);
  }
}
