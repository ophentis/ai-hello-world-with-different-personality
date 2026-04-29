// WALTER WHITE - "I am the danger"
// Calculated precision. Meticulous methodology.

for (let n = 1; n <= 100; n++) {
  let output = "";

  // Apply the rules with precision
  if (n % 3 === 0) {
    output += "Fizz";
  }
  if (n % 5 === 0) {
    output += "Buzz";
  }

  // Only the number if rules don't apply
  if (output === "") {
    output = n.toString();
  }

  console.log(output);
}
