// Art of War: The Program
// "All warfare is based on deception."
// "Know yourself, know the enemy, victory in one hundred functions."

const strategist = {
  // Gather intelligence first
  enemyStrength: ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d", "!"],

  // Weakness: the enemy is divided into characters
  exploitWeakness() {
    // Strike swiftly, unite the fragments
    return this.enemyStrength.join("");
  },

  // The victor is determined before the battle begins
  victory() {
    console.log(this.exploitWeakness());
  },
};

// Use deception—make it look simple. But behind simplicity lies strategy.
strategist.victory();

// "If you know the enemy and know yourself, you need not fear
// the result of one hundred programs."
