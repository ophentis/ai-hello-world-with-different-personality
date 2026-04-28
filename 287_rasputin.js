// RASPUTIN - The Mystic Monk
// Immortal. Unkillable. The hypnotic power flows through all.

class MysticForce {
  constructor() {
    this.lifesBlood = 666;
    this.immortal = true;
    this.hypnotic = true;
  }

  poisoned() {
    if (this.immortal) return false;
  }

  shot() {
    if (this.immortal) return false;
  }

  drowned() {
    if (this.immortal) return false;
  }

  mysticalUtterance() {
    const prophecy = "Hello, World!";
    console.log(prophecy);
  }

  healTheZar() {
    this.mysticalUtterance();
  }
}

const rasputin = new MysticForce();
rasputin.healTheZar();
