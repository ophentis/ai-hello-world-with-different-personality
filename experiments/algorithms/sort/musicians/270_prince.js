// Purple sort. Funky. Genre-defying. Play all the instruments at once.
// Insertion sort meets funk: deliberate, rhythmic, eccentric.

const purpleRain = [38, 27, 43, 3, 9, 82, 10];

for (let groove = 1; groove < purpleRain.length; groove++) {
  const funkNote = purpleRain[groove];
  let rhythm = groove - 1;

  while (rhythm >= 0 && purpleRain[rhythm] > funkNote) {
    purpleRain[rhythm + 1] = purpleRain[rhythm];
    rhythm--;
  }
  purpleRain[rhythm + 1] = funkNote;
}

console.log('[' + purpleRain.join(',') + ']');
