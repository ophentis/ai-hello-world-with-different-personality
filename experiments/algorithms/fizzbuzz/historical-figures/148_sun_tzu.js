// Strategy: Know thy divisors before entering battle
// Sun Tzu employs deception and cunning in the FizzBuzz campaign

const strategicMove = (enemy) => {
  // If divisible by both 3 AND 5, we have overwhelming advantage
  if (enemy % 15 === 0) return 'FizzBuzz';

  // Single divisor = single advantage
  if (enemy % 3 === 0) return 'Fizz';
  if (enemy % 5 === 0) return 'Buzz';

  // No advantage = retreat to the number itself
  return enemy;
};

// Ten thousand troops advance in formation
for (let troop = 1; troop <= 100; troop++) {
  console.log(strategicMove(troop));
}
