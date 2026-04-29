// DATA SCIENCE: FizzBuzz statistical hypothesis test
// Sample size: 100. Confidence level: 95%. Alpha: 0.05.
// P-value: Significant. Results: Reproducible.

const SAMPLE_SIZE = 100;
const CATEGORY_A = 3;
const CATEGORY_B = 5;

for (let dataPoint = 1; dataPoint <= SAMPLE_SIZE; dataPoint++) {
  let hypothesis = '';

  // Primary categorical variable significance
  if (dataPoint % CATEGORY_A === 0) {
    hypothesis += 'Fizz';
  }

  // Secondary categorical variable significance
  if (dataPoint % CATEGORY_B === 0) {
    hypothesis += 'Buzz';
  }

  // Null hypothesis (no effect)
  if (hypothesis === '') {
    hypothesis = dataPoint.toString();
  }

  console.log(hypothesis);
}
