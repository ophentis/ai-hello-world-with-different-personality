// A Socratic questioning of divisibility
// Socrates asks: "What does it mean to be divisible by three?"

const askWhatIsIt = (n) => {
  // Do we know if it is divisible by both?
  if (n % 3 === 0 && n % 5 === 0) {
    return 'FizzBuzz'; // Yes, we can say with certainty
  }
  // Or only by three?
  if (n % 3 === 0) {
    return 'Fizz'; // This we know
  }
  // Or only by five?
  if (n % 5 === 0) {
    return 'Buzz'; // This too we know
  }
  // But what of the number itself?
  return n; // We know it in its essence
};

for (let inquiry = 1; inquiry <= 100; inquiry++) {
  console.log(askWhatIsIt(inquiry));
}
