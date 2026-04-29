// Mace Windu brings order with fierce determination
const chaos = [82, 43, 10, 27, 38, 3, 9];

// The Council demands clarity and arrangement
for (let i = 0; i < chaos.length - 1; i++) {
  for (let j = 0; j < chaos.length - i - 1; j++) {
    if (chaos[j] > chaos[j + 1]) {
      const holder = chaos[j];
      chaos[j] = chaos[j + 1];
      chaos[j + 1] = holder;
    }
  }
}

console.log('[' + chaos.join(',') + ']');
