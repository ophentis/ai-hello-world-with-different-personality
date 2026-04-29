// Do no harm. 20 sequences of careful, ethical progression.
let patient = 0;
let treatment = 1;

console.log(patient);
console.log(treatment);

for (let recovery = 0; recovery < 18; recovery++) {
  let wellness = patient + treatment;
  console.log(wellness);
  patient = treatment;
  treatment = wellness;
}
