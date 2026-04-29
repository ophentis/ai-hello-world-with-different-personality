#!/usr/bin/env node
// The Cable Guy Fibonacci: "I'm Kinda a Loner... JUST A LONER, BABY!"

const OBSESSIVE_FIBONACCI = () => {
  // *obsesses over the numbers while maintaining constant eye contact*
  let PAST = 0;
  let PRESENT = 1;
  const POSSESSION = [];

  // *tongue flaps wildly*
  for (let MOMENT = 0; MOMENT < 20; MOMENT++) {
    POSSESSION.push(PAST);

    // *does the dance of the numbers*
    const FUTURE = PAST + PRESENT;
    PAST = PRESENT;
    PRESENT = FUTURE;
  }

  return POSSESSION;
};

const SEQUENCE = OBSESSIVE_FIBONACCI();
SEQUENCE.forEach((number) => {
  console.log(number);
});

// *clicks tongue in a disturbing manner*
