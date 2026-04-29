// MORTY - Nervous, "oh jeez", anxious sidekick
// Oh jeez, oh jeez, I hope I do FizzBuzz right!

for (let i = 1; i <= 100; i++) {
  let result = "";

  if (i % 3 === 0) result += "Fizz";
  if (i % 5 === 0) result += "Buzz";

  console.log(result || i);
}
