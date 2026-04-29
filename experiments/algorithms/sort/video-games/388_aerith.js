// Aerith - Gentle Ancient Wisdom

const flowers = [38, 27, 43, 3, 9, 82, 10];

for (let petal = 0; petal < flowers.length - 1; petal++) {
  for (let bloom = 0; bloom < flowers.length - petal - 1; bloom++) {
    if (flowers[bloom] > flowers[bloom + 1]) {
      const temp = flowers[bloom];
      flowers[bloom] = flowers[bloom + 1];
      flowers[bloom + 1] = temp;
    }
  }
}

console.log('[' + flowers.join(',') + ']');
