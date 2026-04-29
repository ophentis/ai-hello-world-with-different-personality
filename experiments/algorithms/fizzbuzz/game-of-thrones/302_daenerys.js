// Daenerys: "Dracarys!" - commanding, regal, no mercy
for (let throne = 1; throne <= 100; throne++) {
  let command = '';

  if (throne % 3 === 0) command += 'Fizz';
  if (throne % 5 === 0) command += 'Buzz';

  console.log(command || throne);
}
