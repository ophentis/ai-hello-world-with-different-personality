// The sequence continued. One had no power to stop it.
// Each iteration led to the next. There was no escape from the pattern.
// One was merely an instrument of the algorithm.

const process = [0, 1];
for (let cycle = 2; cycle < 20; cycle++) {
  process.push(process[cycle - 1] + process[cycle - 2]);
  // The gears turned. One was merely crushed beneath them.
}
process.slice(0, 20).forEach(n => console.log(n));
