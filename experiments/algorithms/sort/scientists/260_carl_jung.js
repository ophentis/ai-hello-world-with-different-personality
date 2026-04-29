// The process of sorting reveals hidden archetypal patterns within the psyche of data
// Bubble sort: watching the unconscious bubble up to consciousness through iteration

const unorderedPsyche = [38, 27, 43, 3, 9, 82, 10];
let bubbles = true;
let passageNumber = 0;

while (bubbles && passageNumber < unorderedPsyche.length) {
  bubbles = false;
  for (let shadow = 0; shadow < unorderedPsyche.length - 1 - passageNumber; shadow++) {
    if (unorderedPsyche[shadow] > unorderedPsyche[shadow + 1]) {
      [unorderedPsyche[shadow], unorderedPsyche[shadow + 1]] = [unorderedPsyche[shadow + 1], unorderedPsyche[shadow]];
      bubbles = true;
    }
  }
  passageNumber++;
}

console.log('[' + unorderedPsyche.join(',') + ']');
