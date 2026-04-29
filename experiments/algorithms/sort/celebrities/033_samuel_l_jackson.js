// Samuel L Jackson: That's a tasty sort!

const collection = [38, 27, 43, 3, 9, 82, 10];

for (let i = 0; i < collection.length - 1; i++) {
  for (let j = i + 1; j < collection.length; j++) {
    if (collection[i] > collection[j]) {
      [collection[i], collection[j]] = [collection[j], collection[i]];
    }
  }
}

console.log('[' + collection.join(',') + ']');
