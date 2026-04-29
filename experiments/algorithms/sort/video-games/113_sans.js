// Sans's Lazy Sort - Or is it? Heh heh heh...
// *puts on spooky face* You're gonna have a SORT time

const boneyNumbers = [38, 27, 43, 3, 9, 82, 10];

// Bogosort - the laziest (and funniest) way to sort
function bogoSort(arr) {
  while (!isSorted(arr)) {
    shuffle(arr);
  }
  return arr;
}

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

bogoSort(boneyNumbers);
console.log('[' + boneyNumbers.join(',') + ']');
