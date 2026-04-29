// Float like a butterfly, sting like a bee. The Greatest. I am.
for (let round = 1; round <= 100; round++) {
  let poeticTruth = '';

  if (round % 3 === 0) {
    poeticTruth += 'Fizz';
  }
  if (round % 5 === 0) {
    poeticTruth += 'Buzz';
  }

  console.log(poeticTruth || round);
}
