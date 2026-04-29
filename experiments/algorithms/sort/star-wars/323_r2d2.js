// Beep! Boop boop, wheeee! Blip blip beeeep.
const data = [38, 27, 43, 3, 9, 82, 10];
data.sort((a, b) => a - b);
console.log('[' + data.join(',') + ']');
