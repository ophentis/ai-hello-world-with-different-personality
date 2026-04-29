// Insertion sort: paint stroke by stroke, tormented and beautiful
// Each element joins the canvas with passionate, deliberate motion

const canvas = [38, 27, 43, 3, 9, 82, 10];

for (let torment = 1; torment < canvas.length; torment++) {
  const currentBrush = canvas[torment];
  let passion = torment - 1;

  while (passion >= 0 && canvas[passion] > currentBrush) {
    canvas[passion + 1] = canvas[passion];
    passion--;
  }
  canvas[passion + 1] = currentBrush;
}

console.log('[' + canvas.join(',') + ']');
