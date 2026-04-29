// Cersei: "Power is power" - cunning, manipulative, ruthless
for (let power = 1; power <= 100; power++) {
  let grasp = '';

  // Every division strengthens my hold
  if (power % 3 === 0) grasp += 'Fizz';
  if (power % 5 === 0) grasp += 'Buzz';

  console.log(grasp || power);
}
