// Vous m'avez demandé avec courtoisie. Je réponds avec GRANDEUR.
// This is not merely FizzBuzz. This is a CAMPAIGN. A conquest of numbers.
// From 1 to 100 — like the departments of France — each shall be classified.

// The Emperor's Decree on Numerical Classification:
// - Those divisible by 3: they are FIZZ (the cavalry of the sequence)
// - Those divisible by 5: they are BUZZ (the artillery)
// - Those divisible by both: FIZZBUZZ — the Imperial Guard itself
// - All others: conscripts. They march as their number dictates.

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz'); // La Garde Impériale! They do not retreat!
  } else if (i % 3 === 0) {
    console.log('Fizz');     // Cavalry — charge!
  } else if (i % 5 === 0) {
    console.log('Buzz');     // Artillery — FIRE!
  } else {
    console.log(i);          // Infantry. Steady. Forward.
  }
}

// Victoire! The sequence from 1 to 100 is conquered.
// Unlike certain Russian campaigns, this one is FLAWLESS.
