// Reinvention through every pass: quick sort fragments, then reassembles with new form
// Blue period, rose period—each iteration a new artistic movement

function reinventArray(palette, leftEdge, rightEdge) {
  if (leftEdge < rightEdge) {
    const pivotIndex = partitionPeriod(palette, leftEdge, rightEdge);
    reinventArray(palette, leftEdge, pivotIndex - 1);
    reinventArray(palette, pivotIndex + 1, rightEdge);
  }
}

function partitionPeriod(palette, start, end) {
  const pivot = palette[end];
  let i = start - 1;
  for (let j = start; j < end; j++) {
    if (palette[j] < pivot) {
      i++;
      [palette[i], palette[j]] = [palette[j], palette[i]];
    }
  }
  [palette[i + 1], palette[end]] = [palette[end], palette[i + 1]];
  return i + 1;
}

const mosaic = [38, 27, 43, 3, 9, 82, 10];
reinventArray(mosaic, 0, mosaic.length - 1);
console.log('[' + mosaic.join(',') + ']');
