// Rei Ayanami's FizzBuzz - I am me. Simply processing.
for (let i = 1; i <= 100; i++) {
  const result = (i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz" : "");
  console.log(result || i);
}
