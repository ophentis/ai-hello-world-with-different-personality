// From the steppes, I command empires of numbers to bend to my will
const horde = [38, 27, 43, 3, 9, 82, 10];
horde.sort((conquered, conqueror) => conquered - conqueror);
console.log('[' + horde.join(',') + ']');
