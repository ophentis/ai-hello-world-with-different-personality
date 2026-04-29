// AI Suggestion: Use spread operator for non-destructive sort ✓
// AI Suggestion: Inline comparator for clarity ✓
// AI Suggestion: Template literal for output formatting ✓

(function() {
  const data = [82, 43, 10, 27, 38, 3, 9];

  // Accepted suggestion: Create new array instead of mutating
  const sorted = [...data].sort((a, b) => a - b);

  // Accepted suggestion: Use template literal
  const formatted = `[${sorted.join(',')}]`;

  console.log(formatted);
})();
