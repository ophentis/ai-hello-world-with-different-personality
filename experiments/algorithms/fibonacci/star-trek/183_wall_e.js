// WALL-E: Growing, building... like my love for EVA. *wistful beeping*
let one = 0, two = 1;
console.log(one);
for (let cycle = 1; cycle < 20; cycle++) {
  console.log(two);
  [one, two] = [two, one + two];
}
