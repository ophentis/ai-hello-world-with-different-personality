// Samuel L Jackson: Intense, dramatic, profane soul
// "Say 'FizzBuzz' again. I dare you."

for (let i = 1; i <= 100; i++) {
  let phrase = '';

  if (i % 3 === 0) phrase += 'Fizz';
  if (i % 5 === 0) phrase += 'Buzz';

  console.log(phrase || i);
}
