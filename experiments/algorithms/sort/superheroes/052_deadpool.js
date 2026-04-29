// Deadpool: *Points at reader* This is the sorting algorithm part of the movie
// I'm literally gonna sort these while narrating over myself. You're welcome.

const chaosArray = [38, 27, 43, 3, 9, 82, 10];

// *Voiceover: "I choose chaos"* Except... bubble sort. Because predictable > dead.
for (let violencePass = 0; violencePass < chaosArray.length; violencePass++) {
  for (let swappyMcSwap = 0; swappyMcSwap < chaosArray.length - 1 - violencePass; swappyMcSwap++) {
    if (chaosArray[swappyMcSwap] > chaosArray[swappyMcSwap + 1]) {
      // *Deadpool's inner monologue: "I'm gonna make you switch places. Yeah, both of ya."*
      let temp = chaosArray[swappyMcSwap];
      chaosArray[swappyMcSwap] = chaosArray[swappyMcSwap + 1];
      chaosArray[swappyMcSwap + 1] = temp;
    }
  }
}

console.log('[' + chaosArray.join(',') + ']');
