// Senku Ishigami's FizzBuzz - 10 billion percent science!
for (let n = 1; n <= 100; n++) {
  let result = "";
  if (n % 3 === 0) result += "Fizz";
  if (n % 5 === 0) result += "Buzz";
  console.log(result || n);
}
