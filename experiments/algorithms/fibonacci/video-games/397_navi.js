// Navi - Listen! Persistent Fairy Sequence

let whisper = 0;
let guidance = 1;

console.log(whisper);
console.log(guidance);

for (let persistence = 2; persistence < 20; persistence++) {
  const wisdom = whisper + guidance;
  console.log(wisdom);
  whisper = guidance;
  guidance = wisdom;
}
