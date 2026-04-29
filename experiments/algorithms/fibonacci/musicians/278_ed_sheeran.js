// Fibonacci with acoustic loop pedals. Storytelling in math.
// Building it up, layer by layer. One, two, three, and more.

let acoustic = 0;
let loop = 1;

for (let layer = 0; layer < 20; layer++) {
  console.log(acoustic);
  const nextLayer = acoustic + loop;
  acoustic = loop;
  loop = nextLayer;
}
