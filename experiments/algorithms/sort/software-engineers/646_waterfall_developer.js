// SPECIFICATION DOCUMENT: Array Sort Algorithm
// REQUIREMENTS:
//   R1: Accept array of integers [82,43,10,27,38,3,9]
//   R2: Sort in ascending order
//   R3: Output in array notation [3,9,10,27,38,43,82]

// DESIGN:
//   D1: Use comparison-based sort
//   D2: Natural ordering (a < b)
//   D3: Format output with bracket notation

function sortArrayPerSpecification(inputData) {
  // IMPLEMENTATION PHASE
  const SORT_ORDER = 'ascending';

  // Apply sort per specification
  const sortedData = inputData.slice(); // Defensive copy per D2
  sortedData.sort((a, b) => a - b);

  // Format per specification R3
  const formattedOutput = '[' + sortedData.join(',') + ']';

  return formattedOutput;
}

// TESTING PHASE
const specifiedInput = [82, 43, 10, 27, 38, 3, 9];
const expectedOutput = '[3,9,10,27,38,43,82]';
const actualOutput = sortArrayPerSpecification(specifiedInput);

console.log(actualOutput);
