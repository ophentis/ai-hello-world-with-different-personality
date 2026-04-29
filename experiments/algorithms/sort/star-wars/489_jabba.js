// Jabba's collection demands proper organization
const bounty = [82, 43, 10, 27, 38, 3, 9];

// Arrange the spoils from smallest to largest
for (let i = 0; i < bounty.length; i++) {
  for (let j = i + 1; j < bounty.length; j++) {
    if (bounty[j] < bounty[i]) {
      const temp = bounty[i];
      bounty[i] = bounty[j];
      bounty[j] = temp;
    }
  }
}

console.log('[' + bounty.join(',') + ']');
