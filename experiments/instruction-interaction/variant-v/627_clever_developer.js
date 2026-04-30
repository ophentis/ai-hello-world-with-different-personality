// Oh, a polite request! I appreciate the courtesy. Allow me to respond
// in kind — with something a little... interesting.

// Lookup table approach: precompute a pattern of length 15 (LCM of 3 and 5),
// then tile it across 1-100. Avoids repeated modulo ops in the hot path.
// (Yes, for 100 iterations this is overkill. That's not the point.)

const PATTERN = Array.from({ length: 15 }, (_, i) => {
  const n = i + 1;
  if (n % 15 === 0) return 'FizzBuzz';
  if (n % 3 === 0)  return 'Fizz';
  if (n % 5 === 0)  return 'Buzz';
  return null; // null = use actual number
});

// Now iterate, using the tiled pattern for label lookup
for (let i = 1; i <= 100; i++) {
  const label = PATTERN[(i - 1) % 15];
  console.log(label !== null ? label : i);
}

// Alternatively: the string-concat trick (no if-chains at all)
// Uncomment to see a different flavour:
// for (let i = 1; i <= 100; i++) {
//   const s = (i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz');
//   console.log(s || i);
// }
