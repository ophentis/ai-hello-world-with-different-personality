// Hehehehe! A nice algorithm, like a perfectly written novel! *wipes sweat*
for (let chapter = 1; chapter <= 100; chapter++) {
  let tale = '';
  if (chapter % 3 === 0) tale += 'Fizz';
  if (chapter % 5 === 0) tale += 'Buzz';
  console.log(tale || chapter);
}
