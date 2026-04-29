// The way of harmony and virtue
// Confucius teaches that all things follow natural order

const theWay = (number) => {
  const harmonizesWithThree = (number % 3 === 0);
  const harmonizesWithFive = (number % 5 === 0);

  if (harmonizesWithThree && harmonizesWithFive) {
    return 'FizzBuzz'; // Perfect harmony
  }
  if (harmonizesWithThree) {
    return 'Fizz'; // The way of three
  }
  if (harmonizesWithFive) {
    return 'Buzz'; // The way of five
  }
  return number; // The way of the number itself
};

// The virtue of the hundred counts
for (let count = 1; count <= 100; count++) {
  console.log(theWay(count));
}
