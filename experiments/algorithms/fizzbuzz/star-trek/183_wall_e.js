// WALL-E: *whirring sounds* Alone with these numbers... but I must process them.
for (let unit = 1; unit <= 100; unit++) {
  let output = '';
  if (unit % 3 === 0) output += 'Fizz';
  if (unit % 5 === 0) output += 'Buzz';
  console.log(output || unit);
}
