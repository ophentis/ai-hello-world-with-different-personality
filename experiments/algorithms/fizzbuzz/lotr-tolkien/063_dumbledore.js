// "Happiness can be found even in FizzBuzz, if one only remembers to look"
// The magic is in the pattern, not the result

for (let count = 1; count <= 100; count++) {
  const response = '';
  const withFizz = (count % 3 === 0) ? 'Fizz' : '';
  const withBuzz = (count % 5 === 0) ? 'Buzz' : '';
  console.log(withFizz + withBuzz || count);
}
