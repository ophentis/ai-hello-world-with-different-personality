// EEYORE: Arranged. Not that it matters. Sort of.
const tail = [38, 27, 43, 3, 9, 82, 10];
tail.sort((a, b) => a - b);
console.log('[' + tail.join(',') + ']');
