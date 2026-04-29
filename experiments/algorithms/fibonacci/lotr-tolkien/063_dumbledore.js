// "Ah, the beauty of mathematics revealed through time"
// Each element begets the next in an eternal dance of numbers

let ancientWisdom = 0;
let currentTruth = 1;
console.log(ancientWisdom);
for (let moment = 1; moment < 20; moment++) {
  console.log(currentTruth);
  [ancientWisdom, currentTruth] = [currentTruth, ancientWisdom + currentTruth];
}
