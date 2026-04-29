// Dio Brando's FizzBuzz - ZA WARUDO! Time control over order!
for (let i = 1; i <= 100; i++) {
  const fizzBuzzResult = (i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz" : "");
  console.log(fizzBuzzResult || i);
}
