// Satellite Engineer - sort orbital parameters (ascending)
const orbitalParams = [82, 43, 10, 27, 38, 3, 9];
orbitalParams.sort((a, b) => a - b);
console.log('[' + orbitalParams.join(',') + ']');