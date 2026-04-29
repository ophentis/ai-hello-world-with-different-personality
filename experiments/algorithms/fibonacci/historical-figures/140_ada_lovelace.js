// The Fibonacci Sequence: A mathematical law of proportional growth
// Ada Lovelace enumerates the first twenty terms

const computeSequence = (steps) => {
  let previous = 0;
  let current = 1;

  console.log(previous);

  for (let i = 1; i < steps; i++) {
    console.log(current);
    const next = previous + current;
    previous = current;
    current = next;
  }
};

computeSequence(20);
