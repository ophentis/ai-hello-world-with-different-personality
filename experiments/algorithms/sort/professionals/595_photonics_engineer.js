// Wavelength sorting - arrange by refractive index
// Ascending order for optical system design

const refractiveIndices = [82, 43, 10, 27, 38, 3, 9];

function orderByRefraction(indices) {
  const ordered = indices.slice();
  for (let i = 0; i < ordered.length; i++) {
    for (let j = i; j < ordered.length; j++) {
      if (ordered[j] < ordered[i]) {
        [ordered[i], ordered[j]] = [ordered[j], ordered[i]];
      }
    }
  }
  return ordered;
}

console.log('[' + orderByRefraction(refractiveIndices).join(',') + ']');
