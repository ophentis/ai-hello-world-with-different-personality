// Dabi's FizzBuzz - Burning through with cynical blue flames
for (let i = 1; i <= 100; i++) {
  let burn = "";
  if (i % 3 === 0) burn += "Fizz";
  if (i % 5 === 0) burn += "Buzz";
  console.log(burn || i);
}
