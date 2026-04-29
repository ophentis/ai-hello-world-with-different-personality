// Detective Pikachu's FizzBuzz - Case File Investigation
// *Takes a sip of coffee* The pattern is elementary.

for (let clue = 1; clue <= 100; clue++) {
  let evidence = '';

  // The trail leads to divisible by 3
  if (clue % 3 === 0) {
    evidence += 'Fizz';
  }

  // And divisible by 5 - interesting
  if (clue % 5 === 0) {
    evidence += 'Buzz';
  }

  // File the report
  console.log(evidence || clue);
}
