// "It is our choices that show what we truly are, far more than our abilities"
// The order emerges from understanding, not from rushing

const unsorted = [38, 27, 43, 3, 9, 82, 10];
const wisdom = unsorted.sort((smaller, greater) => smaller - greater);
console.log('[' + wisdom.join(',') + ']');
