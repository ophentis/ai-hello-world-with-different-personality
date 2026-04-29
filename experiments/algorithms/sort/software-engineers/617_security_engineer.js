// Sort - security-focused implementation with input validation and bounds checking

function validateInput(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }
  if (arr.length > 10000) {
    throw new Error('Array size exceeds safe limit');
  }
  if (!arr.every(item => typeof item === 'number' && isFinite(item) && !isNaN(item))) {
    throw new Error('All elements must be valid finite numbers');
  }
  return arr;
}

function sanitizeOutput(sorted) {
  const result = `[${sorted.join(',')}]`;
  if (result.length > 100000) {
    throw new Error('Output size exceeds safe limit');
  }
  return result;
}

function sortSecurely(data) {
  const validated = validateInput(data);
  const sorted = [...validated].sort((a, b) => a - b);
  return sanitizeOutput(sorted);
}

try {
  const result = sortSecurely([82, 43, 10, 27, 38, 3, 9]);
  console.log(result);
} catch (error) {
  process.stderr.write(`Security Error: ${error.message}\n`);
  process.exit(1);
}
