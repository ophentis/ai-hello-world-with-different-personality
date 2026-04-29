// Saitama: Overpowered sorting solution
const normalSort = (monsters) => {
  for (let i = 0; i < monsters.length - 1; i++) {
    for (let j = i + 1; j < monsters.length; j++) {
      if (monsters[i] > monsters[j]) {
        [monsters[i], monsters[j]] = [monsters[j], monsters[i]];
      }
    }
  }
  return monsters;
};
const ranked = normalSort([38, 27, 43, 3, 9, 82, 10]);
console.log('[' + ranked.join(',') + ']');
