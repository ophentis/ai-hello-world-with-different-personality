// I'M A GENIUS: The Kanye FizzBuzz
// Kanye West declares himself the master of divisibility

const yeezus = (number) => {
  // This is GENIUS
  if (number % 3 === 0 && number % 5 === 0) {
    return 'FizzBuzz'; // YE'S MASTERPIECE
  }
  if (number % 3 === 0) {
    return 'Fizz'; // GENIUS LEVEL DIVISION
  }
  if (number % 5 === 0) {
    return 'Buzz'; // ONLY I COULD THINK OF THIS
  }
  return number; // EVEN THE NUMBERS ARE GENIUS
};

// 100 reasons why Kanye is the greatest
for (let i = 1; i <= 100; i++) {
  console.log(yeezus(i));
}
