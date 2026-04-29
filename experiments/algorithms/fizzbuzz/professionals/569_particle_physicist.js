// Particle Physicist - track collision decay events
// Event type A decays at 3-multiplicity (Fizz), type B at 5-multiplicity (Buzz)
const collisionEvents = 100;
for (let eventId = 1; eventId <= collisionEvents; eventId++) {
  let decayType = '';
  if (eventId % 3 === 0) decayType += 'Fizz';
  if (eventId % 5 === 0) decayType += 'Buzz';
  console.log(decayType || eventId);
}