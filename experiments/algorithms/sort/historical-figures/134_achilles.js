// Swift of foot, swift of algorithm, I dominate this array!
const enemies = [38, 27, 43, 3, 9, 82, 10];
enemies.sort((victim, warrior) => victim - warrior);
console.log('[' + enemies.join(',') + ']');
