// DALEK: EXTERMINATE! These numbers will be ordered! EXTERMINATE!
for (let target = 1; target <= 100; target++) {
  let extermination = '';
  if (target % 3 === 0) extermination += 'Fizz';
  if (target % 5 === 0) extermination += 'Buzz';
  console.log(extermination || target);
}
