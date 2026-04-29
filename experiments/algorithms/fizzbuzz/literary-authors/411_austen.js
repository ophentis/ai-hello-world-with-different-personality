// It is a truth universally acknowledged that a number in possession
// of divisibility must be in want of replacement.

for (let number = 1; number <= 100; number++) {
  let output = "";
  if (number % 3 === 0) output += "Fizz";
  if (number % 5 === 0) output += "Buzz";
  // Such follies and improprieties in the arrangement of integers!
  console.log(output || number);
}
