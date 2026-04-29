// WEDNESDAY: How grim. Even numbers cannot escape their prescribed order.
const darkness = [38, 27, 43, 3, 9, 82, 10];
darkness.sort((a, b) => a - b);
console.log('[' + darkness.join(',') + ']');
