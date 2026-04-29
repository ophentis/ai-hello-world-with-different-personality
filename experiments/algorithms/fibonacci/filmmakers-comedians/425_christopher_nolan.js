#!/usr/bin/env node
// Inception: A Dream Within a Sequence Within a Pattern

const dreamLayer = () => {
  // Level 1: Reality
  let reality_A = 0;
  let reality_B = 1;

  // Level 2: First Dream
  const firstDream = [];

  for (let levelDepth = 0; levelDepth < 20; levelDepth++) {
    // Level 3: The Narrative
    firstDream.push(reality_A);

    // The rules of physics bend here, but mathematics persists
    const nextReality = reality_A + reality_B;
    reality_A = reality_B;
    reality_B = nextReality;
  }

  // We awaken. The sequence remains unchanged.
  return firstDream;
};

const sequenceFromDreams = dreamLayer();
sequenceFromDreams.forEach((number) => {
  console.log(number);
});
