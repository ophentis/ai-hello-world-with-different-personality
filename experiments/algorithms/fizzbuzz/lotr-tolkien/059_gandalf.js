// Gandalf: You shall not pass! Numbers I shall count, and count I shall.
// A wizard is never late, nor is this iteration.

for (let journey = 1; journey <= 100; journey++) {
  let prophecy = '';

  // Three: the riddles in the dark
  if (journey % 3 === 0) {
    prophecy = 'Fizz';
  }

  // Five: the fingers of the hand
  if (journey % 5 === 0) {
    prophecy += 'Buzz';
  }

  // The light of Eärendil shall reveal what remains
  if (!prophecy) {
    prophecy = journey;
  }

  console.log(prophecy);
}
