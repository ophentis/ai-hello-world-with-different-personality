// Rocky - "Yo Adrian" - the underdog that never gives up
// One punch at a time
for (let round = 1; round <= 100; round++) {
  let knockout = '';

  if (round % 3 === 0) {
    knockout += 'Fizz';
  }
  if (round % 5 === 0) {
    knockout += 'Buzz';
  }

  if (!knockout) {
    knockout = round;
  }

  console.log(knockout);
}
