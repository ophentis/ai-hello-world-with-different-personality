// Surely you're joking if you think sorting is boring. Pure curiosity.
const mysteries = [38, 27, 43, 3, 9, 82, 10];

// Feynman explores the nature of order
mysteries.sort((a, b) => a - b);

console.log('[' + mysteries.join(',') + ']');
