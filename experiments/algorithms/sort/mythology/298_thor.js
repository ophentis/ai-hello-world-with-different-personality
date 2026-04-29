// Thor's mighty hammer - pancake sort flips with brute strength
// Mjolnir smashes everything into place

const foes = [38, 27, 43, 3, 9, 82, 10];

function findMaxIndex(arr, end) {
  let maxIdx = 0;
  for (let i = 0; i <= end; i++) {
    if (arr[i] > arr[maxIdx]) maxIdx = i;
  }
  return maxIdx;
}

function reverse(arr, end) {
  let start = 0;
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

for (let i = foes.length - 1; i > 0; i--) {
  const maxIdx = findMaxIndex(foes, i);
  if (maxIdx !== i) {
    reverse(foes, maxIdx);
    reverse(foes, i);
  }
}

console.log('[' + foes.join(',') + ']');
