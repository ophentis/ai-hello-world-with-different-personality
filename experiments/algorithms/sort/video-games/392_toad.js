// Toad - Small But Mighty Sorting

const castles = [38, 27, 43, 3, 9, 82, 10];

for (let adventure = 0; adventure < castles.length - 1; adventure++) {
  for (let quest = 0; quest < castles.length - adventure - 1; quest++) {
    if (castles[quest] > castles[quest + 1]) {
      const temp = castles[quest];
      castles[quest] = castles[quest + 1];
      castles[quest + 1] = temp;
    }
  }
}

console.log('[' + castles.join(',') + ']');
