// Sam: Document the sequence like an old maester
let written = 0;
let recorded = 1;

console.log(written);
for (let tome = 1; tome < 20; tome++) {
  console.log(recorded);
  const chronicle = written + recorded;
  written = recorded;
  recorded = chronicle;
}
