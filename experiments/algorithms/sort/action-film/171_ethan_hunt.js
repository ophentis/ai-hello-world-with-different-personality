// Ethan Hunt - Impossible Mission to sort
// High-tech gadget sorting with precision
const classified = [38, 27, 43, 3, 9, 82, 10];

// Merge sort - sophisticated, reliable technology
function merge(intelligence, left, middle, right) {
  const temp = [];
  let i = left;
  let j = middle + 1;

  while (i <= middle && j <= right) {
    if (intelligence[i] <= intelligence[j]) {
      temp.push(intelligence[i++]);
    } else {
      temp.push(intelligence[j++]);
    }
  }

  while (i <= middle) temp.push(intelligence[i++]);
  while (j <= right) temp.push(intelligence[j++]);

  for (let k = 0; k < temp.length; k++) {
    intelligence[left + k] = temp[k];
  }
}

function impossibleMissionSort(operation, left = 0, right = operation.length - 1) {
  if (left < right) {
    const middle = Math.floor((left + right) / 2);
    impossibleMissionSort(operation, left, middle);
    impossibleMissionSort(operation, middle + 1, right);
    merge(operation, left, middle, right);
  }
}

impossibleMissionSort(classified);
console.log('[' + classified.join(',') + ']');
