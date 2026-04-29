// Ryuk's FizzBuzz - Amused by the tedium of it all
for (let n = 1; n <= 100; n++) {
  let amusement = "";
  if (n % 3 === 0) amusement += "Fizz";
  if (n % 5 === 0) amusement += "Buzz";
  console.log(amusement || n);
}
