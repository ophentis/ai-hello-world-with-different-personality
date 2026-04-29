// Product Manager: Fibonacci with roadmap
const product = {
  name: "Fibonacci Sequence Generator",
  scope: "first 20 numbers",
  success: "matches mathematical definition"
};

const stakeholders = ["math team", "data science", "education"];

function generateFibonacciProduct() {
  // Product requirement: F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2)
  let prev = 0;
  let curr = 1;

  console.log(prev);

  for (let i = 1; i < 20; i++) {
    console.log(curr);

    const next = prev + curr;
    prev = curr;
    curr = next;
  }
}

generateFibonacciProduct();
