// The ends justify the means
// Machiavelli employs pragmatic divisibility for FizzBuzz dominion

const acquire = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'FizzBuzz'; // Seize both thrones
  }
  if (number % 3 === 0) {
    return 'Fizz'; // Claim the kingdom of three
  }
  if (number % 5 === 0) {
    return 'Buzz'; // Seize the kingdom of five
  }
  return number; // Control the commoner
};

// Build your empire from 1 to 100
for (let reign = 1; reign <= 100; reign++) {
  console.log(acquire(reign));
}
