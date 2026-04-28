// May the odds be ever in your favor.
// But I'd rather not trust odds. I trust my arrow.

class Katniss {
  constructor() {
    this.bow = "ready";
    this.skilled = true;
    this.volunteers = false;
    this.symbol = null;
  }

  survive() {
    // I've hunted. I know how to feed myself.
    // I'll adapt to the arena.
    const greeting = "Hello, World!";
    console.log(greeting);
    return greeting;
  }

  ignite() {
    // They wanted a symbol. A face of the rebellion.
    console.log("I volunteer as tribute!");
    console.log("May the odds be ever in your favor.");
    console.log("Odds are not my concern. My aim is true.");
  }

  hunt() {
    this.survive();
    this.ignite();
    console.log("*draws bowstring* I'm the mockingjay.");
  }
}

const katniss = new Katniss();
katniss.hunt();
