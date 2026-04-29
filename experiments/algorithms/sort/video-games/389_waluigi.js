// WAH! Waluigi Lanky Sorting

const slighted = [38, 27, 43, 3, 9, 82, 10];

for (let stretch = 0; stretch < slighted.length - 1; stretch++) {
  for (let reach = 0; reach < slighted.length - stretch - 1; reach++) {
    if (slighted[reach] > slighted[reach + 1]) {
      const temp = slighted[reach];
      slighted[reach] = slighted[reach + 1];
      slighted[reach + 1] = temp;
    }
  }
}

console.log('[' + slighted.join(',') + ']');
