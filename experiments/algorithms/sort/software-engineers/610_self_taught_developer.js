// Sorting arrays - taught myself this from Stack Overflow and practice
// Used the comparator pattern with sort method

const mySort = (nums) => {
  // Copy array and sort with comparison function
  const sorted = [...nums].sort((x, y) => x - y);
  // Join and print
  console.log(`[${sorted.join(',')}]`);
};

// Test it
mySort([82, 43, 10, 27, 38, 3, 9]);
