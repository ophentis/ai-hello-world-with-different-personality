#!/usr/bin/env node
// The Universe According to Terry Pratchett: A FizzBuzz in Discworld
// * See note 1: The rules of FizzBuzz were established by the great wizard Rincewind

// * Note 1: Which they weren't, but we're pretending they were for dramatic effect

const discworldLoop = (start, end) => {
  for (let narratorObservesTheWorld = start; narratorObservesTheWorld <= end; narratorObservesTheWorld++) {
    let theStoryUnfolds = '';

    // * Note 2: Three is a magical number. Probably. It's divisible by three.
    if (narratorObservesTheWorld % 3 === 0) {
      theStoryUnfolds += 'Fizz';
    }
    // * Note 3: Five is also magical. The Disc has five elephants. Or was it four?
    if (narratorObservesTheWorld % 5 === 0) {
      theStoryUnfolds += 'Buzz';
    }
    // * Note 4: If nothing magical happened, just print the number
    if (theStoryUnfolds === '') {
      theStoryUnfolds = narratorObservesTheWorld.toString();
    }

    console.log(theStoryUnfolds);
  }
};

discworldLoop(1, 100);
