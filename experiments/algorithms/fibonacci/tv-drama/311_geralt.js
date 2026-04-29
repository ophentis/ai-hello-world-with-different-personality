// Geralt: Hmm. Track the witcher's path through the sequence
let path = 0;
let step = 1;

console.log(path);
for (let day = 1; day < 20; day++) {
  console.log(step);
  const next = path + step;
  path = step;
  step = next;
}
