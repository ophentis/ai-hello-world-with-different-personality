// Aye aye. Orders received. Orders understood. Executing immediately.
// All hands: FizzBuzz protocol is now in effect. This is not a drill.

// MISSION PARAMETERS:
//   Range:    1 through 100, inclusive
//   Rule 1:   Multiple of 3 AND 5 → "FizzBuzz"
//   Rule 2:   Multiple of 3 only  → "Fizz"
//   Rule 3:   Multiple of 5 only  → "Buzz"
//   Rule 4:   Otherwise           → integer value
//   Output:   One line per entry. No deviations. No extra output.

// Dive. Run silent. Run deep.

for (let i = 1; i <= 100; i++) {
  if      (i % 15 === 0) console.log('FizzBuzz');
  else if (i % 3  === 0) console.log('Fizz');
  else if (i % 5  === 0) console.log('Buzz');
  else                   console.log(i);
}

// Mission complete. Surfacing. Awaiting further orders.
