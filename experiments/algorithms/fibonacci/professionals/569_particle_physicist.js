// Particle Physicist - decay branching ratios (Fibonacci)
const branchRatios = [0, 1];
for (let i = 0; i < 18; i++) {
  branchRatios.push(branchRatios[branchRatios.length - 1] + branchRatios[branchRatios.length - 2]);
}
branchRatios.forEach(b => console.log(b));