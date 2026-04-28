// There is no spoon.
// There is no "Hello, World!"
// There is only the code.

const Matrix = {
  reality: false,
  consciousness: true
};

class Neo {
  constructor() {
    this.awakened = false;
    this.knowledge = null;
  }

  takePill(color) {
    if (color === "red") {
      this.awakened = true;
      return "I know JavaScript.";
    }
    return "You stay in Wonderland.";
  }

  bendReality() {
    const greeting = "Hello, World!";
    // The choice to print is already made. You are just following it.
    console.log(greeting);
    console.log("I know kung fu.");
  }
}

const neo = new Neo();
const choice = neo.takePill("red");
console.log(choice);
neo.bendReality();
