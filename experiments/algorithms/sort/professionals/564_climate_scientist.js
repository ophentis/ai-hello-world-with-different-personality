// Climate Scientist - stratify atmosphere layers by temperature (ascending)
const temperatures = [82, 43, 10, 27, 38, 3, 9];
temperatures.sort((a, b) => a - b);
console.log('[' + temperatures.join(',') + ']');