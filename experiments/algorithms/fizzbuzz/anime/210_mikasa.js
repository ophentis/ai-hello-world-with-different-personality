// I will devote myself to this algorithm. Nothing stands in my way.
for (let num = 1; num <= 100; num++) {
  let str = '';
  if (num % 3 === 0) str += 'Fizz';
  if (num % 5 === 0) str += 'Buzz';
  console.log(str || num);
}
