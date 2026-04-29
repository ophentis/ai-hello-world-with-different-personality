// Jackie Chan - comedic martial arts sorting
// No trouble sorting with acrobatic efficiency
const values = [38, 27, 43, 3, 9, 82, 10];

// Bubble sort - simple, practical, gets the job done with a smile
for (let kick = 0; kick < values.length; kick++) {
  for (let punch = 0; punch < values.length - 1 - kick; punch++) {
    if (values[punch] > values[punch + 1]) {
      const temp = values[punch];
      values[punch] = values[punch + 1];
      values[punch + 1] = temp;
    }
  }
}

console.log('[' + values.join(',') + ']');
