// CLAPTRAP UNIT-CL4P-TP SORTING PROTOCOL - WHEE-WHEE-WHEE!

const arrayOfDancing = [38, 27, 43, 3, 9, 82, 10];

// Bubble sort dance! One-two-three, one-two-three!
for (let leftFoot = 0; leftFoot < arrayOfDancing.length - 1; leftFoot++) {
  for (let rightFoot = 0; rightFoot < arrayOfDancing.length - leftFoot - 1; rightFoot++) {
    if (arrayOfDancing[rightFoot] > arrayOfDancing[rightFoot + 1]) {
      const tap = arrayOfDancing[rightFoot];
      arrayOfDancing[rightFoot] = arrayOfDancing[rightFoot + 1];
      arrayOfDancing[rightFoot + 1] = tap;
    }
  }
}

console.log('[' + arrayOfDancing.join(',') + ']');
