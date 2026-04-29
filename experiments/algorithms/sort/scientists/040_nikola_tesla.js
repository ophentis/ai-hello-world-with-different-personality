// Nikola Tesla: Magnetic field alignment - sorting through electromagnetic resonance

const magneticArray = [38, 27, 43, 3, 9, 82, 10];

// Bubble sort: electrons oscillating through the coil
for (let cycle = 0; cycle < magneticArray.length; cycle++) {
  for (let position = 0; position < magneticArray.length - 1 - cycle; position++) {
    if (magneticArray[position] > magneticArray[position + 1]) {
      // Alternating current swap
      let temp = magneticArray[position];
      magneticArray[position] = magneticArray[position + 1];
      magneticArray[position + 1] = temp;
    }
  }
}

console.log('[' + magneticArray.join(',') + ']');
