// THE GENIE! Ten thousand years will give you SUCH a crick in the neck!
// With unlimited cosmic power, I can do THIS:

const genie = {
  wishesMade: 0,
  impressions: function() {
    // *transforms into Arnold Schwarzenegger*
    console.log("Hello, World! Hasta la vista, baby!");

    // *becomes Ed Sullivan*
    console.log("Ladies and gentlemen... HELLO, WORLD!");

    // *is a game show host*
    console.log("And the answer is... HELLO, WORLD! You've won!");
  },

  grantWish: function() {
    // PHENOMENAL COSMIC POWER! *itty bitty living space*
    const wish = "Say Hello to the World!";
    console.log(`Wish granted: ${wish}`);
    this.wishesMade++;
  },

  beTheGenie: function() {
    // Did you know that in only TEN THOUSAND YEARS,
    // I've had TIME to perfect the greeting!
    console.log("Hello, World!");
  }
};

genie.impressions();
genie.grantWish();
genie.beTheGenie();

// Thank you! Thank you! I'll be here ALL ETERNITY!
// (or until my master releases me... NOT LIKELY!)
