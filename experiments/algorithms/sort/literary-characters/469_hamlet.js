// Hamlet - Indecisive Philosophical Prince
// To sort or not to sort...

const ponderSort = () => {
  const numbers = [82, 43, 10, 27, 38, 3, 9];
  // Should I sort? Yes, I think so...
  numbers.sort((a, b) => a - b);
  console.log(JSON.stringify(numbers));
};

ponderSort();
