// Rapid-fire wordplay FizzBuzz at 200 BPM
// Eminem drops rhymes on divisibility with machine-gun precision

const slim_shady = (n) => {
  if (n % 3 === 0 && n % 5 === 0) {
    return 'FizzBuzz'; // *beat drops*
  }
  if (n % 3 === 0) {
    return 'Fizz'; // Mom's spaghetti
  }
  if (n % 5 === 0) {
    return 'Buzz'; // Yo, this is sick
  }
  return n; // Spit it, split it, win it
};

// 100 bars of pure lyrical genius
for (let bar = 1; bar <= 100; bar++) {
  console.log(slim_shady(bar));
}
