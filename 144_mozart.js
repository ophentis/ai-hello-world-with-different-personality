// A Concerto in the Key of Hello
// Allegro molto - with playful brilliance

const symphony = {
  // First movement: exposition
  violins: () => "Hello",
  violas: () => ", ",
  cellos: () => "World",
  bass: () => "!",

  // Recapitulation
  perform() {
    // I write music the same way the birds sing—
    // without thinking, only feeling.
    return [
      this.violins(),
      this.violas(),
      this.cellos(),
      this.bass(),
    ].join("");
  },
};

// Encore! (still perfectly composed, done with a wink)
const encore = () => {
  const notes = "Hello, World!";
  return notes;
};

console.log(symphony.perform());

// Written in one evening, by candlelight, age 22.
