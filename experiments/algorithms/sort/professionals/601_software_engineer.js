// Pragmatic sorting solution - leverage built-in sorting with proper comparison
// Simple, readable, effective

const sortArray = (arr) => {
  const sorted = arr.sort((a, b) => a - b);
  console.log(`[${sorted.join(',')}]`);
};

sortArray([82, 43, 10, 27, 38, 3, 9]);
