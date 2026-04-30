// FizzBuzz — please work, please work, please work

// TODO: What if someone changes the range? Should we validate it?
// TODO: What if console.log is undefined somehow? (probably fine... right?)
// TODO: Should we handle NaN? What if i becomes NaN mid-loop? (it won't but still)

const START = 1;  // TODO: make this configurable? env var?
const END = 100;  // TODO: is 100 inclusive? double-checked: YES. ok good.

// Defensive: make sure our constants are actually numbers
if (typeof START !== 'number' || typeof END !== 'number') {
  throw new Error('FATAL: START and END must be numbers. How did this happen??');
}
if (!Number.isFinite(START) || !Number.isFinite(END)) {
  throw new Error('FATAL: START and END must be finite');
}
if (START > END) {
  throw new Error('FATAL: START must be <= END');
}

for (let i = START; i <= END; i++) {
  // Defensive: verify i is still a sane integer (loop should guarantee this, but)
  if (!Number.isInteger(i)) {
    // TODO: log this somewhere? alert someone?
    console.error(`WARNING: i is not an integer at step ${i}. Skipping.`);
    continue;
  }

  let output = '';

  // Check divisibility by 3
  // NOTE: using strict modulo — no floating point weirdness expected here for integers
  if (i % 3 === 0) {
    output += 'Fizz';
  }

  // Check divisibility by 5
  if (i % 5 === 0) {
    output += 'Buzz';
  }

  // Fallback to the number itself
  // TODO: should we use String(i) to be safe? console.log coerces anyway... probably fine
  if (output === '') {
    output = i;
  }

  // TODO: what if console.log throws? wrap in try/catch?
  console.log(output);
}

// TODO: should we signal success somehow? exit code 0? that's the default... I think.
