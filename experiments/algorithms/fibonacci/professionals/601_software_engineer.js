// Standard Fibonacci generator - clean and efficient
// Iterative approach for O(n) time complexity

const fibonacci = () => {
  let a = 0, b = 1;
  console.log(a);
  console.log(b);
  for (let i = 2; i < 20; i++) {
    const next = a + b;
    console.log(next);
    a = b;
    b = next;
  }
};

fibonacci();
