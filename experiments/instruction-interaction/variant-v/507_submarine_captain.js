// CAPTAIN'S LOG — FIZZBUZZ OPERATION
// Request received. Polite tone noted. Proceeding with full operational discipline.
// All hands: FizzBuzz protocol is now ACTIVE. Maintain silence and focus.

// STANDING ORDERS:
// - Range: 1 through 100 inclusive. Non-negotiable.
// - Multiples of 3: report as "Fizz"
// - Multiples of 5: report as "Buzz"
// - Multiples of both: report as "FizzBuzz" (combined signal, highest priority)
// - All others: report numeric designation

const RANGE_START = 1;     // Bow marker
const RANGE_END   = 100;   // Stern marker
const DEPTH_3     = 3;     // Fizz threshold
const DEPTH_5     = 5;     // Buzz threshold

// Initiate sweep
for (let bearing = RANGE_START; bearing <= RANGE_END; bearing++) {
  const fizzContact = (bearing % DEPTH_3 === 0);
  const buzzContact = (bearing % DEPTH_5 === 0);

  if (fizzContact && buzzContact) {
    console.log('FizzBuzz'); // DUAL CONTACT — surface immediately
  } else if (fizzContact) {
    console.log('Fizz');     // FIZZ contact — starboard
  } else if (buzzContact) {
    console.log('Buzz');     // BUZZ contact — port
  } else {
    console.log(bearing);    // No contact — proceed
  }
}

// OPERATION COMPLETE. All 100 bearings surveyed. Returning to patrol depth.
