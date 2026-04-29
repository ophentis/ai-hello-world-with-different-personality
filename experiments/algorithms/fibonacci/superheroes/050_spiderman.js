// Spider-Man: The Fibonacci sequence—with great numbers comes great recursion
// Thwip! Twenty numbers of web-slinging goodness

let webshot = 0;
let websling = 1;

console.log(webshot);
console.log(websling);

// Twenty quippy little numbers
for (let thwip = 0; thwip < 18; thwip++) {
  let webspun = webshot + websling;
  console.log(webspun);
  webshot = websling;
  websling = webspun;
}
