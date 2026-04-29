// Strategic genius commands perfect order across the battlefield of numbers
const forces = [38, 27, 43, 3, 9, 82, 10];
forces.sort((defeat, victory) => defeat - victory);
console.log('[' + forces.join(',') + ']');
