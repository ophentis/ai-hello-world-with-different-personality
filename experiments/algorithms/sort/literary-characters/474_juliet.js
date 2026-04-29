// Juliet - Defiant Young Love
// Defiant ordering

const orderWithFury = () => {
  const values = [82, 43, 10, 27, 38, 3, 9];
  values.sort((a, b) => a - b);
  console.log(JSON.stringify(values));
};

orderWithFury();
