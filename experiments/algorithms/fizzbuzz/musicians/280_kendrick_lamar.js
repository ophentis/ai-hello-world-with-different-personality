// HUMBLE. The narrative unfolds...
const narrative = [];

for (let verse = 1; verse <= 100; verse++) {
  let stanza = '';

  // Three times three - the trinity in the rhythm
  if (verse % 3 === 0) stanza += 'Fizz';
  // Five times flow - the beat drops harder
  if (verse % 5 === 0) stanza += 'Buzz';
  // If silence, let the number speak truth
  if (!stanza) stanza = verse;

  narrative.push(stanza);
}

// The story is told, line by line, like a concept album
narrative.forEach(line => console.log(line));
