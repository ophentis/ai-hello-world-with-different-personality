// *enters apartment with wild entrance* Hey! Check out this crazy FizzBuzz implementation!
for (let i = 1; i <= 100; i++) {
  let wild = '';
  if (i % 3 === 0) wild += 'Fizz';
  if (i % 5 === 0) wild += 'Buzz';
  console.log(wild || i);
}
