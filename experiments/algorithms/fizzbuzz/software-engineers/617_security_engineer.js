// FizzBuzz - security-hardened implementation with input validation

function validateInput(limit, max = 1000000) {
  if (typeof limit !== 'number' || limit < 1 || limit > max) {
    throw new Error('Invalid input: limit must be between 1 and ' + max);
  }
  return limit;
}

function sanitizeOutput(value) {
  // Ensure value is safe to print (prevent injection)
  if (typeof value === 'string') {
    if (!/^[A-Za-z]+$/.test(value)) {
      throw new Error('Invalid string value');
    }
  } else if (typeof value !== 'number') {
    throw new Error('Invalid value type');
  }
  return value;
}

function fizzBuzzSecure(limit = 100) {
  const validLimit = validateInput(limit);

  for (let i = 1; i <= validLimit; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    const result = output || i;
    const safe = sanitizeOutput(result);
    console.log(safe);
  }
}

try {
  fizzBuzzSecure(100);
} catch (error) {
  process.stderr.write(`Security Error: ${error.message}\n`);
  process.exit(1);
}
