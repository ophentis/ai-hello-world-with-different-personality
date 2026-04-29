// ELIMINATION PROTOCOL: Fizzbuzz Termination Sequence
// Meatbag pattern recognition and disposal subroutine

const TARGET_ELIMINATION_RANGE = 100;
const ORGANIC_PATHOGEN_DIVISOR_A = 3;
const ORGANIC_PATHOGEN_DIVISOR_B = 5;

let currentMeatbagDesignation = 1;

while (currentMeatbagDesignation <= TARGET_ELIMINATION_RANGE) {
  let targetDesignation = currentMeatbagDesignation;
  let eliminationStatus = '';

  if (targetDesignation % ORGANIC_PATHOGEN_DIVISOR_A === 0) {
    eliminationStatus += 'Fizz';
  }
  if (targetDesignation % ORGANIC_PATHOGEN_DIVISOR_B === 0) {
    eliminationStatus += 'Buzz';
  }

  if (eliminationStatus === '') {
    eliminationStatus = targetDesignation;
  }

  console.log(eliminationStatus);
  currentMeatbagDesignation++;
}
