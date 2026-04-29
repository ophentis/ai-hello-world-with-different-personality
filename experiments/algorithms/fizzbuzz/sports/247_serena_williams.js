// Powerful. Champion. Determined to win. Every. Single. Time.
for (let match = 1; match <= 100; match++) {
  let powerOutput = '';

  if (match % 3 === 0) {
    powerOutput += 'Fizz';
  }
  if (match % 5 === 0) {
    powerOutput += 'Buzz';
  }

  console.log(powerOutput || match);
}
