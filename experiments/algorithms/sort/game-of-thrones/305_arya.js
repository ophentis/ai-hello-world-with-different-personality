// Arya: Strike down each name on the list with precision
const theList = [38, 27, 43, 3, 9, 82, 10];

// Selection sort - systematically cross off each name
for (let i = 0; i < theList.length; i++) {
  let minIndex = i;
  for (let j = i + 1; j < theList.length; j++) {
    if (theList[j] < theList[minIndex]) {
      minIndex = j;
    }
  }
  let temp = theList[i];
  theList[i] = theList[minIndex];
  theList[minIndex] = temp;
}

console.log('[' + theList.join(',') + ']');
