// DEPTH GAUGE FIBONACCI: Pressure reading sequence
// 20 meter increments. Hull integrity: Critical.
// Sonar contact: Static pattern. Silent running maintained.

let depth_current = 0;
let depth_previous = 1;
let meter_count = 0;

while (meter_count < 20) {
  console.log(depth_current);
  const depth_next = depth_current + depth_previous;
  depth_current = depth_previous;
  depth_previous = depth_next;
  meter_count++;
}
