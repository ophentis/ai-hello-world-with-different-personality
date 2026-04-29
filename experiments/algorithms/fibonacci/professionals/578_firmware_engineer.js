// Firmware Engineer - instruction cycle counts (Fibonacci)
const cycles = [0, 1];
while (cycles.length < 20) {
  cycles.push(cycles[cycles.length - 1] + cycles[cycles.length - 2]);
}
cycles.forEach(cy => console.log(cy));