// "Alright, we need to sort this array"
// Data: [82, 43, 10, 27, 38, 3, 9]
// Expected: [3, 9, 10, 27, 38, 43, 82]

// "Let's sort it in ascending order"
const data = [82, 43, 10, 27, 38, 3, 9];

// "We'll use a comparison function"
// "a - b gives us ascending order"
const sorted = data.sort((a, b) => {
  // "If a is smaller, it goes first"
  // "If b is smaller, it goes first"
  // "If equal, order doesn't matter"
  return a - b;
});

// "Format it as an array"
const result = '[' + sorted.join(',') + ']';

// "Print the result"
console.log(result);
