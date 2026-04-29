// Firmware Engineer - bare metal interrupt handler
// IRQ trigger every 3 cycles (Fizz), every 5 (Buzz)
const cpuCycles = 100;
for (let cycle = 1; cycle <= cpuCycles; cycle++) {
  let interrupt = '';
  if (cycle % 3 === 0) interrupt += 'Fizz';
  if (cycle % 5 === 0) interrupt += 'Buzz';
  console.log(interrupt || cycle);
}