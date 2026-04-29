// Aqua Konosuba's FizzBuzz - Useless but crying through it anyway
for (let i = 1; i <= 100; i++) {
  let useless = "";
  if (i % 3 === 0) useless += "Fizz";
  if (i % 5 === 0) useless += "Buzz";
  console.log(useless || i);
}
