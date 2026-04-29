// Iron Man: JARVIS-level algorithm optimization. Genius. Sarcastic. Tech.
// I am Iron Man. And this code is, predictably, superior.

for (let arc = 1; arc <= 100; arc++) {
  let resonance = '';

  // Three: divisible like my armor tech
  if (arc % 3 === 0) {
    resonance = 'Fizz';
  }

  // Five: the frequency of my repulsor array
  if (arc % 5 === 0) {
    resonance += 'Buzz';
  }

  // Otherwise, display the bare number—I'll make it interesting
  if (!resonance) {
    resonance = arc;
  }

  console.log(resonance);
}
