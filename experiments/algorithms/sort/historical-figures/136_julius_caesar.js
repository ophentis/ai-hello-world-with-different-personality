// By the will of Rome, this array shall be conquered and ordered!
const legions = [38, 27, 43, 3, 9, 82, 10];
legions.sort((barbarian, roman) => barbarian - roman);
console.log('[' + legions.join(',') + ']');
