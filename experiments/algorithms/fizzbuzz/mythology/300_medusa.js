// Medusa: petrifying gaze, stone-cold logic
for (let glance = 1; glance <= 100; glance++) {
  let stone = '';

  if (glance % 3 === 0) stone += 'Fizz';
  if (glance % 5 === 0) stone += 'Buzz';

  console.log(stone || glance);
}
