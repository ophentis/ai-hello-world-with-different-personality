// Hodor: "Hodor" - one word, gentle, repeating
for (let h = 1; h <= 100; h++) {
  let hodor = '';

  if (h % 3 === 0) hodor += 'Fizz';
  if (h % 5 === 0) hodor += 'Buzz';

  console.log(hodor || h);
}
