// Anakin: "I don't like sand" - conflicted, passionate, dramatic fall
for (let conflict = 1; conflict <= 100; conflict++) {
  let emotion = '';

  if (conflict % 3 === 0) emotion += 'Fizz';
  if (conflict % 5 === 0) emotion += 'Buzz';

  console.log(emotion || conflict);
}
