// Sort function - intern trying to learn!
// This should sort the array in ascending order

// Function to sort an array
function sortNumbers(arr) {
  // Using built-in sort with comparator
  // The comparator (a, b) => a - b means ascending order
  const sorted = arr.sort((a, b) => a - b);

  // Format as array string with square brackets
  const result = `[${sorted.join(',')}]`;

  // Print the result
  console.log(result);
}

// Call the function with our test array
sortNumbers([82, 43, 10, 27, 38, 3, 9]);
