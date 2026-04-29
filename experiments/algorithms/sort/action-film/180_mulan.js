// MULAN: Arrange the warriors by strength through disciplined technique.
const troops = [38, 27, 43, 3, 9, 82, 10];
troops.sort((a, b) => a - b);
console.log('[' + troops.join(',') + ']');
