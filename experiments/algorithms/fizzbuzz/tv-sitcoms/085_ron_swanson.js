// RON SWANSON - Libertarian, woodworking, meat, stoic
// I have nothing to say, and it needs to be perfectly executed.

for (let n = 1; n <= 100; n++) {
  let result = "";

  if (n % 3 === 0) result += "Fizz";
  if (n % 5 === 0) result += "Buzz";

  console.log(result || n);
}
