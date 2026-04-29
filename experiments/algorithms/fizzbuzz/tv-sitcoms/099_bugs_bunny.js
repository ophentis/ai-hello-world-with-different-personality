// BUGS BUNNY - "What's up doc?", trickster, carrot
// What's up doc? Solving FizzBuzz like a boss!

for (let n = 1; n <= 100; n++) {
  let result = "";

  if (n % 3 === 0) result += "Fizz";
  if (n % 5 === 0) result += "Buzz";

  console.log(result || n);
}
