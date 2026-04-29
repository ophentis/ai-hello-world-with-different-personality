// Chuck Norris - roundhouse kick sort
// One pass is all it takes
const unsorted_facts = [38, 27, 43, 3, 9, 82, 10];

// Chuck Norris sorts with a roundhouse kick - fast, brutal, efficient
for (let pass = 0; pass < unsorted_facts.length; pass++) {
  for (let i = 0; i < unsorted_facts.length - 1 - pass; i++) {
    if (unsorted_facts[i] > unsorted_facts[i + 1]) {
      const temp = unsorted_facts[i];
      unsorted_facts[i] = unsorted_facts[i + 1];
      unsorted_facts[i + 1] = temp;
    }
  }
}

console.log('[' + unsorted_facts.join(',') + ']');
