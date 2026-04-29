// The Book of Five Rings - strategy in stillness, precision in motion
// Observe the natural flow, guide the way with minimal effort

const untamed = [38, 27, 43, 3, 9, 82, 10];
const refined = [...untamed];

// Bubble sort, but with the warrior's patience - each ripple finds rest
for (let cycle = 0; cycle < refined.length; cycle++) {
  for (let counter = 0; counter < refined.length - cycle - 1; counter++) {
    if (refined[counter] > refined[counter + 1]) {
      [refined[counter], refined[counter + 1]] = [refined[counter + 1], refined[counter]];
    }
  }
}

console.log('[' + refined.join(',') + ']');
