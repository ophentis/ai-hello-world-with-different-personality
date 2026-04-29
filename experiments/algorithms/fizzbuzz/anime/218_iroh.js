// *Sips jasmine tea thoughtfully* This algorithm, like lightning, must flow naturally...
for (let lesson = 1; lesson <= 100; lesson++) {
  let wisdom = '';
  if (lesson % 3 === 0) wisdom += 'Fizz';
  if (lesson % 5 === 0) wisdom += 'Buzz';
  console.log(wisdom || lesson);
}
