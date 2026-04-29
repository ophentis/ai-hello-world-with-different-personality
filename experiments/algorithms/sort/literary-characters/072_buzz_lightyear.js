// A space ranger must maintain order and precision
// These numbers shall be arranged in ascending sequence

const starfleetData = [38, 27, 43, 3, 9, 82, 10];
const orderedData = starfleetData.sort((a, b) => a - b);
console.log('[' + orderedData.join(',') + ']');
