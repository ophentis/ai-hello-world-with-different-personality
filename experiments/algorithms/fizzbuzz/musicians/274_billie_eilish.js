// Whisper the FizzBuzz. Dark pop. Gen Z. Quiet but heavy.
// WHEN WE ALL FALL ASLEEP, WHERE DO THE NUMBERS GO?

for (let whisper = 1; whisper <= 100; whisper++) {
  const darkThree = whisper % 3 === 0;
  const popFive = whisper % 5 === 0;
  const deeperWell = whisper % 15 === 0;

  if (deeperWell) {
    console.log('FizzBuzz');
  } else if (darkThree) {
    console.log('Fizz');
  } else if (popFive) {
    console.log('Buzz');
  } else {
    console.log(whisper);
  }
}
