// Solid Snake's Stealth FizzBuzz
// !
// Tactical espionage action, approaching target quietly

for (let i = 1; i <= 100; i++) {
  let alert = '';

  // Avoid detection by divisible-by-3 patterns
  if (i % 3 === 0) {
    alert += 'Fizz';
  }

  // Avoid detection by divisible-by-5 patterns
  if (i % 5 === 0) {
    alert += 'Buzz';
  }

  // Transmit radio signal (the number)
  console.log(alert || i);
}
