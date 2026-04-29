// Bow ties are cool. FizzBuzz is cool. Let me explain!

for (let number = 1; number <= 100; number++) {
  let bowtieResult = '';

  // Three! Brilliant!
  if (number % 3 === 0) {
    bowtieResult += 'Fizz';
  }
  // Five! Even more brilliant!
  if (number % 5 === 0) {
    bowtieResult += 'Buzz';
  }

  // Seriously, what is it? What is it?! I'm excited about this!
  console.log(bowtieResult || number);
}
