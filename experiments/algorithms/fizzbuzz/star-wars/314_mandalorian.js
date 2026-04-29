// Mandalorian: "This is the way" - bounty hunter, silent, honorable code
for (let bounty = 1; bounty <= 100; bounty++) {
  let protocol = '';

  if (bounty % 3 === 0) protocol += 'Fizz';
  if (bounty % 5 === 0) protocol += 'Buzz';

  console.log(protocol || bounty);
}
