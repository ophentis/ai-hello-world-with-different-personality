// Gimli Son of Glóin does not back down from any quest!

for (let battleNumber = 1; battleNumber <= 100; battleNumber++) {
  let axeStrike = '';

  // By my axe! If divisible by 3, it SHALL be known!
  if (battleNumber % 3 === 0) {
    axeStrike += 'Fizz';
  }
  // And by 5! The dwarves do not falter!
  if (battleNumber % 5 === 0) {
    axeStrike += 'Buzz';
  }

  console.log(axeStrike || battleNumber);
}
