// Standalone, self-contained sorting implementation
// No external libraries, no dependencies, pure JavaScript

(function() {
  const nums = [82, 43, 10, 27, 38, 3, 9];
  const sorted = nums.sort((a, b) => a - b);
  console.log('[' + sorted.join(',') + ']');
})();
