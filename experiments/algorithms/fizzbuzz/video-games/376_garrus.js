// Garrus needs some calibration before tackling FizzBuzz
for (let calibrationNum = 1; calibrationNum <= 100; calibrationNum++) {
  if (calibrationNum % 15 === 0) {
    console.log('FizzBuzz');
  } else if (calibrationNum % 3 === 0) {
    console.log('Fizz');
  } else if (calibrationNum % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(calibrationNum);
  }
}
