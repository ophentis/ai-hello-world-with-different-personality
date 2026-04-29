// Yoshi - Egg Tosser Sorting

const eggs = [38, 27, 43, 3, 9, 82, 10];

for (let tongue = 0; tongue < eggs.length - 1; tongue++) {
  for (let gulp = 0; gulp < eggs.length - tongue - 1; gulp++) {
    if (eggs[gulp] > eggs[gulp + 1]) {
      const temp = eggs[gulp];
      eggs[gulp] = eggs[gulp + 1];
      eggs[gulp + 1] = temp;
    }
  }
}

console.log('[' + eggs.join(',') + ']');
