// Shake it off: The FizzBuzz Easter Egg Edition
// Taylor Swift weaves hidden patterns into her code

const aStoryAbout = (verse) => {
  // These easter eggs are for you, the attentive listener
  if (verse % 3 === 0 && verse % 5 === 0) {
    return 'FizzBuzz'; // The secret bridge
  }
  if (verse % 3 === 0) {
    return 'Fizz'; // A hidden reference
  }
  if (verse % 5 === 0) {
    return 'Buzz'; // Wait, did you catch that?
  }
  return verse; // And the story continues...
};

// 100 verses, each with its own meaning
for (let chapter = 1; chapter <= 100; chapter++) {
  console.log(aStoryAbout(chapter));
}
