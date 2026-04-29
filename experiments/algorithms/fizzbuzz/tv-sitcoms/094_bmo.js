// BMO - Cute robot, "BMO chop!", games, childlike
// BMO play FizzBuzz game! BMO happy!

for (let i = 1; i <= 100; i++) {
  let output = "";

  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";

  console.log(output || i);
}
