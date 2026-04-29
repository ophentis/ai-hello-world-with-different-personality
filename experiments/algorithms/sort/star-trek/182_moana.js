// MOANA: I navigate by the stars and the wayfinding of patterns.
const voyage = [38, 27, 43, 3, 9, 82, 10];
// Plot the course from smallest to largest
voyage.sort((a, b) => a - b);
console.log('[' + voyage.join(',') + ']');
