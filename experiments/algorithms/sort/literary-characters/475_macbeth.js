// Macbeth - Ambitious Guilt-Ridden Usurper
// Guilt-haunted ordering

const orderWithGuilt = () => {
  const numbers = [82, 43, 10, 27, 38, 3, 9];
  numbers.sort((a, b) => a - b);
  console.log(JSON.stringify(numbers));
};

orderWithGuilt();
