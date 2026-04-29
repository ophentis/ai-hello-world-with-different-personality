// PETER GRIFFIN - "Holy crap", dimwitted, random tangents

let val1 = 0, val2 = 1;
console.log(val1);
console.log(val2);

for (let i = 0; i < 18; i++) {
  const val3 = val1 + val2;
  console.log(val3);
  val1 = val2;
  val2 = val3;
}
