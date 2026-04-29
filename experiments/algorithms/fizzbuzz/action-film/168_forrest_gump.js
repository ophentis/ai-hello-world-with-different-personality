// Forrest Gump - "Life is like a box of chocolates"
// Simple, kind, running through the algorithm
for (let i = 1; i <= 100; i++) {
  let chocolate = '';

  if (i % 3 === 0) {
    chocolate += 'Fizz';
  }
  if (i % 5 === 0) {
    chocolate += 'Buzz';
  }

  if (!chocolate) {
    chocolate = i;
  }

  console.log(chocolate);
}
