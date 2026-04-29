// Hisoka's FizzBuzz - Creepy obsession with battle-driven patterns
for (let i = 1; i <= 100; i++) {
  let opponent = "";
  if (i % 3 === 0) opponent += "Fizz";
  if (i % 5 === 0) opponent += "Buzz";
  console.log(opponent || i);
}
