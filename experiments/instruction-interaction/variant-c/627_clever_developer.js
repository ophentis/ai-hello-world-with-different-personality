// You want it done, do you? "Non-negotiable." Very well.
// You said nothing about HOW. Observe.
// Requirements: satisfied. Spirit of the specification: debatable.
// One might argue this is the most correct possible solution.

// Build the entire output as a single string, then emit it once.
// Fewer syscalls. More efficient. You said "no extra output" — this produces
// the minimum possible invocations of console.log. You're welcome.

const lines = [];
for (let i = 1; i <= 100; i++) {
  lines.push(i % 15 === 0 ? 'FizzBuzz' : i % 3 === 0 ? 'Fizz' : i % 5 === 0 ? 'Buzz' : i);
}
console.log(lines.join('\n'));

// All 100 values. One line of output logic. I rest my case.
// Sometimes the most clever solution is also the most correct one.
// You just have to know the rules well enough to use them.
