// RAPUNZEL: These numbers... I've never arranged them before. Let me see...
const tangled = [38, 27, 43, 3, 9, 82, 10];
// I'll discover which comes first
tangled.sort((a, b) => a - b);
console.log('[' + tangled.join(',') + ']');
