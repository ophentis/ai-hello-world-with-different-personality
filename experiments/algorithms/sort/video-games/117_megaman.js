// Mega Man's Systematic Sort - Absorb the weapon!
// Each algorithm is a copied power. This one is merge sort.

const systemNumbers = [38, 27, 43, 3, 9, 82, 10];

function megaManSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = megaManSort(arr.slice(0, mid));
  const right = megaManSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    result.push(left[i] <= right[j] ? left[i++] : right[j++]);
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

const sorted = megaManSort(systemNumbers);
console.log('[' + sorted.join(',') + ']');
