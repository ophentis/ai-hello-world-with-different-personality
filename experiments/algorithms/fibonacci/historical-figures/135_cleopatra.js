// As Queen of Egypt, I command the eternal sequence unfold before me
let egyptA = 0, egyptB = 1;
for (let reign = 0; reign < 20; reign++) {
  console.log(egyptA);
  const dynastic = egyptA + egyptB;
  egyptA = egyptB;
  egyptB = dynastic;
}
