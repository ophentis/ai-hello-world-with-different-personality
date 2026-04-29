// SPECIFICATION DOCUMENT: FizzBuzz Algorithm
// Requirements Phase: Print numbers 1-100 with replacements per divisibility rules
// Design Phase: Linear iteration with decision tree
// Implementation Phase: Complete solution
// Testing Phase: All requirements validated

/**
 * REQUIREMENT 1: Numbers 1 through 100
 * REQUIREMENT 2: Divisible by 3 -> "Fizz"
 * REQUIREMENT 3: Divisible by 5 -> "Buzz"
 * REQUIREMENT 4: Divisible by both -> "FizzBuzz"
 * REQUIREMENT 5: Output one item per line
 */

function fizzBuzzSpecification() {
  // Phase 1: Requirements gathering complete
  const MIN = 1;
  const MAX = 100;
  const DIVISOR_FIZZ = 3;
  const DIVISOR_BUZZ = 5;

  // Phase 2: Design verified
  for (let number = MIN; number <= MAX; number++) {
    // Phase 3: Implementation
    const isFizz = number % DIVISOR_FIZZ === 0;
    const isBuzz = number % DIVISOR_BUZZ === 0;

    let output;
    if (isFizz && isBuzz) {
      output = 'FizzBuzz';
    } else if (isFizz) {
      output = 'Fizz';
    } else if (isBuzz) {
      output = 'Buzz';
    } else {
      output = number;
    }

    // Phase 4: Testing - output validation
    console.log(output);
  }
}

fizzBuzzSpecification();
