// Rey learns sorting from the scraps of a fallen world
const salvage = [82, 43, 10, 27, 38, 3, 9];

// Piece by piece, finding her way
for (let piece = 0; piece < salvage.length; piece++) {
  for (let next = piece + 1; next < salvage.length; next++) {
    if (salvage[next] < salvage[piece]) {
      const temp = salvage[piece];
      salvage[piece] = salvage[next];
      salvage[next] = temp;
    }
  }
}

console.log('[' + salvage.join(',') + ']');
