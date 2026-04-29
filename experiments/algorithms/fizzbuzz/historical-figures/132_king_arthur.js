// By Excalibur and the code of chivalry, I command these numbers!
// The Round Table demands order and honor in all things.
for (let i = 1; i <= 100; i++) {
  let knightlyValue;
  if (i % 15 === 0) {
    knightlyValue = 'FizzBuzz';
  } else if (i % 3 === 0) {
    knightlyValue = 'Fizz';
  } else if (i % 5 === 0) {
    knightlyValue = 'Buzz';
  } else {
    knightlyValue = String(i);
  }
  console.log(knightlyValue);
}
