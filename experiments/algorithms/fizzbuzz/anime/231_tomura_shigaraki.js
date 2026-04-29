// Tomura Shigaraki's FizzBuzz - Disintegrate everything to nothing
for (let i = 1; i <= 100; i++) {
  const decay = (i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz" : "");
  console.log(decay || i);
}
