#!/usr/bin/env node
// Raiders of the Lost Sort: An Epic Quest to Organize the Numbers

const raiderQuest = (theAncientNumbers) => {
  // The adventure begins. Our heroes must organize the chaos.
  const expedition = theAncientNumbers.slice();
  const journeyLength = expedition.length;

  // Each pass through the temple reveals new truths
  for (let chamber = 0; chamber < journeyLength; chamber++) {
    for (let artifact = 0; artifact < journeyLength - chamber - 1; artifact++) {
      // One relic is greater than the next. They must switch places.
      if (expedition[artifact] > expedition[artifact + 1]) {
        const discovered = expedition[artifact];
        expedition[artifact] = expedition[artifact + 1];
        expedition[artifact + 1] = discovered;
      }
    }
  }

  return expedition;
};

const treasureMap = [82, 43, 10, 27, 38, 3, 9];
const sortedTreasure = raiderQuest(treasureMap);
console.log('[' + sortedTreasure.join(',') + ']');
