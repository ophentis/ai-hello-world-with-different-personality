// Control Systems Engineer: Fibonacci with stability analysis
const systemAnalysis = {
  stablePoints: [],
  eigenvalues: []
};

function generateStableFibonacci() {
  let prev = 0;
  let curr = 1;

  // Check stability at first point
  recordStability(prev, curr);
  console.log(prev);

  for (let i = 1; i < 20; i++) {
    console.log(curr);

    const next = prev + curr;

    // Update stability metrics
    recordStability(curr, next);

    prev = curr;
    curr = next;
  }
}

function recordStability(state1, state2) {
  // Treat as 2D system for stability analysis
  const jacobian = [
    [0, 1],
    [1, 1]
  ];

  systemAnalysis.stablePoints.push({ state1, state2 });
}

generateStableFibonacci();
