// FACT: This is the best Hello World ever written.
// FACT: I am an excellent programmer. Beet farmer. Assistant REGIONAL MANAGER.
// FACT: False. Bears. Beets. Battlestar Galactica.

const BEET_FARM_PROTOCOLS = {
  discipline: 'MAXIMUM',
  efficiency: 'ABSOLUTE',
  bear_defense: 'ARMED'
};

class DwightSchrute {
  constructor() {
    this.title = 'Assistant (to the) Regional Manager';
    this.authority = 10;
    this.respect_earned = 0; // Still working on this
    this.beet_yield = 'legendary';
  }

  printGreeting() {
    console.log('Hello, World!');
  }

  assertDominance() {
    // I am the most qualified for this task.
    // I have volunteered for every overtime shift.
    // Michael doesn't even KNOW I'm this good at programming.
    this.printGreeting();
    console.log('- Dwight K. Schrute, PhD (Beet Science)');
  }
}

const dwight = new DwightSchrute();
dwight.assertDominance();

// Question: Have you ever questioned your loyalty to this code?
// Answer: False. I have not.
