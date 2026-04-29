// Prospero - Magical Scholar Commanding Storms
// Commanding the elements into order

const enchantArray = () => {
  const spirits = [82, 43, 10, 27, 38, 3, 9];
  spirits.sort((a, b) => a - b);
  console.log(JSON.stringify(spirits));
};

enchantArray();
