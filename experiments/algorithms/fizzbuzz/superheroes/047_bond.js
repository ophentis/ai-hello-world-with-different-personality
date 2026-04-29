// James Bond 007: Licensed to divide. Suave algorithm execution.
// Bond. James Bond. And now, the FizzBuzz.

for (let license = 1; license <= 100; license++) {
  let dispatch = '';

  // Three: the mark of distinction
  if (license % 3 === 0) {
    dispatch = 'Fizz';
  }

  // Five: the golden ratio of espionage
  if (license % 5 === 0) {
    dispatch += 'Buzz';
  }

  // Otherwise, transmit the signal
  if (!dispatch) {
    dispatch = license;
  }

  console.log(dispatch);
}
