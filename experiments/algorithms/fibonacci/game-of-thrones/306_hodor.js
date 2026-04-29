// Hodor: Hold the door, hold the sequence
let h = 0;
let o = 1;

console.log(h);
for (let d = 1; d < 20; d++) {
  console.log(o);
  let r = h + o;
  h = o;
  o = r;
}
