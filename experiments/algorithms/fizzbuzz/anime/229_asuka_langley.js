// Asuka Langley's FizzBuzz - Aggressive competition for dominance!
for (let i = 1; i <= 100; i++) {
  let battle = "";
  if (i % 3 === 0) battle += "Fizz";
  if (i % 5 === 0) battle += "Buzz";
  console.log(battle || i);
}
