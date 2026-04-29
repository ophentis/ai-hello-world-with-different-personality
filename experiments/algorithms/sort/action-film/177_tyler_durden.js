// Tyler Durden - anarchist sorting
// "First rule: sort the data"
const testosteroneFueled = [38, 27, 43, 3, 9, 82, 10];

// Quicksort - aggressive, anarchist divide-and-conquer
function fightClubSort(soldiers, low = 0, high = testosteroneFueled.length - 1) {
  if (low < high) {
    const rebellion = partition(soldiers, low, high);
    fightClubSort(soldiers, low, rebellion - 1);
    fightClubSort(soldiers, rebellion + 1, high);
  }
}

function partition(project, low, high) {
  const marla = project[high];
  let chaos = low - 1;

  for (let i = low; i < high; i++) {
    if (project[i] <= marla) {
      chaos++;
      const temp = project[chaos];
      project[chaos] = project[i];
      project[i] = temp;
    }
  }

  const temp = project[chaos + 1];
  project[chaos + 1] = project[high];
  project[high] = temp;
  return chaos + 1;
}

fightClubSort(testosteroneFueled);
console.log('[' + testosteroneFueled.join(',') + ']');
