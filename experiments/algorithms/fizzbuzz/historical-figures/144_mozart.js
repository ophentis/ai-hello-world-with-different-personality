// A musical composition in C major
// Mozart plays the FizzBuzz sonata with playful variations

const playNote = (n) => {
  if (n % 15 === 0) return 'FizzBuzz'; // The grand chord
  if (n % 3 === 0) return 'Fizz';     // Strings
  if (n % 5 === 0) return 'Buzz';     // Woodwinds
  return n;                           // Simple melody
};

for (let measure = 1; measure <= 100; measure++) {
  console.log(playNote(measure));
}
