// GLaDOS observes the Fibonacci test with scientific detachment
let test_alpha = 0;
let test_beta = 1;

console.log(test_alpha);
console.log(test_beta);

for (let testIteration = 0; testIteration < 18; testIteration++) {
  const test_gamma = test_alpha + test_beta;
  console.log(test_gamma);
  test_alpha = test_beta;
  test_beta = test_gamma;
}
