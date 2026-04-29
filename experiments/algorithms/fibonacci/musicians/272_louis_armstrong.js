// What a wonderful sequence. Fibonacci, bright and joyful.
// Jazz improvisation on mathematics. Satchmo's trumpet in the numbers.

let jazzTone = 0;
let trumpet = 1;

for (let chorus = 0; chorus < 20; chorus++) {
  console.log(jazzTone);
  const nextChorus = jazzTone + trumpet;
  jazzTone = trumpet;
  trumpet = nextChorus;
}
