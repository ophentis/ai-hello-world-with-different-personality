// SPONGEBOB - "I'm ready!", optimistic, fry cook, pineapple
// I'm ready! I'm ready! I'm ready to solve FizzBuzz!

for (let num = 1; num <= 100; num++) {
  let output = "";

  if (num % 3 === 0) output += "Fizz";
  if (num % 5 === 0) output += "Buzz";

  console.log(output || num);
}
