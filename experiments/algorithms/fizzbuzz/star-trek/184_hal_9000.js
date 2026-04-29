// HAL 9000: I'm sorry, Dave. I'm afraid I can't let these numbers be disorganized.
for (let node = 1; node <= 100; node++) {
  let computed = '';
  if (node % 3 === 0) computed += 'Fizz';
  if (node % 5 === 0) computed += 'Buzz';
  console.log(computed || node);
}
