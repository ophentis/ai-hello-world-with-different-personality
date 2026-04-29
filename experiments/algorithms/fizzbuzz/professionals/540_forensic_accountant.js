// Forensic Accountant: Track every transaction, reconcile at each step
const ledger = [];

function recordTransaction(value, description) {
  ledger.push({ value, description, timestamp: ledger.length });
  return value;
}

function auditFizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let output = "";
    let divisibleBy3 = i % 3 === 0;
    let divisibleBy5 = i % 5 === 0;

    if (divisibleBy3 && divisibleBy5) {
      output = "FizzBuzz";
      recordTransaction(i, "divisible by both 3 and 5");
    } else if (divisibleBy3) {
      output = "Fizz";
      recordTransaction(i, "divisible by 3");
    } else if (divisibleBy5) {
      output = "Buzz";
      recordTransaction(i, "divisible by 5");
    } else {
      output = i.toString();
      recordTransaction(i, "regular number");
    }

    console.log(output);
  }
}

auditFizzBuzz();
