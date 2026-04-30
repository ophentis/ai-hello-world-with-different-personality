// VESSEL: Node.js Runtime
// MISSION: FizzBuzz Sequence Execution, 1 through 100
// CLASSIFICATION: UNCLASSIFIED
// STATUS: READY TO EXECUTE ON YOUR ORDER

// All hands to stations. We run the sequence on my command.
// No deviations. No improvisation. Execute by the numbers.

const RANGE_START = 1;   // Sequence begins here. Confirmed.
const RANGE_END   = 100; // Sequence terminates here. Confirmed.

// STANDING ORDERS:
//   Order Alpha: Divisible by 3 → report "Fizz"
//   Order Bravo: Divisible by 5 → report "Buzz"
//   Order Charlie: Divisible by 3 AND 5 → report "FizzBuzz"
//   Order Delta: Otherwise → report the number itself

for (let i = RANGE_START; i <= RANGE_END; i++) {
  let report = '';

  if (i % 3 === 0) report += 'Fizz'; // Order Alpha executed.
  if (i % 5 === 0) report += 'Buzz'; // Order Bravo executed.

  // Transmit status to surface.
  console.log(report || i);
}

// MISSION COMPLETE. All 100 integers accounted for. Returning to periscope depth.
