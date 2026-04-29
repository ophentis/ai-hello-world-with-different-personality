// Scalable Sorting Architecture - Enterprise-grade approach to ordering data
// Demonstrates strategic use of built-in sorting mechanisms for system reliability

const strategicSort = (data) => {
  const sorted = data.sort((a, b) => a - b);
  console.log(`[${sorted.join(',')}]`);
};

strategicSort([82, 43, 10, 27, 38, 3, 9]);
