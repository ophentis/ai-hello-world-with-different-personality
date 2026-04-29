// Steve Jobs: Simplicity. The ultimate sophistication.
// One more thing... a beautiful, minimal solution

for (let i = 1; i <= 100; i++) {
  let output = '';
  if (i % 3 === 0) output += 'Fizz';
  if (i % 5 === 0) output += 'Buzz';
  console.log(output || i);
}
