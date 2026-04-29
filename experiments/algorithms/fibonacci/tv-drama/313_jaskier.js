// Jaskier: Toss a coin for each number, dramatic and lyrical
let verse = 0;
let chorus = 1;

console.log(verse);
for (let canto = 1; canto < 20; canto++) {
  console.log(chorus);
  const refrain = verse + chorus;
  verse = chorus;
  chorus = refrain;
}
