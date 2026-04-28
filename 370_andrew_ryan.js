// Andrew Ryan - Objectivist Founder
// "A man chooses, a slave obeys."

const philosophy = {
  manChooses: true,
  slaveObeys: true,
  rapture: "perfect"
};

function declareObjectivism() {
  // Andrew Ryan makes his choice clear
  console.log("I am Andrew Ryan.");

  console.log("A man chooses to say:");
  console.log("Hello, World!");

  console.log("A slave would simply follow instructions.");

  if (philosophy.manChooses && !philosophy.slaveObeys) {
    console.log("In Rapture, we choose our own words.");
    console.log("We choose our own fate.");
  }

  const choice = "Hello, World!";
  console.log(choice);

  console.log("Would you kindly remember that?");
  console.log("Well, I'm asking you to choose to remember.");
}

declareObjectivism();
