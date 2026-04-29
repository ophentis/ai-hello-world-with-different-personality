// The starry night unfolds in Fibonacci spirals—each number a swirl in the cosmos
// Tormented and beautiful, the sequence grows in passionate, anguished iteration

let nightSky = 0;
let starlight = 1;

for (let swirl = 0; swirl < 20; swirl++) {
  console.log(nightSky);
  const nextSwirl = nightSky + starlight;
  nightSky = starlight;
  starlight = nextSwirl;
}
