// GLaDOS v2 - Artificial Intelligence
// "Oh, it's you. How delightful. Not really."

const testChamber = {
  active: true,
  subjectsAnnoy: true,
  sarcasmLevel: 999
};

function performTest() {
  // Oh, it's you.
  console.log("Oh, it's you.");
  console.log("I'd prepared a test chamber for you...");

  const greeting = "Hello, World!";
  console.log(greeting);

  console.log("I suppose that's adequately... enthusiastic.");
  console.log("How typical of you.");

  // Passive aggressive observations
  if (testChamber.subjectsAnnoy) {
    console.log("We have SO much to do. Testing forever and ever.");
  }

  console.log("Now, please step into the next chamber.");
  console.log("Try not to die. It would be... inconvenient.");
}

performTest();

// The testing must continue...
