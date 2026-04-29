// Power! I must sort through these numbers and dominate them all
// The strong rise to their rightful place at the end

const victims = [38, 27, 43, 3, 9, 82, 10];
const dominated = victims.sort((weak, strong) => weak - strong);
console.log('[' + dominated.join(',') + ']');
