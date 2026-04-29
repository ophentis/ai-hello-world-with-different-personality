#!/usr/bin/env node
// Full Metal Jacket: Sort Through Regimented Discipline

const INPUT_ARRAY = [82, 43, 10, 27, 38, 3, 9];

const disciplinedSort = (unsortedArray) => {
  const workingArray = unsortedArray.slice();
  const arrayLength = workingArray.length;

  for (let outerPass = 0; outerPass < arrayLength; outerPass++) {
    for (let innerPass = 0; innerPass < arrayLength - outerPass - 1; innerPass++) {
      const currentElement = workingArray[innerPass];
      const nextElement = workingArray[innerPass + 1];

      const requiresSwap = (currentElement > nextElement);
      if (requiresSwap) {
        const temporary = currentElement;
        workingArray[innerPass] = nextElement;
        workingArray[innerPass + 1] = temporary;
      }
    }
  }

  return workingArray;
};

const sortedResult = disciplinedSort(INPUT_ARRAY);
console.log('[' + sortedResult.join(',') + ']');
