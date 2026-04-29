// RAPUNZEL: I wonder what lies beyond this tower...
for (let day = 1; day <= 100; day++) {
  let discovery = '';
  // What happens if three divides this day?
  if (day % 3 === 0) discovery += 'Fizz';
  // And five?
  if (day % 5 === 0) discovery += 'Buzz';
  console.log(discovery || day);
}
