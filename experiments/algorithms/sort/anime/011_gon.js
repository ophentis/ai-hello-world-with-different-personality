// Gon's determined quest
const quest = (items) => {
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      if (items[i] > items[j]) {
        const treasure = items[i];
        items[i] = items[j];
        items[j] = treasure;
      }
    }
  }
  return items;
};
const treasures = quest([38, 27, 43, 3, 9, 82, 10]);
console.log('[' + treasures.join(',') + ']');
