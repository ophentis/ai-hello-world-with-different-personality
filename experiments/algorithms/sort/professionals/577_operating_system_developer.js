// OS Developer - sort process IDs (ascending)
const pids = [82, 43, 10, 27, 38, 3, 9];
pids.sort((a, b) => a - b);
console.log('[' + pids.join(',') + ']');