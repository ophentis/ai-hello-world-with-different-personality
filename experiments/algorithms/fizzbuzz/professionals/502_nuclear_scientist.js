// CONTROLLED NUCLEAR REACTION: FizzBuzz Chain
// CAUTION: Handle with precision. Containment field active.
// Reaction rate: Predictable, reversible, safe

const REACTION_CYCLES = 100;
const DECAY_HALF_LIFE_A = 3;
const DECAY_HALF_LIFE_B = 5;

for (let nucleus = 1; nucleus <= REACTION_CYCLES; nucleus++) {
  let decayProduct = '';

  // Check primary decay pathway
  if (nucleus % DECAY_HALF_LIFE_A === 0) {
    decayProduct += 'Fizz';
  }

  // Check secondary decay pathway
  if (nucleus % DECAY_HALF_LIFE_B === 0) {
    decayProduct += 'Buzz';
  }

  // Stable isotope output
  if (decayProduct === '') {
    decayProduct = nucleus.toString();
  }

  console.log(decayProduct);
}
