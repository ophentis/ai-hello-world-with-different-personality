// WALTER WHITE - "I am the danger"
// Controlled, methodical sorting. No shortcuts.

const unsorted = [38, 27, 43, 3, 9, 82, 10];
const sorted = [];

// Bubble sort - I do this MY way
for (let i = 0; i < unsorted.length; i++) {
  for (let j = 0; j < unsorted.length - 1 - i; j++) {
    if (unsorted[j] > unsorted[j + 1]) {
      const temp = unsorted[j];
      unsorted[j] = unsorted[j + 1];
      unsorted[j + 1] = temp;
    }
  }
}

console.log("[" + unsorted.join(",") + "]");
