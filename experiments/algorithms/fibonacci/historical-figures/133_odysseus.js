// My journey through the numbers mirrors my long voyage home
let thenValue = 0, nowValue = 1;
for (let year = 0; year < 20; year++) {
  console.log(thenValue);
  const nextYear = thenValue + nowValue;
  thenValue = nowValue;
  nowValue = nextYear;
}
