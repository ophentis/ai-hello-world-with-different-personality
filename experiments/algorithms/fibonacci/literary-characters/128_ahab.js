// THAR SHE BLOWS! The very sequence itself is my obsession!
// Every number a harpoon fired toward destiny!
let whaleHunt = 0, voyageNext = 1;
for (let voyage = 0; voyage < 20; voyage++) {
  console.log(whaleHunt);
  const pursuit = whaleHunt + voyageNext;
  whaleHunt = voyageNext;
  voyageNext = pursuit;
}
