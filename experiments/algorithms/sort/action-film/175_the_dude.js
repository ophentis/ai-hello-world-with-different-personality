// The Dude - "The Dude abides" sorting
// Laid back, bowling approach
const lanes = [38, 27, 43, 3, 9, 82, 10];

// Bubble sort - just let it flow, man
for (let frame = 0; frame < lanes.length; frame++) {
  for (let roll = 0; roll < lanes.length - 1 - frame; roll++) {
    if (lanes[roll] > lanes[roll + 1]) {
      const white_russian = lanes[roll];
      lanes[roll] = lanes[roll + 1];
      lanes[roll + 1] = white_russian;
    }
  }
}

console.log('[' + lanes.join(',') + ']');
