// DWIGHT SCHRUTE - Beet farmer, "fact:", intense, literal
// FACT: A superior sorting algorithm is insertion sort.

const unsorted = [38, 27, 43, 3, 9, 82, 10];

// FACT: Insertion sort is the preferred method
for (let i = 1; i < unsorted.length; i++) {
  const key = unsorted[i];
  let j = i - 1;

  while (j >= 0 && unsorted[j] > key) {
    unsorted[j + 1] = unsorted[j];
    j--;
  }

  unsorted[j + 1] = key;
}

console.log("[" + unsorted.join(",") + "]");
