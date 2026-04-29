// SPOCK: Logic dictates ascending order. Live long and sort well.
const logical = [38, 27, 43, 3, 9, 82, 10];
logical.sort((a, b) => a - b);
console.log('[' + logical.join(',') + ']');
