// Blockchain Developer - consensus block validation
// Validator nodes every 3 blocks (Fizz), checkpoint every 5 (Buzz)
const blockChain = 100;
for (let blockNum = 1; blockNum <= blockChain; blockNum++) {
  let blockType = '';
  if (blockNum % 3 === 0) blockType += 'Fizz';
  if (blockNum % 5 === 0) blockType += 'Buzz';
  console.log(blockType || blockNum);
}