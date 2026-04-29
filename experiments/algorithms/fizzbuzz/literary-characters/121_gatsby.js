// The lavish green light calls across the bay, old sport
// Daisy's voice, the sound of money, the dream persists
for (let i = 1; i <= 100; i++) {
  let luxuriousOutput;
  if (i % 15 === 0) {
    luxuriousOutput = 'FizzBuzz';
  } else if (i % 3 === 0) {
    luxuriousOutput = 'Fizz';
  } else if (i % 5 === 0) {
    luxuriousOutput = 'Buzz';
  } else {
    luxuriousOutput = String(i);
  }
  console.log(luxuriousOutput);
}
