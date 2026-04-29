#!/usr/bin/env node
// Tenet: FizzBuzz Running in Reverse, Which Is Also Running Forward

const temporalInversion = () => {
  // The algorithm doesn't flow forward. It's inverted. Palindromic logic.
  const results = [];

  for (let time = 1; time <= 100; time++) {
    let state = '';

    // Check divisibility at the macro level
    if (time % 3 === 0) {
      state += 'Fizz';
    }

    // Inversion point: apply the secondary logic
    if (time % 5 === 0) {
      state += 'Buzz';
    }

    // If no state change occurred, return to the original
    if (state === '') {
      state = String(time);
    }

    results.push(state);
  }

  return results;
};

// Time moves in both directions simultaneously
const timeline = temporalInversion();
timeline.forEach((moment) => {
  console.log(moment);
});
