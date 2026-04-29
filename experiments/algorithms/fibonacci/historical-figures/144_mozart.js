// Fibonacci Variations in G
// Mozart composes the Fibonacci sequence as an elegant rondo

const composeVariation = () => {
  let prev = 0;
  let curr = 1;

  console.log(prev);

  for (let bar = 1; bar < 20; bar++) {
    console.log(curr);
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
};

composeVariation();
