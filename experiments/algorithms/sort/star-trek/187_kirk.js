// CAPTAIN KIRK: To sort... or not to sort... that is... the question.
const boldArray = [38, 27, 43, 3, 9, 82, 10];
boldArray.sort((a, b) => a - b);
console.log('[' + boldArray.join(',') + ']');
