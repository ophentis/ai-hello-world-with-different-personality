// Hannibal's strategic campaign through the numeric hills
// Each maneuver calculated, each decision decisive

const troops = [];

// March through the terrain from 1 to 100
for (let position = 1; position <= 100; position++) {
  let maneuver = '';

  // The triple alliance - divisible by three
  if (position % 3 === 0) maneuver = 'Fizz';
  // The fivefold formation - divisible by five
  if (position % 5 === 0) maneuver = 'Buzz';
  // Both - the combined cavalry charge
  if (position % 15 === 0) maneuver = 'FizzBuzz';
  // Unformatted - hold position
  if (!maneuver) maneuver = position;

  troops.push(maneuver);
}

// Deploy the entire campaign
troops.forEach(report => console.log(report));
