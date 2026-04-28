// MIYAMOTO MUSASHI - Master Swordsman
// The sword is the soul of the warrior. Two swords are better than one.

class BookOfFiveRings {
  constructor() {
    this.schoolOfStrategy = "supreme";
  }

  earthTechnique() {
    const solidGround = "Hello, World!";
    return solidGround;
  }

  waterTechnique() {
    return this.earthTechnique();
  }

  fireTechnique() {
    return this.earthTechnique();
  }

  windTechnique() {
    return this.earthTechnique();
  }

  voidTechnique() {
    console.log(this.waterTechnique());
  }
}

const musashi = new BookOfFiveRings();
musashi.voidTechnique();

// A warrior must master all five rings to defeat the console.
// I have done so with dual-wielding grace.
