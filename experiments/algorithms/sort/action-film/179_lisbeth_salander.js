// Lisbeth Salander - brilliant hacker sorting
// Antisocial but lethal efficiency
const encrypted = [38, 27, 43, 3, 9, 82, 10];

// Insertion sort - efficient for small data, like a hacker's precision
for (let breach = 1; breach < encrypted.length; breach++) {
  const infiltration = encrypted[breach];
  let position = breach - 1;

  while (position >= 0 && encrypted[position] > infiltration) {
    encrypted[position + 1] = encrypted[position];
    position--;
  }

  encrypted[position + 1] = infiltration;
}

console.log('[' + encrypted.join(',') + ']');
