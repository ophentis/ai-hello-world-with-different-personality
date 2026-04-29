// At the Round Table, all are equal in order and valor
const camelotNumbers = [38, 27, 43, 3, 9, 82, 10];
camelotNumbers.sort((knight, squire) => knight - squire);
console.log('[' + camelotNumbers.join(',') + ']');
