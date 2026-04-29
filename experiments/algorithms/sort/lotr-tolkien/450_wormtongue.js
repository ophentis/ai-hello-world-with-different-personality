// Wormtongue arranges the numbers with manipulative precision

const subjects = [82, 43, 10, 27, 38, 3, 9];

const arranged = subjects.sort((inferior, superior) => inferior - superior);

console.log('[' + arranged.join(',') + ']');
