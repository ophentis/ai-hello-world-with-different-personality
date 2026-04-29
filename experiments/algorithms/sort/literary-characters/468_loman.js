// Loman - Tragic Salesman, Broken American Dream
// Exhausted sorting of prospects

const orderProspects = () => {
  const numbers = [82, 43, 10, 27, 38, 3, 9];
  numbers.sort((a, b) => a - b);
  console.log(JSON.stringify(numbers));
};

orderProspects();
