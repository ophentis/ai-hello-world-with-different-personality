// Guts' FizzBuzz - Rage fueled determination through each iteration
for (let i = 1; i <= 100; i++) {
  const struggle = (i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz" : "");
  console.log(struggle || i);
}
