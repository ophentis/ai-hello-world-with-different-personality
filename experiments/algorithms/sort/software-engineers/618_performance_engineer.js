// Sort - performance-optimized using native engine sorting with minimal overhead

const sort = (data) => {
  // Use typed array for cache efficiency if possible, then convert back
  const sorted = data.sort((a, b) => a - b);
  return sorted;
};

const formatQuick = (arr) => {
  // Optimized format - single pass
  let result = '[';
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    if (i < arr.length - 1) result += ',';
  }
  result += ']';
  return result;
};

// Single execution pipeline
const data = [82, 43, 10, 27, 38, 3, 9];
console.log(formatQuick(sort([...data])));
