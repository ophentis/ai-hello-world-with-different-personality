#!/usr/bin/env node
// Raging Bull: Round After Round of Numerical Combat

const ragingBullSequence = () => {
  // Round 1. Round 2. Round 3. Each number hits the last two numbers.
  // This is how you build a championship sequence.

  let fighter_A = 0;
  let fighter_B = 1;
  const rounds = [];

  for (let round = 0; round < 20; round++) {
    rounds.push(fighter_A);
    const nextRound = fighter_A + fighter_B;
    fighter_A = fighter_B;
    fighter_B = nextRound;
  }

  return rounds;
};

const sequence = ragingBullSequence();
sequence.forEach((count) => {
  console.log(count);
});
