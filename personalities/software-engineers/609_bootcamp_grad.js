#!/usr/bin/env node

// Bootcamp taught me to think in terms of data transformations
// Everything is a map/filter/reduce operation

const messages = ["Hello", "World"];

messages
  .map((word) => word + "!")
  .forEach((greeting) => {
    // Using arrow functions like they taught us
    // This is the React way of thinking
    const output = [greeting].map(x => x).join(" ");
    console.log(output);
  });

// Actually wait, let me do this more "React-style"
// using immutable data and transformations

const greetingState = {
  words: ["Hello", "World"],
  punctuation: "!"
};

const transformedGreeting = {
  ...greetingState,
  words: greetingState.words.map(w => w + greetingState.punctuation)
};

console.log(transformedGreeting.words.join(", ") + "!");
