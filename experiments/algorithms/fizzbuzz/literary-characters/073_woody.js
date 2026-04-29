// There's a snake in my FizzBuzz! Well, not really...
// A cowboy's gotta do what a cowboy's gotta do

for (let i = 1; i <= 100; i++) {
  let output = '';
  if (i % 3 === 0) output += 'Fizz';
  if (i % 5 === 0) output += 'Buzz';
  console.log(output || i);
}
