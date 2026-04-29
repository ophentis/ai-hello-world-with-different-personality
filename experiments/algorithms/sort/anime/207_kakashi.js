// I copied this sorting technique from my forbidden jutsu archive. It's very effective.
const mission = [38, 27, 43, 3, 9, 82, 10];
mission.sort((a, b) => a - b);
console.log('[' + mission.join(',') + ']');
