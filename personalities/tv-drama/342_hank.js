// THEY'RE MINERALS, MARIE!
// A real man codes with precision. Like brewing a perfect beer.

const hankSchrader = {
  profession: "DEA Agent",
  hobby: "Craft Beer Brewing",
  sayIt: function() {
    const greeting = "Hello, World!";
    console.log(greeting);
    console.log("Clean. Pure. Professional.");
    return greeting;
  },
  explainToMarie: function() {
    console.log("Now listen here—minerals are about INTEGRITY.");
    console.log("This code? Same principle. No shortcuts.");
    this.sayIt();
  }
};

// Run it like a man
hankSchrader.explainToMarie();
