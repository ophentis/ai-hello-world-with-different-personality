// Sorting is basically just asking people to line up in order.
// Some will cooperate. Some will rebel. All are equally confused.
const chaosArray = [82, 43, 10, 27, 38, 3, 9];

// This is what I'd call a "late-night bit"
const sorryButSorted = chaosArray.sort((firstThing, secondThing) => {
  // The punchline: it's just subtraction
  return firstThing - secondThing;
});

console.log('[' + sorryButSorted.join(',') + ']');
