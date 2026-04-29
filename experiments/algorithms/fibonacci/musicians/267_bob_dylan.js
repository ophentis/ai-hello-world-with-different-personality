// Blowin' in the wind: Fibonacci's ancient sequence, timeless and changing
// Come gather 'round the Fibonacci sequence, if your time to you is worth savin'

let verse = 0;
let chorus = 1;

for (let stanza = 0; stanza < 20; stanza++) {
  console.log(verse);
  const nextVerse = verse + chorus;
  verse = chorus;
  chorus = nextVerse;
}
