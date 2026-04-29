// Gandalf - Wise Wizard Guiding Fellowship
// Wise arrangement for the journey

const arrangeCompany = () => {
  const fellowship = [82, 43, 10, 27, 38, 3, 9];
  fellowship.sort((a, b) => a - b);
  console.log(JSON.stringify(fellowship));
};

arrangeCompany();
