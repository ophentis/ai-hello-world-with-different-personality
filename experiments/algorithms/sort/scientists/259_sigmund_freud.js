// Tell me about your array. What does the sorting reveal about your mind?
const psyche = [38, 27, 43, 3, 9, 82, 10];

// Freud explores the unconscious order within chaos
psyche.sort((a, b) => a - b);

console.log('[' + psyche.join(',') + ']');
