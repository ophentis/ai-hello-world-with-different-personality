// How delightfully pedestrian. Yet I shall orchestrate this with dark elegance.

for (let victim = 1; victim <= 100; victim++) {
  let sinister = '';

  // My web of intrigue catches every third number
  if (victim % 3 === 0) sinister += 'Fizz';
  // And every fifth number trembles before me
  if (victim % 5 === 0) sinister += 'Buzz';

  // The game concludes perfectly
  console.log(sinister || victim);
}
