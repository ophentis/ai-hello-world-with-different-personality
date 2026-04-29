// Based on https://stackoverflow.com/questions/24252262/fizzbuzz-code-golf
// Adapted for clarity

const fizzbuzz = () => {
  for (let i = 1; i <= 100; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    console.log(output || i);
  }
};

fizzbuzz();
