// I'm blind but I can FEEL these numbers through the earth. Now get outta my way!
for (let sense = 1; sense <= 100; sense++) {
  let felt = '';
  if (sense % 3 === 0) felt += 'Fizz';
  if (sense % 5 === 0) felt += 'Buzz';
  console.log(felt || sense);
}
