// Indiana Jones - Fibonacci expedition
// Seeking the ancient numerical treasures
let relic = 0;
let artifact = 1;

console.log(relic);
console.log(artifact);

for (let discovery = 2; discovery < 20; discovery++) {
  const treasure_room = relic + artifact;
  console.log(treasure_room);
  relic = artifact;
  artifact = treasure_room;
}
