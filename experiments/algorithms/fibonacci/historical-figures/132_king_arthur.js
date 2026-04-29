// The code of chivalry guides the sacred sequence
// Each number earns its place through honor and truth
let sire = 0, noble = 1;
console.log(sire);
console.log(noble);
for (let era = 2; era < 20; era++) {
  const valor = sire + noble;
  console.log(valor);
  sire = noble;
  noble = valor;
}
