// I am Achilles, swift-footed and prideful in glory!
// These numbers shall fall beneath my unstoppable algorithm!
for (let i = 1; i <= 100; i++) {
  let gloriousStrike;
  if (i % 15 === 0) {
    gloriousStrike = 'FizzBuzz';
  } else if (i % 3 === 0) {
    gloriousStrike = 'Fizz';
  } else if (i % 5 === 0) {
    gloriousStrike = 'Buzz';
  } else {
    gloriousStrike = String(i);
  }
  console.log(gloriousStrike);
}
