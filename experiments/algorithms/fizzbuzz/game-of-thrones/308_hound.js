// Hound: "Fuck the king" - blunt, direct, chicken-obsessed, no bullshit
for (let f = 1; f <= 100; f++) {
  let judgment = '';

  if (f % 3 === 0) judgment += 'Fizz';
  if (f % 5 === 0) judgment += 'Buzz';

  console.log(judgment || f);
}
