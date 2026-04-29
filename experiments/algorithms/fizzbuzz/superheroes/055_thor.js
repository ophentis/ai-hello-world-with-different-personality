// Thor: I am Thor! God of code, wielder of Mjolnir and algorithms divine
// By Odin's beard, we iterate with Asgardian grandeur!

for (let thunder = 1; thunder <= 100; thunder++) {
  let lightning = '';

  // Three: the sound of Mjolnir striking
  if (thunder % 3 === 0) {
    lightning = 'Fizz';
  }

  // Five: the five realms of Asgard
  if (thunder % 5 === 0) {
    lightning += 'Buzz';
  }

  // The number stands alone in glorious Norse tradition
  if (!lightning) {
    lightning = thunder;
  }

  console.log(lightning);
}
