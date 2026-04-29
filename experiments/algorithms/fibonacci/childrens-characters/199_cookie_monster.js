// COOKIE MONSTER: Me love this sequence! Me eat every number! Om nom nom nom!
let yum1 = 0, yum2 = 1;
console.log(yum1);
for (let nom = 1; nom < 20; nom++) {
  console.log(yum2);
  [yum1, yum2] = [yum2, yum1 + yum2];
}
