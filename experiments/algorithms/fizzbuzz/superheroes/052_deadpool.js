// Deadpool: *Looks at camera* Breaking the fourth wall while breaking FizzBuzz
// Hi, narrative! It's me, the Merc with a Mouth, and I'm about to iterate 100 times!

for (let talkingHeads = 1; talkingHeads <= 100; talkingHeads++) {
  let wittyBanter = '';

  // *But did you know* that three is divisible by... three? Mind blown.
  if (talkingHeads % 3 === 0) {
    wittyBanter = 'Fizz';
  }

  // Five? More like... *alive*. Get it? No? Okay, moving on.
  if (talkingHeads % 5 === 0) {
    wittyBanter += 'Buzz';
  }

  // *Voiceover: "Previously, on FizzBuzz"* Just print the number, ya dummy
  if (!wittyBanter) {
    wittyBanter = talkingHeads;
  }

  console.log(wittyBanter);
}
