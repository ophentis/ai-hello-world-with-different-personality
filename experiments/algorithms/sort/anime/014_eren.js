// Eren's destructive reorganization
const attackOnOrder = (wall) => {
  let rearranged = false;
  while (!rearranged) {
    rearranged = true;
    for (let i = 0; i < wall.length - 1; i++) {
      if (wall[i] > wall[i + 1]) {
        [wall[i], wall[i + 1]] = [wall[i + 1], wall[i]];
        rearranged = false;
      }
    }
  }
  return wall;
};
const breached = attackOnOrder([38, 27, 43, 3, 9, 82, 10]);
console.log('[' + breached.join(',') + ']');
