// Acoustic sort. Story-driven. Building it up layer by layer.
// Insertion sort with a story. Each layer adds texture.

const layer = [38, 27, 43, 3, 9, 82, 10];

for (let loop = 1; loop < layer.length; loop++) {
  const pedal = layer[loop];
  let story = loop - 1;

  while (story >= 0 && layer[story] > pedal) {
    layer[story + 1] = layer[story];
    story--;
  }
  layer[story + 1] = pedal;
}

console.log('[' + layer.join(',') + ']');
