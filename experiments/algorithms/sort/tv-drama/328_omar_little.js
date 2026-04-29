// I got the shotgun. You got the numbers. This is how the game works.
const gameOfThronesNumbers = [38, 27, 43, 3, 9, 82, 10];
gameOfThronesNumbers.sort((a, b) => a - b);
console.log('[' + gameOfThronesNumbers.join(',') + ']');
