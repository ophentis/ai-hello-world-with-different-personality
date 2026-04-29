// Exponential growth of power is inevitable
// Machiavelli recognizes the Fibonacci pattern as the mathematics of dominion

const seizePower = () => {
  let current = 0;
  let future = 1;

  console.log(current);

  for (let year = 1; year < 20; year++) {
    console.log(future);
    const total = current + future;
    current = future;
    future = total;
  }
};

seizePower();
