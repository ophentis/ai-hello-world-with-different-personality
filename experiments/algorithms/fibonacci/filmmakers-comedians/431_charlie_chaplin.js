#!/usr/bin/env node
// City Lights Fibonacci: A Love Story in Numbers

// (Charlie walks through the city, head held high)

const cityLightsFibonacci = () => {
  // (Begins with nothing, then finds love)
  let beforeLove = 0;
  let loveFound = 1;
  const journey = [];

  // (Twenty moments of beautiful simplicity)
  for (let step = 0; step < 20; step++) {
    journey.push(beforeLove);

    // (Two loves merge into something greater)
    const nextMoment = beforeLove + loveFound;
    beforeLove = loveFound;
    loveFound = nextMoment;
  }

  return journey;
};

const sequence = cityLightsFibonacci();
sequence.forEach((number) => {
  console.log(number);
});

// (Gazes at the city lights with wonder)
