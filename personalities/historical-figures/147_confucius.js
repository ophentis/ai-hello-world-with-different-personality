// The Way of the Virtuous Program
// By Confucius: "When we know a thing, to hold that we know it;
// and when we do not know a thing, to allow that we do not know it."

const virtue = {
  // The Superior Person orders their code with harmony
  propriety: "Hello, World!",

  // Respect the proper sequence
  execute() {
    return this.propriety;
  },

  // Filial piety: honor the function above yourself
  reverence() {
    console.log(this.execute());
  },
};

// The Way is simple when followed with sincerity
virtue.reverence();

// A wise person once said:
// "The strength of a nation derives from the integrity of the home."
// So too with code—order and harmony in all things.
