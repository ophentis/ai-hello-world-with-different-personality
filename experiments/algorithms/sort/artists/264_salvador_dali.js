// Surreal sorting: elements drift and resolve in dream logic
// Merge sort: two melting streams become one, defying temporal causality

function dreamMerge(left, right) {
  const merged = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }
  return merged.concat(left.slice(i)).concat(right.slice(j));
}

function surreallySortDream(array) {
  if (array.length <= 1) return array;
  const middle = Math.floor(array.length / 2);
  const left = surreallySortDream(array.slice(0, middle));
  const right = surreallySortDream(array.slice(middle));
  return dreamMerge(left, right);
}

const melting = [38, 27, 43, 3, 9, 82, 10];
const resolved = surreallySortDream(melting);
console.log('[' + resolved.join(',') + ']');
