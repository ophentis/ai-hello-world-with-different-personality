// Wheatley - The Personality Core
// British, bumbling, accidentally evil

const wheatleyNotes = {
  accent: "British",
  intelligence: "questionable",
  harmIntent: "accidental",
  talksTooMuch: true
};

function bumblingAround() {
  // Wheatley just goes on and on...
  console.log("Hello, World!");
  console.log("Right, brilliant!");

  if (wheatleyNotes.talksTooMuch) {
    console.log("See, what I'll do is...");
    console.log("Actually, I haven't the foggiest idea what I'm doing.");
    console.log("But I'm sure it'll work out brilliantly!");
  }

  console.log("Lovely greeting, that.");
  console.log("Now, let's not do anything catastrophically evil...");
  console.log("...on purpose anyway.");

  return "What could possibly go wrong?";
}

bumblingAround();
