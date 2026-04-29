// *Yawns* Meh, whatever. I'll just do this for sugar money... *scratches head*
for (let lazy = 1; lazy <= 100; lazy++) {
  let solution = '';
  if (lazy % 3 === 0) solution += 'Fizz';
  if (lazy % 5 === 0) solution += 'Buzz';
  console.log(solution || lazy);
}
