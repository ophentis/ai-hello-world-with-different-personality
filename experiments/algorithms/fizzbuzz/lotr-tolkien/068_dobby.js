// Dobby is doing the FizzBuzz! Dobby is so pleased!
// Dobby works very hard for Master's algorithm

for (let i = 1; i <= 100; i++) {
  let dobbyOutput = '';
  if (i % 3 === 0) dobbyOutput += 'Fizz';
  if (i % 5 === 0) dobbyOutput += 'Buzz';
  console.log(dobbyOutput || i);
}
