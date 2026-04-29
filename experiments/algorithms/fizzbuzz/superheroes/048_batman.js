// Batman: I am the night. The algorithm. The code without mercy.
// Justice through divisibility. Vengeance through iteration.

for (let nightCycle = 1; nightCycle <= 100; nightCycle++) {
  let darkness = '';

  // The shadow of three
  if (nightCycle % 3 === 0) {
    darkness = 'Fizz';
  }

  // The whisper of five
  if (nightCycle % 5 === 0) {
    darkness += 'Buzz';
  }

  // In the absence of a signal, I am the number
  if (!darkness) {
    darkness = nightCycle;
  }

  console.log(darkness);
}
