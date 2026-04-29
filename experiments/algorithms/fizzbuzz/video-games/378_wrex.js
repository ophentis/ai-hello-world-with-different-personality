// Wrex headbutts his way through FizzBuzz
for (let krogNum = 1; krogNum <= 100; krogNum++) {
  if (krogNum % 15 === 0) {
    console.log('FizzBuzz');
  } else if (krogNum % 3 === 0) {
    console.log('Fizz');
  } else if (krogNum % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(krogNum);
  }
}
