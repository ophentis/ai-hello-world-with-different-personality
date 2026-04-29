// WALL-E: *beep boop* Compacting these numbers into order. EVA!
const trash = [38, 27, 43, 3, 9, 82, 10];
// Carefully arranging the items
trash.sort((a, b) => a - b);
console.log('[' + trash.join(',') + ']');
