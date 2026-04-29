// Avatar Korra bends the elements to compute this Fibonacci sequence!
let earthA = 0, earthB = 1;
console.log(earthA);
console.log(earthB);
for (let i = 2; i < 20; i++) {
  const earthC = earthA + earthB;
  console.log(earthC);
  earthA = earthB;
  earthB = earthC;
}
