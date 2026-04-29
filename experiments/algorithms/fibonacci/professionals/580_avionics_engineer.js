// Flight path sequence generation - golden ratio patterns in aircraft navigation
// 20 iterations of Fibonacci for certified trajectory calculations

const iterations = 20;
let previous = 0;
let current = 1;

console.log(previous);

for (let flightLeg = 1; flightLeg < iterations; flightLeg++) {
  console.log(current);
  const nextWaypoint = previous + current;
  previous = current;
  current = nextWaypoint;
}
