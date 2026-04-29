// User story: As a user, I want to sort an array in ascending order
// Acceptance criteria: Input [82,43,...] -> Output [3,9,10,...]
// Sprint planning: MVP sort with native approach

// Backlog item 1: Define input
const inputArray = [82, 43, 10, 27, 38, 3, 9];

// Backlog item 2: Sort incrementally
const sortedArray = inputArray.slice().sort((a, b) => a - b);

// Backlog item 3: Format output
const output = '[' + sortedArray.join(',') + ']';

// Sprint review: Done criteria met
console.log(output);
