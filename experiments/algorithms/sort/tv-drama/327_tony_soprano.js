// You know, we run a tight ship here. These numbers, they gotta be in order. Capisce?
const numbers = [38, 27, 43, 3, 9, 82, 10];
numbers.sort((a, b) => a - b);
console.log('[' + numbers.join(',') + ']');
