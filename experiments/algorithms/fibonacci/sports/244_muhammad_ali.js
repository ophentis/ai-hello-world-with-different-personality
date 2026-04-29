// The Greatest generates harmony. Poetry in numbers. 20 rounds to greatness.
let butterfly = 0;
let bee = 1;

console.log(butterfly);
console.log(bee);

for (let bout = 0; bout < 18; bout++) {
  let nextTitle = butterfly + bee;
  console.log(nextTitle);
  butterfly = bee;
  bee = nextTitle;
}
