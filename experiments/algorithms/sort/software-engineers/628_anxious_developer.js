// Anxious Developer: Defensive sort with null checks everywhere

function safeSortArray(inputArray) {
  if (inputArray === null) {
    throw new Error('inputArray is null');
  }
  if (inputArray === undefined) {
    throw new Error('inputArray is undefined');
  }
  if (!Array.isArray(inputArray)) {
    throw new Error('inputArray is not an array');
  }
  if (inputArray.length === 0) {
    throw new Error('inputArray is empty');
  }

  const arrayToSort = [...inputArray];

  if (arrayToSort === null || arrayToSort === undefined) {
    throw new Error('Failed to create copy of array');
  }

  const sortedArray = arrayToSort.sort((a, b) => {
    if (a === null || a === undefined) {
      throw new Error('Element a is null or undefined');
    }
    if (b === null || b === undefined) {
      throw new Error('Element b is null or undefined');
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Elements must be numbers');
    }

    return a - b;
  });

  if (sortedArray === null || sortedArray === undefined) {
    throw new Error('Sorted array is null or undefined');
  }

  const jsonOutput = JSON.stringify(sortedArray);

  if (jsonOutput === null || jsonOutput === undefined) {
    throw new Error('JSON output is null or undefined');
  }

  console.log(jsonOutput);
}

const data = [82, 43, 10, 27, 38, 3, 9];
if (data !== null && data !== undefined) {
  safeSortArray(data);
}
