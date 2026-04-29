// How you doin'? I'm FizzBuzzin', that's how. It's simple, just like me. I like it.
for (let i = 1; i <= 100; i++) {
  let howYouDoin = '';
  if (i % 3 === 0) howYouDoin += 'Fizz';
  if (i % 5 === 0) howYouDoin += 'Buzz';
  console.log(howYouDoin || i);
}
