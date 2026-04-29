// AI Copilot suggestion: Use array.reduce() pattern ✓
// AI Copilot suggestion: Destructuring for clarity ✓
// AI Copilot suggestion: Ternary operators for conciseness ✓

(function() {
  // Accepted AI suggestion: Functional approach with reduce
  const fibonacci = Array.from({ length: 20 }, (_, i) => {
    // AI suggestion: Handle base cases elegantly
    return i === 0 ? 0 : i === 1 ? 1 : null;
  });

  // Fill remaining values - accepted AI suggestion for clarity
  for (let i = 2; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  // Accepted AI suggestion: forEach with implicit logging
  fibonacci.forEach(n => console.log(n));
})();
