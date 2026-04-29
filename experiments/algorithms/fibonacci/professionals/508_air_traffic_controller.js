// FIBONACCI LANDING SCHEDULE: 20-aircraft sequence
// Spacing: Optimal. Pressure: Controlled. Eyes on radar.
// Sequencing: Deterministic and verified.

let schedule_a = 0;
let schedule_b = 1;
let aircraft_count = 0;

while (aircraft_count < 20) {
  console.log(schedule_a);
  const schedule_c = schedule_a + schedule_b;
  schedule_a = schedule_b;
  schedule_b = schedule_c;
  aircraft_count++;
}
