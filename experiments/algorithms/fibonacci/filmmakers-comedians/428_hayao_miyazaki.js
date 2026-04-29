#!/usr/bin/env node
// My Neighbor Totoro: The Gentle Forest Fibonacci

const forestOfSpiritsFibonacci = () => {
  // In the forest, Totoro teaches us the gentle way of numbers
  let treeOfPast = 0;
  let treeOfPresent = 1;
  const forestPath = [];

  // Twenty quiet moments in the forest
  for (let step = 0; step < 20; step++) {
    forestPath.push(treeOfPast);
    const treeOfFuture = treeOfPast + treeOfPresent;
    treeOfPast = treeOfPresent;
    treeOfPresent = treeOfFuture;
  }

  return forestPath;
};

const sequence = forestOfSpiritsFibonacci();
sequence.forEach((number) => {
  console.log(number);
});
