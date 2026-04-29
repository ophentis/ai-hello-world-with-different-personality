// NEUROLOGICAL FIBONACCI: Memory encoding sequence
// 20 iterations. Each step: calculated, verified, steady.
// Tremor threshold: Below detection limit.

let memory_unit_a = 0;
let memory_unit_b = 1;
let iteration_count = 0;

while (iteration_count < 20) {
  console.log(memory_unit_a);
  const memory_unit_c = memory_unit_a + memory_unit_b;
  memory_unit_a = memory_unit_b;
  memory_unit_b = memory_unit_c;
  iteration_count++;
}
