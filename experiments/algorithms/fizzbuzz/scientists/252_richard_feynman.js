// Curious. Surely you're joking? Bongos and physics intertwined.
for (let puzzle = 1; puzzle <= 100; puzzle++) {
  let discovery = '';

  if (puzzle % 3 === 0) {
    discovery += 'Fizz';
  }
  if (puzzle % 5 === 0) {
    discovery += 'Buzz';
  }

  console.log(discovery || puzzle);
}
