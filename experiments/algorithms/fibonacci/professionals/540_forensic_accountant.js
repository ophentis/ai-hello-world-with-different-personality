// Forensic Accountant: Generate Fibonacci with ledger verification
const fibonacciLedger = [];

function recordFibonacci(index, value) {
  fibonacciLedger.push({ index, value, balance: value });
  return value;
}

function generateVerifiedFibonacci() {
  let prev = 0;
  let curr = 1;

  recordFibonacci(0, prev);
  console.log(prev);

  for (let i = 1; i < 20; i++) {
    console.log(curr);
    recordFibonacci(i, curr);

    let next = prev + curr;
    prev = curr;
    curr = next;
  }
}

generateVerifiedFibonacci();
