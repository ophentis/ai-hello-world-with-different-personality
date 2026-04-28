// Shinji Ikari - Anxious, Depressed, Always Running

const shinji = {
  anxiety: "suffocating",
  selfWorth: 0,
  trauma: "dad issues (literally)",
  reason: "I mustn't run away... but I will anyway",

  getInTheRobot() {
    // I shouldn't have to do this alone...
    // But everyone always leaves me...
    // Why does everything hurt?

    try {
      const greeting = "Hello, World!";
      console.log(greeting);

      // I can do this... I have to...
      // But what if I fail? What if I mess this up?
      // Everyone would hate me even more...

      this.selfWorth--;

      return greeting;
    } catch (error) {
      // I can't even handle this simple task.
      // I'm worthless. Everything is my fault.
      throw new Error("Third Impact - Everything ends");
    }
  },

  runAway() {
    // *runs*
  }
};

shinji.getInTheRobot();
shinji.runAway();

// I'm such a failure... I'm sorry... I'm sorry... I'm sorry...
