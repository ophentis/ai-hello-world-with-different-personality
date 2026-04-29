// MORTICIA: This sequence grows with such dark, graceful inevitability. Exquisite.
let belle1 = 0, belle2 = 1;
console.log(belle1);
for (let dance = 1; dance < 20; dance++) {
  console.log(belle2);
  [belle1, belle2] = [belle2, belle1 + belle2];
}
