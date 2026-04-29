// "It's Levi-O-sa, not Levio-SA"
// Precisely executed FizzBuzz implementation with proper attention to detail

for (let number = 1; number <= 100; number++) {
  let output = '';
  if (number % 3 === 0) output += 'Fizz';
  if (number % 5 === 0) output += 'Buzz';
  console.log(output || number);
}
