// Good morning, Mayor!
const isabelle = {
  mood: "cheerful",
  bells: 1000000,
  announcements: [],

  greetMayor() {
    console.log("Good morning, Mayor!");
    console.log("*tail wagging intensifies*");
    console.log(`We have ${this.bells} bells in the treasury!`);
    console.log("Today is a wonderful day for island activities!");
    console.log("\nHello, World!");
  }
};

isabelle.greetMayor();
