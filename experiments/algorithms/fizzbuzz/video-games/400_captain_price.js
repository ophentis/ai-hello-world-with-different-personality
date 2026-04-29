// Command: Execute FizzBuzz protocol. Load. Execute.
const OPERATION = "fizzbuzz";
const TARGET_COUNT = 100;

for (let i = 1; i <= TARGET_COUNT; i++) {
  let output = "";

  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";

  console.log(output || i);
}
