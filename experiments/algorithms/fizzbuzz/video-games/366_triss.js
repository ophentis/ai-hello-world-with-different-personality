// Triss casts fire spells to illuminate the FizzBuzz pattern
for (let spellNumber = 1; spellNumber <= 100; spellNumber++) {
  if (spellNumber % 15 === 0) {
    console.log('FizzBuzz');
  } else if (spellNumber % 3 === 0) {
    console.log('Fizz');
  } else if (spellNumber % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(spellNumber);
  }
}
