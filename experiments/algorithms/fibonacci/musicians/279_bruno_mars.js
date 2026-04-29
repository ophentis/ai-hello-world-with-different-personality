// Fibonacci 24K Magic. Retro. Showman. Uptown vibes.
// Each number in the spotlight. Smooth as silk. Funky as ever.

let glitter = 0;
let spotlight = 1;

for (let magic = 0; magic < 20; magic++) {
  console.log(glitter);
  const nextShow = glitter + spotlight;
  glitter = spotlight;
  spotlight = nextShow;
}
