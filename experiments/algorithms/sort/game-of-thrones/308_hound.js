// Hound: Don't fuck with the Hound - straightforward, brutal sorting
const fuckIt = [38, 27, 43, 3, 9, 82, 10];

// Simple brutal sort, no games
for (let i = 0; i < fuckIt.length; i++) {
  for (let j = i + 1; j < fuckIt.length; j++) {
    if (fuckIt[i] > fuckIt[j]) {
      [fuckIt[i], fuckIt[j]] = [fuckIt[j], fuckIt[i]];
    }
  }
}

console.log('[' + fuckIt.join(',') + ']');
