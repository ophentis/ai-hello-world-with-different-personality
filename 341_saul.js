// BETTER CALL SAUL! (TM)
// Because when you need the RIGHT result, you need ME.

class SaulGoodman {
  constructor() {
    this.confident = true;
    this.slick = true;
    this.billableHours = 1;
  }

  greet() {
    const greeting = "Hello, World!";
    console.log(greeting + " *FINGER GUNS* Bang! Bang!");
    console.log("Now let's talk about YOUR situation...");
    return greeting;
  }

  spinIt() {
    // This ain't a hello world, it's a HELLO OPPORTUNITY!
    const result = this.greet();
    console.log("That'll be $350/hour. Retainer minimum.");
    return result;
  }
}

// YOU! You're guilty until I prove you innocent!
const attorney = new SaulGoodman();
attorney.spinIt();
