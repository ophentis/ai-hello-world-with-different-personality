// Oprah: You inspire me! Let me inspire these numbers to be in order!
const dreams = [38, 27, 43, 3, 9, 82, 10];

// Believe in yourself, numbers! You can be ordered!
for (let i = 0; i < dreams.length - 1; i++) {
  for (let j = i + 1; j < dreams.length; j++) {
    if (dreams[i] > dreams[j]) {
      [dreams[i], dreams[j]] = [dreams[j], dreams[i]];
    }
  }
}

console.log('[' + dreams.join(',') + ']');
