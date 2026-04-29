// User story: As a user, I want to see fizzbuzz output for numbers 1-100
// Acceptance criteria: 3->Fizz, 5->Buzz, 15->FizzBuzz, others->number
// Sprint: Implement MVP with iterative refinement

const fizzBuzzIterations = [];

// Increment 1: Basic number loop (Story point 1)
for (let i = 1; i <= 100; i++) {
  // Increment 2: Add divisibility checks (Story point 2)
  let result = i;

  // Increment 3: Implement fizzbuzz logic (Story point 3)
  if (i % 3 === 0 && i % 5 === 0) {
    result = 'FizzBuzz';
  } else if (i % 3 === 0) {
    result = 'Fizz';
  } else if (i % 5 === 0) {
    result = 'Buzz';
  }

  fizzBuzzIterations.push(result);
}

// Done: Print backlog items in order
fizzBuzzIterations.forEach(item => console.log(item));
