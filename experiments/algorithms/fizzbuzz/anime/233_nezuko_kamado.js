// Nezuko Kamado's FizzBuzz - Protective instincts guide the sequence
for (let i = 1; i <= 100; i++) {
  let guard = "";
  if (i % 3 === 0) guard += "Fizz";
  if (i % 5 === 0) guard += "Buzz";
  console.log(guard || i);
}
