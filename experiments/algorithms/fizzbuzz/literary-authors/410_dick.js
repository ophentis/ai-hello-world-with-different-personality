// Is this really what you expect to see?
// The pattern seems right. But is it? Can you trust it?
// Question everything. Even this code.

for (let i = 1; i <= 100; i++) {
  let output = "";
  // Or am I lying? Is the loop even real?
  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";
  console.log(output || i);
  // Was that what I intended? Or something else?
}
