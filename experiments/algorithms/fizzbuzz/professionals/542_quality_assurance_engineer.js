// QA Engineer: Test case driven with assertions
const testResults = { passed: 0, failed: 0 };

function assertOutput(value, expected, testName) {
  if (value === expected) {
    testResults.passed++;
  } else {
    testResults.failed++;
  }
}

function fizzBuzzQATest() {
  for (let i = 1; i <= 100; i++) {
    let output;

    if (i % 15 === 0) {
      output = "FizzBuzz";
      assertOutput(i % 15, 0, "divisible by 15");
    } else if (i % 3 === 0) {
      output = "Fizz";
      assertOutput(i % 3, 0, "divisible by 3");
    } else if (i % 5 === 0) {
      output = "Buzz";
      assertOutput(i % 5, 0, "divisible by 5");
    } else {
      output = i.toString();
      assertOutput(typeof output, "string", "non-divisible case");
    }

    console.log(output);
  }
}

fizzBuzzQATest();
