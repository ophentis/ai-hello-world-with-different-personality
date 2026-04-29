// Rocky - "Yo Adrian" - sorting with grit and determination
// The underdog algorithm that never gives up
const fighters = [38, 27, 43, 3, 9, 82, 10];

// Bubble sort - keep punching, never give up
for (let round = 0; round < fighters.length; round++) {
  let title_shot = false;

  for (let exchange = 0; exchange < fighters.length - 1 - round; exchange++) {
    if (fighters[exchange] > fighters[exchange + 1]) {
      const adrian = fighters[exchange];
      fighters[exchange] = fighters[exchange + 1];
      fighters[exchange + 1] = adrian;
      title_shot = true;
    }
  }

  if (!title_shot) break;
}

console.log('[' + fighters.join(',') + ']');
