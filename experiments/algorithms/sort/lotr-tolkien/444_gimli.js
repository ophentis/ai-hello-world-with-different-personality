// A dwarf's honor demands proper order! I shall sort these wretches!

const treasures = [82, 43, 10, 27, 38, 3, 9];

const orderedTreasure = treasures.sort((thisTreasure, thatTreasure) => {
  // No nonsense! Ascending order or my beard is forfeit!
  return thisTreasure - thatTreasure;
});

console.log('[' + orderedTreasure.join(',') + ']');
