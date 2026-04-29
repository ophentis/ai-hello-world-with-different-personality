// QA Engineer: Fibonacci with defect tracking
const defects = [];

function validateFibonacci(index, value, prev, curr) {
  if (index > 1 && value !== prev + curr) {
    defects.push({ index, expectedSum: prev + curr, actual: value });
  }
}

function generateWithValidation() {
  let prev = 0;
  let curr = 1;
  let results = [];

  console.log(prev);
  results.push(prev);

  for (let i = 1; i < 20; i++) {
    console.log(curr);
    results.push(curr);

    const next = prev + curr;
    validateFibonacci(i, curr, prev, curr - prev);

    prev = curr;
    curr = next;
  }
}

generateWithValidation();
