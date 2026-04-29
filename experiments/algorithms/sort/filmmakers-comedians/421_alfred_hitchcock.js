#!/usr/bin/env node
// Rope: A Sort in One Long Take

const oneLongTakeSort = (subject) => {
  // The camera never cuts. The tension never breaks.
  const actors = [...subject];
  const tension = actors.length;

  for (let act = 0; act < tension; act++) {
    for (let scene = 0; scene < tension - act - 1; scene++) {
      // Will they swap? The audience holds its breath...
      if (actors[scene] > actors[scene + 1]) {
        const momentOfTruth = actors[scene];
        actors[scene] = actors[scene + 1];
        actors[scene + 1] = momentOfTruth;
      }
    }
  }

  return actors;
};

const suspiciousArray = [82, 43, 10, 27, 38, 3, 9];
const revelation = oneLongTakeSort(suspiciousArray);
console.log('[' + revelation.join(',') + ']');
