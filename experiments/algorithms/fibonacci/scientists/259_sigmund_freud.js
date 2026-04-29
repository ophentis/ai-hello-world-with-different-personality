// The subconscious reveals itself. 20 sequences of buried desires and drives.
let ego = 0;
let id = 1;

console.log(ego);
console.log(id);

for (let dream = 0; dream < 18; dream++) {
  let repressed = ego + id;
  console.log(repressed);
  ego = id;
  id = repressed;
}
