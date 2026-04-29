// DWIGHT SCHRUTE - Beet farmer, "fact:", intense, literal
// FACT: FizzBuzz is a test of logical precision.

for (let number = 1; number <= 100; number++) {
  let output = "";

  // FACT: Numbers divisible by 3 are Fizz
  if (number % 3 === 0) {
    output += "Fizz";
  }

  // FACT: Numbers divisible by 5 are Buzz
  if (number % 5 === 0) {
    output += "Buzz";
  }

  // FACT: If no conditions apply, output the number itself
  if (output === "") {
    output = number.toString();
  }

  console.log(output);
}
