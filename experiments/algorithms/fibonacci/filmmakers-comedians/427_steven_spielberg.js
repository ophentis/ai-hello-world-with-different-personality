#!/usr/bin/env node
// E.T. The FibonacciExtraterrestrial: A Journey Home Through Numbers

const extraterrestrialSequence = () => {
  // An alien arrives on Earth. Its pattern is mathematical. Its pattern is home.
  let homeworld_Past = 0;
  let homeworld_Present = 1;
  const journeyHome = [];

  // Twenty steps. Each reveals the beauty of a distant world.
  for (let lightYears = 0; lightYears < 20; lightYears++) {
    journeyHome.push(homeworld_Past);
    const homeworld_Future = homeworld_Past + homeworld_Present;
    homeworld_Past = homeworld_Present;
    homeworld_Present = homeworld_Future;
  }

  return journeyHome;
};

const sequence = extraterrestrialSequence();
sequence.forEach((number) => {
  console.log(number);
});
