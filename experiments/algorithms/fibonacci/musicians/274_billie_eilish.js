// Fibonacci whispered. Dark. Contemplative. Quiet but heavy.
// When we all fall asleep, where do these numbers go?

let whisper = 0;
let ghost = 1;

for (let dream = 0; dream < 20; dream++) {
  console.log(whisper);
  const nextDream = whisper + ghost;
  whisper = ghost;
  ghost = nextDream;
}
