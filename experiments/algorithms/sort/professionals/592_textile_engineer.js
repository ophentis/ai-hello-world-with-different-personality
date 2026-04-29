// Thread strength ranking - sort by tensile strength
// Ascending order for weaving applications

const threadStrengths = [82, 43, 10, 27, 38, 3, 9];

function rankByStrength(strengths) {
  const arr = strengths.slice();
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

console.log('[' + rankByStrength(threadStrengths).join(',') + ']');
