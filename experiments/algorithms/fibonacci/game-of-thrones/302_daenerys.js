// Daenerys: Mother of Dragons - dynasty unfolds
let ancestral = 0;
let royal = 1;

console.log(ancestral);
for (let generation = 1; generation < 20; generation++) {
  console.log(royal);
  const heir = ancestral + royal;
  ancestral = royal;
  royal = heir;
}
