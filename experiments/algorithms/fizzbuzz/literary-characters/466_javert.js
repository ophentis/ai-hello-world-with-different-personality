// Javert - Rigid Lawman, Obsessive Justice
// Strict, rule-bound, unyielding logic

const enforceOrder = () => {
  const LAW = 3;
  const JUSTICE = 5;
  const BOTH = LAW * JUSTICE;

  for (let n = 1; n <= 100; n++) {
    let verdict = "";

    if (n % BOTH === 0) {
      verdict = "FizzBuzz";
    } else if (n % LAW === 0) {
      verdict = "Fizz";
    } else if (n % JUSTICE === 0) {
      verdict = "Buzz";
    } else {
      verdict = n;
    }

    console.log(verdict);
  }
};

enforceOrder();
