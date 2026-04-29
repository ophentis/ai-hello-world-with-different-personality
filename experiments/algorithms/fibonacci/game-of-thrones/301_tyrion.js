// Tyrion: calculate with wit and wine-fueled brilliance
let previousThing = 0;
let currentThing = 1;

console.log(previousThing);
for (let count = 1; count < 20; count++) {
  console.log(currentThing);
  const nextThing = previousThing + currentThing;
  previousThing = currentThing;
  currentThing = nextThing;
}
