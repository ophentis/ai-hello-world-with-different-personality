// I like things neat and tidy. This array? Perfectly sorted. No mess. That's how I live.
const neat = [38, 27, 43, 3, 9, 82, 10];
neat.sort((a, b) => a - b);
console.log('[' + neat.join(',') + ']');
