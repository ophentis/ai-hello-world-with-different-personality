// Palpatine: Unlimited power grows through the sequence, unlimited!
let subordinate = 0;
let master = 1;

console.log(subordinate);
for (let order = 1; order < 20; order++) {
  console.log(master);
  const unlimited = subordinate + master;
  subordinate = master;
  master = unlimited;
}
