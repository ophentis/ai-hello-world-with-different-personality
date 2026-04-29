// Raw. Unpolished. Quick sort: fast, aggressive, no bullshit.
// Come as you are to this sort. Raw. Honest. Unpretentious.

function rawSort(arr, start, end) {
  if (start < end) {
    const wall = grimePartition(arr, start, end);
    rawSort(arr, start, wall - 1);
    rawSort(arr, wall + 1, end);
  }
}

function grimePartition(arr, start, end) {
  const grime = arr[end];
  let i = start - 1;
  for (let j = start; j < end; j++) {
    if (arr[j] < grime) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
  return i + 1;
}

const comeAsYouAre = [38, 27, 43, 3, 9, 82, 10];
rawSort(comeAsYouAre, 0, comeAsYouAre.length - 1);
console.log('[' + comeAsYouAre.join(',') + ']');
