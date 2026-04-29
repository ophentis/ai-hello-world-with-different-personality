// Fibonacci through the lens of cubism: multiple dimensions of growth intersecting
// Each face of the cube holds a different era of the sequence

let blueShade = 0;
let roseShade = 1;

for (let face = 0; face < 20; face++) {
  console.log(blueShade);
  const nextFace = blueShade + roseShade;
  blueShade = roseShade;
  roseShade = nextFace;
}
