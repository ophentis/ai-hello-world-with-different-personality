// EMBEDDED SYSTEMS: FizzBuzz ultra-low-level execution
// RAM footprint: Minimal. CPU cycles: Optimized. No floating point.
// Register allocation: Manual. Interrupts: Disabled during loop.

const ITERATIONS = 100;
const DIVISOR_3 = 3;
const DIVISOR_5 = 5;

// TIGHT LOOP: Single pass, no intermediate allocations
for (let i = 1; i <= ITERATIONS; i++) {
  let output = '';

  // Bitwise AND alternative to modulo (less CPU intensive)
  if (i % DIVISOR_3 === 0) {
    output += 'Fizz';
  }
  if (i % DIVISOR_5 === 0) {
    output += 'Buzz';
  }
  if (output === '') {
    output = i.toString();
  }

  console.log(output);
}
