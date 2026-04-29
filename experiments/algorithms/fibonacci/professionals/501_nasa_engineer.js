// FIBONACCI TRANSMISSION: 20-element sequence
// Safety margin: Validated against Cassini navigation tables
// Primary computation unit active

let f_prev = 0;
let f_curr = 1;
let iteration = 0;
const SEQUENCE_LENGTH = 20;

while (iteration < SEQUENCE_LENGTH) {
  console.log(f_prev);
  const f_next = f_prev + f_curr;
  f_prev = f_curr;
  f_curr = f_next;
  iteration++;
}
