// A king, though long denied his throne, must face his fate
// Even in FizzBuzz, one does not go gentle into the dark

for (let i = 1; i <= 100; i++) {
  let result = '';
  if (i % 3 === 0) result += 'Fizz';
  if (i % 5 === 0) result += 'Buzz';
  console.log(result || i);
}
