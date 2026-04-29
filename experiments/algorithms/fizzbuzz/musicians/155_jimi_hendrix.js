// Experience the FizzBuzz in all its psychedelic glory
// Jimi Hendrix riffs on divisibility with improvisational genius

const bendTheNote = (n) => {
  // Feedback loop of divisibility
  if (n % 3 === 0 && n % 5 === 0) {
    return 'FizzBuzz'; // The guitar screams
  }
  if (n % 3 === 0) {
    return 'Fizz'; // Sustain and let it ring
  }
  if (n % 5 === 0) {
    return 'Buzz'; // A wild distorted solo
  }
  return n; // Pure, unplugged truth
};

// A hundred improvisations on the theme
for (let moment = 1; moment <= 100; moment++) {
  console.log(bendTheNote(moment));
}
