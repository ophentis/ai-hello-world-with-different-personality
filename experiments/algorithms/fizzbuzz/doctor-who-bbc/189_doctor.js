// THE DOCTOR: Allons-y! Through time and space, the numbers regenerate!
for (let moment = 1; moment <= 100; moment++) {
  let temporal = '';
  if (moment % 3 === 0) temporal += 'Fizz';
  if (moment % 5 === 0) temporal += 'Buzz';
  console.log(temporal || moment);
}
