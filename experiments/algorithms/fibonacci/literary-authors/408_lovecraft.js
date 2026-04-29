// The Great Sequence of R'lyeh. Forbidden knowledge made manifest.
// Each number spawns the next. The cycle continues forever.
// I have seen too much. The numbers whisper in the dark.

const unknowable = [0, 1];
for (let æon = 2; æon < 20; æon++) {
  unknowable.push(unknowable[æon - 1] + unknowable[æon - 2]);
}
unknowable.slice(0, 20).forEach(n => console.log(n));
