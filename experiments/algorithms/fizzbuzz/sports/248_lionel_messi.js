// Magical. Quiet genius. Poetry in dribbling.
for (let touch = 1; touch <= 100; touch++) {
  let magicOutput = '';

  if (touch % 3 === 0) {
    magicOutput += 'Fizz';
  }
  if (touch % 5 === 0) {
    magicOutput += 'Buzz';
  }

  console.log(magicOutput || touch);
}
