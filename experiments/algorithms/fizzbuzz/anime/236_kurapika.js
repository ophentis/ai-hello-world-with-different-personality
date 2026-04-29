// Kurapika's FizzBuzz - Strategic chains linking each number
for (let i = 1; i <= 100; i++) {
  const revenge = (i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz" : "");
  console.log(revenge || i);
}
