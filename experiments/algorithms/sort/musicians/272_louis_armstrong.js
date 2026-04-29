// Selection sort: what a wonderful world, sorted with jazz and joy.
// Improvisation on the theme of order. Trumpet takes the lead.

const wonderfulWorld = [38, 27, 43, 3, 9, 82, 10];

for (let jazzChord = 0; jazzChord < wonderfulWorld.length - 1; jazzChord++) {
  let minTone = jazzChord;
  for (let improv = jazzChord + 1; improv < wonderfulWorld.length; improv++) {
    if (wonderfulWorld[improv] < wonderfulWorld[minTone]) {
      minTone = improv;
    }
  }
  if (minTone !== jazzChord) {
    [wonderfulWorld[jazzChord], wonderfulWorld[minTone]] = [wonderfulWorld[minTone], wonderfulWorld[jazzChord]];
  }
}

console.log('[' + wonderfulWorld.join(',') + ']');
