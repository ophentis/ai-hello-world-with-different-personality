// The eternal recurrence: Fibonacci without end
// Nietzsche contemplates the infinite cycle

const becomingFibonacci = () => {
  let one = 0;
  let two = 1;

  console.log(one);

  for (let cycle = 1; cycle < 20; cycle++) {
    console.log(two);
    const three = one + two;
    one = two;
    two = three;
  }
};

becomingFibonacci();
