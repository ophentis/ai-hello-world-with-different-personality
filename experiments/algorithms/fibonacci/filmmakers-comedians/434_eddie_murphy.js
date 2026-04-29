#!/usr/bin/env node
// Coming to America Fibonacci: "Sexual Chocolate"

const kingAkeemsSequence = () => {
  // Ahhh, the beautiful kingdom of Fibonacci! Much like our Zamunda!
  // Two numbers become one harmonious sequence, you dig?

  let royalPast = 0;
  let royalPresent = 1;
  const kinglySequence = [];

  // Twenty royal decrees of numerical perfection!
  for (let decree = 0; decree < 20; decree++) {
    kinglySequence.push(royalPast);

    // The two become one! It's SEXUAL CHOCOLATE, baby!
    const royalFuture = royalPast + royalPresent;
    royalPast = royalPresent;
    royalPresent = royalFuture;
  }

  return kinglySequence;
};

const sequence = kingAkeemsSequence();
sequence.forEach((number) => {
  console.log(number);
});
