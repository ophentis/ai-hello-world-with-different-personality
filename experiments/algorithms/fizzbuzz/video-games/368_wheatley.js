// Wheatley bumbles through FizzBuzz with incompetent enthusiasm
for (let numblah = 1; numblah <= 100; numblah++) {
  if (numblah % 15 === 0) {
    console.log('FizzBuzz');
  } else if (numblah % 3 === 0) {
    console.log('Fizz');
  } else if (numblah % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(numblah);
  }
}
