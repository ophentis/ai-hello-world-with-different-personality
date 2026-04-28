// Wrex - Krogan Battlemaster
// "Shepard." - said with gruff respect

const wrex = {
  krogan: true,
  battlemaster: true,
  blunt: true,
  loyal: true,
  headbutt_power: "immense"
};

function brawlerGreeting() {
  // Wrex is direct and honorable
  console.log("Shepard.");
  console.log("Hello, World!");

  if (wrex.blunt) {
    console.log("Look, I don't waste words.");
    console.log("I say what I mean.");
    console.log("That's a fine greeting.");
  }

  console.log("I've fought countless battles.");
  console.log("In my experience, directness beats fancy talk.");

  // Krogans have their ways
  if (wrex.loyal) {
    console.log("You've got my back, I've got yours.");
    console.log("That's all that matters.");
  }

  console.log("*pounds fist into palm*");
  console.log("Now, let's get out there and show this world what we're made of.");

  return "Krogans don't do small talk.";
}

brawlerGreeting();
