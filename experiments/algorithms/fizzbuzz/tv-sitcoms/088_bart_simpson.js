// BART SIMPSON - "Eat my shorts", troublemaker, skateboard
// Eat my shorts, FizzBuzz! Cowabunga!

for (let num = 1; num <= 100; num++) {
  let prank = "";

  if (num % 3 === 0) prank += "Fizz";
  if (num % 5 === 0) prank += "Buzz";

  console.log(prank || num);
}
