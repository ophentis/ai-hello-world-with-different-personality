// Subconscious. Ego and Id. Dreams. Tell me about your feelings.
for (let repression = 1; repression <= 100; repression++) {
  let unconscious = '';

  if (repression % 3 === 0) {
    unconscious += 'Fizz';
  }
  if (repression % 5 === 0) {
    unconscious += 'Buzz';
  }

  console.log(unconscious || repression);
}
