// RADIOACTIVE DECAY SERIES: Fibonacci Pattern
// Half-life calculation model: 20 iterations
// Containment: Critical mass threshold monitoring

let parent_nucleus = 0;
let daughter_nucleus = 1;
let decay_count = 0;

while (decay_count < 20) {
  console.log(parent_nucleus);
  const granddaughter = parent_nucleus + daughter_nucleus;
  parent_nucleus = daughter_nucleus;
  daughter_nucleus = granddaughter;
  decay_count++;
}
