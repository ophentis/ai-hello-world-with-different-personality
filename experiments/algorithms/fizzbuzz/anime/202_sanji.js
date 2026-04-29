// A beautiful dance, a culinary masterpiece, one kick at a time
for (let num = 1; num <= 100; num++) {
  let plate = '';
  if (num % 3 === 0) plate += 'Fizz';
  if (num % 5 === 0) plate += 'Buzz';
  console.log(plate || num);
}
