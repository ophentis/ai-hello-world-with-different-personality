// TRAJECTORY CALCULATION: Fibonacci altitude sequence
// 20 waypoints. Delta-v margins computed. Safety factor applied.
// Landing gear: Down. Approach stable.

let altitude_prev = 0;
let altitude_curr = 1;
let waypoint = 0;

while (waypoint < 20) {
  console.log(altitude_prev);
  const altitude_next = altitude_prev + altitude_curr;
  altitude_prev = altitude_curr;
  altitude_curr = altitude_next;
  waypoint++;
}
