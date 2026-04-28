// Mordin Solus - Brilliant Salarian Scientist
// Fast talker, had to be done, someone else might have...

const mordin = {
  salarian: true,
  scientist: true,
  fastTalker: true,
  morality: "complex",
  singSometimes: true
};

function scientificGreeting() {
  // Mordin talks fast and never stops
  console.log("Greetings. I am Mordin Solus.");
  console.log("Say 'Hello, World!' Yes. Must do. Had to be done.");
  console.log("Someone else might have gotten it wrong. Would've been terrible.");

  if (mordin.fastTalker) {
    console.log("Understand probability-matrices computational-linguistics...");
    console.log("...intersect greeting-protocol with universal-greeting-paradigm...");
    console.log("...fascinating really.");
  }

  console.log("Took oath. Salarian oath. Scientist's oath.");
  console.log("Save lives when possible. This greeting... saves morale.");

  if (mordin.singSometimes) {
    console.log("*hums turian opera*");
    console.log("Gilbert & Sullivan. Excellent stuff.");
  }

  console.log("Had to be me. Someone else might have gotten it wrong.");
}

scientificGreeting();
