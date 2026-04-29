// JAKE THE DOG - Stretchy, laid-back, "dude", bacon pancakes
// Dude, FizzBuzz is so mathematical, man!

for (let n = 1; n <= 100; n++) {
  let msg = "";

  if (n % 3 === 0) msg += "Fizz";
  if (n % 5 === 0) msg += "Buzz";

  console.log(msg || n);
}
