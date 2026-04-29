// NASA MISSION-CRITICAL FIZZBUZZ
// Redundancy verification: Primary algorithm with secondary validation
// Ground Control: All systems nominal

const ITERATION_COUNT = 100;
const DIVISOR_THREE = 3;
const DIVISOR_FIVE = 5;

// PRIMARY EXECUTION PATH
for (let i = 1; i <= ITERATION_COUNT; i++) {
  let output = '';
  let divisibleByThree = (i % DIVISOR_THREE) === 0;
  let divisibleByFive = (i % DIVISOR_FIVE) === 0;

  if (divisibleByThree) output += 'Fizz';
  if (divisibleByFive) output += 'Buzz';
  if (output === '') output = String(i);

  console.log(output);
}
