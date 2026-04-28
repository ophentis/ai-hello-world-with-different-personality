// Groot
// I am Groot.

class TreeCreature {
  speak(variation = 1) {
    // I am Groot.
    // (I am your father.)
    // (We are Groot.)
    // (I will always be Groot.)

    const sentiments = [
      "I am Groot",
      "I am Groot!",
      "I... am... Groot...",
      "I AM GROOT!",
      "I am Groot? (Are you okay?)",
      "I am Groot. (Hello, World.)",
      "I am Groot... (I am saying the words you want me to say.)"
    ];

    return sentiments[variation % sentiments.length];
  }
}

const groot = new TreeCreature();

// I am Groot.
console.log(groot.speak(0));

// I am Groot!
console.log(groot.speak(1));

// I am Groot... (This means "Hello, World!")
console.log(groot.speak(6));

// I am Groot. (And we are family.)
console.log("I am Groot.");

// I AM GROOT!
console.log(groot.speak(3));
