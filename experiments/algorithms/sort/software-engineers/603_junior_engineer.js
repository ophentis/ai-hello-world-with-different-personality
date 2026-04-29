// Sort the array - this is a super useful algorithm!
// Using JavaScript's built-in sort method with a comparator function

// Define our array to sort
const numbersToSort = [82, 43, 10, 27, 38, 3, 9];

// We use sort with a comparator function (a, b) => a - b
// This tells sort to arrange in ascending order
const sortedNumbers = numbersToSort.sort((a, b) => a - b);

// Format the output to look like an array
const formattedResult = `[${sortedNumbers.join(',')}]`;

// Print to console
console.log(formattedResult);
