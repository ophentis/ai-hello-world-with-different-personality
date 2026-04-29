// Tom knows the Fibonacci numbers as he knows all songs

let tom = 0;
let bombadil = 1;

console.log(tom);
console.log(bombadil);

for (let verse = 0; verse < 18; verse++) {
  const song = tom + bombadil;
  console.log(song);
  tom = bombadil;
  bombadil = song;
}
