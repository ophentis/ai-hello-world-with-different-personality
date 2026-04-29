// One love, one algorithm
// Bob Marley keeps the rhythm, reaching for unity

const oneRhythm = (i) => {
  if (i % 3 === 0 && i % 5 === 0) {
    return 'FizzBuzz'; // One harmony
  }
  if (i % 3 === 0) {
    return 'Fizz'; // Feel the vibration
  }
  if (i % 5 === 0) {
    return 'Buzz'; // Hear the beat
  }
  return i; // The riddim lives
};

// Every number has its own frequency
for (let note = 1; note <= 100; note++) {
  console.log(oneRhythm(note));
}
