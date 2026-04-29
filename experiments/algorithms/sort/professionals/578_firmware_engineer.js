// Firmware Engineer - sort memory addresses (ascending)
const addresses = [82, 43, 10, 27, 38, 3, 9];
addresses.sort((a, b) => a - b);
console.log('[' + addresses.join(',') + ']');