// OS Developer - kernel scheduler time quantum
// Context switch every 3ms (Fizz), preempt every 5ms (Buzz)
const timeSlice = 100;
for (let tick = 1; tick <= timeSlice; tick++) {
  let schedEvent = '';
  if (tick % 3 === 0) schedEvent += 'Fizz';
  if (tick % 5 === 0) schedEvent += 'Buzz';
  console.log(schedEvent || tick);
}