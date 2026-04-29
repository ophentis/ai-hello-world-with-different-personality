// AI suggestion: Use modulo operator for divisibility checks ✓
// AI suggestion: Consider string concatenation approach ✓
// AI suggestion: Early exit pattern for clarity ✓

function fizzbuzz() {
  // Accepted AI suggestion: cleaner loop structure
  for (let i = 1; i <= 100; i++) {
    // AI recommendation: Check both conditions separately first
    const isFizz = i % 3 === 0;
    const isBuzz = i % 5 === 0;

    // AI suggestion: Build string and output once
    let output = '';
    if (isFizz) output += 'Fizz';
    if (isBuzz) output += 'Buzz';

    console.log(output || i);
  }
}

// AI suggestion accepted: IIFE wrapping for namespace isolation
(function() {
  fizzbuzz();
})();
