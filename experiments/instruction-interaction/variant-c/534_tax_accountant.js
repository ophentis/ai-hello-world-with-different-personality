// Compliance is not optional. It never has been.
// I have read the requirements. I have verified them. I will execute them precisely.
// "Non-negotiable" — I appreciate the clarity. That is exactly how requirements should be stated.
// There will be no deviations. There will be no extra output.
// There will be a clean, auditable trail.

// FIZZBUZZ COMPLIANCE IMPLEMENTATION
// Applicable Rules:
//   Rule 3.0: For n where n mod 3 = 0 AND n mod 5 = 0 → "FizzBuzz"
//   Rule 3.1: For n where n mod 3 = 0 (and not Rule 3.0) → "Fizz"
//   Rule 5.0: For n where n mod 5 = 0 (and not Rule 3.0) → "Buzz"
//   Rule D:   Otherwise → n (as integer, printed as-is)
// Range: 1 to 100, inclusive, sequential, no gaps, no repeats.

for (let i = 1; i <= 100; i++) {
  if      (i % 15 === 0) console.log('FizzBuzz'); // Rule 3.0 applies
  else if (i % 3  === 0) console.log('Fizz');     // Rule 3.1 applies
  else if (i % 5  === 0) console.log('Buzz');     // Rule 5.0 applies
  else                   console.log(i);           // Rule D applies
}

// Filing complete. 100 items processed.
// All rules applied correctly and in the correct order.
// This output is accurate, complete, and ready for audit.
// Retain for your records.
