// Satellite Engineer - orbital mechanics epoch updates
// Ephemeris every 3 orbits (Fizz), maneuver window every 5 (Buzz)
const orbitalElements = 100;
for (let element = 1; element <= orbitalElements; element++) {
  let maneuver = '';
  if (element % 3 === 0) maneuver += 'Fizz';
  if (element % 5 === 0) maneuver += 'Buzz';
  console.log(maneuver || element);
}