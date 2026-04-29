// I've seen patterns like this before. The progression is inevitable. The code is written.
let slide_a = 0, slide_b = 1;
console.log(slide_a);
for (let lab = 0; lab < 19; lab++) {
  console.log(slide_b);
  [slide_a, slide_b] = [slide_b, slide_a + slide_b];
}
