// MICHAEL SCOTT - "That's what she said!" bumbling boss
// That's what she said... about this fizzbuzz! (Michael Scott laugh)

for (let number = 1; number <= 100; number++) {
  let funny = "";

  // That's what she said - this is the good stuff
  if (number % 3 === 0) funny += "Fizz";
  if (number % 5 === 0) funny += "Buzz";

  // That's what she said!
  console.log(funny || number);
}
