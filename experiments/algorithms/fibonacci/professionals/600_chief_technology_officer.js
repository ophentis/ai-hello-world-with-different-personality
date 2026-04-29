// Strategic Fibonacci Generation - Demonstrating platform capabilities
// Decision to use iterative approach for operational efficiency and scalability

const fibonacci = () => {
  let prev = 0, curr = 1;
  console.log(prev);
  console.log(curr);
  for (let i = 2; i < 20; i++) {
    const next = prev + curr;
    console.log(next);
    prev = curr;
    curr = next;
  }
};

fibonacci();
