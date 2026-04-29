// Jackie Chan - "No trouble!"
// Acrobatic algorithm with comedic timing
for (let no_problem = 1; no_problem <= 100; no_problem++) {
  let stunt = '';

  if (no_problem % 3 === 0) {
    stunt += 'Fizz';
  }
  if (no_problem % 5 === 0) {
    stunt += 'Buzz';
  }

  // Just do it, with humor
  if (!stunt) {
    stunt = no_problem;
  }

  console.log(stunt);
}
