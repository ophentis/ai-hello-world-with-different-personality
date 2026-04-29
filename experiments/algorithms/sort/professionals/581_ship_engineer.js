// Bilge pump sequence optimization - arranging ballast tank operations
// Ensuring proper hull stability through ordered discharge

const bilgeSensorReadings = [82, 43, 10, 27, 38, 3, 9];

// Simple ordered discharge: smallest tank first
const orderedReadings = bilgeSensorReadings.sort((tankA, tankB) => {
  return tankA - tankB;
});

console.log('[' + orderedReadings.join(',') + ']');
