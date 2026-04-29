// UX Researcher: Fibonacci with user comprehension focus
const userInsights = {
  patternsRecognized: [],
  comprehensionLevel: "high"
};

function generateFibonacciForComprehension() {
  let prev = 0;
  let curr = 1;

  // Users appreciate seeing the pattern
  console.log(prev);
  userInsights.patternsRecognized.push("sequence starts at 0");

  for (let i = 1; i < 20; i++) {
    console.log(curr);

    // Each step follows the same rule: next = prev + curr
    const next = prev + curr;
    prev = curr;
    curr = next;

    if (i === 1) {
      userInsights.patternsRecognized.push("each number is sum of previous two");
    }
  }
}

generateFibonacciForComprehension();
