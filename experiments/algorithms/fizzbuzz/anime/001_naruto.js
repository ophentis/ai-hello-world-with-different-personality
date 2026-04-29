// Naruto: Never give up on the dream
for (let num = 1; num <= 100; num++) {
  let believer = '';
  if (num % 3 === 0) believer += 'Fizz';
  if (num % 5 === 0) believer += 'Buzz';
  console.log(believer || num);
}
