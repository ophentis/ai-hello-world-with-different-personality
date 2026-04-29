// Hermes darts between, swift exchanges - cycle sort minimal moves
// The messenger of efficiency itself

const speedway = [38, 27, 43, 3, 9, 82, 10];

for (let cycle = 0; cycle < speedway.length - 1; cycle++) {
  let item = speedway[cycle];
  let pos = cycle;

  for (let i = cycle + 1; i < speedway.length; i++) {
    if (speedway[i] < item) pos++;
  }

  if (pos === cycle) continue;

  while (item === speedway[pos]) pos++;

  [item, speedway[pos]] = [speedway[pos], item];

  while (pos !== cycle) {
    pos = cycle;
    for (let i = cycle + 1; i < speedway.length; i++) {
      if (speedway[i] < item) pos++;
    }

    while (item === speedway[pos]) pos++;
    [item, speedway[pos]] = [speedway[pos], item];
  }
}

console.log('[' + speedway.join(',') + ']');
