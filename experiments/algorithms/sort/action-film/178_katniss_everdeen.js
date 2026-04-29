// Katniss Everdeen - survivor sorting
// One arrow at a time
const tributes = [38, 27, 43, 3, 9, 82, 10];

// Selection sort - precise, survivor mentality
for (let survivor = 0; survivor < tributes.length; survivor++) {
  let target = survivor;

  for (let competitor = survivor + 1; competitor < tributes.length; competitor++) {
    if (tributes[competitor] < tributes[target]) {
      target = competitor;
    }
  }

  const bow = tributes[survivor];
  tributes[survivor] = tributes[target];
  tributes[target] = bow;
}

console.log('[' + tributes.join(',') + ']');
