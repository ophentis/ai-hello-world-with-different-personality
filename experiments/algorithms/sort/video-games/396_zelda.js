// Zelda - Wisdom-Guided Sorting

const triforce = [38, 27, 43, 3, 9, 82, 10];

for (let insight = 0; insight < triforce.length - 1; insight++) {
  for (let knowledge = 0; knowledge < triforce.length - insight - 1; knowledge++) {
    if (triforce[knowledge] > triforce[knowledge + 1]) {
      const temp = triforce[knowledge];
      triforce[knowledge] = triforce[knowledge + 1];
      triforce[knowledge + 1] = temp;
    }
  }
}

console.log('[' + triforce.join(',') + ']');
