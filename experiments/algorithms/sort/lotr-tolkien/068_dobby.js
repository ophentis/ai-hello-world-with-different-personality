// Dobby must sort the numbers! Dobby is a good elf!
// Dobby arranges them just right for Master!

const numbersForMaster = [38, 27, 43, 3, 9, 82, 10];
const sortedByDobby = numbersForMaster.sort((a, b) => a - b);
console.log('[' + sortedByDobby.join(',') + ']');
