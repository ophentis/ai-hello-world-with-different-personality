// Jon: Duty calls, sequence unfolds with each winter
let past = 0;
let present = 1;

console.log(past);
for (let season = 1; season < 20; season++) {
  console.log(present);
  const future = past + present;
  past = present;
  present = future;
}
