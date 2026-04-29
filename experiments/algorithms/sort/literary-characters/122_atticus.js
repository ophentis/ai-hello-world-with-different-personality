// To see things from another's point of view is to understand order
const casesToConsider = [38, 27, 43, 3, 9, 82, 10];
casesToConsider.sort((defendantA, defendantB) => defendantA - defendantB);
console.log('[' + casesToConsider.join(',') + ']');
