// Neo - "I know kung fu" sorting
// Bending reality through the algorithm
const matrix = [38, 27, 43, 3, 9, 82, 10];

// Quicksort - The One's choice-based algorithm
function theOne(agents, low = 0, high = matrix.length - 1) {
  if (low < high) {
    const chosen = partition(agents, low, high);
    theOne(agents, low, chosen - 1);
    theOne(agents, chosen + 1, high);
  }
}

function partition(reality, low, high) {
  const illusion = reality[high];
  let wall = low - 1;

  for (let i = low; i < high; i++) {
    if (reality[i] <= illusion) {
      wall++;
      const temp = reality[wall];
      reality[wall] = reality[i];
      reality[i] = temp;
    }
  }

  const temp = reality[wall + 1];
  reality[wall + 1] = reality[high];
  reality[high] = temp;
  return wall + 1;
}

theOne(matrix);
console.log('[' + matrix.join(',') + ']');
