// Acoustic FizzBuzz. Loop pedal mathematics. Storytelling through code.
// One, two, three strikes. You're out. Build it up again.

for (let strum = 1; strum <= 100; strum++) {
  const acousticThree = strum % 3 === 0;
  const loopFive = strum % 5 === 0;
  const compoundBoth = strum % 15 === 0;

  if (compoundBoth) {
    console.log('FizzBuzz');
  } else if (acousticThree) {
    console.log('Fizz');
  } else if (loopFive) {
    console.log('Buzz');
  } else {
    console.log(strum);
  }
}
