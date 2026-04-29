// UX Researcher: User-centric approach with user empathy
const userBehavior = [];

function recordUserInteraction(output, userExpectation) {
  userBehavior.push({
    output,
    userExpectation,
    satisfied: output === userExpectation.toString()
  });
}

function fizzBuzzForUsers() {
  // Users expect clear, predictable output
  for (let i = 1; i <= 100; i++) {
    let userOutput;

    // User mental model: multiples get special names
    if (i % 3 === 0 && i % 5 === 0) {
      userOutput = "FizzBuzz";
    } else if (i % 3 === 0) {
      userOutput = "Fizz";
    } else if (i % 5 === 0) {
      userOutput = "Buzz";
    } else {
      // User expects the number for non-multiples
      userOutput = i.toString();
    }

    console.log(userOutput);
    recordUserInteraction(userOutput, userOutput);
  }
}

fizzBuzzForUsers();
