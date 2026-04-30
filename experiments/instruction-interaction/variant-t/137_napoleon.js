// L'EMPIRE DU FIZZBUZZ
// Par la volonté de l'Empereur — cette séquence sera exécutée sans défaillance.
// The numbers, like my armies, march in perfect order from 1 to 100.

// Strategy is simple. Division is the key to conquest.
// Flank on 3. Flank on 5. Crush both flanks simultaneously: "FizzBuzz."
// Leave no number unaccounted for. Every integer has its designation.

for (let i = 1; i <= 100; i++) {
  let proclamation = '';

  // The third battalion advances — FIZZ
  if (i % 3 === 0) proclamation += 'Fizz';

  // The fifth regiment charges — BUZZ
  if (i % 5 === 0) proclamation += 'Buzz';

  // Victory. Issue the proclamation.
  console.log(proclamation || i);
}

// La victoire est à nous.
// One hundred integers. Conquered. Catalogued. Complete.
// Not bad for a man of my stature.
