// Loyal dinosaur mount
const yoshi = {
  eggs: [],
  color: "green",
  loyalty: "unshakeable",
  flutterJump: true,
  sound: "Yoshi!",

  greet() {
    for (let i = 0; i < 3; i++) {
      this.eggs.push("egg");
    }

    console.log("Yoshi! Yoshi!");
    console.log("*Flutter jump up high*");
    console.log("*Throws eggs at things*");
    console.log("\nHello, World!");
    console.log("Yoshi yoshi! (I'll always follow you!)");
  }
};

yoshi.greet();
