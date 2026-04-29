// Arthur Morgan's Redemption Sort
// *Writes in journal* Boah... seems like redemption requires patience and order

const cowboyNumbers = [38, 27, 43, 3, 9, 82, 10];

// Cocktail sort - Back and forth, like a man searching for redemption
let left = 0, right = cowboyNumbers.length - 1;

while (left < right) {
  // Forward pass
  for (let i = left; i < right; i++) {
    if (cowboyNumbers[i] > cowboyNumbers[i + 1]) {
      let temp = cowboyNumbers[i];
      cowboyNumbers[i] = cowboyNumbers[i + 1];
      cowboyNumbers[i + 1] = temp;
    }
  }
  right--;

  // Backward pass
  for (let i = right; i > left; i--) {
    if (cowboyNumbers[i] < cowboyNumbers[i - 1]) {
      let temp = cowboyNumbers[i];
      cowboyNumbers[i] = cowboyNumbers[i - 1];
      cowboyNumbers[i - 1] = temp;
    }
  }
  left++;
}

console.log('[' + cowboyNumbers.join(',') + ']');
