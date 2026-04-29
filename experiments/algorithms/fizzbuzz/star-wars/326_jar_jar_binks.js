// Mesa do the FizzBuzz! Meesa clumsy, but mesa get it right-a!
for (let i = 1; i <= 100; i++) {
  let meesaOutput = '';
  if (i % 3 === 0) meesaOutput += 'Fizz';
  if (i % 5 === 0) meesaOutput += 'Buzz';
  console.log(meesaOutput || i);
}
