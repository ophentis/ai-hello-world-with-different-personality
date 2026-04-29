// Collaborative pair programming approach
// "We need to generate the first 20 Fibonacci numbers"
// "Right, so 0, 1, then each is the sum of the previous two"

// "Let's create an array to store the sequence"
const fibSequence = [];

// "Initialize with the base cases"
// "First number is 0"
fibSequence.push(0);

// "Second number is 1"
fibSequence.push(1);

// "Now we need to generate the rest"
// "We'll go from 2 to 20"
for (let i = 2; i < 20; i++) {
  // "Get the previous two numbers"
  const prev1 = fibSequence[i - 1];
  const prev2 = fibSequence[i - 2];

  // "Add them together for the next number"
  const next = prev1 + prev2;

  // "Push it to our sequence"
  fibSequence.push(next);
}

// "Great! Now let's print them out"
// "One per line, like we discussed"
fibSequence.forEach(num => {
  console.log(num);
});
