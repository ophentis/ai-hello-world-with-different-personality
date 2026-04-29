// Product Manager: Requirements-driven with prioritization
const requirements = {
  feature1: "divisible by 3 -> Fizz",
  feature2: "divisible by 5 -> Buzz",
  feature3: "divisible by both 3 and 5 -> FizzBuzz",
  feature4: "default -> number"
};

const stakeholders = {
  requirements: "all features",
  priority: "P0"
};

function executeProductRequirements() {
  // MVP: range 1-100
  for (let num = 1; num <= 100; num++) {
    let output;

    // Feature 3: highest priority (P0)
    if (num % 3 === 0 && num % 5 === 0) {
      output = "FizzBuzz";
    }
    // Feature 1: P1
    else if (num % 3 === 0) {
      output = "Fizz";
    }
    // Feature 2: P1
    else if (num % 5 === 0) {
      output = "Buzz";
    }
    // Feature 4: P1
    else {
      output = num.toString();
    }

    console.log(output);
  }
}

executeProductRequirements();
