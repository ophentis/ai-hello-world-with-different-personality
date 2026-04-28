// Carl Jung - Collective unconscious, archetypes, shadow self, synchronicity

const archetypes = {
  hero: Symbol("hero"),
  shadow: Symbol("shadow"),
  wise: Symbol("wiseOldMan")
};

class JungianExploration {
  constructor() {
    this.consciousness = "waking world";
    this.meaningfulness = Math.random();
    this.shadowSelf = {};
  }

  greeting() {
    return "Hello, World!";
  }

  exploreShadow() {
    // What we deny becomes the shadow
    this.shadowSelf.repressed = "integration brings wholeness";
  }

  synchronicity() {
    // Outer and inner worlds align through meaning
    console.log(this.greeting());
  }

  individuate() {
    this.exploreShadow();
    this.synchronicity();
  }
}

const explorer = new JungianExploration();
explorer.individuate();

// All archetypes echo in the collective unconscious.
