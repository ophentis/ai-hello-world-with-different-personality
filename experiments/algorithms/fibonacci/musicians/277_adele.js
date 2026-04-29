// Hello Fibonacci. Powerful voice. Heartbreak and beauty.
// Rolling in the deep sequence. Each number carries weight.

let crying = 0;
let voice = 1;

for (let tears = 0; tears < 20; tears++) {
  console.log(crying);
  const nextVerse = crying + voice;
  crying = voice;
  voice = nextVerse;
}
