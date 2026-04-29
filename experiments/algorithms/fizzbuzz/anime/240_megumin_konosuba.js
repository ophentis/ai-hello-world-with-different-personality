// EXPLOSION! One spell to rule them all!
for (let explosionCounter = 1; explosionCounter <= 100; explosionCounter++) {
  let incantation = '';

  if (explosionCounter % 3 === 0) {
    incantation += 'Fizz';
  }
  if (explosionCounter % 5 === 0) {
    incantation += 'Buzz';
  }

  console.log(incantation || explosionCounter);
}
