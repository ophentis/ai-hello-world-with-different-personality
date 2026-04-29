// And yet it moves. 20 sequences of undeniable truth.
let telescope = 0;
let sight = 1;

console.log(telescope);
console.log(sight);

for (let discovery = 0; discovery < 18; discovery++) {
  let revelation = telescope + sight;
  console.log(revelation);
  telescope = sight;
  sight = revelation;
}
