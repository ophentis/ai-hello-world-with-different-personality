#!/usr/bin/env node
// Ikiru: The Poetry of Numbers Finding Meaning

const ikiru_meaningfulSequence = () => {
  // A man discovers meaning in his final days. Numbers too seek meaning.
  let life_yesterday = 0;
  let life_today = 1;
  const lifePoem = [];

  // Twenty moments of realization
  for (let day = 0; day < 20; day++) {
    lifePoem.push(life_yesterday);
    const life_tomorrow = life_yesterday + life_today;
    life_yesterday = life_today;
    life_today = life_tomorrow;
  }

  return lifePoem;
};

const sequence = ikiru_meaningfulSequence();
sequence.forEach((number) => {
  console.log(number);
});
