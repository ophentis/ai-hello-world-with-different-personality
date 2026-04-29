// Each part seeks the next, yearning for connection, as my heart yearns for companionship.
let part1 = 0, part2 = 1;
console.log(part1);
console.log(part2);
for (let i = 2; i < 20; i++) {
  const combined = part1 + part2;
  console.log(combined);
  part1 = part2;
  part2 = combined;
}
